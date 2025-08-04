import { useEffect, useState } from 'react';
import BottomNav from '../components/BottomNav';

function Home() {
  const [formData, setFormData] = useState(null);
const [food] = useState(['인섹트업', '로얄캐닌', '나우사료']); // ✅ 배열로 선언
const [nutrition] = useState(['고단백 곤충성분', '고단백 고칼슘', '고단백 저지방']); // ✅ 배열로 선언

  useEffect(() => {
    const stored = localStorage.getItem('formData');
    if (stored) {
      setFormData(JSON.parse(stored));
    }
  }, []);

  return (
<div style={{ padding: '20px', paddingBottom: '80px', maxWidth: '480px', margin: '0 auto' }}>
  <h1 style={{ fontSize: '24px', textAlign: 'center' }}>홈 화면</h1>
  <div style={{ textAlign: 'center', marginBottom: '20px' }}>
    <img src="/img/happy.png" alt="프로필 이미지"
      style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', backgroundColor: '#eee' }} />
  </div>

{formData && (
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      fontSize: '14px',
      lineHeight: '1.6',
      marginBottom: '16px',
      padding: '12px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      backgroundColor: '#fff',
      gap: '12px'
    }}
  >
    <div style={{ flex: '0 0 48%' }}><strong>이름:</strong> {formData.name}</div>
    <div style={{ flex: '0 0 48%' }}><strong>성별:</strong> {formData.gender}</div>
    <div style={{ flex: '0 0 48%' }}><strong>견종:</strong> {formData.breed}</div>
    <div style={{ flex: '0 0 48%' }}><strong>체중:</strong> {formData.weight}kg</div>
    <div style={{ flex: '0 0 48%' }}><strong>알러지:</strong> {formData.alergy}</div>
    <div style={{ flex: '0 0 48%' }}><strong>중성화:</strong> {formData.neutered}</div>
  </div>
)}


  {formData?.name && (
    <div style={{ marginTop: '24px' }}>
      <p><strong>{formData.name}에게 추천되는 사료에요!</strong></p>
      {food.map((foodName, index) => (
        <div key={index} style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '16px',
          padding: '12px',
          border: '1px solid #ddd',
          borderRadius: '8px',
          backgroundColor: '#fff'
        }}>
          <img src={`/img/petfood_${index + 1}.png`} alt={`사료 ${index + 1}`}
            style={{ width: '60px', height: '60px', marginRight: '12px', borderRadius: '8px', objectFit: 'contain' }} />
          <div>
            <div style={{ fontWeight: 'bold', fontSize: '15px' }}>{foodName}</div>
            <div style={{ fontSize: '13px', color: '#666' }}>{nutrition[index]}</div>
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
