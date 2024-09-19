import React from 'react';
import { useAuth } from './AuthContext';


const HomePage = () => {
  const { logout } = useAuth();

  return (
    <div className="home-container">
      <h2>Welcome to the Home Page!</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default HomePage;
