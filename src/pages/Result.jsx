import { useEffect, useState } from 'react';
import BottomNav from '../components/BottomNav';
function Result() {
  const [formData, setFormData] = useState(null);
const [food] = useState(['인섹트업', '로얄캐닌', '나우사료']); // ✅ 배열로 선언

  useEffect(() => {
    const stored = localStorage.getItem('formData');
    if (stored) {
      setFormData(JSON.parse(stored));
    }
  }, []);

  return (
  <div style={{ padding: '20px', paddingBottom: '80px', maxWidth: '480px', margin: '0 auto' }}>
  <h2 style={{ fontSize: '30px', textAlign: 'center' }}>분석 결과</h2>

  <button style={{ padding: '10px', marginTop: '12px', width: '100%', borderRadius: '8px', backgroundColor: '#f1f1f1' }}>
    <strong style={{ fontSize: '30px', textAlign: 'center' }}>맞춤형 분석</strong>
  </button>
  <p style={{ fontSize: '14px', lineHeight: '1.6' }}>
    이 사료는 ‘조단백질 35%’, ‘닭고기’, ‘치즈 분말’이 포함되어 있어요.<br />
    <strong>{formData?.name ?? '강아지'}</strong>는 닭 알러지가 있어 섭취를 권장하지 않아요.<br />
    또한 지방 함량이 높아 다이어트 중에는 주의가 필요합니다.
  </p>

  <button style={{ padding: '10px', marginTop: '12px', width: '100%', borderRadius: '8px', backgroundColor: '#f1f1f1' }}>
    <strong style={{ fontSize: '30px', textAlign: 'center' }}>일반 분석</strong>
  </button>
  <p style={{ fontSize: '14px', lineHeight: '1.6' }}>
    이 사료는 관절 건강(글루코사민), 장 건강(프락토올리고당) 기능이 있으며,<br />
    조단백질/지방/칼슘 등 기본 수치도 중소형견 성견 기준에 적합합니다.
  </p>

  <div style={{ marginTop: '24px' }}>
    <p><strong>{formData?.name ?? '강아지'}에게 적합한 사료</strong></p>
    <div style={{ display: 'flex', gap: '16px', overflowX: 'auto', paddingBottom: '12px' }}>
      {food.map((foodName, index) => (
        <div key={index} style={{
          minWidth: '160px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '12px',
          border: '1px solid #ddd',
          borderRadius: '8px',
          backgroundColor: '#fff'
        }}>
          <img src={`/img/petfood_${index + 1}.png`} alt={foodName}
            style={{ width: '80px', height: '80px', objectFit: 'contain', marginBottom: '8px' }} />
          <div style={{ fontWeight: 'bold', fontSize: '14px' }}>{foodName}</div>
        </div>
      ))}
    </div>
  </div>

  <BottomNav />
</div>


    
  );
  

  
}

export default Result;
