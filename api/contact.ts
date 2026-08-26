import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'

const CONTACT_TO = process.env.CONTACT_TO_EMAIL ?? 'contact@gradientworks.ca'
const CONTACT_FROM = process.env.CONTACT_FROM_EMAIL ?? 'GradientWorks <contact@gradientworks.ca>'

const MAX_LENGTHS = {
  name: 100,
  email: 200,
  company: 150,
  message: 5000,
} as const

type Field = keyof typeof MAX_LENGTHS

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (char) => {
    switch (char) {
      case '&':
        return '&amp;'
      case '<':
        return '&lt;'
      case '>':
        return '&gt;'
      case '"':
        return '&quot;'
      default:
        return '&#39;'
    }
  })

const readField = (body: Record<string, unknown>, field: Field) => {
  const raw = body[field]
  return typeof raw === 'string' ? raw.trim() : ''
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('RESEND_API_KEY is not configured')
    return res.status(500).json({ error: 'Email service is not configured.' })
  }

  let body: Record<string, unknown> | undefined
  try {
    body = (typeof req.body === 'string' ? JSON.parse(req.body) : req.body) as
      | Record<string, unknown>
      | undefined
  } catch {
    return res.status(400).json({ error: 'Invalid request body.' })
  }
  if (!body || typeof body !== 'object') {
    return res.status(400).json({ error: 'Invalid request body.' })
  }

  // Honeypot: real users never fill this hidden field. Bots usually do.
  const honeypot = typeof body.website === 'string' ? body.website.trim() : ''
  if (honeypot) {
    // Pretend success so the bot does not learn it was filtered.
    return res.status(200).json({ ok: true })
  }

  const name = readField(body, 'name')
  const email = readField(body, 'email')
  const company = readField(body, 'company')
  const message = readField(body, 'message')

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' })
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Please enter a valid email address.' })
  }

  for (const [field, limit] of Object.entries(MAX_LENGTHS)) {
    const value = readField(body, field as Field)
    if (value.length > limit) {
      return res.status(400).json({ error: `The ${field} field is too long.` })
    }
  }

  const resend = new Resend(apiKey)

  const html = `
    <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;line-height:1.6;color:#111">
      <h2 style="margin:0 0 16px">New contact form submission</h2>
      <p style="margin:0 0 4px"><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p style="margin:0 0 4px"><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p style="margin:0 0 16px"><strong>Company:</strong> ${escapeHtml(company) || '—'}</p>
      <p style="margin:0 0 4px"><strong>Message:</strong></p>
      <p style="margin:0;white-space:pre-wrap">${escapeHtml(message)}</p>
    </div>
  `

  const text = [
    'New contact form submission',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company || '—'}`,
    '',
    'Message:',
    message,
  ].join('\n')

  try {
    const { data, error } = await resend.emails.send({
      from: CONTACT_FROM,
      to: [CONTACT_TO],
      replyTo: email,
      subject: `New inquiry from ${name}${company ? ` (${company})` : ''}`,
      html,
      text,
    })

    if (error) {
      console.error('Resend send failed', error)
      return res.status(502).json({ error: 'Could not send your message. Please try again.' })
    }

    return res.status(200).json({ ok: true, id: data?.id })
  } catch (err) {
    console.error('Unexpected error sending contact email', err)
    return res.status(500).json({ error: 'Could not send your message. Please try again.' })
  }
}
