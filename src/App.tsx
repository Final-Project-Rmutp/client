// App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Room from "./pages/room/Room";
import { AuthProvider } from './auth/AuthContext';
import './index.css';
import Student from './pages/student/student';
function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin" element={<Room />} />
          <Route path="/student" element={<Student />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
