import { AnimatePresence, motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import IconSwap from './IconSwap'
import { EASE_SMOOTH, revealWhen } from '../motion'

type SubmitStatus = 'idle' | 'sending' | 'sent' | 'error'

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
    website: '', // honeypot — hidden from real users
  })
  const [status, setStatus] = useState<SubmitStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (status === 'sending') return

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

  return (
    <section id="contact" ref={ref} className="lm-section">
      <div className="wrap">
        <motion.div {...revealWhen(isInView, 0)} className="lm-section-head">
          <h2>
            Let’s build something
            <br />
            <em>worth shipping.</em>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5" style={{ gap: 'clamp(32px, 4vw, 64px)', marginTop: 'var(--stack-gap)' }}>
          <motion.div {...revealWhen(isInView, 1)} className="lg:col-span-2">
            <p className="text-fg-soft" style={{ fontSize: 'var(--text-sub)', lineHeight: 1.65 }}>
              Tell us what you are trying to build. We will read it properly and
              come back with how we would approach it.
            </p>

            <dl className="flex flex-col gap-6 mt-10">
              <div>
                <dt className="micro">Email</dt>
                <dd className="mt-1.5">
                  <a href="mailto:contact@gradientworks.ca" className="hl" style={{ fontWeight: 560 }}>
                    contact@gradientworks.ca
                  </a>
                </dd>
              </div>
              <div>
                <dt className="micro">Location</dt>
                <dd className="mt-1.5" style={{ fontWeight: 560 }}>Toronto, ON</dd>
              </div>
            </dl>
          </motion.div>

          <motion.div {...revealWhen(isInView, 2)} className="lg:col-span-3">
            <div className="lm-card" style={{ padding: 'clamp(24px, 3vw, 40px)' }}>
              <h3 style={{ fontSize: 'var(--text-h3)' }}>Send us a message</h3>
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-6">
                {/* Honeypot — hidden from users, catches naive bots */}
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
                  <div>
                    <label htmlFor="name" className="micro lm-label">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      autoComplete="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="lm-input"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="micro lm-label">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="lm-input"
                      placeholder="you@company.com"
                    />
                  </div>
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
                    className="lm-textarea"
                    placeholder="Tell us about the project…"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn btn-primary w-full justify-center"
                >
                  {status === 'sending' ? 'Sending…' : 'Send message'}
                  <IconSwap swapKey={status === 'sending' ? 'spinner' : 'arrow'}>
                    {status === 'sending' ? <Spinner /> : <span aria-hidden="true">→</span>}
                  </IconSwap>
                </button>

                {/* The live region itself must stay mounted and unanimated —
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
