import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiLightningBolt, HiTrendingUp, HiUserGroup } from 'react-icons/hi'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: <HiLightningBolt className="w-8 h-8" />,
      title: 'Innovation First',
      description: 'We stay at the forefront of technology, bringing you the latest advancements in software and AI.'
    },
    {
      icon: <HiTrendingUp className="w-8 h-8" />,
      title: 'Results Driven',
      description: 'Our solutions are designed to deliver measurable business outcomes and drive growth.'
    },
    {
      icon: <HiUserGroup className="w-8 h-8" />,
      title: 'Partnership Approach',
      description: 'We work closely with you as strategic partners, not just vendors, to ensure your success.'
    }
  ]

  return (
    <section id="about" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-gradient">GradientWorks</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a forward-thinking consulting firm that bridges the gap between traditional software development
            and cutting-edge artificial intelligence solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-lg text-gray-600 mb-4">
              At GradientWorks, we believe in the power of intelligent software to transform businesses.
              Our mission is to empower organizations with robust software solutions enhanced by the
              latest advancements in artificial intelligence.
            </p>
            <p className="text-lg text-gray-600">
              Whether you need a custom web application, a mobile platform, or an intelligent agent
              powered by RAG technology, we bring deep technical expertise and a commitment to excellence
              in every project we undertake.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us?</h3>
            <ul className="space-y-4">
              {[
                'Expertise in both traditional software and AI technologies',
                'Proven track record of delivering scalable solutions',
                'Agile methodology for rapid, iterative development',
                'End-to-end services from concept to deployment',
                'Ongoing support and maintenance',
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="flex items-start"
                >
                  <span className="text-primary-600 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 text-white rounded-lg mb-4">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
