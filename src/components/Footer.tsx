import React from 'react';
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram, Twitter, ArrowRight, Clock } from 'lucide-react';

interface FooterProps {
  setCurrentPage?: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  const handleNavigation = (page: string) => {
    if (setCurrentPage) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <span className="text-xl font-bold">Binapulse Technologies</span>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering African businesses with innovative software solutions, AI agents, and comprehensive IT infrastructure services.
            </p>

            <div className="space-y-3 text-sm">
              <div className="flex items-center text-gray-400">
                <Phone className="h-4 w-4 mr-3 flex-shrink-0" />
                <span>+233 55 412 9334</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail className="h-4 w-4 mr-3 flex-shrink-0" />
                <span>info@binapulse.com</span>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="h-4 w-4 mr-3 flex-shrink-0" />
                <span>Accra, Ghana</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Clock className="h-4 w-4 mr-3 flex-shrink-0" />
                <span>Mon-Fri 9AM-6PM, Sat 10AM-2PM</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <button onClick={() => handleNavigation('custom-software')} className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span>Custom Software Development</span>
                  <ArrowRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation('ai-agents')} className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span>AI Agent Development</span>
                  <ArrowRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation('network-infrastructure')} className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span>Network Infrastructure</span>
                  <ArrowRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation('cabling-hardware')} className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span>Cabling & Hardware Installation</span>
                  <ArrowRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigation('it-consultation')} className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span>IT Consultation</span>
                  <ArrowRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-bold mb-6">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <a href="#solutions" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span>Awoyaa - Retail ERP</span>
                  <ArrowRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#solutions" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span>Edziban - Restaurant ERP</span>
                  <ArrowRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#solutions" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span>Erkamka - Email Marketing</span>
                  <ArrowRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#solutions" className="text-gray-400 hover:text-white transition-colors flex items-center group">
                  <span>Daavi - Custom Solutions</span>
                  <ArrowRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>

            
            <div className="mt-6">
              <h4 className="font-semibold mb-3">Company</h4>
              <ul className="space-y-3">
                <li>
                  <button onClick={() => handleNavigation('about')} className="text-gray-400 hover:text-white transition-colors">About Us</button>
                </li>
                <li>
                  <button onClick={() => handleNavigation('contact')} className="text-gray-400 hover:text-white transition-colors">Contact</button>
                </li>
                <li>
                  <button onClick={() => handleNavigation('careers')} className="text-gray-400 hover:text-white transition-colors">Careers</button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavigation('blog')} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Blog
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter & Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">Stay Updated</h3>
            <p className="text-gray-400 mb-4 text-sm">
              Subscribe to our newsletter for the latest technology insights and business tips.
            </p>
            
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
              >
                Subscribe
              </button>
            </form>

            <div className="mt-8 p-4 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg">
              <h4 className="font-semibold mb-2">Need Immediate Help?</h4>
              <p className="text-sm opacity-90 mb-3">
                Our support team is available 24/7 to assist you.
              </p>
              <a href="#contact" className="inline-flex items-center bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors">
                Get Support
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Binapulse Technologies. All rights reserved.
            </div>
            
            <div className="flex flex-wrap items-center space-x-6 text-sm">
              <button 
                onClick={() => {
                  handleNavigation('privacy-policy');
                }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => {
                  handleNavigation('terms-of-service');
                }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </button>
              <button 
                onClick={() => {
                  handleNavigation('cookie-policy');
                }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Cookie Policy
              </button>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;