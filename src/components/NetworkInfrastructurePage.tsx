import React from 'react';
import { Network, Shield, Wifi, Server, Monitor, Settings, CheckCircle, ArrowRight, Target, Lightbulb, Cog, TestTube, Rocket, Headphones, Globe, Zap, Users, TrendingUp, Star, Phone, Mail, Clock, Award } from 'lucide-react';

const NetworkInfrastructurePage: React.FC = () => {
  const implementationProcess = [
    {
      step: 1,
      icon: Target,
      title: "Consultation & Discovery",
      description: "Understanding Your Network Requirements",
      details: "We conduct a thorough assessment of your current infrastructure, business needs, and growth plans to design the optimal network solution.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      step: 2,
      icon: Lightbulb,
      title: "Planning & Design",
      description: "Architecting Your Network Solution",
      details: "Our network engineers create detailed network diagrams, select appropriate hardware, and plan the implementation strategy.",
      color: "from-cyan-500 to-teal-500"
    },
    {
      step: 3,
      icon: Cog,
      title: "Implementation & Configuration",
      description: "Building Your Network Infrastructure",
      details: "Professional installation and configuration of all network components, ensuring optimal performance and security.",
      color: "from-teal-500 to-green-500"
    },
    {
      step: 4,
      icon: TestTube,
      title: "Testing & Optimization",
      description: "Ensuring Peak Performance",
      details: "Comprehensive testing of all network components, performance optimization, and security validation before go-live.",
      color: "from-green-500 to-emerald-500"
    },
    {
      step: 5,
      icon: Rocket,
      title: "Deployment & Go-Live",
      description: "Seamless Network Activation",
      details: "Smooth transition to the new network with minimal downtime and comprehensive staff training on new systems.",
      color: "from-emerald-500 to-blue-500"
    },
    {
      step: 6,
      icon: Headphones,
      title: "Support & Documentation",
      description: "Ongoing Network Management",
      details: "Complete network documentation, monitoring setup, and ongoing support to ensure optimal network performance.",
      color: "from-blue-500 to-purple-500"
    }
  ];

  const services = [
    {
      icon: Network,
      title: "Network Design and Architecture",
      description: "Custom network topologies designed for your specific business requirements and growth plans",
      features: ["Network Topology Design", "Scalability Planning", "Performance Optimization", "Redundancy Implementation"],
      benefits: "Optimized performance, future-proof design, reduced downtime"
    },
    {
      icon: Settings,
      title: "Router and Switch Configuration",
      description: "Professional setup and configuration of network routing and switching equipment",
      features: ["VLAN Configuration", "Routing Protocols", "Quality of Service (QoS)", "Load Balancing"],
      benefits: "Improved network efficiency, better traffic management, enhanced performance"
    },
    {
      icon: Shield,
      title: "Firewall and Security Implementation",
      description: "Comprehensive network security solutions to protect your business data and systems",
      features: ["Firewall Configuration", "Intrusion Detection", "VPN Setup", "Access Control"],
      benefits: "Enhanced security, controlled access, protected data transmission"
    },
    {
      icon: Wifi,
      title: "Wireless Network Solutions",
      description: "Enterprise-grade wireless networks with seamless coverage and robust security",
      features: ["Wi-Fi 6 Implementation", "Coverage Optimization", "Guest Networks", "Mobile Device Management"],
      benefits: "Seamless connectivity, improved mobility, secure wireless access"
    },
    {
      icon: Phone,
      title: "Corporate Voice Service Setup",
      description: "Modern VoIP and unified communications solutions for efficient business communication",
      features: ["VoIP Implementation", "PBX Systems", "Video Conferencing", "Mobile Integration"],
      benefits: "Reduced communication costs, improved collaboration, unified messaging"
    },
    {
      icon: Monitor,
      title: "Network Documentation and Monitoring",
      description: "Comprehensive network documentation and 24/7 monitoring for optimal performance",
      features: ["Network Mapping", "Performance Monitoring", "Alert Systems", "Maintenance Scheduling"],
      benefits: "Proactive issue resolution, improved uptime, simplified troubleshooting"
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "High-Performance Networks",
      description: "Optimized network architectures that deliver maximum speed and reliability for your business operations."
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "Multi-layered security implementations that protect your data and systems from cyber threats."
    },
    {
      icon: TrendingUp,
      title: "Scalable Infrastructure",
      description: "Future-proof network designs that can easily accommodate business growth and new technologies."
    },
    {
      icon: Users,
      title: "24/7 Support & Monitoring",
      description: "Round-the-clock network monitoring and support to ensure optimal performance and quick issue resolution."
    }
  ];

  const industries = [
    { name: "Financial Services", icon: TrendingUp },
    { name: "Healthcare", icon: Shield },
    { name: "Education", icon: Users },
    { name: "Manufacturing", icon: Cog },
    { name: "Retail & E-commerce", icon: Globe },
    { name: "Government", icon: Award },
    { name: "Hospitality", icon: Star },
    { name: "Professional Services", icon: Lightbulb }
  ];

  const technologies = [
    { name: "Cisco Systems", category: "Enterprise Hardware" },
    { name: "Ubiquiti Networks", category: "Wireless Solutions" },
    { name: "Fortinet", category: "Security Appliances" },
    { name: "VMware", category: "Virtualization" },
    { name: "Microsoft Azure", category: "Cloud Integration" },
    { name: "Aruba Networks", category: "Wireless & Switching" }
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div>
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Network className="w-4 h-4 mr-2" />
                Network Infrastructure
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Robust Infrastructure. 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600"> Seamless Connectivity.</span> Reliable Support.
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Build a network infrastructure that powers your business growth. From design to deployment, we create high-performance, secure, and scalable network solutions that keep your operations running smoothly 24/7.
              </p>

              {/* Key Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                      <benefit.icon className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{benefit.title}</h3>
                      <p className="text-sm text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-200 hover:scale-105 hover:shadow-lg">
                  Book a Free Network Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                
                <a href="#services" className="inline-flex items-center justify-center bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-gray-200 hover:border-gray-300 transition-all duration-200 hover:scale-105">
                  View Our Services
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Modern network infrastructure and server room" 
                  className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                />
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -left-6 top-16 bg-white p-4 rounded-lg shadow-lg z-20 hidden sm:block">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="ml-3">
                    <div className="text-sm font-semibold text-gray-900">99.9% Uptime</div>
                    <div className="text-xs text-gray-500">Guaranteed</div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-6 bottom-16 bg-white p-4 rounded-lg shadow-lg z-20 hidden sm:block">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">24/7</div>
                  <div className="text-xs text-gray-500">Monitoring</div>
                </div>
              </div>

              {/* Background Shapes */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-teal-400 to-blue-500 rounded-2xl opacity-20 -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl opacity-20 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section id="services" className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Network Infrastructure Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive network solutions designed to meet your business needs, from initial design to ongoing support and maintenance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg p-4">
                  <p className="text-sm font-semibold text-blue-800 mb-1">Benefits:</p>
                  <p className="text-sm text-blue-700">{service.benefits}</p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500 to-teal-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our 5-Step Implementation Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures your network infrastructure is delivered on time, within budget, and exceeds performance expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {implementationProcess.map((process, index) => (
              <div key={index} className="group relative">
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 h-full">
                  {/* Step Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`inline-flex items-center bg-gradient-to-r ${process.color} text-white px-4 py-2 rounded-full text-sm font-bold`}>
                      Step {process.step}
                    </div>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${process.color} rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <process.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{process.title}</h3>
                      <p className="text-sm text-gray-600">{process.description}</p>
                    </div>
                  </div>

                  {/* Details */}
                  <p className="text-gray-600 leading-relaxed">
                    {process.details}
                  </p>

                  {/* Hover Effect */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${process.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We partner with leading technology vendors to deliver enterprise-grade network solutions that are reliable, secure, and scalable.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Network className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{tech.name}</h3>
                <p className="text-sm text-gray-600">{tech.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our network infrastructure solutions are successfully deployed across diverse industries, each with customized configurations for specific sector requirements.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <industry.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900">{industry.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Network Services */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Network Infrastructure Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the difference of working with network professionals who understand your business needs and deliver solutions that drive growth.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                  <Award className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">Certified Expertise</h3>
                <p className="text-gray-600 mb-6">Our team holds industry certifications from leading vendors and brings years of enterprise networking experience.</p>
                
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Cisco certified professionals
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    10+ years experience
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Continuous training
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-3xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-green-500 rounded-2xl flex items-center justify-center mb-6">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">24/7 Support</h3>
                <p className="text-gray-600 mb-6">Round-the-clock monitoring and support ensure your network stays operational when you need it most.</p>
                
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Proactive monitoring
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Rapid response times
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Remote troubleshooting
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">Scalable Solutions</h3>
                <p className="text-gray-600 mb-6">Future-proof network designs that grow with your business and adapt to new technologies.</p>
                
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Modular architecture
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Easy expansion
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Technology upgrades
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Build Your Network Infrastructure?
          </h2>
          <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
            Let's discuss your network requirements and design a solution that supports your business growth and ensures reliable connectivity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              Book a Free Network Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a href="#services" className="inline-flex items-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              View Our Services
            </a>
          </div>

          {/* Contact Info */}
          <div className="mt-12 pt-8 border-t border-white border-opacity-20">
            <p className="text-white opacity-90 mb-4">
              Have questions about network infrastructure? Our network specialists are here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="mailto:network@binapulse.com" className="text-white hover:text-gray-200 transition-colors flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                network@binapulse.com
              </a>
              <span className="hidden sm:block text-white opacity-50">|</span>
              <a href="tel:+233241234567" className="text-white hover:text-gray-200 transition-colors flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                +233 24 123 4567
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NetworkInfrastructurePage;