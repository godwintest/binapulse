import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Solutions from './components/Solutions';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import ContactPage from './components/ContactPage';
import CareersPage from './components/CareersPage';
import CustomSoftwarePage from './components/CustomSoftwarePage';
import AIAgentPage from './components/AIAgentPage';
import NetworkInfrastructurePage from './components/NetworkInfrastructurePage';
import CablingHardwarePage from './components/CablingHardwarePage';
import ITConsultationPage from './components/ITConsultationPage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import TermsOfServicePage from './components/TermsOfServicePage';
import CookiePolicyPage from './components/CookiePolicyPage';
import BlogPage from './components/BlogPage';

function App() {
  const [currentPage, setCurrentPage] = React.useState('home');

  useEffect(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        
        // Handle page navigation
        if (href === '#about') {
          setCurrentPage('about');
        } else if (href === '#home') {
          setCurrentPage('home');
        } else {
          // Handle section scrolling within the same page
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      });
    });

    // Update page title
    document.title = 'Binapulse Technologies - Innovative Software & IT Solutions';
    
    // Add meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Binapulse Technologies provides custom software development, AI agents, ERP solutions, and comprehensive IT infrastructure services for African businesses. Transform your business with our innovative technology solutions.');
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {currentPage === 'home' ? (
        <main>
          <Hero />
          <Services />
          <Solutions />
          <WhyChooseUs />
          <Testimonials />
          <Contact />
        </main>
      ) : currentPage === 'about' ? (
        <About />
      ) : currentPage === 'contact' ? (
        <ContactPage />
      ) : currentPage === 'careers' ? (
        <CareersPage />
      ) : currentPage === 'custom-software' ? (
        <CustomSoftwarePage />
      ) : currentPage === 'ai-agents' ? (
        <AIAgentPage />
      ) : currentPage === 'network-infrastructure' ? (
        <NetworkInfrastructurePage />
      ) : currentPage === 'cabling-hardware' ? (
        <CablingHardwarePage />
      ) : currentPage === 'it-consultation' ? (
        <ITConsultationPage />
      ) : currentPage === 'privacy-policy' ? (
        <PrivacyPolicyPage />
      ) : currentPage === 'terms-of-service' ? (
        <TermsOfServicePage />
      ) : currentPage === 'cookie-policy' ? (
        <CookiePolicyPage />
      ) : currentPage === 'blog' ? (
        <BlogPage />
      ) : null}
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;