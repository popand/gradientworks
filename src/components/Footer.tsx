import { motion } from 'framer-motion'
import { HiMail } from 'react-icons/hi'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: 'Software Development', href: '#services' },
      { name: 'AI Agents', href: '#services' },
      { name: 'RAG Applications', href: '#services' },
      { name: 'Cloud Solutions', href: '#services' }
    ],
    company: [
      { name: 'About', href: '#about' },
      { name: 'Services', href: '#services' },
      { name: 'Why Us', href: '#why-us' },
      { name: 'Contact', href: '#contact' }
    ]
  }

  const socialLinks = [
    { icon: <FaGithub size={24} />, href: '#', label: 'GitHub' },
    { icon: <FaLinkedin size={24} />, href: '#', label: 'LinkedIn' },
    { icon: <FaTwitter size={24} />, href: '#', label: 'Twitter' }
  ]

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-4 text-gradient"
            >
              GradientWorks
            </motion.h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Expert consulting services for software development and agentic AI solutions.
              Bridging traditional engineering with cutting-edge AI innovation.
            </p>
            <div className="space-y-2">
              <a
                href="mailto:contact@gradientworks.ca"
                className="flex items-center text-gray-400 hover:text-white transition-colors"
              >
                <HiMail className="mr-2" size={18} />
                contact@gradientworks.ca
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} GradientWorks. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
