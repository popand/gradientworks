import { HiMail } from 'react-icons/hi'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import logo from '../assets/logo.png'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: 'Software Development', href: '#services' },
      { name: 'AI Agents', href: '#services' },
      { name: 'RAG Applications', href: '#services' },
      { name: 'Cloud Solutions', href: '#services' },
    ],
    company: [
      { name: 'About', href: '#about' },
      { name: 'Services', href: '#services' },
      { name: 'Why Us', href: '#why-us' },
      { name: 'Contact', href: '#contact' },
    ],
  }

  const socialLinks = [
    { icon: <FaGithub size={18} />, href: '#', label: 'GitHub' },
    { icon: <FaLinkedin size={18} />, href: '#', label: 'LinkedIn' },
    { icon: <FaTwitter size={18} />, href: '#', label: 'Twitter' },
  ]

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative border-t border-white/5">
      {/* Gradient line at top */}
      <div className="line-gradient" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-14">
          {/* Brand */}
          <div className="md:col-span-5">
            <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="inline-flex items-center gap-2.5 mb-5">
              <img src={logo} alt="GradientWorks" className="h-8 w-8" />
              <span className="text-lg font-display font-bold text-gradient tracking-tight">
                GradientWorks
              </span>
            </a>
            <p className="text-base-600 text-sm leading-relaxed mb-5 max-w-sm">
              Expert consulting services for software development and agentic AI solutions.
              Bridging traditional engineering with cutting-edge AI innovation.
            </p>
            <a
              href="mailto:contact@gradientworks.ca"
              className="inline-flex items-center gap-2 text-sm text-base-500 hover:text-primary-400 transition-colors"
            >
              <HiMail size={16} />
              contact@gradientworks.ca
            </a>
          </div>

          {/* Services Links */}
          <div className="md:col-span-3 md:col-start-7">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-base-500 mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-sm text-base-600 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-base-500 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-sm text-base-600 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-base-700">
            &copy; {currentYear} GradientWorks. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-8 h-8 rounded-lg bg-white/4 border border-white/6 flex items-center justify-center text-base-600 hover:text-white hover:bg-white/8 transition-all duration-200"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
