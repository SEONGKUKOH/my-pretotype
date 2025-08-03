import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

function Camera() {
  const navigate = useNavigate();

  const handleAnalyze = () => {
    navigate('/result'); // ✅ '/result' 페이지로 이동
  };

  return (
    <div style={{ padding: '20px', paddingBottom: '60px' }}>
      <h1>카메라 촬영 화면</h1>
      <p>사료 또는 간식 라벨을 촬영해주세요.</p>

      {/* 이미지 */}
      <div style={{ marginBottom: '20px' }}>
        <img
          src="/img/camera.png" // ✅ public/img/camera.png
          alt="프로필 이미지"
          style={{
            width: '240px',
            height: '240px',
            borderRadius: '50%',
            objectFit: 'contain',
            backgroundColor: '#eee',
          }}
        />
      </div>

      <button onClick={handleAnalyze}>분석하기</button>
      <BottomNav />
    </div>
  );
}

export default Camera;
