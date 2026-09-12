import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6'
import Logo from './Logo'
import { scrollToSection } from '../motion'

const columns = [
  {
    head: 'Services',
    links: [
      { name: 'Software development', href: '#services' },
      { name: 'AI agents', href: '#services' },
      { name: 'RAG applications', href: '#services' },
      { name: 'Ontology engineering', href: '#services' },
      { name: 'Cloud solutions', href: '#services' },
    ],
  },
  {
    head: 'Company',
    links: [
      { name: 'About', href: '#about' },
      { name: 'Services', href: '#services' },
      { name: 'Why us', href: '#why-us' },
      { name: 'Contact', href: '#contact' },
    ],
  },
]

const socialLinks = [
  { icon: <FaGithub size={15} />, href: '#', label: 'GitHub' },
  { icon: <FaLinkedin size={15} />, href: '#', label: 'LinkedIn' },
  { icon: <FaXTwitter size={15} />, href: '#', label: 'X' },
]

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    scrollToSection(href)
  }

  return (
    <footer className="lm-footer lm-grain">
      <div className="wrap">
        <div className="lm-footer-grid">
          <div>
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="lm-logo gap-2.5"
              aria-label="GradientWorks home"
            >
              <Logo size={30} />
              <span className="font-serif" style={{ fontSize: 22, fontWeight: 560, letterSpacing: 'var(--tracking-display)' }}>
                GradientWorks
              </span>
            </a>
            <div className="lm-footer-tag">Software & agentic AI · Toronto</div>
            <p className="mt-5" style={{ color: 'var(--band-sub)', fontSize: 'var(--text-btn-sm)', lineHeight: 1.6, maxWidth: 360 }}>
              Expert consulting for software development and agentic AI,
              bridging traditional engineering with what is now possible.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.head}>
              <span className="lm-footer-head">{col.head}</span>
              {col.links.map((link) => (
                <a key={link.name} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="link">
                  {link.name}
                </a>
              ))}
            </div>
          ))}

          <div>
            <span className="lm-footer-head">Contact</span>
            <a href="mailto:contact@gradientworks.ca" className="link">contact@gradientworks.ca</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="link">Book a call</a>
          </div>
        </div>

        <div className="lm-footer-base">
          <span>© {currentYear} GradientWorks. All rights reserved</span>
          <span className="flex gap-3.5">
            {socialLinks.map((social) => (
              <a key={social.label} href={social.href} aria-label={social.label} className="lm-icon-btn">
                {social.icon}
              </a>
            ))}
          </span>
          <span>Toronto, ON</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
