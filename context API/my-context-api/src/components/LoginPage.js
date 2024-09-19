import React from 'react';
import { useAuth } from './AuthContext'; // Import useAuth hook
import '../App.css'; // Import CSS for styling

const LoginPage = () => {
  const { login } = useAuth(); // Get login function from context

  return (
    <div className="login-container">
      <h2>Login Page</h2>
      {/* Button to trigger login function */}
      <button onClick={login}>Login</button>
    </div>
  );
};

export default LoginPage;

