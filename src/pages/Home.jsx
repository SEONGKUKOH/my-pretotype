import { useEffect, useState } from 'react';
import BottomNav from '../components/BottomNav';

function Home() {
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem('formData');
    if (stored) {
      setFormData(JSON.parse(stored));
    }
  }, []);

  return (
    <div style={{ padding: '20px', paddingBottom: '60px' }}>
      <h1>홈 화면</h1>

      {/* 프로필 이미지 */}
      <div style={{ marginBottom: '20px' }}>
        <img
          src="/img/happy.png"
          alt="프로필 이미지"
          style={{
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            objectFit: 'contain',
            backgroundColor: '#eee',
          }}
        />
      </div>

 

      {/* 사용자 정보 */}
      {formData ? (
        <div>
          <p><strong>이름:</strong> {formData.name}</p>
          <p><strong>성별:</strong> {formData.gender}</p>
          <p><strong>견종:</strong> {formData.breed}</p>
          <p><strong>체중:</strong> {formData.weight}kg</p>
          <p><strong>중성화 여부:</strong> {formData.neutered}</p>
        </div>
      ) : (
        <p>입력 정보가 없습니다.</p>
      )}

  

      {/* 추천 사료 리스트 */}
      {formData?.name && (
        <div>
         {/* 추천 텍스트 */}
      {formData?.name && (
        <div style={{ marginTop: '24px' }}>
          <p><strong>{formData.name}에게 추천되는 사료에요!</strong></p>
        </div>
      )}
          {[1, 2, 3].map((item, index) => (
            <div key={index} style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '16px',
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '8px'
            }}>
              <img
                src={`/img/petfood_${index + 1}.png`}  // ✅ public/img/ 아래에 위치해야 함
                alt={`사료 ${index + 1}`}
                style={{
                  width: '80px',
                  height: '80px',
                  marginRight: '16px',
                  borderRadius: '8px',
                  objectFit: 'contain',
                  backgroundColor: '#f3f3f3'
                }}
              />
              <div>
                <h4 style={{ margin: '0 0 4px 0' }}>사료 추천 {index + 1}</h4>
                <p style={{ margin: 0, fontSize: '14px', color: '#555' }}>
                  {formData.name}에게 딱 맞는 고단백 저알러지 사료입니다.
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      <BottomNav />
    </div>
  );
}

export default Home;
