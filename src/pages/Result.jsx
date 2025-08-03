import { useEffect, useState } from 'react';
import BottomNav from '../components/BottomNav';
function Result() {
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem('formData');
    if (stored) {
      setFormData(JSON.parse(stored));
    }
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>분석 결과</h1>

      <button><strong>맞춤형 분석</strong></button>
      <p>
        이 사료는 ‘조단백질 35%’, ‘닭고기’, ‘치즈 분말’이 포함되어 있어요!<br />
        <strong>{formData?.name ?? '강아지'}</strong>는 닭 알러지가 있어 섭취를 권장하지 않아요.<br />
        또한 지방 함량이 높아 다이어트 중에는 주의가 필요합니다.
      </p>

      <button><strong>일반 분석</strong></button>
      <p>
        이 사료는 관절 건강(글루코사민), 장 건강(프락토올리고당) 기능이 있으며,<br />
        조단백질/지방/칼슘 등 기본 수치도 중소형견 성견 기준에 적합합니다.
      </p>




  {/* 추천 사료 리스트 */}
{formData?.name && (
  <div>
    {/* 추천 텍스트 */}
    <div style={{ marginTop: '24px' }}>
      <p><strong>{formData.name}에게 적합한 사료에요!</strong></p>
    </div>

    {/* 🔽 가로 정렬을 위한 flex 래퍼 */}
    <div style={{ display: 'flex', gap: '16px', overflowX: 'auto' }}>
      {[1, 2, 3].map((item, index) => (
        <div key={index} style={{
          minWidth: '200px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '10px',
          border: '1px solid #ddd',
          borderRadius: '8px',
          backgroundColor: '#fff'
        }}>
          <img
            src={`/img/petfood_${index + 1}.png`}
            alt={`사료 ${index + 1}`}
            style={{
              width: '80px',
              height: '80px',
              marginBottom: '8px',
              borderRadius: '8px',
              objectFit: 'contain',
              backgroundColor: '#f3f3f3'
            }}
          />
          <h4 style={{ margin: '0 0 4px 0' }}>사료 추천 {index + 1}</h4>
        </div>
      ))}
    </div>
  </div>
)}



      <BottomNav />

    </div>

    
  );
  

  
}

export default Result;
