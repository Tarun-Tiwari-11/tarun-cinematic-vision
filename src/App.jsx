import { useState, useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import WorkCard from './components/WorkCard'
import WorkCard2 from './components/WorkCard2'

function App() {
  const [morphyxWipeOut, setMorphyxWipeOut] = useState(false)
  const [workCardOpen, setWorkCardOpen] = useState(false)
  const [workCard2Open, setWorkCard2Open] = useState(false)
  const [exitBothUp, setExitBothUp] = useState(false)
  const [exitOverlayVisible, setExitOverlayVisible] = useState(false)
  const [exitOverlaySlideUp, setExitOverlaySlideUp] = useState(false)
  const workCard2OpenRef = useRef(workCard2Open)
  workCard2OpenRef.current = workCard2Open
  const card2OpenedAtRef = useRef(0)

  function showExitOverlay() {
    if (workCardOpen) {
      setExitBothUp(true)
      setTimeout(() => {
        setWorkCardOpen(false)
        setWorkCard2Open(false)
        setExitBothUp(false)
      }, 500)
    }
    setExitOverlayVisible(true)
    setExitOverlaySlideUp(true)
  }

  // Scroll down on first card → show second card; scroll up → hide second card; scroll down on card 2 → both slide up and close.
  // Prevent page scroll while work view is open so scrolling up on card 1 doesn’t move the page and make things “vanish”.
  useEffect(() => {
    if (!workCardOpen) {
      setWorkCard2Open(false)
      setExitBothUp(false)
      return
    }
    function onWheel(e) {
      e.preventDefault()
      const card2Open = workCard2OpenRef.current
      if (e.deltaY > 0) {
        if (card2Open) {
          const openDuration = Date.now() - card2OpenedAtRef.current
          if (openDuration < 500) return
          setExitBothUp(true)
          setExitOverlayVisible(true)
          setExitOverlaySlideUp(true)
          setTimeout(() => {
            setWorkCardOpen(false)
            setWorkCard2Open(false)
            setExitBothUp(false)
          }, 500)
        } else {
          card2OpenedAtRef.current = Date.now()
          setWorkCard2Open(true)
        }
      } else if (e.deltaY < 0) {
        setWorkCard2Open(false)
      }
    }
    window.addEventListener('wheel', onWheel, { passive: false, capture: true })
    return () => window.removeEventListener('wheel', onWheel, { capture: true })
  }, [workCardOpen])

  return (
    <>
      <a href="#hero" className="logo-float" style={logoStyles} aria-label="Morphyx Lab" onClick={(e) => { e.preventDefault(); setMorphyxWipeOut(false) }}>
        <img src="/logo.png" alt="Morphyx Lab" style={{ height: '64px', width: 'auto', display: 'block', filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.12)) drop-shadow(0 8px 24px rgba(0,0,0,0.08))' }} />
      </a>
      <Navbar
        onAboutClick={() => setMorphyxWipeOut(true)}
        onHomeClick={() => setMorphyxWipeOut(false)}
        onWorkClick={() => {
          setExitOverlayVisible(false)
          setExitOverlaySlideUp(false)
          setWorkCardOpen(true)
        }}
        onContactClick={() => showExitOverlay()}
      />
      <main>
        <HeroSection wipeOut={morphyxWipeOut} />
      </main>
      <WorkCard
        isOpen={workCardOpen}
        onClose={() => setWorkCardOpen(false)}
        isPaused={workCard2Open}
        exitUp={exitBothUp}
      />
      <WorkCard2 isOpen={workCard2Open} exitUp={exitBothUp} />
      {exitOverlayVisible && (
        <div
          role="presentation"
          style={{
            position: 'fixed',
            left: 0,
            top: 0,
            width: '100vw',
            height: '100vh',
            minWidth: '100%',
            minHeight: '100%',
            background: '#e2e2e2',
            zIndex: 99999,
            transform: exitOverlaySlideUp ? 'translateY(0)' : 'translateY(100%)',
            transition: 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
            cursor: 'pointer',
            pointerEvents: 'auto',
          }}
          onClick={() => {
            setExitOverlaySlideUp(false)
            setTimeout(() => setExitOverlayVisible(false), 500)
          }}
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              setExitOverlaySlideUp(false)
              setTimeout(() => setExitOverlayVisible(false), 500)
            }
          }}
          tabIndex={0}
          aria-label="Close overlay"
        />
      )}
    </>
  )
}

const logoStyles = {
  position: 'fixed',
  top: '1rem',
  left: '1rem',
  zIndex: 101,
  textDecoration: 'none',
}

export default App
