import React from 'react';
import { useAuth } from './AuthContext'; // Import useAuth hook
import '../App.css'; // Import CSS for styling

const HomePage = () => {
  const { logout } = useAuth(); // Get logout function from context

  return (
    <div className="home-container">
      <h2>Welcome to the Home Page!</h2>
      {/* Button to trigger logout function */}
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default HomePage;
