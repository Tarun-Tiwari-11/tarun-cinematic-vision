import { useState, useEffect, useRef } from 'react'

// ========== CHANGE VIDEO LINKS HERE ==========
// Replace each ID with your Vimeo video ID (the number from the URL).
// Example: vimeo.com/123456789 → use '123456789'
// Leave as placeholder IDs until you add your links.
const VIMEO_VIDEO_IDS = [
  '1160482g718',   // Video 1 (left)  — from vimeo.com/1160482718
  '1160483h052',   // Video 2 (center) — from vimeo.com/1160483052
  '1160482h770',   // Video 3 (right)  — from vimeo.com/1160482770
]

function WorkCard({ isOpen, onClose, isPaused, exitUp }) {
  const [entered, setEntered] = useState(false)
  const iframe1Ref = useRef(null)
  const iframe2Ref = useRef(null)
  const iframe3Ref = useRef(null)
  const playersRef = useRef([])
  const currentIndexRef = useRef(0)

  useEffect(() => {
    if (isOpen) {
      setEntered(false)
      const t = setTimeout(() => setEntered(true), 50)
      return () => clearTimeout(t)
    }
  }, [isOpen])

  // Pause all videos when card closes; set up sequential play when card opens
  useEffect(() => {
    if (!isOpen) {
      playersRef.current.forEach((p) => {
        try { p?.pause() } catch (_) {}
      })
      playersRef.current = []
      return
    }

    let cancelled = false

    function setupPlayers() {
      if (cancelled) return
      const iframes = [iframe1Ref.current, iframe2Ref.current, iframe3Ref.current]
      if (iframes.some((el) => !el)) return

      const players = iframes.map((el) => new window.Vimeo.Player(el))
      playersRef.current = players
      currentIndexRef.current = 0

      const playNext = (index) => {
        players.forEach((p, i) => {
          try { if (i !== index) p.pause() } catch (_) {}
        })
        try { players[index].play() } catch (_) {}
      }

      const onEnded = () => {
        if (cancelled) return
        currentIndexRef.current = (currentIndexRef.current + 1) % 3
        playNext(currentIndexRef.current)
      }

      players.forEach((p) => {
        try { p.on('ended', onEnded) } catch (_) {}
      })
      playNext(0)
    }

    if (typeof window.Vimeo === 'undefined') {
      const s = document.createElement('script')
      s.src = 'https://player.vimeo.com/api/player.js'
      s.onload = () => setTimeout(setupPlayers, 100)
      document.body.appendChild(s)
      return () => {
        cancelled = true
      }
    } else {
      const t = setTimeout(setupPlayers, 150)
      return () => {
        cancelled = true
        clearTimeout(t)
      }
    }
  }, [isOpen])

  // When second card shows: pause first card. When second card closes: resume from current video.
  useEffect(() => {
    if (!isOpen || !playersRef.current.length) return
    if (isPaused) {
      playersRef.current.forEach((p) => {
        try { p?.pause() } catch (_) {}
      })
    } else {
      const idx = currentIndexRef.current
      try { playersRef.current[idx]?.play() } catch (_) {}
    }
  }, [isOpen, isPaused])

  function handleBackdropClick() {
    setEntered(false)
    playersRef.current.forEach((p) => {
      try { p?.pause() } catch (_) {}
    })
    setTimeout(onClose, 400)
  }

  if (!isOpen) return null

  const cardTransform = exitUp ? 'translateY(-100%)' : (entered ? 'translateY(0)' : 'translateY(100%)')
  const backdropTransform = exitUp ? 'translateY(-100%)' : 'translateY(0)'

  return (
    <>
      <div
        style={{
          ...styles.backdrop,
          transform: backdropTransform,
          transition: 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
        onClick={handleBackdropClick}
        aria-hidden="true"
      />
      <div
        style={{
          ...styles.card,
          transform: cardTransform,
        }}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Work"
      >
        <div style={styles.videoRow}>
          {/* Video 1 — change link in VIMEO_VIDEO_IDS[0] at top of file */}
          <div style={styles.videoSlot}>
            <iframe
              ref={iframe1Ref}
              src={`https://player.vimeo.com/video/${VIMEO_VIDEO_IDS[0]}?api=1`}
              style={styles.iframe}
              title="Work video 1"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
          {/* Video 2 — change link in VIMEO_VIDEO_IDS[1] at top of file */}
          <div style={styles.videoSlot}>
            <iframe
              ref={iframe2Ref}
              src={`https://player.vimeo.com/video/${VIMEO_VIDEO_IDS[1]}?api=1`}
              style={styles.iframe}
              title="Work video 2"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
          {/* Video 3 — change link in VIMEO_VIDEO_IDS[2] at top of file */}
          <div style={styles.videoSlot}>
            <iframe
              ref={iframe3Ref}
              src={`https://player.vimeo.com/video/${VIMEO_VIDEO_IDS[2]}?api=1`}
              style={styles.iframe}
              title="Work video 3"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </>
  )
}

const styles = {
  backdrop: {
    position: 'fixed',
    inset: 0,
    background: 'rgba(0,0,0,0.45)',
    zIndex: 1000,
    cursor: 'pointer',
  },
  card: {
    position: 'fixed',
    left: '6%',
    right: '6%',
    top: '6%',
    bottom: '6%',
    background: '#e2e2e2',
    borderRadius: '28px',
    boxShadow: '0 40px 120px rgba(0,0,0,0.25), 0 20px 60px rgba(0,0,0,0.15)',
    zIndex: 1001,
    overflow: 'hidden',
    transition: 'transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1.5rem',
  },
  videoRow: {
    display: 'flex',
    gap: '1.5rem',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    maxHeight: '100%',
  },
  videoSlot: {
    flex: '1 1 0',
    maxWidth: 'calc((100% - 3rem) / 3)',
    aspectRatio: '9 / 16',
    borderRadius: '12px',
    overflow: 'hidden',
    background: '#000',
  },
  iframe: {
    width: '100%',
    height: '100%',
    border: 'none',
  },
}

export default WorkCard
