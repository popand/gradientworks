import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiLightningBolt, HiTrendingUp, HiUserGroup } from 'react-icons/hi'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  const features = [
    {
      icon: <HiLightningBolt className="w-6 h-6" />,
      title: 'Innovation First',
      description: 'We stay at the forefront of technology, bringing you the latest advancements in software and AI.',
    },
    {
      icon: <HiTrendingUp className="w-6 h-6" />,
      title: 'Results Driven',
      description: 'Our solutions are designed to deliver measurable business outcomes and drive growth.',
    },
    {
      icon: <HiUserGroup className="w-6 h-6" />,
      title: 'Partnership Approach',
      description: 'We work closely with you as strategic partners, not just vendors, to ensure your success.',
    },
  ]

  const checklistItems = [
    'Expertise in both traditional software and AI technologies',
    'Proven track record of delivering scalable solutions',
    'Agile methodology for rapid, iterative development',
    'End-to-end services from concept to deployment',
    'Ongoing support and maintenance',
  ]

  return (
    <section id="about" ref={ref} className="section-light py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-primary-600 mb-3 font-display">
            Who We Are
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-800 tracking-tight text-base-900">
            We bridge the gap between
            <br />
            <span className="text-gradient">software & intelligence.</span>
          </h2>
        </motion.div>

        {/* Two Column */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          {/* Left — Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h3 className="font-display text-2xl font-bold text-base-900 mb-6 tracking-tight">
              Our Mission
            </h3>
            <p className="text-base-600 text-lg leading-relaxed mb-5">
              At GradientWorks, we believe in the power of intelligent software to transform businesses.
              Our mission is to empower organizations with robust software solutions enhanced by the
              latest advancements in artificial intelligence.
            </p>
            <p className="text-base-600 text-lg leading-relaxed">
              Whether you need a custom web application, a mobile platform, or an intelligent agent
              powered by RAG technology, we bring deep technical expertise and a commitment to excellence
              in every project we undertake.
            </p>
          </motion.div>

          {/* Right — Checklist */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-base-900 rounded-2xl p-8 md:p-10"
          >
            <h3 className="font-display text-xl font-bold text-white mb-8 tracking-tight">
              Why Choose Us
            </h3>
            <ul className="space-y-5">
              {checklistItems.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-base-300 text-sm leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="relative bg-white rounded-2xl p-7 border border-base-200/60 shadow-sm hover:shadow-lg transition-all duration-300 cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 text-white flex items-center justify-center mb-5 shadow-lg shadow-primary-500/20">
                {feature.icon}
              </div>
              <h4 className="font-display text-lg font-bold text-base-900 mb-2 tracking-tight">
                {feature.title}
              </h4>
              <p className="text-base-600 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
