import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'
import { HiCommandLine, HiCpuChip, HiSparkles, HiCloud } from 'react-icons/hi2'

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-primary pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
          >
            Welcome to{' '}
            <span className="text-gradient">GradientWorks</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
          >
            Expert consulting services bridging traditional software development with cutting-edge AI solutions
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-500 mb-12 max-w-2xl mx-auto"
          >
            From custom software development to advanced agentic AI systems and RAG applications,
            we transform your vision into intelligent, scalable solutions
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => scrollToSection('#contact')}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-primary-600 to-accent-600 rounded-lg hover:from-primary-700 hover:to-accent-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Started
              <HiArrowRight className="ml-2" size={20} />
            </button>

            <button
              onClick={() => scrollToSection('#services')}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-700 bg-white border-2 border-primary-600 rounded-lg hover:bg-primary-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Explore Services
            </button>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          >
            {[
              {
                label: 'Software Development',
                icon: HiCommandLine,
                gradient: 'from-blue-500 to-cyan-500',
                description: 'Custom solutions built for your needs'
              },
              {
                label: 'AI Agents',
                icon: HiCpuChip,
                gradient: 'from-purple-500 to-pink-500',
                description: 'Intelligent autonomous systems'
              },
              {
                label: 'RAG Applications',
                icon: HiSparkles,
                gradient: 'from-rose-500 to-orange-500',
                description: 'Knowledge-enhanced AI systems'
              },
              {
                label: 'Cloud Solutions',
                icon: HiCloud,
                gradient: 'from-teal-500 to-emerald-500',
                description: 'Scalable infrastructure & DevOps'
              },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all cursor-pointer overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                {/* Icon with gradient background */}
                <div className={`relative inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${item.gradient} mb-4 shadow-md`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-primary-700 transition-colors">
                    {item.label}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {item.description}
                  </p>
                </div>

                {/* Decorative corner element */}
                <div className={`absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br ${item.gradient} rounded-full opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-300`}></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
