import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { revealWhen, scrollToSection } from '../motion'

interface ServiceItem {
  title: string
  description: string
}

const softwareServices: ServiceItem[] = [
  {
    title: 'Custom software development',
    description:
      'Tailored systems built from the ground up around your workflows, not around a template.',
  },
  {
    title: 'Web and mobile applications',
    description:
      'Responsive, accessible applications that behave the same on every device and platform.',
  },
  {
    title: 'Cloud architecture and DevOps',
    description:
      'Scalable infrastructure, CI/CD pipelines and the operational practice to run them calmly.',
  },
  {
    title: 'API development and integration',
    description:
      'Robust APIs and clean integrations with the third-party services your platform depends on.',
  },
]

// The first entry is the featured card; it spans two columns on desktop.
const aiServices: ServiceItem[] = [
  {
    title: 'AI agent development',
    description:
      'Autonomous agents grounded in domain ontologies, able to plan, reason and carry out complex tasks with minimal supervision.',
  },
  {
    title: 'RAG applications',
    description:
      'Retrieval-augmented generation over ontology-driven knowledge graphs, so answers stay precise and traceable to your data.',
  },
  {
    title: 'Ontology engineering',
    description:
      'Structured models of the concepts, relationships and rules in your domain, so machines can reason over it with precision.',
  },
  {
    title: 'LLM integration and optimisation',
    description:
      'Model integration, prompt engineering and fine-tuning tuned for your latency, cost and quality targets.',
  },
  {
    title: 'Intelligent automation',
    description:
      'Workflow automation that turns repetitive processes into supervised, self-improving ones.',
  },
]

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const card = (service: ServiceItem, step: number, featured = false) => (
    <motion.article
      key={service.title}
      {...revealWhen(isInView, step)}
      className={`lm-card hoverable${featured ? ' feature md:col-span-2' : ''}`}
    >
      <div className="lm-card-body">
        <h3 style={{ fontSize: featured ? 'var(--text-title)' : 'var(--text-h3)' }}>{service.title}</h3>
        <p style={featured ? { maxWidth: '52ch' } : undefined}>{service.description}</p>
      </div>
    </motion.article>
  )

  return (
    <section id="services" ref={ref} className="lm-section" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <motion.div {...revealWhen(isInView, 0)} className="lm-section-head">
          <h2>
            Full-spectrum technology
            <br />
            <em>expertise.</em>
          </h2>
          <p className="sub">
            Two disciplines, one team. Classic software engineering and the
            agentic layer that sits on top of it.
          </p>
        </motion.div>

        <div style={{ marginTop: 'var(--stack-gap)' }}>
          <motion.h3 {...revealWhen(isInView, 1)} className="text-h3" style={{ marginBottom: 18 }}>
            Software development
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4" style={{ gap: 'var(--grid-gap)' }}>
            {softwareServices.map((s, i) => card(s, 2 + i))}
          </div>
        </div>

        <div style={{ marginTop: 'clamp(40px, 5vw, 64px)' }}>
          <motion.h3 {...revealWhen(isInView, 6)} className="text-h3" style={{ marginBottom: 18 }}>
            Agentic AI
          </motion.h3>
          <div className="grid md:grid-cols-3" style={{ gap: 'var(--grid-gap)' }}>
            {aiServices.map((s, i) => card(s, 7 + i, i === 0))}
          </div>
        </div>

        <motion.div
          {...revealWhen(isInView, 12)}
          className="flex justify-center"
          style={{ marginTop: 'clamp(40px, 5vw, 64px)' }}
        >
          <button className="btn btn-primary" onClick={() => scrollToSection('#contact')}>
            Book a call
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
