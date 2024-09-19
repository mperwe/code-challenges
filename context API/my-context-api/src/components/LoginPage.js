import React from 'react';
import { useAuth } from './AuthContext';


const LoginPage = () => {
  const { login } = useAuth();

  return (
    <div className="login-container">
      <h2>Login Page</h2>
      <button onClick={login}>Login</button>
    </div>
  );
};

export default LoginPage;
