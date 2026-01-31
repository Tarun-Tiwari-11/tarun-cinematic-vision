function Navbar({ onAboutClick, onHomeClick, onWorkClick, onContactClick }) {
  const links = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'work', label: 'Work' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' },
  ]

  function playTing() {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)()
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.connect(gain)
      gain.connect(ctx.destination)
      osc.frequency.value = 1200
      osc.type = 'sine'
      gain.gain.setValueAtTime(0.15, ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12)
      osc.start(ctx.currentTime)
      osc.stop(ctx.currentTime + 0.12)
    } catch (_) {}
  }

  return (
    <header style={styles.header}>
      <div className="navbar-float" style={styles.navBar}>
        <nav style={styles.nav}>
        {links.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className="nav-link"
            style={id === 'hero' || id === 'about' ? styles.linkBlack : styles.link}
            onClick={(e) => {
              if (id === 'about') {
                e.preventDefault()
                playTing()
                onAboutClick?.()
              } else if (id === 'hero') {
                e.preventDefault()
                playTing()
                onHomeClick?.()
              } else if (id === 'work') {
                e.preventDefault()
                playTing()
                onWorkClick?.()
              } else if (id === 'contact') {
                e.preventDefault()
                playTing()
                onContactClick?.()
              } else {
                playTing()
              }
            }}
          >
            {id === 'services' ? (
              <>
                <span style={styles.link}>Servic</span>
                <span style={styles.link}>e</span>
                <span style={styles.link}>s</span>
              </>
            ) : (
              label
            )}
          </a>
        ))}
        </nav>
      </div>
    </header>
  )
}

const styles = {
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '1.7rem',
    zIndex: 100,
  },
  navBar: {
    display: 'flex',
    alignItems: 'center',
    padding: '0.75rem 1.75rem',
    background: 'linear-gradient(160deg, rgba(226,226,226,0.18) 0%, rgba(226,226,226,0.12) 40%, rgba(226,226,226,0.08) 70%, rgba(226,226,226,0.06) 100%)',
    backdropFilter: 'blur(28px) saturate(200%) contrast(1.05)',
    WebkitBackdropFilter: 'blur(28px) saturate(200%) contrast(1.05)',
    boxShadow: 'inset 0 1px 0 rgba(226,226,226,0.35), inset 0 -1px 0 rgba(226,226,226,0.08), 0 4px 14px rgba(0,0,0,0.08), 0 12px 40px rgba(0,0,0,0.06), 0 24px 64px rgba(0,0,0,0.04)',
    border: '1px solid rgba(226,226,226,0.12)',
    borderRadius: '999px',
    width: 'fit-content',
  },
  nav: {
    display: 'flex',
    gap: '1.5rem',
  },
  link: {
    fontFamily: "'Neon Rave', sans-serif",
    color: '#e2e2e2',
    textDecoration: 'none',
    fontSize: '0.95rem',
  },
  linkBlack: {
    fontFamily: "'Neon Rave', sans-serif",
    color: '#000000',
    textDecoration: 'none',
    fontSize: '0.95rem',
  },
  linkBlackFaded: {
    fontFamily: "'Neon Rave', sans-serif",
    color: '#000000',
    textDecoration: 'none',
    fontSize: '0.95rem',
    opacity: 1,
  },
}

export default Navbar
