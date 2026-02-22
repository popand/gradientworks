import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiCheckCircle } from 'react-icons/hi'

const WhyUs = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

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
      solution: 'MVP development with AI-powered features to stand out in the market',
    },
    {
      scenario: 'Enterprise Modernization',
      solution: 'Legacy system transformation with modern architecture and intelligent automation',
    },
    {
      scenario: 'Data-Rich Organization',
      solution: 'RAG applications to unlock insights from your proprietary knowledge base',
    },
    {
      scenario: 'Process-Heavy Business',
      solution: 'AI agents to automate complex workflows and reduce operational costs',
    },
  ]

  const stats = [
    { label: 'Custom Solutions', value: '100%' },
    { label: 'Client Satisfaction', value: 'Top Priority' },
    { label: 'Innovation', value: 'Continuous' },
  ]

  return (
    <section id="why-us" ref={ref} className="section-light py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-accent-600 mb-3 font-display">
            The Difference
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-800 tracking-tight text-base-900">
            Why choose
            <br />
            <span className="text-gradient">GradientWorks?</span>
          </h2>
        </motion.div>

        {/* Differentiators — Numbered Grid */}
        <div className="grid md:grid-cols-2 gap-5 mb-20">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="group relative bg-white rounded-2xl p-7 border border-base-200/60 hover:border-primary-200 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="font-display text-4xl font-900 text-base-200 group-hover:text-gradient transition-all duration-300">
                  {item.number}
                </span>
                <span className="px-2.5 py-1 text-[11px] font-semibold tracking-wide uppercase text-primary-600 bg-primary-50 rounded-md">
                  {item.tag}
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-base-900 mb-2 tracking-tight">
                {item.title}
              </h3>
              <p className="text-base-600 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Use Cases — Dark Panel */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative overflow-hidden bg-base-900 rounded-2xl p-8 md:p-12 mb-20"
        >
          {/* Background glow */}
          <div className="absolute inset-0 opacity-40">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-accent-500/10 rounded-full blur-[120px]" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary-500/10 rounded-full blur-[120px]" />
          </div>

          <div className="relative z-10">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-10 tracking-tight text-center">
              Perfect Solutions For Every Scenario
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.scenario}
                  initial={{ opacity: 0, x: -16 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.08 }}
                  className="glass rounded-xl p-5 hover:bg-white/[0.06] transition-colors duration-200"
                >
                  <div className="flex items-start gap-3">
                    <HiCheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white mb-1">{useCase.scenario}</h4>
                      <p className="text-xs text-base-500 leading-relaxed">{useCase.solution}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold text-base-900 mb-4 tracking-tight">
            Your Success Is Our Mission
          </h3>
          <p className="text-base-600 mb-12 max-w-xl mx-auto">
            Join forward-thinking companies that are transforming their operations with intelligent software solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-20">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.9 + index * 0.08 }}
              >
                <div className="font-display text-3xl md:text-4xl font-800 text-gradient mb-1">
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
