import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiCheckCircle } from 'react-icons/hi'

const WhyUs = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const differentiators = [
    {
      number: '01',
      title: 'Dual Expertise',
      description:
        'Unique combination of traditional software engineering excellence and cutting-edge AI capabilities.',
      tag: 'Best of Both Worlds',
    },
    {
      number: '02',
      title: 'Rapid Innovation',
      description:
        'Agile methodology and modern tech stack enable us to deliver solutions faster without compromising quality.',
      tag: 'Speed + Quality',
    },
    {
      number: '03',
      title: 'Future-Ready Solutions',
      description:
        'Build systems that scale and evolve with your business, leveraging the latest advancements in AI and cloud.',
      tag: 'Built to Last',
    },
    {
      number: '04',
      title: 'Strategic Partnership',
      description:
        "We don't just build software — we become your technology partner, invested in your long-term success.",
      tag: 'True Partnership',
    },
  ]

  const useCases = [
    {
      scenario: 'Growing Startup',
      solution:
        'MVP development with AI-powered features to stand out in the market',
    },
    {
      scenario: 'Enterprise Modernization',
      solution:
        'Legacy system transformation with modern architecture and intelligent automation',
    },
    {
      scenario: 'Data-Rich Organization',
      solution:
        'Ontology-enhanced RAG applications to unlock structured insights from your proprietary knowledge base',
    },
    {
      scenario: 'Process-Heavy Business',
      solution:
        'AI agents to automate complex workflows and reduce operational costs',
    },
  ]

  const stats = [
    { label: 'Custom Solutions', value: '100%' },
    { label: 'Client Satisfaction', value: 'Top Priority' },
    { label: 'Innovation', value: 'Continuous' },
  ]

  return (
    <section id="why-us" ref={ref} className="py-24 md:py-32 bg-base-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-base-500 mb-4">
            The Difference
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-base-950 leading-[1.05]">
            Why choose
            <br />
            <em>GradientWorks?</em>
          </h2>
        </motion.div>

        {/* Differentiators grid */}
        <div className="grid md:grid-cols-2 gap-5 mb-20">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.07 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-7 border border-base-200 hover:border-base-300 hover:shadow-lg transition-[border-color,box-shadow] duration-300"
            >
              <div className="flex items-start justify-between mb-5">
                <span className="font-display text-4xl font-black text-base-200">
                  {item.number}
                </span>
                <span className="px-3 py-1 text-[11px] font-semibold tracking-wide uppercase text-base-500 bg-base-100 rounded-full">
                  {item.tag}
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-base-950 mb-2 tracking-tight">
                {item.title}
              </h3>
              <p className="text-base-500 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Use Cases — dark panel */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="bg-base-950 rounded-3xl p-8 md:p-12 mb-20"
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-10 tracking-tight text-center">
            Perfect Solutions For Every Scenario
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.scenario}
                initial={{ opacity: 0, x: -12 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.55 + index * 0.07 }}
                className="bg-white/5 border border-white/8 rounded-2xl p-5 hover:bg-white/8 transition-colors duration-200"
              >
                <div className="flex items-start gap-3">
                  <HiCheckCircle className="w-5 h-5 text-success-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">
                      {useCase.scenario}
                    </h4>
                    <p className="text-xs text-white/50 leading-relaxed">
                      {useCase.solution}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center"
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold text-base-950 mb-4 tracking-tight">
            Your Success Is Our Mission
          </h3>
          <p className="text-base-500 mb-12 max-w-xl mx-auto">
            Join forward-thinking companies that are transforming their
            operations with intelligent software solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-20">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.07 }}
              >
                <div className="font-display text-3xl md:text-4xl font-black text-base-950 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-base-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyUs
