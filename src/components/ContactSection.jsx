function ContactSection() {
  return (
    <section id="contact" style={styles.section}>
      <div style={styles.wrapper}>
        <h2 style={styles.heading}>Contact</h2>
        <p style={styles.intro}>Let's work together. Drop a line for rates and availability.</p>
        <div style={styles.links}>
          <a href="mailto:hello@example.com" style={styles.link}>Email</a>
          <a href="#" style={styles.link}>LinkedIn</a>
          <a href="#" style={styles.link}>Vimeo</a>
          <a href="#" style={styles.link}>Instagram</a>
        </div>
      </div>
    </section>
  )
}

const styles = {
  section: {
    padding: '5rem 2rem',
  },
  wrapper: {
    maxWidth: '600px',
    margin: '0 auto',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '0.5rem',
  },
  intro: {
    color: '#555',
    marginBottom: '2rem',
  },
  links: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '1.5rem',
  },
  link: {
    color: '#000000',
    textDecoration: 'none',
    fontWeight: 600,
    padding: '0.5rem 0',
    borderBottom: '2px solid transparent',
  },
}

export default ContactSection
