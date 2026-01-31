function ServicesSection() {
  const services = [
    { title: 'Video Editing', desc: 'Narrative, commercial, and content editing.' },
    { title: 'Color Grading', desc: 'Look development and final color.' },
    { title: 'Motion Graphics', desc: 'Titles, lower thirds, and animated elements.' },
    { title: 'Reels & Sizzles', desc: 'Promos and highlight reels for pitches.' },
  ]

  return (
    <section id="services" style={styles.section}>
      <div style={styles.wrapper}>
        <h2 style={styles.heading}>Services</h2>
        <p style={styles.intro}>What I offer for clients and productions.</p>
        <div style={styles.grid}>
          {services.map((s, i) => (
            <div key={i} style={styles.card}>
              <h3 style={styles.cardTitle}>{s.title}</h3>
              <p style={styles.cardDesc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const styles = {
  section: {
    padding: '5rem 2rem',
    background: '#f8f8f8',
  },
  wrapper: {
    maxWidth: '900px',
    margin: '0 auto',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '0.5rem',
  },
  intro: {
    color: '#555',
    marginBottom: '2rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '1.5rem',
  },
  card: {
    padding: '1.5rem',
    background: '#e2e2e2',
    borderRadius: '8px',
    border: '1px solid #eee',
  },
  cardTitle: {
    fontSize: '1.1rem',
    marginBottom: '0.5rem',
  },
  cardDesc: {
    fontSize: '0.9rem',
    color: '#666',
  },
}

export default ServicesSection
