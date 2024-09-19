import React, { createContext, useState, useContext } from 'react';

// Create the AuthContext to hold authentication state
const AuthContext = createContext();

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);

// AuthProvider component to provide authentication state to the app
export const AuthProvider = ({ children }) => {
  // State to keep track of whether the user is authenticated or not
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to set the user as authenticated
  const login = () => {
    setIsAuthenticated(true);
  };

  // Function to set the user as unauthenticated
  const logout = () => {
    setIsAuthenticated(false);
  };

  // Provide the authentication state and functions to the rest of the app
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
