import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-50 via-white to-teal-50 pt-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-teal-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-purple-600 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
              Trusted by 500+ businesses across Africa
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Innovative Software & 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600"> IT Solutions</span> to Propel Your Business Forward
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Transform your business with custom software development, AI agents, ERP solutions, and comprehensive IT infrastructure services designed for the African market.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#software-services" className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg">
                Explore Our Software Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              
              <a href="#it-services" className="inline-flex items-center justify-center bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-gray-200 hover:border-gray-300 transition-all duration-200 hover:scale-105">
                <Play className="mr-2 h-5 w-5" />
                Discover Our IT Services
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">500+</div>
                <div className="text-gray-600 text-sm">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">200+</div>
                <div className="text-gray-600 text-sm">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">24/7</div>
                <div className="text-gray-600 text-sm">Support Available</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Main Image */}
              <div className="relative z-10">
                <img 
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Modern office with technology solutions" 
                  className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                />
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -left-6 top-16 bg-white p-4 rounded-lg shadow-lg z-20 hidden sm:block">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  </div>
                  <div className="ml-3">
                    <div className="text-sm font-semibold text-gray-900">AI Agent Active</div>
                    <div className="text-xs text-gray-500">24/7 Automation</div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-6 bottom-16 bg-white p-4 rounded-lg shadow-lg z-20 hidden sm:block">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">99.9%</div>
                  <div className="text-xs text-gray-500">Uptime Guaranteed</div>
                </div>
              </div>

              {/* Background Shapes */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-teal-400 to-blue-500 rounded-2xl opacity-20 -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl opacity-20 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;