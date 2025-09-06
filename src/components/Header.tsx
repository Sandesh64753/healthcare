import React from 'react';
import { Stethoscope, Menu, X } from 'lucide-react';

interface HeaderProps {
  currentView: string;
  setCurrentView: (view: string) => void;
  isAuthenticated: boolean;
  setIsAuthenticated: (auth: boolean) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ 
  currentView, 
  setCurrentView, 
  isAuthenticated, 
  setIsAuthenticated,
  isMenuOpen,
  setIsMenuOpen 
}) => {
  const handleSignOut = () => {
    setIsAuthenticated(false);
    setCurrentView('home');
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center cursor-pointer" onClick={() => setCurrentView('home')}>
            <Stethoscope className="h-8 w-8 text-blue-600 mr-2" />
            <span className="text-xl font-bold text-gray-800">HealthCare AI</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <button
              onClick={() => setCurrentView('home')}
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                currentView === 'home' 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => setCurrentView('about')}
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                currentView === 'about' 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              About
            </button>
            <button
              onClick={() => setCurrentView('services')}
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                currentView === 'services' 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Services
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <button
                  onClick={() => setCurrentView('dashboard')}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Dashboard
                </button>
                <button
                  onClick={handleSignOut}
                  className="text-gray-600 hover:text-gray-800 font-medium transition-colors"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => setCurrentView('signin')}
                  className="text-gray-600 hover:text-gray-800 font-medium transition-colors"
                >
                  Sign In
                </button>
                <button
                  onClick={() => setCurrentView('signup')}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-800"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="space-y-2">
              <button
                onClick={() => { setCurrentView('home'); setIsMenuOpen(false); }}
                className="block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-600 font-medium"
              >
                Home
              </button>
              <button
                onClick={() => { setCurrentView('about'); setIsMenuOpen(false); }}
                className="block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-600 font-medium"
              >
                About
              </button>
              <button
                onClick={() => { setCurrentView('services'); setIsMenuOpen(false); }}
                className="block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-600 font-medium"
              >
                Services
              </button>
              
              <div className="border-t border-gray-200 pt-4 mt-4">
                {isAuthenticated ? (
                  <>
                    <button
                      onClick={() => { setCurrentView('dashboard'); setIsMenuOpen(false); }}
                      className="block w-full text-left bg-blue-600 text-white px-4 py-2 rounded-lg font-medium mb-2"
                    >
                      Dashboard
                    </button>
                    <button
                      onClick={handleSignOut}
                      className="block w-full text-left px-3 py-2 text-gray-600 hover:text-gray-800 font-medium"
                    >
                      Sign Out
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => { setCurrentView('signin'); setIsMenuOpen(false); }}
                      className="block w-full text-left px-3 py-2 text-gray-600 hover:text-gray-800 font-medium mb-2"
                    >
                      Sign In
                    </button>
                    <button
                      onClick={() => { setCurrentView('signup'); setIsMenuOpen(false); }}
                      className="block w-full text-left bg-blue-600 text-white px-4 py-2 rounded-lg font-medium"
                    >
                      Sign Up
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;