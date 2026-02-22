import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'
import { HiCommandLine, HiCpuChip, HiSparkles, HiCloud } from 'react-icons/hi2'
import type { ComponentType, SVGProps } from 'react'

interface FloatingBadge {
  label: string
  icon: ComponentType<SVGProps<SVGSVGElement> & { className?: string }>
  position: string
  floatClass: string
}

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  const floatingBadges: FloatingBadge[] = [
    { label: 'AI Agents', icon: HiCpuChip, position: 'top-[12%] left-[6%]', floatClass: 'float-1' },
    { label: 'Full Stack', icon: HiCommandLine, position: 'bottom-[18%] left-[4%]', floatClass: 'float-2' },
    { label: 'RAG Systems', icon: HiSparkles, position: 'top-[20%] right-[6%]', floatClass: 'float-3' },
    { label: 'Cloud Native', icon: HiCloud, position: 'bottom-[12%] right-[5%]', floatClass: 'float-4' },
  ]

  return (
    <section id="home" className="pt-32 md:pt-40 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Centered content */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-base-100 text-sm text-base-500 mb-8 font-medium"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Software Development & AI Consulting
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black tracking-tight leading-[0.95] text-base-950 mb-8"
          >
            Build Intelligent
            <br />
            <em>Software.</em> Scale With
            <br />
            <em>Confidence.</em>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg md:text-xl text-base-500 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Full-stack development meets artificial intelligence.
            From enterprise applications to intelligent agents that learn and adapt.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => scrollToSection('#contact')}
              className="group inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-base-950 rounded-full hover:bg-base-800 transition-all duration-200"
            >
              Book a Consultation
              <HiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </button>
            <button
              onClick={() => scrollToSection('#services')}
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-base-700 border-2 border-base-200 rounded-full hover:border-base-400 hover:bg-base-50 transition-all duration-200"
            >
              Explore Services
            </button>
          </motion.div>
        </div>

        {/* Gradient visual area */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 md:mt-28"
        >
          <div className="hero-gradient rounded-[2rem] h-72 sm:h-80 md:h-[26rem] relative overflow-hidden">
            {/* Abstract soft shapes for depth */}
            <div className="absolute top-[10%] left-[20%] w-48 h-48 md:w-64 md:h-64 rounded-full bg-white/15 blur-2xl" />
            <div className="absolute bottom-[5%] right-[15%] w-56 h-56 md:w-80 md:h-80 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute top-[40%] left-[50%] w-32 h-32 rounded-full bg-white/20 blur-xl" />

            {/* Floating badges */}
            {floatingBadges.map((badge) => (
              <div
                key={badge.label}
                className={`absolute ${badge.position} ${badge.floatClass} hidden sm:block`}
              >
                <div className="bg-white rounded-2xl px-4 py-3 shadow-lg shadow-black/8 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-base-950 text-white flex items-center justify-center">
                    <badge.icon className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-semibold text-base-900 whitespace-nowrap">
                    {badge.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
