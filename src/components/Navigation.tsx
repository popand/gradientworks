import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import logo from '../assets/logo.png'
import IconSwap from './IconSwap'
import { EASE_OUT } from '../motion'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // While the mobile menu is open: Escape closes it, the page behind it is
  // inert so focus can't wander into it, and the background doesn't scroll.
  useEffect(() => {
    if (!isMobileMenuOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false)
        toggleRef.current?.focus()
      }
    }

    const main = document.querySelector('main')
    const footer = document.querySelector('footer')
    main?.setAttribute('inert', '')
    footer?.setAttribute('inert', '')
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)

    // Move focus into the menu so the next Tab stays inside it.
    menuRef.current?.querySelector<HTMLElement>('a, button')?.focus()

    return () => {
      main?.removeAttribute('inert')
      footer?.removeAttribute('inert')
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isMobileMenuOpen])

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    href: string
  ) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <motion.nav
      initial={{ transform: 'translateY(-100%)' }}
      animate={{ transform: 'translateY(0%)' }}
      transition={{ duration: 0.4, ease: EASE_OUT }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-white/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.04)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, '#home')}
            className="flex items-center gap-2.5"
          >
            <img src={logo} alt="GradientWorks" className="h-8 w-8" />
            <span className="text-lg font-display font-bold text-base-950 tracking-tight">
              GradientWorks
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-sm text-base-500 hover:text-base-950 transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <motion.button
              whileTap={{ scale: 0.96 }}
              onClick={(e) => scrollToSection(e, '#contact')}
              className="px-6 py-2.5 text-sm font-semibold text-white bg-base-950 rounded-full hover:bg-base-800 transition-colors"
            >
              Let's Talk
            </motion.button>
          </div>

          {/* Mobile toggle */}
          <button
            ref={toggleRef}
            className="md:hidden -mr-2 p-2 text-base-700"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <IconSwap swapKey={isMobileMenuOpen ? 'close' : 'open'}>
              {isMobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </IconSwap>
          </button>
        </div>
      </div>

      {/* Mobile menu. The panel slides on a transform rather than animating
          height, so no frame costs a layout pass. The outer div is a clipping
          mask starting below the header bar, so the panel is masked on the way
          out instead of painting over the logo. */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            ref={menuRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: EASE_OUT }}
            className="md:hidden absolute inset-x-0 top-full overflow-hidden"
          >
            <motion.div
              initial={{ transform: 'translateY(-100%)' }}
              animate={{ transform: 'translateY(0%)' }}
              exit={{ transform: 'translateY(-100%)' }}
              transition={{ duration: 0.22, ease: EASE_OUT }}
              className="bg-white border-t border-base-100 shadow-lg shadow-black/5"
            >
            <div className="px-5 py-6 space-y-1">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  initial={{ opacity: 0, transform: 'translateX(-12px)' }}
                  animate={{ opacity: 1, transform: 'translateX(0px)' }}
                  transition={{ duration: 0.18, delay: 0.06 + i * 0.03, ease: EASE_OUT }}
                  className="block px-4 py-3 text-base-600 hover:text-base-950 hover:bg-base-50 rounded-xl transition-colors font-medium"
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.button
                initial={{ opacity: 0, transform: 'translateX(-12px)' }}
                animate={{ opacity: 1, transform: 'translateX(0px)' }}
                transition={{
                  duration: 0.18,
                  delay: 0.06 + navItems.length * 0.03,
                  ease: EASE_OUT,
                }}
                whileTap={{ scale: 0.96 }}
                onClick={(e) => scrollToSection(e, '#contact')}
                className="w-full mt-3 px-6 py-3 text-sm font-semibold text-white bg-base-950 rounded-full"
              >
                Let's Talk
              </motion.button>
            </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navigation
