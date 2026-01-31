function HeroSection({ wipeOut }) {
  return (
    <section id="hero" style={styles.section}>
      <div style={styles.leftOverlay} aria-hidden="true" />
      <div style={styles.leftOverlayCopy} aria-hidden="true" />
      <div
        style={{
          ...styles.aboutMeBlock,
          transform: wipeOut ? 'translateY(0)' : 'translateY(80px)',
          opacity: wipeOut ? 1 : 0,
        }}
      >
        <h2 style={styles.aboutMe}>About Me</h2>
        <p style={styles.aboutMeText}>
          Morphyx Lab is a visual playground where ideas take form through light and motion. I explore dark aesthetics, controlled studio environments, and cinematic storytelling to create visuals that leave a lasting impression.
        </p>
      </div>
      <div
        style={{
          ...styles.whyMeBlock,
          transform: wipeOut ? 'translateY(0)' : 'translateY(80px)',
          opacity: wipeOut ? 1 : 0,
        }}
      >
        <h2 style={styles.whyMe}>Why Me?</h2>
        <p style={styles.whyMeText}>
          Morphyx Lab exists for brands that want visuals with character. We explore darkness, contrast, and motion to create work that feels deliberate and unforgettable.
        </p>
      </div>
      <div style={styles.content}>
        <div
          style={{
            ...styles.titleWrap,
            transform: wipeOut ? 'translateY(100px)' : 'translateY(0)',
            opacity: wipeOut ? 0 : 1,
          }}
        >
          <h1 style={styles.title} aria-label="MORPHYX">
            <span style={styles.titleLetter}>M</span>
            <span style={styles.titleLetterWhite}>O</span>
            <span style={styles.titleLetterWhite}>R</span>
            <span style={styles.titleLetterWhite}>P</span>
            <span style={styles.titleLetterWhite}>H</span>
            <span style={styles.titleLetterWhite}>Y</span>
            <span style={styles.titleLetter}>X</span>
          </h1>
        </div>
      </div>
    </section>
  )
}

const styles = {
  section: {
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    backgroundImage: 'url(/hero-bg.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    overflow: 'hidden',
  },
  leftOverlay: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: '48%',
    background: '#e2e2e2',
    pointerEvents: 'none',
    zIndex: 0,
    transform: 'skewX(-18deg) translateX(-28%)',
    transformOrigin: 'left center',
  },
  leftOverlayCopy: {
    position: 'absolute',
    left: '85%',
    top: 0,
    bottom: 0,
    width: '48%',
    background: '#e2e2e2',
    pointerEvents: 'none',
    zIndex: 0,
    transform: 'skewX(-18deg) translateX(-18%)',
    transformOrigin: 'left center',
  },
  content: {
    maxWidth: '600px',
    zIndex: 1,
    textAlign: 'center',
  },
  titleWrap: {
    display: 'inline-block',
    transition: 'transform 0.6s ease-in-out, opacity 0.6s ease-in-out',
  },
  title: {
    fontFamily: "'RacingEngine', sans-serif",
    fontSize: 'clamp(2.75rem, 9vw, 6rem)',
    fontWeight: 700,
    lineHeight: 1.1,
    letterSpacing: '0.02em',
    margin: 0,
  },
  titleLetter: {
    color: '#000000',
  },
  titleLetterWhite: {
    color: '#e2e2e2',
  },
  // ---------- POSITION: "About Me" heading + paragraph (change these to move the whole block) ----------
  aboutMeBlock: {
    position: 'absolute',
    left: '5%',   // distance from left edge — try: '5%', '10%', '2rem'
    top: '15%',   // distance from top edge — try: '15%', '20%', '3rem'
    zIndex: 1,
    maxWidth: '340px',
    transition: 'transform 0.6s ease-in-out, opacity 0.6s ease-in-out',
  },
  aboutMe: {
    margin: 0,
    fontFamily: "'MoonTime', sans-serif",
    fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
    fontWeight: 700,
    color: '#000000',
  },
  aboutMeText: {
    margin: '1rem 0 0',
    fontFamily: "'Neon Rave', sans-serif",
    fontSize: 'clamp(0.875rem, 2vw, 1rem)',
    lineHeight: 1.65,
    color: '#000000',
    textAlign: 'justify',
  },
  // ---------- POSITION: "Why Me?" heading + paragraph (change these to move the whole block) ----------
  whyMeBlock: {
    position: 'absolute',
    bottom: '40%',  // distance from bottom edge — try: '40%', '30%', '4rem'
    right: '15%',   // distance from right edge — try: '15%', '10%', '2rem'
    zIndex: 1,
    maxWidth: '340px',
    textAlign: 'right',
    transition: 'transform 0.6s ease-in-out, opacity 0.6s ease-in-out',
  },
  whyMe: {
    margin: 0,
    fontFamily: "'MoonTime', sans-serif",
    fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
    fontWeight: 700,
    color: '#000000',
  },
  whyMeText: {
    margin: '1rem 0 0',
    fontFamily: "'Neon Rave', sans-serif",
    fontSize: 'clamp(0.875rem, 2vw, 1rem)',
    lineHeight: 1.65,
    color: '#000000',
    textAlign: 'justify',
  },
}

export default HeroSection
