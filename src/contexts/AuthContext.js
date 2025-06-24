import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a Context for authentication
const AuthContext = createContext(null);

/**
 * AuthProvider component to manage authentication state.
 * This provides `user` and `login`/`logout` functions to its children.
 * @param {object} props - Component props.
 * @param {React.ReactNode} props.children - The child components to be rendered within the provider.
 */
export const AuthProvider = ({ children }) => {
  // State to hold the current user. `null` means not authenticated.
  const [user, setUser] = useState(null); // Initially no user logged in

  // Simulate authentication status on component mount.
  // In a real app, you would check a token, Firebase, etc.
  useEffect(() => {
    // For demonstration, let's assume no user is logged in initially.
    // To test authenticated view, you could set setUser({ name: 'Test User' });
    // Or, you could read from localStorage if a token exists.
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  /**
   * Simulates a login action.
   * In a real application, this would involve API calls, token storage, etc.
   * @param {string} email - User's email.
   * @param {string} password - User's password.
   * @returns {boolean} - True if login is successful, false otherwise.
   */
  const login = (email, password) => {
    // Simple mock authentication: succeeds for specific credentials
    if (email === 'dr.smith@clinical-insights.com' && password === 'provider123') {
      const newUser = { email: email, name: 'Dr. Smith' };
      setUser(newUser);
      localStorage.setItem('currentUser', JSON.stringify(newUser)); // Persist user for demo
      return true;
    }
    return false;
  };

  /**
   * Simulates a logout action.
   * In a real application, this would clear tokens, invalidate sessions, etc.
   */
  const logout = () => {
    setUser(null);
    localStorage.removeItem('currentUser'); // Clear persisted user
  };

  // The value provided to consumers of this context
  const value = {
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

/**
 * Custom hook to consume the AuthContext.
 * @returns {object} The authentication context value.
 * @throws {Error} If `useAuth` is used outside of an `AuthProvider`.
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
