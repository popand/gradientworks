import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { revealWhen } from '../motion'

const features = [
  {
    step: '01 · Innovation',
    title: 'Innovation first',
    description:
      'We stay at the front of the field, bringing you the latest advances in software and AI without the hype.',
  },
  {
    step: '02 · Results',
    title: 'Results driven',
    description:
      'Every engagement is scoped around a measurable business outcome, not a feature list.',
  },
  {
    step: '03 · Partnership',
    title: 'Partnership approach',
    description:
      'We work as strategic partners, not vendors, and stay invested well past launch.',
  },
]

const checklist = [
  'Depth in both traditional software and AI systems',
  'A track record of shipping solutions that scale',
  'Agile delivery in short, reviewable increments',
  'End-to-end, from concept to production',
  'Ongoing support once it is live',
]

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref} className="lm-section">
      <div className="wrap">
        <motion.div {...revealWhen(isInView, 0)} className="lm-section-head">
          <div className="eyebrow">Who we are</div>
          <h2>
            We bridge the gap between
            <br />
            software and <em>intelligence.</em>
          </h2>
          <p className="sub">
            One team that can design the system, build it, and teach it to
            reason over your data.
          </p>
        </motion.div>

        <div className="lm-grid-2 items-start" style={{ marginTop: 'var(--stack-gap)' }}>
          <motion.div {...revealWhen(isInView, 1)}>
            <h3 className="text-h3">Our mission</h3>
            <p className="text-fg-soft mt-5" style={{ lineHeight: 1.65 }}>
              We believe intelligent software should be calm to use and honest
              about what it knows. Our mission is to give organisations robust
              systems, strengthened by the latest advances in AI, that people
              actually trust.
            </p>
            <p className="text-fg-soft mt-4" style={{ lineHeight: 1.65 }}>
              Whether you need a custom web application, a mobile platform, or
              an agent grounded in your own knowledge base, we bring deep
              technical judgement and a commitment to finishing well.
            </p>
          </motion.div>

          {/* The one dark surface in the section: the DS on-ink treatment with
              the yellow eyebrow and cream copy. */}
          <motion.div
            {...revealWhen(isInView, 2)}
            className="on-ink lm-grain rounded-card"
            style={{ padding: 'clamp(28px, 3.5vw, 44px)' }}
          >
            <div className="eyebrow left" style={{ marginTop: 0 }}>Why teams choose us</div>
            <ul className="flex flex-col gap-4 mt-2">
              {checklist.map((item, index) => (
                <motion.li
                  key={item}
                  {...revealWhen(isInView, 3 + index)}
                  className="flex items-start gap-3.5"
                  style={{ color: 'var(--foot-ink)', fontSize: 'var(--text-btn)', lineHeight: 1.5 }}
                >
                  <span className="lm-dot" aria-hidden="true" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="lm-grid-3">
          {features.map((feature, index) => (
            <motion.article
              key={feature.title}
              {...revealWhen(isInView, 4 + index)}
              className="lm-card hoverable"
            >
              <div className="lm-card-body">
                <span className="step-num">{feature.step}</span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
