import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

const [formData, setFormData] = useState({
  name: '보리',
  gender: '남',
  breed: '리트리버',
  weight: '25',
  neutered: '예',
  alergy: '닭고기'
});


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (checked ? 'yes' : 'no') : value,
    }));
  };

  const isFormValid = Object.values(formData).every((v) => v.trim() !== '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    localStorage.setItem('formData', JSON.stringify(formData));
    navigate('/home');
  };

  return (
    <div style={{
      padding: '16px',
      minHeight: '100vh', // ✅ 화면 전체 높이
      maxWidth: '100%',
      boxSizing: 'border-box',
      overflowX: 'hidden'
    }}>
      <div style={{
        maxWidth: '480px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '13px'
      }}>
        <h2 style={{ fontSize: '24px', marginBottom: '20px', textAlign: 'center' }}>반려견 등록</h2>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
 {/* 이름 */}
<div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
  <label htmlFor="name" style={{ minWidth: '70px' }}>이름:</label>
  <input id="name" type="text" name="name" value={formData.name} onChange={handleChange} style={{ flex: 1 }} />
</div>

{/* 성별 */}
<div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
  <label style={{ minWidth: '70px' }}>성별:</label>
  <div style={{ display: 'flex', gap: '10px' }}>
    <label><input type="radio" name="gender" value="남" checked={formData.gender === '남'} onChange={handleChange} /> 남</label>
    <label><input type="radio" name="gender" value="여" checked={formData.gender === '여'} onChange={handleChange} /> 여</label>
  </div>
</div>

{/* 견종 */}
<div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
  <label htmlFor="breed" style={{ minWidth: '70px' }}>견종:</label>
  <input id="breed" type="text" name="breed" value={formData.breed} onChange={handleChange} style={{ flex: 1 }} />
</div>

{/* 체중 */}
<div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
  <label htmlFor="weight" style={{ minWidth: '70px' }}>체중(kg):</label>
  <input id="weight" type="number" name="weight" value={formData.weight} onChange={handleChange} style={{ flex: 1 }} />
</div>

{/* 알러지 */}
<div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
  <label htmlFor="alergy" style={{ minWidth: '70px' }}>알러지:</label>
  <input id="alergy" type="text" name="alergy" value={formData.alergy} onChange={handleChange} style={{ flex: 1 }} />
</div>

{/* 중성화 여부 */}
<div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
  <label style={{ minWidth: '70px' }}>중성화:</label>
  <div style={{ display: 'flex', gap: '10px' }}>
    <label><input type="radio" name="neutered" value="예" checked={formData.neutered === '예'} onChange={handleChange} /> 예</label>
    <label><input type="radio" name="neutered" value="아니오" checked={formData.neutered === '아니오'} onChange={handleChange} /> 아니오</label>
  </div>
</div>

          <button
            type="submit"
            disabled={!isFormValid}
            style={{
              padding: '12px',
              fontSize: '16px',
              backgroundColor: '#4CAF50',
              color: '#fff',
              border: 'none',
              borderRadius: '8px'
            }}
          >
            시작하기
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
