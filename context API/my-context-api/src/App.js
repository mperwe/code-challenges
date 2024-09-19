import React from 'react';
import { AuthProvider, useAuth } from '../src/components/AuthContext';
import HomePage from '../src/components/HomePage';
import LoginPage from '../src/components/LoginPage';
import './App.css';  // Import CSS

const App = () => {
  return (
    <AuthProvider>
      <MainContent />
    </AuthProvider>
  );
};

const MainContent = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="app-container">
      {isAuthenticated ? <HomePage /> : <LoginPage />}
    </div>
  );
};

export default App;
