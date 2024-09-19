import React from 'react';
import { AuthProvider, useAuth } from '../src/components/AuthContext'; // Import AuthContext
import HomePage from '../src/components/HomePage'; // Import HomePage component
import LoginPage from '../src/components/LoginPage'; // Import LoginPage component
import './App.css'; // Import CSS for styling

// Main App component
const App = () => {
  return (
    // Wrap the application in AuthProvider to provide authentication state
    <AuthProvider>
      <MainContent />
    </AuthProvider>
  );
};

// Component to decide which content to show based on authentication state
const MainContent = () => {
  const { isAuthenticated } = useAuth(); // Use authentication state from context

  return (
    <div className="app-container">
      {/* Conditionally render HomePage or LoginPage based on authentication state */}
      {isAuthenticated ? <HomePage /> : <LoginPage />}
    </div>
  );
};

export default App;
