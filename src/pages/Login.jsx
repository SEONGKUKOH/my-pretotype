import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    breed: '',
    weight: '',
    neutered: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (checked ? 'yes' : 'no') : value,
    }));
  };

  const isFormValid = Object.values(formData).every((v) => v.trim() !== '');

  // ✅ 여기에 이 handleSubmit을 넣어주세요!
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    // ✅ formData를 localStorage에 저장
    localStorage.setItem('formData', JSON.stringify(formData));
    navigate('/home');
  };


  return (
<div style={{ padding: '20px', maxWidth: '480px', margin: '0 auto' }}>
  <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>반려견 등록</h2>
  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
    <label>이름:
      <input type="text" name="name" value={formData.name} onChange={handleChange} required
        style={{ width: '100%', padding: '8px', fontSize: '16px' }} />
    </label>

    <label>성별:
      <div style={{ display: 'flex', gap: '12px' }}>
        <label><input type="radio" name="gender" value="남" checked={formData.gender === '남'} onChange={handleChange} /> 남</label>
        <label><input type="radio" name="gender" value="여" checked={formData.gender === '여'} onChange={handleChange} /> 여</label>
      </div>
    </label>

    <label>견종:
      <input type="text" name="breed" value={formData.breed} onChange={handleChange} required
        style={{ width: '100%', padding: '8px', fontSize: '16px' }} />
    </label>

    <label>체중(kg):
      <input type="number" name="weight" value={formData.weight} onChange={handleChange} required
        style={{ width: '100%', padding: '8px', fontSize: '16px' }} />
    </label>

    <label>중성화 여부:
      <div style={{ display: 'flex', gap: '12px' }}>
        <label><input type="radio" name="neutered" value="예" checked={formData.neutered === '예'} onChange={handleChange} /> 예</label>
        <label><input type="radio" name="neutered" value="아니오" checked={formData.neutered === '아니오'} onChange={handleChange} /> 아니오</label>
      </div>
    </label>

    <button type="submit" disabled={!isFormValid}
      style={{ padding: '12px', fontSize: '16px', backgroundColor: '#4CAF50', color: '#fff', border: 'none', borderRadius: '8px' }}>
      시작하기
    </button>
  </form>
</div>

  );
}

export default Login;
