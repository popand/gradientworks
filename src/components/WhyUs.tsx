import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiCheckCircle } from 'react-icons/hi'

const WhyUs = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const differentiators = [
    {
      title: 'Dual Expertise',
      description: 'Unique combination of traditional software engineering excellence and cutting-edge AI capabilities',
      stats: 'Best of Both Worlds'
    },
    {
      title: 'Rapid Innovation',
      description: 'Agile methodology and modern tech stack enable us to deliver solutions faster without compromising quality',
      stats: 'Speed + Quality'
    },
    {
      title: 'Future-Ready Solutions',
      description: 'Build systems that scale and evolve with your business, leveraging the latest advancements in AI and cloud',
      stats: 'Built to Last'
    },
    {
      title: 'Strategic Partnership',
      description: 'We don\'t just build software—we become your technology partner, invested in your long-term success',
      stats: 'True Partnership'
    }
  ]

  const useCases = [
    {
      scenario: 'Growing Startup',
      solution: 'MVP development with AI-powered features to stand out in the market'
    },
    {
      scenario: 'Enterprise Modernization',
      solution: 'Legacy system transformation with modern architecture and intelligent automation'
    },
    {
      scenario: 'Data-Rich Organization',
      solution: 'RAG applications to unlock insights from your proprietary knowledge base'
    },
    {
      scenario: 'Process-Heavy Business',
      solution: 'AI agents to automate complex workflows and reduce operational costs'
    }
  ]

  return (
    <section id="why-us" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why <span className="text-gradient">GradientWorks</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine proven software engineering practices with cutting-edge AI innovation to deliver exceptional results
          </p>
        </motion.div>

        {/* Differentiators Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="relative bg-gradient-to-br from-white to-primary-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-200 to-accent-200 rounded-bl-full opacity-20"></div>
              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                  <span className="px-3 py-1 text-xs font-semibold text-primary-700 bg-primary-100 rounded-full">
                    {item.stats}
                  </span>
                </div>
                <p className="text-gray-600 text-lg">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Use Cases */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl p-8 md:p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-8 text-center">Perfect Solutions For Every Scenario</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.scenario}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all"
              >
                <div className="flex items-start">
                  <HiCheckCircle className="w-6 h-6 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-bold mb-2">{useCase.scenario}</h4>
                    <p className="text-white/90">{useCase.solution}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Your Success Is Our Mission
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join forward-thinking companies that are transforming their operations with intelligent software solutions
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-center">
            {[
              { label: 'Custom Solutions', value: '100%' },
              { label: 'Client Satisfaction', value: 'Top Priority' },
              { label: 'Innovation', value: 'Continuous' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                className="flex-1 min-w-[150px]"
              >
                <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyUs
