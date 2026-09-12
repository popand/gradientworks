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

  const card = (service: ServiceItem, prefix: string, index: number, step: number) => (
    <motion.article key={service.title} {...revealWhen(isInView, step)} className="lm-card hoverable">
      <div className="lm-card-body">
        <span className="step-num">
          {String(index + 1).padStart(2, '0')} · {prefix}
        </span>
        <h3 style={{ fontSize: 'var(--text-h3)' }}>{service.title}</h3>
        <p>{service.description}</p>
      </div>
    </motion.article>
  )

  return (
    <section id="services" ref={ref} className="lm-section" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <motion.div {...revealWhen(isInView, 0)} className="lm-section-head">
          <div className="eyebrow">What we do</div>
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
          <motion.div {...revealWhen(isInView, 1)} className="eyebrow left" style={{ margin: '0 0 18px' }}>
            Software development
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4" style={{ gap: 'var(--grid-gap)' }}>
            {softwareServices.map((s, i) => card(s, 'Software', i, 2 + i))}
          </div>
        </div>

        <div style={{ marginTop: 'clamp(40px, 5vw, 64px)' }}>
          <motion.div {...revealWhen(isInView, 6)} className="eyebrow left" style={{ margin: '0 0 18px' }}>
            Agentic AI and advanced capabilities
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3" style={{ gap: 'var(--grid-gap)' }}>
            {aiServices.map((s, i) => card(s, 'Agentic', i, 7 + i))}
          </div>
        </div>

        <motion.div
          {...revealWhen(isInView, 12)}
          className="flex flex-col items-center text-center"
          style={{ marginTop: 'clamp(40px, 5vw, 64px)' }}
        >
          <button className="btn btn-primary" onClick={() => scrollToSection('#contact')}>
            Start a conversation
          </button>
          <span className="micro mt-5">Scoped in one call · No retainer required</span>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
