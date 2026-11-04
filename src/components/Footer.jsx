export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p>&copy; {new Date().getFullYear()} My Portfolio Foundation. All rights reserved.</p>
    </footer>
  );
}

const styles = {
  footer: {
    textAlign: 'center',
    padding: '1rem',
    borderTop: '1px solid #b8b15b',
    marginTop: 'auto',
    backgroundColor: '#2b2c53'
  }
};