import { AnimatePresence, motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import IconSwap from './IconSwap'
import { EASE_SMOOTH, revealWhen } from '../motion'

type SubmitStatus = 'idle' | 'sending' | 'sent' | 'error'
type Field = 'name' | 'email' | 'message'

/** Indeterminate progress for the submit button. The spin is CSS so it keeps
 *  running off the main thread while the request is in flight; the DS
 *  reduced-motion rule stops it, where the "Sending…" label carries the state. */
const Spinner = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="animate-spin" aria-hidden="true">
    <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="2" opacity="0.25" />
    <path d="M16 9a7 7 0 0 0-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    website: '', // honeypot: hidden from real users
  })
  const [status, setStatus] = useState<SubmitStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  // Inline validation: a field is judged when the reader leaves it, not when
  // they press send. Messages are plain and sit under the field they belong to.
  const [touched, setTouched] = useState<Record<string, boolean>>({})

  const fieldError = (name: Field): string | null => {
    const value = formData[name].trim()
    if (name === 'name' && !value) return 'Add your name so we know who to reply to.'
    if (name === 'email') {
      if (!value) return 'Add an email address so we can reply.'
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'That does not look like an email address.'
    }
    if (name === 'message' && !value) return 'Tell us a little about the project.'
    return null
  }
  const showError = (name: Field) => (touched[name] ? fieldError(name) : null)
  const markTouched = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setTouched((t) => ({ ...t, [e.target.name]: true }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (status === 'sending') return
    setTouched({ name: true, email: true, message: true })
    const first = (['name', 'email', 'message'] as const).find((f) => fieldError(f))
    if (first) {
      document.getElementById(first)?.focus()
      return
    }

    setStatus('sending')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const result = await response.json().catch(() => ({}))

      if (!response.ok) {
        throw new Error(result.error || 'Something went wrong. Please try again.')
      }

      setStatus('sent')
      setFormData({ name: '', email: '', company: '', message: '', website: '' })
      setTouched({})
    } catch (err) {
      setStatus('error')
      setErrorMessage(
        err instanceof Error ? err.message : 'Something went wrong. Please try again.'
      )
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    if (status === 'error' || status === 'sent') setStatus('idle')
  }

  const field = (name: Field, label: string, props: React.InputHTMLAttributes<HTMLInputElement>) => (
    <div>
      <label htmlFor={name} className="micro lm-label">{label}</label>
      <input
        id={name}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        onBlur={markTouched}
        aria-invalid={showError(name) ? true : undefined}
        aria-describedby={showError(name) ? `${name}-error` : undefined}
        className={`lm-input${showError(name) ? ' error' : ''}`}
        {...props}
      />
      {showError(name) && <p id={`${name}-error`} className="lm-field-note error">{showError(name)}</p>}
    </div>
  )

  return (
    /* The page closes the way the design system closes: the light-glass notch
       over the same art as the hero. The form lives inside the notch, so the
       glass sits over imagery, never over plain cream. */
    <section id="contact" ref={ref} style={{ padding: '0 var(--gutter) var(--secpad)' }}>
      <div className="lm-scene">
        <div className="lm-art" aria-hidden="true" />
        <motion.div {...revealWhen(isInView, 0)} className="lm-notch lm-notch-form">
          <h2>
            Let’s build something
            <br />
            <span className="hl"><em>worth shipping.</em></span>
          </h2>
          <p className="sub" style={{ color: 'var(--ink-sub)' }}>
            Tell us what you are trying to build. We will read it properly and
            come back with how we would approach it.
          </p>

          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5 text-left" style={{ marginTop: 34 }}>
            {/* Honeypot: hidden from users, catches naive bots */}
            <div aria-hidden="true" className="sr-only-honeypot">
              <label htmlFor="website">Website</label>
              <input
                type="text"
                id="website"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={formData.website}
                onChange={handleChange}
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {field('name', 'Name *', { type: 'text', autoComplete: 'name', required: true, placeholder: 'Your name' })}
              {field('email', 'Email *', { type: 'email', autoComplete: 'email', required: true, placeholder: 'you@company.com' })}
            </div>

            <div>
              <label htmlFor="company" className="micro lm-label">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                autoComplete="organization"
                value={formData.company}
                onChange={handleChange}
                className="lm-input"
                placeholder="Your company"
              />
            </div>

            <div>
              <label htmlFor="message" className="micro lm-label">Message *</label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={5}
                onBlur={markTouched}
                aria-invalid={showError('message') ? true : undefined}
                aria-describedby={showError('message') ? 'message-error' : undefined}
                className={`lm-textarea${showError('message') ? ' error' : ''}`}
                placeholder="Tell us about the project…"
              />
              {showError('message') && <p id="message-error" className="lm-field-note error">{showError('message')}</p>}
            </div>

            {/* The page's last call to action takes the sun variant, so the
                closing button reads differently from the first. */}
            <button
              type="submit"
              disabled={status === 'sending'}
              className="btn btn-sun w-full justify-center"
              style={{ marginTop: 6 }}
            >
              {status === 'sending' ? 'Sending…' : 'Send message'}
              <IconSwap swapKey={status === 'sending' ? 'spinner' : 'arrow'}>
                {status === 'sending' ? <Spinner /> : <span aria-hidden="true">→</span>}
              </IconSwap>
            </button>

            {/* The live region itself must stay mounted and unanimated;
                animating it is a common way to lose the announcement. Only
                its child transitions. */}
            <div aria-live="polite" role="status" style={{ minHeight: '1.25rem' }}>
              <AnimatePresence mode="wait">
                {status === 'sent' && (
                  <motion.p
                    key="sent"
                    initial={{ opacity: 0, transform: 'translateY(-4px)' }}
                    animate={{ opacity: 1, transform: 'translateY(0px)' }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25, ease: EASE_SMOOTH }}
                    className="lm-field-note"
                    style={{ color: 'var(--forest)' }}
                  >
                    Thanks, your message is on its way. We will be in touch shortly.
                  </motion.p>
                )}
                {status === 'error' && (
                  <motion.p
                    key="error"
                    initial={{ opacity: 0, transform: 'translateY(-4px)' }}
                    animate={{ opacity: 1, transform: 'translateY(0px)' }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25, ease: EASE_SMOOTH }}
                    className="lm-field-note error"
                  >
                    {errorMessage}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </form>

          <p className="lm-notch-alt">
            Prefer email? <a href="mailto:contact@gradientworks.ca">contact@gradientworks.ca</a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
