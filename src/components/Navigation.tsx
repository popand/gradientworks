import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import logo from '../assets/logo.png'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'glass-nav' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18 md:h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => scrollToSection(e, '#home')}
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <img src={logo} alt="GradientWorks" className="h-9 w-9 md:h-10 md:w-10" />
            <span className="text-xl font-display font-bold text-gradient tracking-tight">
              GradientWorks
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="relative px-4 py-2 text-sm font-medium text-base-500 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5"
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={(e) => scrollToSection(e, '#contact')}
              className="ml-4 px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-primary-600 to-accent-600 rounded-lg hover:from-primary-500 hover:to-accent-500 transition-all duration-200 shadow-lg shadow-primary-500/20"
            >
              Let's Talk
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-base-500 hover:text-white transition-colors p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden glass-nav overflow-hidden"
          >
            <div className="px-5 py-6 space-y-1">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="block px-4 py-3 text-base-500 hover:text-white hover:bg-white/5 rounded-lg transition-all font-medium"
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
                onClick={(e) => scrollToSection(e, '#contact')}
                className="w-full mt-4 px-5 py-3 text-sm font-semibold text-white bg-gradient-to-r from-primary-600 to-accent-600 rounded-lg"
              >
                Let's Talk
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navigation
