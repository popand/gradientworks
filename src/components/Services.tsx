import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  HiCode,
  HiDeviceMobile,
  HiCloud,
  HiCog,
  HiChip,
  HiLightningBolt,
  HiDatabase,
  HiSparkles
} from 'react-icons/hi'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const softwareServices = [
    {
      icon: <HiCode className="w-8 h-8" />,
      title: 'Custom Software Development',
      description: 'Tailored software solutions built from the ground up to meet your specific business needs and workflows.'
    },
    {
      icon: <HiDeviceMobile className="w-8 h-8" />,
      title: 'Web & Mobile Applications',
      description: 'Responsive, user-friendly applications that work seamlessly across all devices and platforms.'
    },
    {
      icon: <HiCloud className="w-8 h-8" />,
      title: 'Cloud Architecture & DevOps',
      description: 'Scalable cloud infrastructure, CI/CD pipelines, and modern DevOps practices for efficient deployment.'
    },
    {
      icon: <HiCog className="w-8 h-8" />,
      title: 'API Development & Integration',
      description: 'Robust APIs and seamless integration with third-party services to extend your platform capabilities.'
    }
  ]

  const aiServices = [
    {
      icon: <HiChip className="w-8 h-8" />,
      title: 'AI Agent Development',
      description: 'Intelligent autonomous agents that can reason, plan, and execute complex tasks with minimal human intervention.'
    },
    {
      icon: <HiDatabase className="w-8 h-8" />,
      title: 'RAG Applications',
      description: 'Retrieval-Augmented Generation systems that combine LLMs with your proprietary knowledge base for accurate, contextual responses.'
    },
    {
      icon: <HiLightningBolt className="w-8 h-8" />,
      title: 'LLM Integration & Optimization',
      description: 'Seamless integration of large language models with prompt engineering and fine-tuning for optimal performance.'
    },
    {
      icon: <HiSparkles className="w-8 h-8" />,
      title: 'Intelligent Automation',
      description: 'AI-powered workflow automation that transforms repetitive tasks into intelligent, self-improving processes.'
    }
  ]

  const ServiceCard = ({ service, delay }: { service: typeof softwareServices[0], delay: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all border border-gray-100"
    >
      <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary-500 to-accent-500 text-white rounded-lg mb-4">
        {service.icon}
      </div>
      <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
      <p className="text-gray-600">{service.description}</p>
    </motion.div>
  )

  return (
    <section id="services" ref={ref} className="py-20 bg-gradient-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions spanning traditional software development and cutting-edge AI capabilities
          </p>
        </motion.div>

        {/* Software Development Services */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl font-bold text-gray-900 mb-8"
          >
            Software Development
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {softwareServices.map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                delay={0.3 + index * 0.1}
              />
            ))}
          </div>
        </div>

        {/* AI & Agentic Capabilities */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-3xl font-bold text-gray-900 mb-8"
          >
            Agentic AI & Advanced Capabilities
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiServices.map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                delay={0.8 + index * 0.1}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-16 text-center bg-white rounded-2xl p-8 md:p-12 shadow-xl"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Let's discuss how our expertise can help you achieve your goals with the perfect blend of software and AI solutions.
          </p>
          <button
            onClick={() => {
              const element = document.querySelector('#contact')
              if (element) element.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-primary-600 to-accent-600 rounded-lg hover:from-primary-700 hover:to-accent-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Start a Conversation
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
