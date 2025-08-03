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
    <div style={{ padding: '20px' }}>
      <h2>반려견 등록</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>이름: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>성별: </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="남"
              checked={formData.gender === '남'}
              onChange={handleChange}
              required
            />{' '}
            남
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="여"
              checked={formData.gender === '여'}
              onChange={handleChange}
              required
            />{' '}
            여
          </label>
        </div>

        <div>
          <label>견종: </label>
          <input
            type="text"
            name="breed"
            value={formData.breed}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>체중(kg): </label>
          <input
            type="number"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>중성화 여부: </label>
          <label>
            <input
              type="radio"
              name="neutered"
              value="예"
              checked={formData.neutered === '예'}
              onChange={handleChange}
              required
            />{' '}
            예
          </label>
          <label>
            <input
              type="radio"
              name="neutered"
              value="아니오"
              checked={formData.neutered === '아니오'}
              onChange={handleChange}
              required
            />{' '}
            아니오
          </label>
        </div>

        <div style={{ marginTop: '20px' }}>
          <button type="submit" disabled={!isFormValid}>
            시작하기
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
