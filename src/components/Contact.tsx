import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { HiMail, HiLocationMarker, HiArrowRight } from 'react-icons/hi'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
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
    <section id="contact" ref={ref} className="py-24 md:py-32 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary-500/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent-500/5 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-primary-400 mb-3 font-display">
            Get Started
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-800 tracking-tight text-white">
            Let's build something
            <br />
            <span className="text-gradient">extraordinary.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left — Contact Info */}
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

            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, x: -16 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.25 + index * 0.08 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-400">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs text-base-600 uppercase tracking-wider mb-0.5">
                      {info.title}
                    </p>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-white hover:text-primary-400 transition-colors text-sm font-medium"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-white text-sm font-medium">{info.content}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="glass rounded-2xl p-7 md:p-9">
              <h3 className="font-display text-xl font-bold text-white mb-7 tracking-tight">
                Send Us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-base-500 mb-2 uppercase tracking-wider">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl input-dark text-sm"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-base-500 mb-2 uppercase tracking-wider">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl input-dark text-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-xs font-medium text-base-500 mb-2 uppercase tracking-wider">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl input-dark text-sm"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-base-500 mb-2 uppercase tracking-wider">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl input-dark text-sm resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-primary-600 to-accent-600 rounded-xl hover:from-primary-500 hover:to-accent-500 transition-all duration-300 shadow-lg shadow-primary-500/25"
                >
                  Send Message
                  <HiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
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
