import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'
import { EASE_SMOOTH, scrollToSection } from '../motion'

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Why us', href: '#why-us' },
  { name: 'Contact', href: '#contact' },
]

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

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    href: string
  ) => {
    e.preventDefault()
    scrollToSection(href)
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.header
      initial={{ transform: 'translateY(-100%)' }}
      animate={{ transform: 'translateY(0%)' }}
      transition={{ duration: 0.4, ease: EASE_SMOOTH }}
      /* .lm-header is transparent over the cream page; .scrolled brings in the
         cream-at-80% material, hairline and blur once the page moves. */
      className={`lm-header ${isScrolled || isMobileMenuOpen ? 'scrolled' : ''}`}
    >
      <div className="wrap lm-header-inner">
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

        <nav className="lm-nav" aria-label="Primary">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} onClick={(e) => handleNavClick(e, item.href)}>
              {item.name}
            </a>
          ))}
        </nav>

        <div className="lm-header-cta">
          <button className="btn btn-primary btn-sm" onClick={(e) => handleNavClick(e, '#contact')}>
            Book a call
          </button>
        </div>

        <button
          ref={toggleRef}
          className={`lm-burger ${isMobileMenuOpen ? 'open' : ''}`}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile menu. The panel slides on a transform rather than animating
          height, so no frame costs a layout pass. The outer div is a clipping
          mask starting below the header bar. Springs, not durations: this is
          the one dismissible surface on the site, so a double-tap has to be
          able to reverse it mid-flight. */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            ref={menuRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: 'spring', bounce: 0, duration: 0.35 }}
            className="absolute inset-x-0 top-full overflow-hidden"
          >
            <motion.div
              initial={{ transform: 'translateY(-100%)' }}
              animate={{ transform: 'translateY(0%)' }}
              exit={{ transform: 'translateY(-100%)' }}
              transition={{ type: 'spring', bounce: 0, duration: 0.35 }}
              className="lm-menu"
            >
              {navItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  initial={{ opacity: 0, transform: 'translateX(-12px)' }}
                  animate={{ opacity: 1, transform: 'translateX(0px)' }}
                  transition={{ duration: 0.18, delay: 0.04 + i * 0.02, ease: EASE_SMOOTH }}
                  className="lm-menu-row"
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.button
                initial={{ opacity: 0, transform: 'translateX(-12px)' }}
                animate={{ opacity: 1, transform: 'translateX(0px)' }}
                transition={{ duration: 0.18, delay: 0.04 + navItems.length * 0.02, ease: EASE_SMOOTH }}
                onClick={(e) => handleNavClick(e, '#contact')}
                className="btn btn-primary w-full justify-center mt-4"
              >
                Book a call
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navigation
