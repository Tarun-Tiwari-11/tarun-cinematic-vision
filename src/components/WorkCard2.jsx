import { useState, useEffect, useRef } from 'react'

// ========== CHANGE VIDEO LINKS HERE (16:9 videos) ==========
// Replace each ID with your Vimeo video ID (the number from the URL).
// Example: vimeo.com/123456789 → use '123456789'
const VIMEO_VIDEO_IDS_16_9 = [
  '11604829s27',   // Video top-left  — from vimeo.com/1160482927
  '11604828s61',   // Video bottom-right — from vimeo.com/1160482861
]

function WorkCard2({ isOpen, exitUp }) {
  const [entered, setEntered] = useState(false)
  const iframeTopRef = useRef(null)
  const iframeBottomRef = useRef(null)
  const playersRef = useRef([])
  const currentIndexRef = useRef(0)

  useEffect(() => {
    if (isOpen) {
      setEntered(false)
      const t = setTimeout(() => setEntered(true), 50)
      return () => clearTimeout(t)
    }
  }, [isOpen])

  // Pause videos when card closes
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
      const iframes = [iframeTopRef.current, iframeBottomRef.current]
      if (iframes.some((el) => !el)) return

      if (typeof window.Vimeo === 'undefined') return
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
        currentIndexRef.current = (currentIndexRef.current + 1) % 2
        playNext(currentIndexRef.current)
      }

      players.forEach((p) => {
        try { p.on('ended', onEnded) } catch (_) {}
      })
      playNext(0)
    }

    const t = setTimeout(() => {
      if (typeof window.Vimeo !== 'undefined') setupPlayers()
    }, 200)
    return () => {
      cancelled = true
      clearTimeout(t)
    }
  }, [isOpen])

  if (!isOpen) return null

  const cardTransform = exitUp ? 'translateY(-100%)' : (entered ? 'translateY(0)' : 'translateY(100%)')

  return (
    <div
      style={{
        ...styles.card,
        transform: cardTransform,
        transition: 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Work reel 2"
    >
      {/* Video 1 — top left; change link in VIMEO_VIDEO_IDS_16_9[0] at top of file */}
      <div style={styles.slotTopLeft}>
        <iframe
          ref={iframeTopRef}
          src={`https://player.vimeo.com/video/${VIMEO_VIDEO_IDS_16_9[0]}?api=1`}
          style={styles.iframe}
          title="Work video top left"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>
      {/* Video 2 — bottom right; change link in VIMEO_VIDEO_IDS_16_9[1] at top of file */}
      <div style={styles.slotBottomRight}>
        <iframe
          ref={iframeBottomRef}
          src={`https://player.vimeo.com/video/${VIMEO_VIDEO_IDS_16_9[1]}?api=1`}
          style={styles.iframe}
          title="Work video bottom right"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  )
}

const styles = {
  card: {
    position: 'fixed',
    left: '6%',
    right: '6%',
    top: '6%',
    bottom: '6%',
    background: '#e2e2e2',
    borderRadius: '28px',
    boxShadow: '0 40px 120px rgba(0,0,0,0.25), 0 20px 60px rgba(0,0,0,0.15)',
    zIndex: 1002,
    overflow: 'hidden',
    transition: 'transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)',
  },
  slotTopLeft: {
    position: 'absolute',
    left: '1.5rem',
    top: '1.5rem',
    width: '70%',
    maxWidth: '600px',
    aspectRatio: '16 / 9',
    borderRadius: '12px',
    overflow: 'hidden',
    background: '#000',
  },
  slotBottomRight: {
    position: 'absolute',
    right: '1.5rem',
    bottom: '1.5rem',
    width: '70%',
    maxWidth: '600px',
    aspectRatio: '16 / 9',
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

export default WorkCard2
