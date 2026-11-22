export default function Projects() {
  const projectList = [
    {
      id: 1,
      title: 'Book A Ride',
      description: 'A simple tracking and booking for trycicle via online payment.',
      image: 'src/assets/taskmanagement.jpg'
    },
    {
      id: 2,
      title: 'Quick XOXO Game!',
      description: 'Take turns placing X's and O's on a 3x3 grid. First to get three in a row wins!.',
      image: 'src/assets/store.jpg'
    },
    {
      id: 3,
      title: 'Inventory Management System of Gordon College',
      description: 'An app that monitor and manage stocks.',
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
