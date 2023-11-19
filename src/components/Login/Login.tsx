import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import { useAuth, UserRole } from '../../auth/AuthContext';

const Login: React.FC = () => {
  const { login, validateCredentials, validCredentials } = useAuth();
  const navigate = useNavigate();
  const [errorMessages, setErrorMessages] = useState({
    username: '',
    password: '',
    general: '',
  });

  const handleLogin = async (username: string, password: string) => {
    // Reset error messages
    setErrorMessages({
      username: '',
      password: '',
      general: '',
    });

    // Validate credentials
    const isValidCredentials = validateCredentials({ username, password, name: '', role: UserRole.admin });

    if (isValidCredentials) {
      const foundUser = validCredentials.find((cred) => cred.username === username);
      if (foundUser) {
        const user = { username, password, name: '', role: foundUser.role };
        login(user);

        // Navigate based on the role
        navigate(`/${user.role}`); // Assuming roles are mapped to routes like '/admin', '/student', '/teacher'
      }
    } else {
      // Display error messages
      if (username.trim() === '') {
        setErrorMessages((prev) => ({ ...prev, username: 'Username is required' }));
      }
      if (password.trim() === '') {
        setErrorMessages((prev) => ({ ...prev, password: 'Password is required' }));
      } else {
        setErrorMessages((prev) => ({ ...prev, general: 'Invalid username or password' }));
      }
    }
  };

  return (
    <div>
      <LoginForm
        onLogin={handleLogin}
        usernameErrorMessage={errorMessages.username}
        passwordErrorMessage={errorMessages.password}
        generalErrorMessage={errorMessages.general}
      />
    </div>
  );
};

export default Login;
