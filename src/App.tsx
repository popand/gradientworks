import { MotionConfig } from 'framer-motion'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    // reducedMotion="user" honours the OS setting: transforms are dropped and
    // only opacity animates, so scroll-revealed content still becomes visible.
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Services />
          <WhyUs />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  )
}

export default App
