import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Camera from './pages/Camera';
import Result from './pages/Result'; // ✅ 이 줄을 추가하세요!

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/camera" element={<Camera />} />
        <Route path="/result" element={<Result />} /> {/* ✅ 추가 */}

      </Routes>
    </Router>
  );
}

export default App;
