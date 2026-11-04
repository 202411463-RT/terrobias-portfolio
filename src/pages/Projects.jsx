export default function Projects() {
  const projectList = [
    {
      id: 1,
      title: 'Task Management App',
      description: 'A simple todo list app built with React and LocalStorage.',
      image: 'src/assets/taskmanagement.jpg'
    },
    {
      id: 2,
      title: 'E-commerce UI Draft',
      description: 'A basic store layout showcasing product grids and responsive design.',
      image: 'src/assets/store.jpg'
    },
    {
      id: 3,
      title: 'Weather Forecast App',
      description: 'An app that fetches live weather updates from an external API.',
      image: 'src/assets/weather.jpg'
    }
  ];

  return (
    <section>
      <h1>PROJECTS</h1>
      <div style={styles.grid}>
        {projectList.map((project) => (
          <div key={project.id} style={styles.card}>
            <img src={project.image} alt={project.title} style={styles.img} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1.5rem',
    marginTop: '1rem'
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '1rem',
    textAlign: 'center'
  },
  img: {
    width: '100%',
    height: '120px',
    objectFit: 'cover',
    borderRadius: '4px'
  }
};