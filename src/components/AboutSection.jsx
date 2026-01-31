import { useState, useEffect, useRef } from 'react'

function AboutSection() {
  const [inView, setInView] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true)
      },
      { threshold: 0, rootMargin: '0px 0px 0px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} style={styles.section}>
      <h2
        style={{
          ...styles.aboutMe,
          ...styles.slideUpBase,
          ...(inView ? styles.slideUpEnd : styles.slideUpStart),
        }}
      >
        About Me
      </h2>
      <h2
        style={{
          ...styles.whyMe,
          ...styles.slideUpBase,
          ...(inView ? styles.slideUpEnd : styles.slideUpStart),
          transitionDelay: inView ? '0.2s' : '0s',
        }}
      >
        Why Me
      </h2>
      <div style={styles.wrapper}>
        <div style={styles.grid}>
          <div style={styles.text}>
            <p style={styles.paragraph}>
              Your bio and story go here. What drives you as an editor, years of experience,
              and the kind of projects you love.
            </p>
            <p style={styles.paragraph}>
              Tools you use: Premiere Pro, DaVinci Resolve, After Effects, etc.
            </p>
          </div>
          <div style={styles.skills}>
            <h3 style={styles.skillsTitle}>Skills / Specialties</h3>
            <ul style={styles.list}>
              <li style={styles.listItem}>Narrative editing</li>
              <li style={styles.listItem}>Color grading</li>
              <li style={styles.listItem}>Motion graphics</li>
              <li style={styles.listItem}>Commercial & ads</li>
              <li style={styles.listItem}>Documentary</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

const styles = {
  section: {
    position: 'relative',
    padding: '6rem 2rem 6rem',
    background: '#f8f8f8',
    minHeight: '80vh',
  },
  slideUpBase: {
    transition: 'transform 0.8s ease-out, opacity 0.8s ease-out',
  },
  slideUpStart: {
    transform: 'translateY(80px)',
    opacity: 0,
  },
  slideUpEnd: {
    transform: 'translateY(0)',
    opacity: 1,
  },
  aboutMe: {
    position: 'absolute',
    top: '2rem',
    left: '2rem',
    fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
    fontWeight: 700,
    color: '#000000',
    margin: 0,
    zIndex: 1,
  },
  whyMe: {
    position: 'absolute',
    bottom: '2rem',
    right: '2rem',
    fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
    fontWeight: 700,
    color: '#000000',
    margin: 0,
    zIndex: 1,
  },
  wrapper: {
    maxWidth: '900px',
    margin: '0 auto',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '3rem',
  },
  paragraph: {
    marginBottom: '1rem',
    color: '#444',
  },
  skillsTitle: {
    fontSize: '1.1rem',
    marginBottom: '0.75rem',
  },
  list: {
    listStyle: 'none',
  },
  listItem: {
    padding: '0.25rem 0',
    color: '#555',
  },
}

export default AboutSection
