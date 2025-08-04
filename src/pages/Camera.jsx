import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

function Camera() {
  const navigate = useNavigate();

  const handleAnalyze = () => {
    navigate('/result'); // ✅ '/result' 페이지로 이동
  };

  return (
    <div style={{
      padding: '20px',
      paddingBottom: '80px',
      maxWidth: '100%',
      boxSizing: 'border-box',
      overflowX: 'hidden'
    }}>
      <div style={{
        maxWidth: '480px',
        margin: '0 auto',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px'
      }}>
        <h2 style={{ fontSize: '22px' }}>카메라 촬영</h2>
        <p style={{ fontSize: '20px', color: '#555' }}>사료 또는 간식 라벨을 촬영해주세요.</p>

        <img
          src="/img/camera.png"
          alt="카메라"
          style={{
            width: '250px',
            height: '250px',
            objectFit: 'contain',
            borderRadius: '12px',
            backgroundColor: '#f0f0f0'
          }}
        />

        <button
          onClick={handleAnalyze}
          style={{
            padding: '12px 20px',
            fontSize: '16px',
            backgroundColor: '#2196F3',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            marginTop: '10px',
            width: '250px'
          }}
        >
          분석하기
        </button>
      </div>

      <BottomNav />
    </div>
  );
}

export default Camera;
