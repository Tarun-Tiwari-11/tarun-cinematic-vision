import React from 'react'
import { LenisProvider } from './contexts/LenisContext'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import WorkSection from './components/WorkSection'
import ContactSection from './components/ContactSection'

function App() {
  return (
    <LenisProvider>
      {/* Fixed Navigation Bar */}
      <Navbar />

      {/* Main Content - Single Page Scroll */}
      <div className="w-full">
        {/* Section 1: Hero */}
        <section id="home" className="section-container">
          <HeroSection />
        </section>

        {/* Section 2: About */}
        <section id="about" className="section-container">
          <AboutSection />
        </section>

        {/* Section 3: My Work */}
        <section id="work" className="section-container">
          <WorkSection />
        </section>

        {/* Section 4: Contact */}
        <section id="contact" className="section-container">
          <ContactSection />
        </section>
      </div>
    </LenisProvider>
  )
}

export default App
