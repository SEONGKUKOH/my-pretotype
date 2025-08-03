import { Link, useLocation } from 'react-router-dom';

function BottomNav() {
  const location = useLocation();
  const current = location.pathname;

  const linkStyle = (path) => ({
    flex: 1,
    textAlign: 'center',
    padding: '10px',
    fontWeight: current === path ? 'bold' : 'normal',
    color: current === path ? '#007bff' : '#333',
    textDecoration: 'none',
  });

  return (
    <nav style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      display: 'flex',
      background: '#eee',
      borderTop: '1px solid #ccc',
    }}>
      <Link to="/home" style={linkStyle('/home')}>홈</Link>
      <Link to="/camera" style={linkStyle('/camera')}>카메라</Link>
    </nav>
  );
}

export default BottomNav;
