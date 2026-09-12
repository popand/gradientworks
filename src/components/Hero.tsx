import { motion } from 'framer-motion'
import { reveal, scrollToSection } from '../motion'

const Wave = () => (
  <span className="lm-wave" aria-hidden="true">
    <i />
    <i />
    <i />
    <i />
    <i />
  </span>
)

const trace = [
  { step: '01 · Plan', text: 'Split the request into three retrieval steps and one synthesis pass.' },
  { step: '02 · Retrieve', text: 'Pulled 4 sources from the knowledge graph · 142 ms.' },
  { step: '03 · Reason', text: 'Cross-referenced Q3 revenue against the competitor set.' },
  { step: '04 · Deliver', text: 'Drafted the report and placed it in the shared workspace.' },
]

const Hero = () => {
  return (
    <section id="home" style={{ padding: 'calc(var(--header) + 14px) var(--gutter) 0' }}>
      <div className="lm-panel lm-panel-hero">
        {/* The panel, not the viewport, holds the imagery. .lm-panel-bg adds the
            cream fade so the headline stays legible, plus the grain. */}
        <div className="lm-panel-bg" aria-hidden="true">
          <div className="lm-art" />
        </div>

        <div className="lm-panel-content">
          <motion.div {...reveal(0)} className="eyebrow">
            GradientWorks · Software & agentic AI
          </motion.div>

          <motion.h1 {...reveal(1)}>
            Build intelligent software.
            <br />
            Ship with <em>confidence.</em>
          </motion.h1>

          <motion.p {...reveal(2)} className="sub">
            Senior full-stack engineering and agentic AI, from enterprise
            applications to agents grounded in your own data.
          </motion.p>

          <motion.div {...reveal(2)} className="lm-ctas">
            <button className="btn btn-primary" onClick={() => scrollToSection('#contact')}>
              Book a call
            </button>
            <button className="btn btn-glass" onClick={() => scrollToSection('#services')}>
              See what we build
            </button>
          </motion.div>

          <motion.span {...reveal(3)} className="micro">
            Toronto · Software + agentic AI · Senior engineers only
          </motion.span>
        </div>

        {/* Cream dome the mockup sits on. */}
        <div className="lm-dome" aria-hidden="true">
          <svg viewBox="0 0 1440 230" preserveAspectRatio="none">
            <path d="M0 230 C 360 40, 1080 40, 1440 230 Z" fill="var(--cream)" />
          </svg>
        </div>

        {/* What an engagement looks like: the agent's voice pill and an
            app-window mockup of a run, redrawn in the DS mockup frame. */}
        <motion.div
          {...reveal(4)}
          className="relative z-4 w-full mt-auto"
          style={{ maxWidth: 660, marginBottom: 'clamp(28px, 5.5vh, 64px)', paddingTop: 20 }}
        >
          <div className="lm-glass lm-glass-pill relative z-6" style={{ marginBottom: -16 }}>
            <Wave />
            <span className="lm-glass-text">
              agent · retrieving four sources, drafting the Q3 analysis
              <span className="lm-caret" />
            </span>
            <span className="lm-status">Running</span>
          </div>

          <div className="lm-mock">
            <div className="lm-mock-bar">
              <span className="lm-mock-lights" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
              <span className="lm-mock-app">Agent run</span>
              <span className="lm-mock-meta">RAG · 2.4M chunks</span>
            </div>
            <div className="lm-mock-body">
              <div className="bg-white rounded-mock border border-line" style={{ padding: '6px 14px 10px' }}>
                {trace.map((row) => (
                  <div key={row.step} className="lm-trace">
                    <span className="step-num">{row.step}</span>
                    <span className="text-body-sm text-ink-sub">{row.text}</span>
                  </div>
                ))}
                <div className="flex items-center justify-between mt-3">
                  <span className="lm-mono-pill" style={{ background: 'var(--leaf-wash)', color: 'var(--leaf-ink)' }}>
                    Report ready
                  </span>
                  <span className="micro">4 sources · 1.2 s</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
