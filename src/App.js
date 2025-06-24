// src/App.js
import React, { useState, useEffect } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Layout from './components/Layout/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import SOAPNotes from './pages/SOAPNotes';
import Analytics from './pages/Analytics';
import Cases from './pages/Cases';
import LandingPage from './pages/LandingPage'; // Import the new LandingPage component
import './App.css';

function AppContent() {
  const { user } = useAuth();
  // State to control showing the login page explicitly from the landing page
  const [showLoginPage, setShowLoginPage] = useState(false);
  // State for navigating within the authenticated section
  const [currentPage, setCurrentPage] = useState('dashboard');

  // If user is NOT authenticated and we are not explicitly showing the login page,
  // then display the LandingPage.
  if (!user && !showLoginPage) {
    return <LandingPage onLoginClick={() => setShowLoginPage(true)} />;
  }

  // If user is NOT authenticated but showLoginPage is true, display the Login page.
  if (!user && showLoginPage) {
    // Optionally, add a back button to LandingPage if needed on the Login component
    return <Login />;
  }

  // If user IS authenticated, proceed with the main application content
  const renderPage = () => {
    switch(currentPage) {
      case 'soap':
        return <SOAPNotes />;
      case 'analytics':
        return <Analytics />;
      case 'cases':
        return <Cases />;
      case 'upload':
        return (
          <div className="bg-white p-8 rounded-xl shadow-lg text-center mt-8 max-w-xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">File Upload (Coming Soon)</h2>
            <p className="text-gray-600">This page will allow you to upload lab reports and medical images.</p>
          </div>
        );
      default:
        // Pass onNavigate to Dashboard so it can change the page
        return <Dashboard onNavigate={setCurrentPage} />;
    }
  };

  return (
    <Layout>
      {/* Navigation Bar for authenticated users */}
      <nav style={{ 
        background: 'white', 
        padding: '1rem', 
        marginBottom: '2rem', 
        borderRadius: '12px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        display: 'flex',
        gap: '1rem',
        flexWrap: 'wrap'
      }}>
        <button 
          onClick={() => setCurrentPage('dashboard')}
          style={{ 
            padding: '0.75rem 1.5rem', 
            background: currentPage === 'dashboard' ? '#3b82f6' : '#f3f4f6', 
            color: currentPage === 'dashboard' ? 'white' : '#374151',
            border: 'none', 
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: '0.95rem',
            transition: 'all 0.2s'
          }}
        >
          🏠 Dashboard
        </button>
        <button 
          onClick={() => setCurrentPage('soap')}
          style={{ 
            padding: '0.75rem 1.5rem', 
            background: currentPage === 'soap' ? '#3b82f6' : '#f3f4f6', 
            color: currentPage === 'soap' ? 'white' : '#374151',
            border: 'none', 
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: '0.95rem',
            transition: 'all 0.2s'
          }}
        >
          📝 SOAP Notes
        </button>
        <button 
          onClick={() => setCurrentPage('analytics')}
          style={{ 
            padding: '0.75rem 1.5rem', 
            background: currentPage === 'analytics' ? '#3b82f6' : '#f3f4f6', 
            color: currentPage === 'analytics' ? 'white' : '#374151',
            border: 'none', 
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: '0.95rem',
            transition: 'all 0.2s'
          }}
        >
          📊 Analytics
        </button>
        <button 
          onClick={() => setCurrentPage('cases')}
          style={{ 
            padding: '0.75rem 1.5rem', 
            background: currentPage === 'cases' ? '#3b82f6' : '#f3f4f6', 
            color: currentPage === 'cases' ? 'white' : '#374151',
            border: 'none', 
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: '0.95rem',
            transition: 'all 0.2s'
          }}
        >
          🔍 Cases
        </button>
        <button 
          onClick={() => setCurrentPage('upload')}
          style={{ 
            padding: '0.75rem 1.5rem', 
            background: currentPage === 'upload' ? '#3b82f6' : '#f3f4f6', 
            color: currentPage === 'upload' ? 'white' : '#374151',
            border: 'none', 
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: '0.95rem',
            transition: 'all 0.2s'
          }}
        >
          ⬆️ Upload
        </button>
      </nav>
      
      {renderPage()}
    </Layout>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
