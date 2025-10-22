import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    setActiveDropdown(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle hash-based navigation for footer links
  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'privacy-policy') {
        setCurrentPage('privacy-policy');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === 'terms-of-service') {
        setCurrentPage('terms-of-service');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === 'cookie-policy') {
        setCurrentPage('cookie-policy');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === 'cookie-policy') {
        setCurrentPage('cookie-policy');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Check initial hash
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [setCurrentPage]);

  return (
    <header className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-1">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button onClick={() => handleNavigation('home')} className="flex items-center focus:outline-none">
              <img className="h-32 w-auto" src="/binapulse/binapulse-logo.png" alt="Binapulse" />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => handleNavigation('home')}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  currentPage === 'home' ? 'text-blue-600' : 'text-gray-900 hover:text-blue-600'
                }`}
              >
                Home
              </button>
              
              {/* Software Services Dropdown */}
              <div className="relative group">
                <button className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium flex items-center transition-colors">
                  Software Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <button onClick={() => handleNavigation('custom-software')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Custom Software Development</button>
                    <button onClick={() => handleNavigation('ai-agents')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">AI Agent Development</button>
                  </div>
                </div>
              </div>

              {/* IT Services Dropdown */}
              <div className="relative group">
                <button className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium flex items-center transition-colors">
                  IT Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <button onClick={() => handleNavigation('network-infrastructure')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Network Infrastructure</button>
                    <button onClick={() => handleNavigation('cabling-hardware')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Cabling & Hardware Installation</button>
                    <button onClick={() => handleNavigation('it-consultation')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">IT Consultation</button>
                  </div>
                </div>
              </div>

              <a href="#solutions" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                Solutions
              </a>
              <button 
                onClick={() => handleNavigation('about')}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  currentPage === 'about' ? 'text-blue-600' : 'text-gray-900 hover:text-blue-600'
                }`}
              >
                About
              </button>
              <button 
                onClick={() => handleNavigation('contact')}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  currentPage === 'contact' ? 'text-blue-600' : 'text-gray-900 hover:text-blue-600'
                }`}
              >
                Contact
              </button>
              <button 
                onClick={() => handleNavigation('careers')}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  currentPage === 'careers' ? 'text-blue-600' : 'text-gray-900 hover:text-blue-600'
                }`}
              >
                Careers
              </button>
              <button 
                onClick={() => handleNavigation('blog')}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  currentPage === 'blog' ? 'text-blue-600' : 'text-gray-900 hover:text-blue-600'
                }`}
              >
                Blog
              </button>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors">
              Get Free Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <button 
                onClick={() => handleNavigation('home')}
                className={`w-full text-left px-3 py-2 text-base font-medium ${
                  currentPage === 'home' ? 'text-blue-600' : 'text-gray-900 hover:text-blue-600'
                }`}
              >
                Home
              </button>
              
              {/* Mobile Software Services Dropdown */}
              <div>
                <button
                  onClick={() => toggleDropdown('software')}
                  className="text-gray-900 hover:text-blue-600 w-full text-left px-3 py-2 text-base font-medium flex items-center justify-between"
                >
                  Software Services
                  <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'software' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'software' && (
                  <div className="pl-6 space-y-1">
                    <button onClick={() => handleNavigation('custom-software')} className="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-blue-600">
                      Custom Software Development
                    </button>
                    <button onClick={() => handleNavigation('ai-agents')} className="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-blue-600">
                      AI Agent Development
                    </button>
                  </div>
                )}
              </div>

              {/* Mobile IT Services Dropdown */}
              <div>
                <button
                  onClick={() => toggleDropdown('it')}
                  className="text-gray-900 hover:text-blue-600 w-full text-left px-3 py-2 text-base font-medium flex items-center justify-between"
                >
                  IT Services
                  <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'it' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'it' && (
                  <div className="pl-6 space-y-1">
                    <button onClick={() => handleNavigation('network-infrastructure')} className="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-blue-600">
                      Network Infrastructure
                    </button>
                    <button onClick={() => handleNavigation('cabling-hardware')} className="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-blue-600">
                      Cabling & Hardware Installation
                    </button>
                    <button onClick={() => handleNavigation('it-consultation')} className="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-blue-600">
                      IT Consultation
                    </button>
                  </div>
                )}
              </div>

              <a href="#solutions" className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium" onClick={toggleMenu}>
                Solutions
              </a>
              <button 
                onClick={() => handleNavigation('about')}
                className={`w-full text-left px-3 py-2 text-base font-medium ${
                  currentPage === 'about' ? 'text-blue-600' : 'text-gray-900 hover:text-blue-600'
                }`}
              >
                About
              </button>
              <button 
                onClick={() => handleNavigation('contact')}
                className={`w-full text-left px-3 py-2 text-base font-medium ${
                  currentPage === 'contact' ? 'text-blue-600' : 'text-gray-900 hover:text-blue-600'
                }`}
              >
                Contact
              </button>
              <button 
                onClick={() => handleNavigation('careers')}
                className={`w-full text-left px-3 py-2 text-base font-medium ${
                  currentPage === 'careers' ? 'text-blue-600' : 'text-gray-900 hover:text-blue-600'
                }`}
              >
                Careers
              </button>
              <button 
                onClick={() => handleNavigation('blog')}
                className={`w-full text-left px-3 py-2 text-base font-medium ${
                  currentPage === 'blog' ? 'text-blue-600' : 'text-gray-900 hover:text-blue-600'
                }`}
              >
                Blog
              </button>
              <div className="px-3 py-4">
                <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white block text-center px-6 py-2 rounded-lg text-base font-medium transition-colors">
                  Get Free Quote
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;