import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiLightningBolt, HiTrendingUp, HiUserGroup } from 'react-icons/hi'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const features = [
    {
      icon: <HiLightningBolt className="w-5 h-5" />,
      title: 'Innovation First',
      description:
        'We stay at the forefront of technology, bringing you the latest advancements in software and AI.',
    },
    {
      icon: <HiTrendingUp className="w-5 h-5" />,
      title: 'Results Driven',
      description:
        'Our solutions are designed to deliver measurable business outcomes and drive growth.',
    },
    {
      icon: <HiUserGroup className="w-5 h-5" />,
      title: 'Partnership Approach',
      description:
        'We work closely with you as strategic partners, not just vendors, to ensure your success.',
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
    <section id="about" ref={ref} className="py-24 md:py-32 bg-base-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-base-500 mb-4">
            Who We Are
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-base-950 leading-[1.05]">
            We bridge the gap between
            <br />
            <em>software & intelligence.</em>
          </h2>
        </motion.div>

        {/* Two columns */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h3 className="font-display text-2xl font-bold text-base-950 mb-6 tracking-tight">
              Our Mission
            </h3>
            <p className="text-base-500 text-lg leading-relaxed mb-5">
              At GradientWorks, we believe in the power of intelligent software
              to transform businesses. Our mission is to empower organizations
              with robust software solutions enhanced by the latest advancements
              in artificial intelligence.
            </p>
            <p className="text-base-500 text-lg leading-relaxed">
              Whether you need a custom web application, a mobile platform, or an
              intelligent agent powered by RAG technology, we bring deep technical
              expertise and a commitment to excellence in every project we
              undertake.
            </p>
          </motion.div>

          {/* Checklist card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-base-950 rounded-3xl p-8 md:p-10"
          >
            <h3 className="font-display text-xl font-bold text-white mb-8 tracking-tight">
              Why Choose Us
            </h3>
            <ul className="space-y-5">
              {checklistItems.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 16 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.07 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-white flex items-center justify-center">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path
                        d="M1 4L3.5 6.5L9 1"
                        stroke="var(--color-base-950)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-white/70 text-sm leading-relaxed">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.08 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-7 border border-base-200 hover:border-base-300 hover:shadow-lg transition-[border-color,box-shadow] duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-base-950 text-white flex items-center justify-center mb-5">
                {feature.icon}
              </div>
              <h4 className="font-display text-lg font-bold text-base-950 mb-2 tracking-tight">
                {feature.title}
              </h4>
              <p className="text-base-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
