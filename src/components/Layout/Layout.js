import React from 'react';
import { useAuth } from '../../contexts/AuthContext'; // Relative path to AuthContext

/**
 * Layout component provides a consistent structure for authenticated pages.
 * It includes a header, main content area, and a footer, with a logout button.
 * @param {object} props - Component props.
 * @param {React.ReactNode} props.children - The child components to be rendered within the layout.
 */
function Layout({ children }) {
  const { user, logout } = useAuth(); // Get user and logout function from AuthContext

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col font-inter">
      {/* Header for authenticated users */}
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">
          Clinical Insight Dashboard
        </h1>
        <div className="flex items-center space-x-4">
          {user && ( // Only show user info and logout if user is logged in
            <span className="text-gray-700">Welcome, {user.name || user.email}!</span>
          )}
          <button
            onClick={logout}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-200"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main content area, takes up available space */}
      <main className="flex-grow p-6">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {children} {/* This is where the specific page content will be rendered */}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 text-center p-4">
        &copy; {new Date().getFullYear()} Clinical Insight. All rights reserved.
      </footer>
    </div>
  );
}

export default Layout; 