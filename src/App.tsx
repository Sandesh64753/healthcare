import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import AuthForm from './components/AuthForm';
import Dashboard from './components/Dashboard';
import About from './components/About';
import Services from './components/Services';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderCurrentView = () => {
    switch (currentView) {
      case 'home':
        return <Home setCurrentView={setCurrentView} />;
      case 'about':
        return <About />;
      case 'services':
        return <Services />;
      case 'signin':
        return (
          <AuthForm
            isSignUp={false}
            setCurrentView={setCurrentView}
            setIsAuthenticated={setIsAuthenticated}
          />
        );
      case 'signup':
        return (
          <AuthForm
            isSignUp={true}
            setCurrentView={setCurrentView}
            setIsAuthenticated={setIsAuthenticated}
          />
        );
      case 'dashboard':
        return <Dashboard />;
      default:
        return <Home setCurrentView={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header
        currentView={currentView}
        setCurrentView={setCurrentView}
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      {renderCurrentView()}
    </div>
  );
}

export default App;