function WorkSection() {
  const projects = [
    { id: 1, title: 'Project 1', category: 'Commercial', thumbnail: null },
    { id: 2, title: 'Project 2', category: 'Documentary', thumbnail: null },
    { id: 3, title: 'Project 3', category: 'Music Video', thumbnail: null },
  ]

  return (
    <section id="work" style={styles.section}>
      <div style={styles.wrapper}>
        <h2 style={styles.heading}>Work & Reel</h2>
        <p style={styles.intro}>Selected projects and showreel. Embed Vimeo/YouTube or self-hosted videos.</p>
        <div style={styles.reelBlock}>
          <div style={styles.reelPlaceholder}>Main showreel video embed</div>
        </div>
        <div style={styles.grid}>
          {projects.map((p) => (
            <article key={p.id} style={styles.card}>
              <div style={styles.thumbnail}>Video thumbnail</div>
              <h3 style={styles.cardTitle}>{p.title}</h3>
              <span style={styles.category}>{p.category}</span>
            </article>
          ))}
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
    maxWidth: '1100px',
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
  reelBlock: {
    marginBottom: '3rem',
  },
  reelPlaceholder: {
    aspectRatio: '16/9',
    background: '#eee',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#888',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '1.5rem',
  },
  card: {
    borderRadius: '8px',
    overflow: 'hidden',
    border: '1px solid #eee',
  },
  thumbnail: {
    aspectRatio: '16/9',
    background: '#e5e5e5',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.85rem',
    color: '#888',
  },
  cardTitle: {
    padding: '1rem 1rem 0',
    fontSize: '1.1rem',
  },
  category: {
    display: 'block',
    padding: '0 1rem 1rem',
    fontSize: '0.9rem',
    color: '#666',
  },
}

export default WorkSection
