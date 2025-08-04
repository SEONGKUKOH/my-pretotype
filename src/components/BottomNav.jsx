import { Link, useLocation } from 'react-router-dom';

function BottomNav() {
  const location = useLocation();
  const current = location.pathname;

  const linkStyle = (path) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1, // ✅ 각각의 버튼이 가로 너비를 동일하게 나눔
    height: '100%',
    fontSize: '24px',
    fontWeight: current === path ? 'bold' : 'normal',
    color: current === path ? '#fff' : '#333',
    backgroundColor: current === path ? '#007bff' : '#f5f5f5',
    textDecoration: 'none',
    transition: 'all 0.2s ease-in-out',
    borderRight: path === '/home' ? '1px solid #ccc' : 'none', // ✅ 구분선 (선택)
  });

  return (
    <nav style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      display: 'flex',
      background: '#ddd',
      borderTop: '1px solid #ccc',
      height: '10vh',
    }}>
      <Link to="/home" style={linkStyle('/home')}>홈</Link>
      <Link to="/camera" style={linkStyle('/camera')}>카메라</Link>
    </nav>
  );
}

export default BottomNav;
