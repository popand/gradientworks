import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { revealWhen } from '../motion'

const principles = [
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

          {/* The one dark surface in the section: the DS on-ink treatment. */}
          <motion.div
            {...revealWhen(isInView, 2)}
            className="on-ink lm-grain rounded-card"
            style={{ padding: 'clamp(28px, 3.5vw, 44px)' }}
          >
            <h3 className="text-h3" style={{ color: 'var(--cream)' }}>What you can count on</h3>
            <ul className="lm-plain-list mt-5">
              {principles.map((item, index) => (
                <motion.li key={item} {...revealWhen(isInView, 3 + index)}>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
