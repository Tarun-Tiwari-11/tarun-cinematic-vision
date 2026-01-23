import React, { createContext, useContext, useEffect, useRef, useState } from 'react'
import Lenis from '@studio-freight/lenis'

const LenisContext = createContext(null)

export const useLenis = () => {
  const context = useContext(LenisContext)
  return context
}

export const LenisProvider = ({ children }) => {
  const [lenis, setLenis] = useState(null)
  const rafIdRef = useRef(null)

  useEffect(() => {
    // Initialize Lenis with free smooth scrolling (no snapping)
    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    setLenis(lenisInstance)

    // Sync Lenis with requestAnimationFrame
    function raf(time) {
      lenisInstance.raf(time)
      rafIdRef.current = requestAnimationFrame(raf)
    }

    rafIdRef.current = requestAnimationFrame(raf)

    // Cleanup
    return () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current)
      }
      lenisInstance.destroy()
    }
  }, [])

  return (
    <LenisContext.Provider value={lenis}>
      {children}
    </LenisContext.Provider>
  )
}
