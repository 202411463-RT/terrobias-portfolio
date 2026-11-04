import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header style={styles.header}>
      <h2 style={styles.logo}>MyPortfolio</h2>
      <nav style={styles.nav}>
        <NavLink to="/" style={styles.link}>Home</NavLink>
        <NavLink to="/about" style={styles.link}>About</NavLink>
        <NavLink to="/projects" style={styles.link}>Projects</NavLink>
        <NavLink to="/contact" style={styles.link}>Contact</NavLink>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    borderBottom: '1px solid #b8b15b',
    backgroundColor: '#2b2c53'
  },
  logo: { margin: 0 },
  nav: { display: 'flex', gap: '1.5rem' },
  link: { textDecoration: 'none', color: '#e0da85', fontWeight: 'bold' }
};