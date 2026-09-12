import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { revealWhen } from '../motion'

const Wave = () => (
  <span className="lm-wave" aria-hidden="true">
    <i />
    <i />
    <i />
    <i />
    <i />
  </span>
)

/* The design system's how-it-works step cards. The numbering is legitimate
   here: these are sequential moves in every engagement, not an enumeration.
   Each visual is a DS component composed on the tokenised art. */
const steps = [
  {
    step: '01 · Scope',
    title: 'Start with the problem',
    body: 'One conversation to understand the workflow, the data and what done looks like. You get a written scope, not a deck.',
    visual: (
      <div className="lm-glass lm-say" style={{ width: '82%', padding: '14px 16px' }}>
        <div className="lm-say-head">
          <span className="lm-say-label">You say</span>
          <Wave />
        </div>
        <p style={{ fontSize: 11.5 }}>
          “our support team should answer from our own docs, not guess, and it has to fit the tool they already use”
        </p>
      </div>
    ),
  },
  {
    step: '02 · Build',
    title: 'Ship in reviewable increments',
    body: 'Short cycles you can see and steer, with the agent, the application and the infrastructure growing together.',
    visual: (
      <div className="lm-mock" style={{ width: '84%', fontSize: 11 }}>
        <div className="lm-mock-bar" style={{ padding: '8px 12px' }}>
          <span className="lm-mock-lights" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span className="lm-mock-app" style={{ fontSize: 12 }}>Increment 3</span>
          <span className="lm-mock-meta">In review</span>
        </div>
        <div className="lm-mock-body" style={{ padding: '10px 12px' }}>
          <div className="lm-trace" style={{ padding: '5px 0' }}>
            <span className="step-num" style={{ width: 84 }}>Retrieval</span>
            <span className="text-ink-sub">Grounded on the docs index</span>
          </div>
          <div className="lm-trace" style={{ padding: '5px 0' }}>
            <span className="step-num" style={{ width: 84 }}>Handoff</span>
            <span className="text-ink-sub">Escalates when unsure</span>
          </div>
          <div className="lm-trace" style={{ padding: '5px 0' }}>
            <span className="step-num" style={{ width: 84 }}>Review</span>
            <span className="text-ink-sub">Your team signs off</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    step: '03 · Run',
    title: 'Hand over, then stay close',
    body: 'It goes live with monitoring and documentation, and we remain on hand as it meets real use.',
    visual: (
      <div className="flex flex-col items-center gap-3">
        <span className="lm-chip" style={{ fontSize: 13, padding: '11px 20px' }}>In production</span>
        <div className="lm-glass lm-glass-pill" style={{ width: 'auto', margin: 0, padding: '10px 16px' }}>
          <Wave />
          <span className="lm-glass-text" style={{ flex: 'none' }}>monitoring · handover complete</span>
          <span className="lm-status done">Done</span>
        </div>
      </div>
    ),
  },
]

const Process = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="process" ref={ref} className="lm-section" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <motion.div {...revealWhen(isInView, 0)} className="lm-section-head">
          <h2>
            Scope it. Build it.
            <br />
            <em>Run it.</em>
          </h2>
          <p className="sub">
            Every engagement follows the same three moves, whatever we are
            building.
          </p>
        </motion.div>

        <div className="lm-grid-3">
          {steps.map((s, i) => (
            <motion.article key={s.step} {...revealWhen(isInView, 1 + i)} className="lm-card hoverable">
              <div className="lm-card-visual lm-card-scene">
                <div className="lm-art" aria-hidden="true" />
                <div className="lm-card-scene-content">{s.visual}</div>
              </div>
              <div className="lm-card-body">
                <span className="step-num">{s.step}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
