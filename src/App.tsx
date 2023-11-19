// App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Room from "./pages/room/Room";
import Student from './pages/student/student';
import { AuthProvider } from './auth/AuthLogin';
import './index.css';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Room />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Room />} />
          <Route path="/student" element={<Student />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
