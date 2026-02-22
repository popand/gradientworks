import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'
import { HiCommandLine, HiCpuChip, HiSparkles, HiCloud } from 'react-icons/hi2'

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

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
              <HiArrowRight
                className="ml-2 group-hover:translate-x-1 transition-transform"
                size={18}
              />
            </button>
            <button
              onClick={() => scrollToSection('#services')}
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-base-700 border-2 border-base-200 rounded-full hover:border-base-400 hover:bg-base-50 transition-all duration-200"
            >
              Explore Services
            </button>
          </motion.div>
        </div>

        {/* Bento grid on gradient */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 md:mt-28"
        >
          <div className="hero-gradient rounded-[2rem] p-3 sm:p-4 relative overflow-hidden">
            {/* Gradient depth layers */}
            <div className="absolute top-0 left-[25%] w-[45%] h-[45%] rounded-full bg-white/20 blur-[100px]" />
            <div className="absolute bottom-0 right-[15%] w-[55%] h-[55%] rounded-full bg-white/15 blur-[120px]" />

            {/* Bento Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:grid-rows-2 gap-3 relative z-10">
              {/* AI Agents — tall left card */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="md:row-span-2 bg-white/85 backdrop-blur-xl border border-white/60 rounded-2xl p-6 shadow-xl shadow-black/5 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-base-950 text-white flex items-center justify-center mb-4">
                    <HiCpuChip className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-base-950 mb-2 tracking-tight">
                    AI Agents
                  </h3>
                  <p className="text-sm text-base-500 leading-relaxed mb-6">
                    Intelligent autonomous systems that reason, plan, and execute
                    complex tasks with minimal human intervention.
                  </p>
                  {/* Capability pills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {['Planning', 'Reasoning', 'Tool Use', 'Memory'].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-[11px] font-medium text-base-600 bg-base-950/5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {/* Mini chat mock */}
                  <div className="space-y-2.5">
                    <div className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-base-200 flex-shrink-0 mt-0.5" />
                      <div className="bg-base-100 rounded-xl rounded-tl-sm px-3 py-2 text-xs text-base-600">
                        Analyze Q3 revenue trends
                      </div>
                    </div>
                    <div className="flex items-start gap-2 justify-end">
                      <div className="bg-base-950 rounded-xl rounded-tr-sm px-3 py-2 text-xs text-white">
                        Found 3 insights. Generating report...
                      </div>
                      <div className="w-5 h-5 rounded-full bg-base-950 flex-shrink-0 mt-0.5 flex items-center justify-center">
                        <HiCpuChip className="w-2.5 h-2.5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Decorative: network graph */}
                <div className="mt-6">
                  <svg
                    viewBox="0 0 220 56"
                    className="w-full h-14"
                    fill="none"
                  >
                    <line x1="24" y1="28" x2="80" y2="14" stroke="#d4d4d4" strokeWidth="1" />
                    <line x1="80" y1="14" x2="140" y2="42" stroke="#d4d4d4" strokeWidth="1" />
                    <line x1="140" y1="42" x2="196" y2="22" stroke="#d4d4d4" strokeWidth="1" />
                    <line x1="24" y1="28" x2="140" y2="42" stroke="#e5e5e5" strokeWidth="1" />
                    <line x1="80" y1="14" x2="196" y2="22" stroke="#e5e5e5" strokeWidth="1" />
                    <circle cx="24" cy="28" r="5" fill="#0a0a0a" />
                    <circle cx="80" cy="14" r="3.5" fill="#0a0a0a" opacity="0.5" />
                    <circle cx="140" cy="42" r="6" fill="#0a0a0a" />
                    <circle cx="196" cy="22" r="4" fill="#0a0a0a" opacity="0.7" />
                    <circle cx="110" cy="28" r="2.5" fill="#0a0a0a" opacity="0.25" />
                  </svg>
                </div>
              </motion.div>

              {/* Full Stack — wide top-right card */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="md:col-span-2 bg-white/85 backdrop-blur-xl border border-white/60 rounded-2xl p-6 shadow-xl shadow-black/5"
              >
                <div className="w-10 h-10 rounded-xl bg-base-950 text-white flex items-center justify-center mb-4">
                  <HiCommandLine className="w-5 h-5" />
                </div>
                <h3 className="font-display text-lg font-bold text-base-950 mb-2 tracking-tight">
                  Full Stack Development
                </h3>
                <p className="text-sm text-base-500 leading-relaxed mb-5">
                  Custom web & mobile applications built with modern frameworks
                  and best practices.
                </p>
                {/* Decorative: mini terminal */}
                <div className="bg-base-950 rounded-xl p-4">
                  <div className="flex items-center gap-1.5 mb-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                  </div>
                  <div className="font-mono text-[11px] md:text-xs leading-relaxed space-y-1">
                    <div>
                      <span className="text-violet-400">const </span>
                      <span className="text-emerald-400">solution</span>
                      <span className="text-base-500"> = </span>
                      <span className="text-amber-300">await</span>
                      <span className="text-sky-400"> buildApp</span>
                      <span className="text-base-400">({"{"}</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-base-400">stack: </span>
                      <span className="text-amber-200">'enterprise'</span>
                      <span className="text-base-500">,</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-base-400">scale: </span>
                      <span className="text-emerald-400">Infinity</span>
                    </div>
                    <div>
                      <span className="text-base-400">{"}"})</span>
                      <span className="text-base-600"> // ships tomorrow</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* RAG Systems — bottom-center */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="bg-white/85 backdrop-blur-xl border border-white/60 rounded-2xl p-6 shadow-xl shadow-black/5"
              >
                <div className="w-10 h-10 rounded-xl bg-base-950 text-white flex items-center justify-center mb-4">
                  <HiSparkles className="w-5 h-5" />
                </div>
                <h3 className="font-display text-lg font-bold text-base-950 mb-2 tracking-tight">
                  RAG Systems
                </h3>
                <p className="text-sm text-base-500 leading-relaxed mb-5">
                  Knowledge-enhanced AI powered by your proprietary data.
                </p>
                {/* Decorative: stacked documents */}
                <div className="relative h-12 ml-1">
                  <div className="absolute left-0 bottom-0 w-16 h-10 rounded-lg border border-base-200 bg-base-50/80" />
                  <div className="absolute left-2.5 bottom-1.5 w-16 h-10 rounded-lg border border-base-200 bg-base-100/90" />
                  <div className="absolute left-5 bottom-3 w-16 h-10 rounded-lg border border-base-200 bg-white flex items-center justify-center shadow-sm">
                    <div className="space-y-1.5 px-2">
                      <div className="w-10 h-[3px] bg-base-200 rounded-full" />
                      <div className="w-7 h-[3px] bg-base-200 rounded-full" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Cloud Native — bottom-right */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="bg-white/85 backdrop-blur-xl border border-white/60 rounded-2xl p-6 shadow-xl shadow-black/5"
              >
                <div className="w-10 h-10 rounded-xl bg-base-950 text-white flex items-center justify-center mb-4">
                  <HiCloud className="w-5 h-5" />
                </div>
                <h3 className="font-display text-lg font-bold text-base-950 mb-2 tracking-tight">
                  Cloud Native
                </h3>
                <p className="text-sm text-base-500 leading-relaxed mb-5">
                  Scalable infrastructure & modern DevOps practices.
                </p>
                {/* Decorative: connected nodes */}
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-lg bg-base-50 border border-base-200 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  </div>
                  <div className="flex-1 border-t border-dashed border-base-300" />
                  <div className="w-9 h-9 rounded-lg bg-base-50 border border-base-200 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-sky-400" />
                  </div>
                  <div className="flex-1 border-t border-dashed border-base-300" />
                  <div className="w-9 h-9 rounded-lg bg-base-50 border border-base-200 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-violet-400" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
