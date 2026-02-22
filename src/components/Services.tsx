import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import type { ReactNode } from 'react'
import {
  HiCode,
  HiDeviceMobile,
  HiCloud,
  HiCog,
  HiChip,
  HiLightningBolt,
  HiDatabase,
  HiSparkles,
  HiGlobeAlt,
} from 'react-icons/hi'

interface ServiceItem {
  icon: ReactNode
  title: string
  description: string
}

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const softwareServices: ServiceItem[] = [
    {
      icon: <HiCode className="w-5 h-5" />,
      title: 'Custom Software Development',
      description:
        'Tailored software solutions built from the ground up to meet your specific business needs and workflows.',
    },
    {
      icon: <HiDeviceMobile className="w-5 h-5" />,
      title: 'Web & Mobile Applications',
      description:
        'Responsive, user-friendly applications that work seamlessly across all devices and platforms.',
    },
    {
      icon: <HiCloud className="w-5 h-5" />,
      title: 'Cloud Architecture & DevOps',
      description:
        'Scalable cloud infrastructure, CI/CD pipelines, and modern DevOps practices for efficient deployment.',
    },
    {
      icon: <HiCog className="w-5 h-5" />,
      title: 'API Development & Integration',
      description:
        'Robust APIs and seamless integration with third-party services to extend your platform capabilities.',
    },
  ]

  const aiServices: ServiceItem[] = [
    {
      icon: <HiChip className="w-5 h-5" />,
      title: 'AI Agent Development',
      description:
        'Intelligent autonomous agents grounded in domain ontologies, enabling structured reasoning, planning, and execution of complex tasks with minimal human intervention.',
    },
    {
      icon: <HiDatabase className="w-5 h-5" />,
      title: 'RAG Applications',
      description:
        'Retrieval-Augmented Generation systems enhanced with ontology-driven knowledge graphs, combining LLMs with your proprietary data for contextually precise, structured responses.',
    },
    {
      icon: <HiGlobeAlt className="w-5 h-5" />,
      title: 'Ontology Engineering',
      description:
        'Structured knowledge modeling that defines the concepts, relationships, and rules within your domain — enabling machines to reason over your data with precision.',
    },
    {
      icon: <HiLightningBolt className="w-5 h-5" />,
      title: 'LLM Integration & Optimization',
      description:
        'Seamless integration of large language models with prompt engineering and fine-tuning for optimal performance.',
    },
    {
      icon: <HiSparkles className="w-5 h-5" />,
      title: 'Intelligent Automation',
      description:
        'AI-powered workflow automation that transforms repetitive tasks into intelligent, self-improving processes.',
    },
  ]

  const ServiceCard = ({
    service,
    delay,
  }: {
    service: ServiceItem
    delay: number
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className="bg-white rounded-2xl p-6 border border-base-200 hover:border-base-300 hover:shadow-lg transition-all duration-300"
    >
      <div className="w-10 h-10 rounded-xl bg-base-100 text-base-700 flex items-center justify-center mb-4">
        {service.icon}
      </div>
      <h4 className="font-display text-base font-bold text-base-950 mb-2 tracking-tight">
        {service.title}
      </h4>
      <p className="text-sm text-base-500 leading-relaxed">
        {service.description}
      </p>
    </motion.div>
  )

  return (
    <section id="services" ref={ref} className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-base-400 mb-4">
            What We Do
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-base-950 leading-[1.05]">
            Full-spectrum technology
            <br />
            <em>expertise.</em>
          </h2>
        </motion.div>

        {/* Software Development */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-8 h-[2px] bg-base-950 rounded-full" />
            <h3 className="text-sm font-semibold uppercase tracking-widest text-base-600">
              Software Development
            </h3>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {softwareServices.map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                delay={0.2 + index * 0.07}
              />
            ))}
          </div>
        </div>

        {/* AI Services */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-8 h-[2px] bg-base-950 rounded-full" />
            <h3 className="text-sm font-semibold uppercase tracking-widest text-base-600">
              Agentic AI & Advanced Capabilities
            </h3>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {aiServices.map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                delay={0.55 + index * 0.07}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="bg-base-950 rounded-3xl p-10 md:p-14 text-center"
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
            Ready to Transform Your Business?
          </h3>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            Let's discuss how our expertise can help you achieve your goals with
            the perfect blend of software and AI solutions.
          </p>
          <button
            onClick={() => {
              const el = document.querySelector('#contact')
              if (el) el.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-base-950 bg-white rounded-full hover:bg-base-100 transition-colors"
          >
            Start a Conversation
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
