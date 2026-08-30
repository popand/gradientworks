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
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, transform: 'translateY(24px)' }}
            animate={{ opacity: 1, transform: 'translateY(0px)' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
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
            initial={{ opacity: 0, transform: 'translateY(16px)' }}
            animate={{ opacity: 1, transform: 'translateY(0px)' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg md:text-xl text-base-500 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Full-stack development meets artificial intelligence.
            From enterprise applications to intelligent agents that learn and adapt.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, transform: 'translateY(16px)' }}
            animate={{ opacity: 1, transform: 'translateY(0px)' }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileTap={{ scale: 0.96 }}
              onClick={() => scrollToSection('#contact')}
              className="group inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-base-950 rounded-full hover:bg-base-800 transition-colors duration-200"
            >
              Book a Consultation
              <HiArrowRight
                className="ml-2 group-hover:translate-x-1 transition-transform"
                size={18}
              />
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.96 }}
              onClick={() => scrollToSection('#services')}
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-base-700 border-2 border-base-200 rounded-full hover:border-base-400 hover:bg-base-50 transition-colors duration-200"
            >
              Explore Services
            </motion.button>
          </motion.div>
        </div>

        {/* Bento grid on gradient */}
        <motion.div
          initial={{ opacity: 0, transform: 'translateY(40px)' }}
          animate={{ opacity: 1, transform: 'translateY(0px)' }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 md:mt-28"
        >
          <div className="hero-gradient rounded-[2rem] p-3 sm:p-4 relative overflow-hidden">
            {/* Gradient depth layers */}
            <div className="absolute top-0 left-[25%] w-[45%] h-[45%] rounded-full bg-white/20 blur-[100px]" />
            <div className="absolute bottom-0 right-[15%] w-[55%] h-[55%] rounded-full bg-white/15 blur-[120px]" />

            {/* Bento Grid */}
            <h2 className="sr-only">What we build</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:grid-rows-2 gap-2.5 relative z-10">
              {/* AI Agents — tall left card */}
              <motion.div
                initial={{ opacity: 0, transform: 'translateY(16px)' }}
                animate={{ opacity: 1, transform: 'translateY(0px)' }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="md:row-span-2 bg-white/85 backdrop-blur-xl border border-white/60 rounded-2xl p-5 shadow-xl shadow-black/5 flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-xl bg-base-950 text-white flex items-center justify-center mb-3">
                    <HiCpuChip className="w-4.5 h-4.5" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-base-950 mb-1.5 tracking-tight">
                    AI Agents
                  </h3>
                  <p className="text-sm text-base-600 leading-relaxed mb-4">
                    Autonomous systems that reason, plan, and execute
                    complex tasks with minimal human intervention.
                  </p>
                  {/* Capability pills */}
                  <div className="flex flex-wrap gap-1.5 mb-3.5">
                    {['Planning', 'Reasoning', 'Tool Use', 'Memory'].map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 text-micro font-medium text-base-600 bg-base-950/5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {/* Mini chat mock */}
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-base-200 flex-shrink-0 mt-0.5" />
                      <div className="bg-base-100 rounded-xl rounded-tl-sm px-3 py-1.5 text-xs text-base-600">
                        Analyze Q3 revenue trends
                      </div>
                    </div>
                    <div className="flex items-start gap-2 justify-end">
                      <div className="bg-base-950 rounded-xl rounded-tr-sm px-3 py-1.5 text-xs text-white">
                        Found 3 insights. Generating report…
                      </div>
                      <div className="w-5 h-5 rounded-full bg-base-950 flex-shrink-0 mt-0.5 flex items-center justify-center">
                        <HiCpuChip className="w-2.5 h-2.5 text-white" />
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-base-200 flex-shrink-0 mt-0.5" />
                      <div className="bg-base-100 rounded-xl rounded-tl-sm px-3 py-1.5 text-xs text-base-600">
                        Cross-reference with competitor data
                      </div>
                    </div>
                    <div className="flex items-start gap-2 justify-end">
                      <div className="bg-base-950 rounded-xl rounded-tr-sm px-3 py-1.5 text-xs text-white">
                        Querying 4 sources. Patterns identified.
                      </div>
                      <div className="w-5 h-5 rounded-full bg-base-950 flex-shrink-0 mt-0.5 flex items-center justify-center">
                        <HiCpuChip className="w-2.5 h-2.5 text-white" />
                      </div>
                    </div>
                  </div>
                  {/* Agent activity */}
                  <div className="mt-4 space-y-1.5">
                    <div className="text-micro font-semibold text-base-600 uppercase tracking-wider">Agent Activity</div>
                    <div className="flex items-center gap-2 bg-base-50 rounded-lg px-3 py-1.5 border border-base-200/60">
                      <div className="w-1.5 h-1.5 rounded-full bg-success-400" />
                      <span className="text-micro text-base-600">Data retrieval complete</span>
                      <span className="text-micro text-base-600 ml-auto">2s ago</span>
                    </div>
                    <div className="flex items-center gap-2 bg-base-50 rounded-lg px-3 py-1.5 border border-base-200/60">
                      <div className="w-1.5 h-1.5 rounded-full bg-success-400" />
                      <span className="text-micro text-base-600">Cross-referenced 4 sources</span>
                      <span className="text-micro text-base-600 ml-auto">1s ago</span>
                    </div>
                    <div className="flex items-center gap-2 bg-base-50 rounded-lg px-3 py-1.5 border border-base-200/60">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                      <span className="text-micro text-base-600">Generating analysis</span>
                      <span className="text-micro text-base-600 ml-auto">now</span>
                    </div>
                  </div>
                  {/* Performance stats */}
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    <div className="bg-base-50 rounded-lg px-2 py-2 text-center border border-base-200/60">
                      <div className="text-sm font-bold text-base-950">1.2s</div>
                      <div className="text-micro text-base-600">Avg Response</div>
                    </div>
                    <div className="bg-base-50 rounded-lg px-2 py-2 text-center border border-base-200/60">
                      <div className="text-sm font-bold text-base-950">12</div>
                      <div className="text-micro text-base-600">Tasks Done</div>
                    </div>
                    <div className="bg-base-50 rounded-lg px-2 py-2 text-center border border-base-200/60">
                      <div className="text-sm font-bold text-base-950">98%</div>
                      <div className="text-micro text-base-600">Accuracy</div>
                    </div>
                  </div>
                </div>
                {/* Decorative: network graph */}
                <div className="mt-4">
                  <svg
                    viewBox="0 0 220 50"
                    className="w-full h-12"
                    fill="none"
                  >
                    <line x1="24" y1="25" x2="80" y2="12" stroke="var(--color-base-300)" strokeWidth="1" />
                    <line x1="80" y1="12" x2="140" y2="38" stroke="var(--color-base-300)" strokeWidth="1" />
                    <line x1="140" y1="38" x2="196" y2="20" stroke="var(--color-base-300)" strokeWidth="1" />
                    <line x1="24" y1="25" x2="140" y2="38" stroke="var(--color-base-200)" strokeWidth="1" />
                    <line x1="80" y1="12" x2="196" y2="20" stroke="var(--color-base-200)" strokeWidth="1" />
                    <circle cx="24" cy="25" r="5" fill="var(--color-base-950)" />
                    <circle cx="80" cy="12" r="3.5" fill="var(--color-base-950)" opacity="0.5" />
                    <circle cx="140" cy="38" r="6" fill="var(--color-base-950)" />
                    <circle cx="196" cy="20" r="4" fill="var(--color-base-950)" opacity="0.7" />
                    <circle cx="110" cy="25" r="2.5" fill="var(--color-base-950)" opacity="0.25" />
                  </svg>
                </div>
              </motion.div>

              {/* Full Stack — wide top-right card */}
              <motion.div
                initial={{ opacity: 0, transform: 'translateY(16px)' }}
                animate={{ opacity: 1, transform: 'translateY(0px)' }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="md:col-span-2 bg-white/85 backdrop-blur-xl border border-white/60 rounded-2xl p-5 shadow-xl shadow-black/5"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-base-950 text-white flex items-center justify-center">
                    <HiCommandLine className="w-4.5 h-4.5" />
                  </div>
                  <div className="flex flex-wrap gap-1.5 justify-end">
                    {['React', 'Node', 'TypeScript', 'AWS'].map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 text-micro font-medium text-base-600 bg-base-950/5 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <h3 className="font-display text-lg font-bold text-base-950 mb-1.5 tracking-tight">
                  Full Stack Development
                </h3>
                <p className="text-sm text-base-600 leading-relaxed mb-4">
                  Custom web & mobile applications built with modern frameworks
                  and best practices.
                </p>
                {/* Decorative: mini terminal */}
                <div className="bg-base-950 rounded-xl p-3.5">
                  <div className="flex items-center gap-1.5 mb-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#ff5f57]" />
                    <span className="w-2 h-2 rounded-full bg-[#febc2e]" />
                    <span className="w-2 h-2 rounded-full bg-[#28c840]" />
                  </div>
                  <div className="font-mono text-micro md:text-xs leading-relaxed space-y-0.5">
                    <div>
                      <span className="text-violet-400">const </span>
                      <span className="text-emerald-400">solution</span>
                      <span className="text-base-400"> = </span>
                      <span className="text-amber-300">await</span>
                      <span className="text-sky-400"> buildApp</span>
                      <span className="text-base-400">({"{"}</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-base-400">stack: </span>
                      <span className="text-amber-200">'enterprise'</span>
                      <span className="text-base-400">,</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-base-400">scale: </span>
                      <span className="text-emerald-400">Infinity</span>
                    </div>
                    <div>
                      <span className="text-base-400">{"}"})</span>
                      <span className="text-base-400"> // ships tomorrow</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* RAG Systems — bottom-center */}
              <motion.div
                initial={{ opacity: 0, transform: 'translateY(16px)' }}
                animate={{ opacity: 1, transform: 'translateY(0px)' }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="bg-white/85 backdrop-blur-xl border border-white/60 rounded-2xl p-5 shadow-xl shadow-black/5 flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-xl bg-base-950 text-white flex items-center justify-center mb-3">
                    <HiSparkles className="w-4.5 h-4.5" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-base-950 mb-1.5 tracking-tight">
                    RAG Systems
                  </h3>
                  <p className="text-sm text-base-600 leading-relaxed mb-3">
                    Knowledge-enhanced AI powered by your proprietary data.
                  </p>
                  {/* Source type pills */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {['PDFs', 'APIs', 'Databases', 'Docs'].map((src) => (
                      <span
                        key={src}
                        className="px-2.5 py-0.5 text-micro font-medium text-base-600 bg-base-950/5 rounded-full"
                      >
                        {src}
                      </span>
                    ))}
                  </div>
                  {/* Knowledge base stats */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-micro text-base-600">Indexed</span>
                        <span className="text-micro font-semibold text-base-700">2.4M chunks</span>
                      </div>
                      <div className="w-full h-1.5 bg-base-100 rounded-full overflow-hidden">
                        <div className="h-full w-[85%] bg-base-950 rounded-full" />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-base-50 rounded-lg px-3 py-1.5 border border-base-200/60 mb-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-success-400" />
                    <span className="text-micro text-base-600">Semantic search ready</span>
                    <span className="text-micro text-base-600 ml-auto">142ms</span>
                  </div>
                </div>
                {/* Retrieval pipeline */}
                <div className="flex items-center gap-1.5">
                  <div className="flex-1 bg-base-100 rounded-lg px-2.5 py-2 text-center">
                    <div className="text-micro font-semibold text-base-600">Ingest</div>
                  </div>
                  <svg className="w-3.5 h-3.5 text-base-300 flex-shrink-0" viewBox="0 0 16 16" fill="none">
                    <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div className="flex-1 bg-base-100 rounded-lg px-2.5 py-2 text-center">
                    <div className="text-micro font-semibold text-base-600">Retrieve</div>
                  </div>
                  <svg className="w-3.5 h-3.5 text-base-300 flex-shrink-0" viewBox="0 0 16 16" fill="none">
                    <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div className="flex-1 bg-base-950 rounded-lg px-2.5 py-2 text-center">
                    <div className="text-micro font-semibold text-white">Generate</div>
                  </div>
                </div>
              </motion.div>

              {/* Cloud Native — bottom-right */}
              <motion.div
                initial={{ opacity: 0, transform: 'translateY(16px)' }}
                animate={{ opacity: 1, transform: 'translateY(0px)' }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="bg-white/85 backdrop-blur-xl border border-white/60 rounded-2xl p-5 shadow-xl shadow-black/5 flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-xl bg-base-950 text-white flex items-center justify-center mb-3">
                    <HiCloud className="w-4.5 h-4.5" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-base-950 mb-1.5 tracking-tight">
                    Cloud Native
                  </h3>
                  <p className="text-sm text-base-600 leading-relaxed mb-3">
                    Scalable infrastructure & modern DevOps practices.
                  </p>
                  {/* Platform pills */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {['AWS', 'Docker', 'K8s', 'CI/CD'].map((p) => (
                      <span
                        key={p}
                        className="px-2.5 py-0.5 text-micro font-medium text-base-600 bg-base-950/5 rounded-full"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Status indicators */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between bg-base-50 rounded-lg px-3 py-1.5 border border-base-200/60">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-success-400" />
                      <span className="text-micro font-medium text-base-600">Production</span>
                    </div>
                    <span className="text-micro text-base-600">99.9%</span>
                  </div>
                  <div className="flex items-center justify-between bg-base-50 rounded-lg px-3 py-1.5 border border-base-200/60">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-sky-400" />
                      <span className="text-micro font-medium text-base-600">Staging</span>
                    </div>
                    <span className="text-micro text-base-600">Active</span>
                  </div>
                  <div className="flex items-center justify-between bg-base-50 rounded-lg px-3 py-1.5 border border-base-200/60">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-violet-400" />
                      <span className="text-micro font-medium text-base-600">CI Pipeline</span>
                    </div>
                    <span className="text-micro text-base-600">Passing</span>
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
