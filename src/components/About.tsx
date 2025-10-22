import React from 'react';
import { Users, Target, Eye, Award, MapPin, Phone, Mail, Clock, Facebook, Linkedin, Instagram, Twitter, ArrowRight, CheckCircle, Globe, Zap, Shield, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  const services = [
    {
      icon: Globe,
      title: "Custom Software Development",
      description: "Tailored applications that fit your unique business processes"
    },
    {
      icon: Zap,
      title: "AI Agent Development", 
      description: "Intelligent automation solutions for enhanced productivity"
    },
    {
      icon: Shield,
      title: "Network Infrastructure",
      description: "Robust, secure networking solutions for seamless connectivity"
    },
    {
      icon: Users,
      title: "IT Consultation",
      description: "Strategic technology advisory to align IT with business goals"
    },
    {
      icon: TrendingUp,
      title: "ERP Solutions",
      description: "Comprehensive business management systems for operational excellence"
    }
  ];

  const differentiators = [
    {
      icon: Globe,
      title: "Locally Built, Globally Aligned",
      description: "Deep understanding of African business challenges combined with international quality standards and best practices."
    },
    {
      icon: Users,
      title: "End-to-End Expertise",
      description: "Complete technology solutions from initial consultation to deployment, training, and ongoing maintenance support."
    },
    {
      icon: Shield,
      title: "Support That Stays",
      description: "Local community tech representatives provide on-ground support, ensuring you're never alone in your digital journey."
    },
    {
      icon: TrendingUp,
      title: "Solutions That Scale",
      description: "Future-proof technology solutions designed to grow with your business, from startup to enterprise level."
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "200+", label: "Projects Delivered" },
    { number: "15+", label: "Countries Served" },
    { number: "10+", label: "Years Experience" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-teal-50 pt-24 pb-16 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-600 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-teal-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-purple-600 rounded-full blur-3xl"></div>
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              About 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600"> Binapulse Technologies</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Empowering African businesses with innovative technology solutions that drive growth, efficiency, and digital transformation.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Binapulse Technologies is a leading technology company specializing in custom software development, AI solutions, and comprehensive IT infrastructure services. Founded with a vision to bridge the digital divide in Africa, we combine local market insights with global technology standards.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our team of experienced developers, network engineers, and IT consultants work tirelessly to deliver solutions that not only meet current business needs but also prepare organizations for future growth and technological advancement.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">10+ years of combined industry experience</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Certified professionals and industry experts</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Commitment to quality and customer satisfaction</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="./about-hero.jpeg" 
                alt="Professional team collaboration" 
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden sm:block">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <Award className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Excellence</div>
                    <div className="text-sm text-gray-600">Driven by Quality</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              What We Do
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive technology solutions across five main service areas, each designed to address specific business challenges and opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                <div className={`w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Mission */}
            <div className="bg-gradient-to-br from-blue-600 to-teal-600 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full transform translate-x-16 -translate-y-16"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold mb-6">Our Mission</h3>
                
                <p className="text-lg opacity-90 leading-relaxed">
                  To empower businesses with affordable, intelligent, and scalable technology solutions that drive growth, improve efficiency, and enable digital transformation across Africa and beyond.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-teal-600 to-green-600 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full transform -translate-x-12 translate-y-12"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold mb-6">Our Vision</h3>
                
                <p className="text-lg opacity-90 leading-relaxed">
                  To be the most trusted partner for business automation and IT transformation in Africa and beyond, setting the standard for innovation, quality, and customer success in the technology industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Stand Out */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Why We Stand Out
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four key differentiators that make Binapulse Technologies the preferred choice for businesses seeking reliable technology partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {differentiators.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="ml-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your business with innovative technology solutions? We're here to help you succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="bg-gradient-to-br from-blue-600 to-teal-600 rounded-3xl p-8 lg:p-10 text-white">
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Head Office</p>
                    <p className="opacity-90">Accra, Ghana</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="opacity-90">+233 24 123 4567</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="opacity-90">info@binapulse.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Business Hours</p>
                    <p className="opacity-90">Mon-Fri 9AM-6PM</p>
                    <p className="opacity-90">Sat 10AM-2PM, Sun Closed</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8 pt-8 border-t border-white border-opacity-20">
                <p className="font-semibold mb-4">Follow Us</p>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center hover:bg-opacity-30 transition-colors">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center hover:bg-opacity-30 transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center hover:bg-opacity-30 transition-colors">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center hover:bg-opacity-30 transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-3xl p-8 lg:p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Request a Custom Quote</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                    Service of Interest *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="custom-software">Custom Software Development</option>
                    <option value="ai-agents">AI Agent Development</option>
                    <option value="network-infrastructure">Network Infrastructure</option>
                    <option value="it-consultation">IT Consultation</option>
                    <option value="erp-solutions">ERP Solutions</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical"
                    placeholder="Tell us about your project requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 hover:scale-[1.02] hover:shadow-lg flex items-center justify-center"
                >
                  Send Message
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;