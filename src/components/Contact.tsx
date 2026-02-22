import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { HiMail, HiLocationMarker, HiArrowRight } from 'react-icons/hi'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:contact@gradientworks.ca?subject=Inquiry from ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ACompany: ${formData.company}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`
    window.location.href = mailtoLink
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
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
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-base-400 mb-4">
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
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
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
                  initial={{ opacity: 0, x: -12 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.25 + index * 0.07 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-base-100 border border-base-200 flex items-center justify-center text-base-600">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs text-base-400 uppercase tracking-wider mb-0.5">
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
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="bg-base-50 rounded-3xl p-7 md:p-9 border border-base-200">
              <h3 className="font-display text-xl font-bold text-base-950 mb-7 tracking-tight">
                Send Us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
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
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl input-clean text-sm"
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
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl input-clean text-sm"
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
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl input-clean text-sm"
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
                    className="w-full px-4 py-3 rounded-xl input-clean text-sm resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="group w-full inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-base-950 rounded-full hover:bg-base-800 transition-colors"
                >
                  Send Message
                  <HiArrowRight
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                    size={18}
                  />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
