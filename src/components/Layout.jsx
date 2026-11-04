import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  return (
    <div style={styles.container}>
      <Header />
      <main style={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  main: {
    flex: 1,
    padding: '2rem'
  }
};