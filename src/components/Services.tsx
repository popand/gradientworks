import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  HiCode,
  HiDeviceMobile,
  HiCloud,
  HiCog,
  HiChip,
  HiLightningBolt,
  HiDatabase,
  HiSparkles,
} from 'react-icons/hi'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  const softwareServices = [
    {
      icon: <HiCode className="w-6 h-6" />,
      title: 'Custom Software Development',
      description: 'Tailored software solutions built from the ground up to meet your specific business needs and workflows.',
    },
    {
      icon: <HiDeviceMobile className="w-6 h-6" />,
      title: 'Web & Mobile Applications',
      description: 'Responsive, user-friendly applications that work seamlessly across all devices and platforms.',
    },
    {
      icon: <HiCloud className="w-6 h-6" />,
      title: 'Cloud Architecture & DevOps',
      description: 'Scalable cloud infrastructure, CI/CD pipelines, and modern DevOps practices for efficient deployment.',
    },
    {
      icon: <HiCog className="w-6 h-6" />,
      title: 'API Development & Integration',
      description: 'Robust APIs and seamless integration with third-party services to extend your platform capabilities.',
    },
  ]

  const aiServices = [
    {
      icon: <HiChip className="w-6 h-6" />,
      title: 'AI Agent Development',
      description: 'Intelligent autonomous agents that can reason, plan, and execute complex tasks with minimal human intervention.',
    },
    {
      icon: <HiDatabase className="w-6 h-6" />,
      title: 'RAG Applications',
      description: 'Retrieval-Augmented Generation systems that combine LLMs with your proprietary knowledge base for accurate responses.',
    },
    {
      icon: <HiLightningBolt className="w-6 h-6" />,
      title: 'LLM Integration & Optimization',
      description: 'Seamless integration of large language models with prompt engineering and fine-tuning for optimal performance.',
    },
    {
      icon: <HiSparkles className="w-6 h-6" />,
      title: 'Intelligent Automation',
      description: 'AI-powered workflow automation that transforms repetitive tasks into intelligent, self-improving processes.',
    },
  ]

  const ServiceCard = ({
    service,
    delay,
    accentColor,
  }: {
    service: (typeof softwareServices)[0]
    delay: number
    accentColor: 'blue' | 'purple'
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`group glass rounded-2xl p-6 transition-all duration-300 cursor-default ${
        accentColor === 'blue' ? 'hover:glow-blue' : 'hover:glow-purple'
      }`}
    >
      <div
        className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${
          accentColor === 'blue'
            ? 'bg-primary-500/15 text-primary-400'
            : 'bg-accent-500/15 text-accent-400'
        }`}
      >
        {service.icon}
      </div>
      <h4 className="font-display text-base font-semibold text-white mb-2 tracking-tight">
        {service.title}
      </h4>
      <p className="text-sm text-base-500 leading-relaxed">{service.description}</p>
    </motion.div>
  )

  return (
    <section id="services" ref={ref} className="py-24 md:py-32 relative">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/5 rounded-full blur-[160px]" />
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
            What We Do
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-800 tracking-tight text-white">
            Full-spectrum technology
            <br />
            <span className="text-gradient">expertise.</span>
          </h2>
        </motion.div>

        {/* Software Development */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-8 h-[2px] bg-primary-500 rounded-full" />
            <h3 className="font-display text-lg font-semibold text-primary-400 tracking-tight">
              Software Development
            </h3>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {softwareServices.map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                delay={0.2 + index * 0.08}
                accentColor="blue"
              />
            ))}
          </div>
        </div>

        {/* AI Services */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-8 h-[2px] bg-accent-500 rounded-full" />
            <h3 className="font-display text-lg font-semibold text-accent-400 tracking-tight">
              Agentic AI & Advanced Capabilities
            </h3>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {aiServices.map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                delay={0.6 + index * 0.08}
                accentColor="purple"
              />
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="relative overflow-hidden rounded-2xl border-gradient"
        >
          <div className="glass rounded-2xl p-8 md:p-12 text-center">
            {/* Background glow */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[60%] bg-primary-500/20 rounded-full blur-[100px]" />
            </div>
            <div className="relative z-10">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
                Ready to Transform Your Business?
              </h3>
              <p className="text-base-500 mb-8 max-w-xl mx-auto">
                Let's discuss how our expertise can help you achieve your goals with the perfect blend of software and AI solutions.
              </p>
              <button
                onClick={() => {
                  const element = document.querySelector('#contact')
                  if (element) element.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-primary-600 to-accent-600 rounded-xl hover:from-primary-500 hover:to-accent-500 transition-all duration-300 shadow-lg shadow-primary-500/25"
              >
                Start a Conversation
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
