import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { revealWhen } from '../motion'

const differentiators = [
  {
    title: 'Dual expertise',
    description:
      'Traditional software engineering discipline and current AI capability in the same people, not two vendors.',
  },
  {
    title: 'Rapid, reviewable delivery',
    description:
      'Agile increments and a modern stack let us ship faster without trading away quality.',
  },
  {
    title: 'Future-ready systems',
    description:
      'Architectures that scale and evolve with the business as models, clouds and requirements change.',
  },
  {
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
            <h2>
              Why teams choose
              <br />
              <em>GradientWorks.</em>
            </h2>
          </motion.div>

          {/* A definition list, not another card grid: serif titles on the
              left, one hairline between the four rows. */}
          <dl className="lm-dl" style={{ marginTop: 'var(--stack-gap)' }}>
            {differentiators.map((item, index) => (
              <motion.div key={item.title} {...revealWhen(isInView, 1 + index)} className="lm-dl-row">
                <dt className="title-serif">{item.title}</dt>
                <dd>{item.description}</dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>

      {/* The dark band: DS on-ink treatment with the yellow eyebrow. */}
      <div className="lm-section on-ink lm-grain">
        <div className="wrap">
          <motion.div {...revealWhen(isInView, 5)} className="lm-section-head">
            <div className="eyebrow">Where we start</div>
            <h2>
              Built for
              <br />
              <em>every scenario.</em>
            </h2>
            <p className="sub">
              Forward-thinking teams use intelligent software to change how
              they operate. These are the engagements we take on most.
            </p>
          </motion.div>

          <div className="lm-grid-2" style={{ marginTop: 'var(--stack-gap)' }}>
            {useCases.map((useCase, index) => (
              <motion.article key={useCase.scenario} {...revealWhen(isInView, 6 + index)} className="lm-card">
                <div className="lm-card-body">
                  <h3 style={{ fontSize: 'var(--text-h3)' }}>{useCase.scenario}</h3>
                  <p>{useCase.solution}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs
