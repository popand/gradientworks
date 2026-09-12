import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { revealWhen } from '../motion'

const differentiators = [
  {
    number: '01',
    tag: 'Best of both worlds',
    title: 'Dual expertise',
    description:
      'Traditional software engineering discipline and current AI capability in the same people, not two vendors.',
  },
  {
    number: '02',
    tag: 'Speed with quality',
    title: 'Rapid, reviewable delivery',
    description:
      'Agile increments and a modern stack let us ship faster without trading away quality.',
  },
  {
    number: '03',
    tag: 'Built to last',
    title: 'Future-ready systems',
    description:
      'Architectures that scale and evolve with the business as models, clouds and requirements change.',
  },
  {
    number: '04',
    tag: 'True partnership',
    title: 'A technology partner',
    description:
      'We do not just build the software. We stay invested in how it performs for you over time.',
  },
]

const useCases = [
  {
    scenario: 'Growing startup',
    solution: 'An MVP with AI-powered features that stand out from day one.',
  },
  {
    scenario: 'Enterprise modernisation',
    solution: 'Legacy systems rebuilt on modern architecture with intelligent automation.',
  },
  {
    scenario: 'Data-rich organisation',
    solution: 'Ontology-enhanced RAG that unlocks structured insight from your own knowledge base.',
  },
  {
    scenario: 'Process-heavy business',
    solution: 'Agents that take over complex workflows and reduce operating cost.',
  },
]

const WhyUs = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="why-us" ref={ref}>
      <div className="lm-section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <motion.div {...revealWhen(isInView, 0)} className="lm-section-head">
            <div className="eyebrow">The difference</div>
            <h2>
              Why teams choose
              <br />
              <em>GradientWorks.</em>
            </h2>
          </motion.div>

          <div className="lm-grid-2" style={{ marginTop: 'var(--stack-gap)' }}>
            {differentiators.map((item, index) => (
              <motion.article key={item.title} {...revealWhen(isInView, 1 + index)} className="lm-card hoverable">
                <div className="lm-card-body">
                  <div className="flex items-center justify-between gap-4">
                    <span className="step-num">{item.number}</span>
                    <span className="tag">{item.tag}</span>
                  </div>
                  <h3 style={{ fontSize: 'var(--text-h3)' }}>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      {/* The dark band: DS on-ink treatment, yellow eyebrow, serif quote cards. */}
      <div className="lm-section on-ink lm-grain">
        <div className="wrap">
          <motion.div {...revealWhen(isInView, 5)} className="lm-section-head">
            <div className="eyebrow">Your success is our mission</div>
            <h2>
              Built for
              <br />
              <em>every scenario.</em>
            </h2>
            <p className="sub">
              Forward-thinking teams use intelligent software to change how
              they operate. Here is where we tend to start.
            </p>
          </motion.div>

          <div className="lm-grid-2" style={{ marginTop: 'var(--stack-gap)' }}>
            {useCases.map((useCase, index) => (
              <motion.div key={useCase.scenario} {...revealWhen(isInView, 6 + index)} className="lm-quote">
                <p>{useCase.solution}</p>
                <div className="lm-quote-who">
                  <div>
                    <div className="lm-quote-name">{useCase.scenario}</div>
                    <div className="lm-quote-role">Typical engagement</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs
