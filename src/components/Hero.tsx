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

  const features = [
    {
      label: 'Software Development',
      icon: HiCommandLine,
      description: 'Custom solutions built for your needs',
      color: 'from-primary-400 to-primary-600',
      glow: 'group-hover:shadow-primary-500/20',
    },
    {
      label: 'AI Agents',
      icon: HiCpuChip,
      description: 'Intelligent autonomous systems',
      color: 'from-accent-400 to-accent-600',
      glow: 'group-hover:shadow-accent-500/20',
    },
    {
      label: 'RAG Applications',
      icon: HiSparkles,
      description: 'Knowledge-enhanced AI systems',
      color: 'from-primary-300 to-accent-400',
      glow: 'group-hover:shadow-accent-400/20',
    },
    {
      label: 'Cloud Solutions',
      icon: HiCloud,
      description: 'Scalable infrastructure & DevOps',
      color: 'from-primary-500 to-primary-300',
      glow: 'group-hover:shadow-primary-400/20',
    },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0">
        <div className="orb-1 absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary-500/15 blur-[140px]" />
        <div className="orb-2 absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-accent-500/12 blur-[140px]" />
        <div className="orb-3 absolute top-[30%] left-[40%] w-[30%] h-[30%] rounded-full bg-primary-400/8 blur-[120px]" />
      </div>

      {/* Dot grid overlay */}
      <div className="dot-grid absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-base-500 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Software Development & AI Consulting
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-800 tracking-tight leading-[0.95] mb-8"
          >
            <span className="text-white">Software That</span>
            <br />
            <span className="text-gradient">Thinks.</span>
            <span className="text-white"> Solutions</span>
            <br />
            <span className="text-white">That </span>
            <span className="text-gradient">Scale.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg md:text-xl text-base-500 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Stop choosing between traditional reliability and AI innovation.
            GradientWorks delivers both — from enterprise applications to intelligent
            agents that learn and adapt.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => scrollToSection('#contact')}
              className="group inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-primary-600 to-accent-600 rounded-xl hover:from-primary-500 hover:to-accent-500 transition-all duration-300 shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30 hover:-translate-y-0.5"
            >
              Book a Consultation
              <HiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </button>
            <button
              onClick={() => scrollToSection('#services')}
              className="inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold text-white glass rounded-xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5"
            >
              Explore Services
            </button>
          </motion.div>

          {/* Feature cards */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto"
          >
            {features.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`group glass rounded-2xl p-5 cursor-pointer transition-all duration-300 hover:shadow-xl ${item.glow}`}
              >
                <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br ${item.color} mb-3.5 shadow-lg`}>
                  <item.icon className="w-5.5 h-5.5 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1.5 tracking-tight">
                  {item.label}
                </h3>
                <p className="text-xs text-base-500 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-base-950 to-transparent" />
    </section>
  )
}

export default Hero
