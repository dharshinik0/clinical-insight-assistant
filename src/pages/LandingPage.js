import React from 'react';
// Tailwind CSS is assumed to be available

/**
 * LandingPage component displays the public-facing landing page for Clinical Insight Assistant.
 * It includes an overview of features and calls to action.
 * @param {object} props - Component props.
 * @param {function} props.onLoginClick - Callback function to navigate to the login page.
 */
function LandingPage({ onLoginClick }) {
  return (
    // Main container for the landing page, centered and with padding
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 font-inter">
      {/* Header */}
      <header className="w-full max-w-7xl flex justify-between items-center py-4 px-6 bg-white rounded-xl shadow-md mb-8">
        <div className="flex items-center space-x-3">
          {/* Logo/Icon */}
          <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
          </svg>
          <span className="text-2xl font-bold text-gray-900">Clinical Insight</span>
          <span className="text-sm text-gray-500">AI Medical Assistant</span>
        </div>
        {/* Login Button in Header */}
        <button
          onClick={onLoginClick}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-md"
        >
          Healthcare Professional Login
        </button>
      </header>

      {/* Hero Section */}
      <section className="text-center mb-16 max-w-4xl">
        <h1 className="text-5xl font-extrabold text-gray-900 leading-tight mb-6">
          AI-Powered Clinical Documentation
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Revolutionize your medical practice with advanced AI assistance for SOAP note generation, case management, and clinical decision support. HIPAA-compliant and designed for healthcare professionals.
        </p>
        <div className="flex justify-center space-x-6">
          {/* Secure Login Button */}
          <button
            onClick={onLoginClick}
            className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition duration-300 flex items-center justify-center"
          >
            <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v3h8z"></path>
            </svg>
            Secure Login
          </button>
          {/* Learn More Button */}
          <button className="px-8 py-3 bg-gray-200 text-gray-800 font-semibold rounded-full shadow-lg hover:bg-gray-300 transition duration-300">
            Learn More
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full max-w-7xl mb-16">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          Complete Clinical Workflow Solution
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Streamline your medical documentation and enhance patient care with our comprehensive AI-powered platform.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature Card 1: AI SOAP Notes */}
          <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
            <div className="p-4 bg-red-100 rounded-full mb-6">
              <svg className="h-10 w-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">AI SOAP Notes</h3>
            <p className="text-gray-600 mb-4">
              Generate comprehensive, structured medical documentation with AI assistance. Includes confidence scoring and differential diagnoses.
            </p>
            <p className="text-sm text-gray-500">
              <svg className="h-4 w-4 inline-block mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
              94.2% average confidence score
            </p>
          </div>

          {/* Feature Card 2: Case Management */}
          <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
            <div className="p-4 bg-green-100 rounded-full mb-6">
              <svg className="h-10 w-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h-4a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v11a2 2 0 01-2 2z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 13h10v2H7z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Case Management</h3>
            <p className="text-gray-600 mb-4">
              Organize patient cases, track progress, and manage medical records with intuitive workflow tools designed for healthcare professionals.
            </p>
            <p className="text-sm text-gray-500">
              <svg className="h-4 w-4 inline-block mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
              Complete audit trail
            </p>
          </div>

          {/* Feature Card 3: Clinical Analytics */}
          <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
            <div className="p-4 bg-blue-100 rounded-full mb-6">
              <svg className="h-10 w-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3m0 0l3 3m-3-3v8m0-8a9 9 0 110 18 9 9 0 010-18zm-4.5 9.5a1 1 0 100-2 1 1 0 000 2zm9 0a1 1 0 100-2 1 1 0 000 2z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Clinical Analytics</h3>
            <p className="text-gray-600 mb-4">
              Track performance metrics, analyze clinical patterns, and gain insights into your practice efficiency and diagnostic accuracy.
            </p>
            <p className="text-sm text-gray-500">
              <svg className="h-4 w-4 inline-block mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
              Real-time insights
            </p>
          </div>

          {/* Feature Card 4: Voice Commands */}
          <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
            <div className="p-4 bg-purple-100 rounded-full mb-6">
              <svg className="h-10 w-10 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v3a3 3 0 01-3 3z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Voice Commands</h3>
            <p className="text-gray-600 mb-4">
              Use natural language voice commands to query patient data, generate reports, and navigate the system hands-free.
            </p>
            <p className="text-sm text-gray-500">
              <svg className="h-4 w-4 inline-block mr-1 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12 7H8a2 2 0 00-2 2v6a2 2 0 002 2h4a2 2 0 002-2V9a2 2 0 00-2-2zm-1 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>
              "Show yesterday's CBC for patient 47321"
            </p>
          </div>

          {/* Feature Card 5: File Analysis */}
          <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
            <div className="p-4 bg-yellow-100 rounded-full mb-6">
              <svg className="h-10 w-10 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">File Analysis</h3>
            <p className="text-gray-600 mb-4">
              Upload and analyze medical files including CSV lab reports, medical images, and PDFs with AI-powered interpretation.
            </p>
            <p className="text-sm text-gray-500">
              <svg className="h-4 w-4 inline-block mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
              Supports CSV, PDF, JPEG, PNG
            </p>
          </div>

          {/* Feature Card 6: HIPAA Compliant */}
          <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
            <div className="p-4 bg-gray-100 rounded-full mb-6">
              <svg className="h-10 w-10 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2v5a2 2 0 01-2 2h-2m-3 2h6m-3-2V8a3 3 0 00-3-3H6a3 3 0 00-3 3v4m5 10v-2a3 3 0 00-3-3H6a3 3 0 00-3 3v2a3 3 0 003 3h4a3 3 0 003-3z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">HIPAA Compliant</h3>
            <p className="text-gray-600 mb-4">
              End-to-end encryption, comprehensive audit logging, and role-based access control ensure complete data security.
            </p>
            <p className="text-sm text-gray-500">
              <svg className="h-4 w-4 inline-block mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
              Enterprise-grade security
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center bg-blue-700 text-white rounded-xl py-16 px-8 max-w-4xl mb-16 shadow-lg">
        <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Practice?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Join healthcare professionals who are already using AI to improve patient care and documentation efficiency.
        </p>
        <button className="px-8 py-4 bg-white text-blue-700 font-semibold rounded-full shadow-xl hover:bg-gray-100 transition duration-300">
          Start Your Clinical AI Journey
        </button>
      </section>

      {/* Footer */}
      <footer className="w-full max-w-7xl flex flex-col sm:flex-row justify-between items-center py-6 px-6 bg-gray-800 text-gray-300 rounded-xl shadow-md">
        <div className="flex items-center space-x-2 mb-4 sm:mb-0">
          <svg className="h-6 w-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
          </svg>
          <span>Clinical Insight Assistant</span>
        </div>
        <p className="text-sm text-center sm:text-right">
          HIPAA Compliant - End-to-End Encrypted - Secure Healthcare AI
        </p>
      </footer>
    </div>
  );
}

export default LandingPage; 