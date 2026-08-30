import { AnimatePresence, motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { HiMail, HiLocationMarker, HiArrowRight, HiCheckCircle } from 'react-icons/hi'
import IconSwap from './IconSwap'
import { EASE_OUT } from '../motion'

type SubmitStatus = 'idle' | 'sending' | 'sent' | 'error'

/** Indeterminate progress for the submit button. The spin is CSS so it keeps
 *  running off the main thread while the request is in flight; index.css stops
 *  it under reduced motion, where the "Sending…" label carries the state. */
const Spinner = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="animate-spin">
    <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="2" opacity="0.25" />
    <path
      d="M16 9a7 7 0 0 0-7-7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
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

  const contactInfo = [
    {
      icon: <HiMail className="w-5 h-5" />,
      title: 'Email',
      content: 'contact@gradientworks.ca',
      link: 'mailto:contact@gradientworks.ca',
    },
    {
      icon: <HiLocationMarker className="w-5 h-5" />,
      title: 'Location',
      content: 'Toronto, ON',
      link: null,
    },
  ]

  return (
    <section id="contact" ref={ref} className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, transform: 'translateY(24px)' }}
          animate={isInView ? { opacity: 1, transform: 'translateY(0px)' } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-base-500 mb-4">
            Get Started
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-base-950 leading-[1.05]">
            Let's build something
            <br />
            <em>extraordinary.</em>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, transform: 'translateY(24px)' }}
            animate={isInView ? { opacity: 1, transform: 'translateY(0px)' } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-2"
          >
            <p className="text-base-500 text-lg leading-relaxed mb-10">
              Ready to start your next project? We'd love to hear from you.
              Reach out and we'll get back to you as soon as possible.
            </p>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, transform: 'translateX(-12px)' }}
                  animate={isInView ? { opacity: 1, transform: 'translateX(0px)' } : {}}
                  transition={{ duration: 0.4, delay: 0.25 + index * 0.07 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-base-100 border border-base-200 flex items-center justify-center text-base-600">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs text-base-500 uppercase tracking-wider mb-0.5">
                      {info.title}
                    </p>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-base-950 hover:text-base-600 transition-colors text-sm font-medium"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-base-950 text-sm font-medium">
                        {info.content}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, transform: 'translateY(24px)' }}
            animate={isInView ? { opacity: 1, transform: 'translateY(0px)' } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="bg-base-50 rounded-3xl p-7 md:p-9 border border-base-200">
              <h3 className="font-display text-xl font-bold text-base-950 mb-7 tracking-tight">
                Send Us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
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
                    <label
                      htmlFor="name"
                      className="block text-xs font-medium text-base-500 mb-2 uppercase tracking-wider"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      autoComplete="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl input-clean text-base sm:text-sm"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-medium text-base-500 mb-2 uppercase tracking-wider"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl input-clean text-base sm:text-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-xs font-medium text-base-500 mb-2 uppercase tracking-wider"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    autoComplete="organization"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl input-clean text-base sm:text-sm"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium text-base-500 mb-2 uppercase tracking-wider"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl input-clean text-base sm:text-sm resize-none"
                    placeholder="Tell us about your project…"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileTap={{ scale: 0.96 }}
                  disabled={status === 'sending'}
                  className="group w-full inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-base-950 rounded-full hover:bg-base-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                  <IconSwap
                    swapKey={status === 'sending' ? 'spinner' : 'arrow'}
                    className="ml-2"
                  >
                    {status === 'sending' ? (
                      <Spinner />
                    ) : (
                      <HiArrowRight
                        className="group-hover:translate-x-1 transition-transform"
                        size={18}
                      />
                    )}
                  </IconSwap>
                </motion.button>

                {/* The live region itself must stay mounted and unanimated —
                    animating it is a common way to lose the announcement. Only
                    its child transitions. */}
                <div aria-live="polite" role="status" className="min-h-[1.25rem]">
                  <AnimatePresence mode="wait">
                    {status === 'sent' && (
                      <motion.p
                        key="sent"
                        initial={{ opacity: 0, transform: 'translateY(-4px)' }}
                        animate={{ opacity: 1, transform: 'translateY(0px)' }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25, ease: EASE_OUT }}
                        className="flex items-center gap-2 text-sm font-medium text-success-700"
                      >
                        <HiCheckCircle size={18} />
                        Thanks — your message is on its way. We'll be in touch shortly.
                      </motion.p>
                    )}
                    {status === 'error' && (
                      <motion.p
                        key="error"
                        initial={{ opacity: 0, transform: 'translateY(-4px)' }}
                        animate={{ opacity: 1, transform: 'translateY(0px)' }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25, ease: EASE_OUT }}
                        className="text-sm font-medium text-danger-700"
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
