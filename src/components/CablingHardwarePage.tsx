import React from 'react';
import { Cable, Server, Wrench, Shield, CheckCircle, ArrowRight, Target, Lightbulb, Cog, TestTube, Rocket, Headphones, Globe, Zap, Users, TrendingUp, Star, Phone, Mail, Clock, Award, Monitor, Wifi, Settings } from 'lucide-react';

const CablingHardwarePage: React.FC = () => {
  const implementationProcess = [
    {
      step: 1,
      icon: Target,
      title: "Site Survey & Assessment",
      description: "Comprehensive Infrastructure Analysis",
      details: "We conduct thorough site surveys to assess your current infrastructure, identify requirements, and plan optimal cable routes and hardware placement.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      step: 2,
      icon: Lightbulb,
      title: "Design & Planning",
      description: "Structured Cabling Design",
      details: "Our engineers create detailed cabling diagrams, select appropriate materials, and plan installation schedules to minimize business disruption.",
      color: "from-cyan-500 to-teal-500"
    },
    {
      step: 3,
      icon: Cog,
      title: "Installation & Implementation",
      description: "Professional Installation Services",
      details: "Expert installation of all cabling infrastructure and hardware components following industry standards and best practices.",
      color: "from-teal-500 to-green-500"
    },
    {
      step: 4,
      icon: TestTube,
      title: "Testing & Certification",
      description: "Quality Assurance & Compliance",
      details: "Comprehensive testing of all installed cables and hardware to ensure optimal performance and compliance with industry standards.",
      color: "from-green-500 to-emerald-500"
    },
    {
      step: 5,
      icon: Rocket,
      title: "Documentation & Handover",
      description: "Complete System Documentation",
      details: "Detailed documentation of all installations, including cable maps, hardware specifications, and maintenance guidelines.",
      color: "from-emerald-500 to-blue-500"
    },
    {
      step: 6,
      icon: Headphones,
      title: "Maintenance & Support",
      description: "Ongoing Infrastructure Support",
      details: "Regular maintenance schedules, troubleshooting support, and hardware replacement services to ensure optimal performance.",
      color: "from-blue-500 to-purple-500"
    }
  ];

  const services = [
    {
      icon: Cable,
      title: "Structured Cabling Systems",
      description: "Professional installation of Cat6, Cat6A, and fiber optic cabling infrastructure",
      features: ["Cat6/Cat6A Installation", "Fiber Optic Cabling", "Cable Management", "Patch Panel Setup"],
      benefits: "Future-proof connectivity, organized infrastructure, optimal performance"
    },
    {
      icon: Server,
      title: "Server & Network Hardware Installation",
      description: "Professional setup and configuration of servers, switches, and network equipment",
      features: ["Server Rack Installation", "Network Switch Setup", "UPS Configuration", "Cable Management"],
      benefits: "Reliable hardware setup, proper ventilation, organized installations"
    },
    {
      icon: Wifi,
      title: "Wireless Access Point Installation",
      description: "Strategic placement and configuration of wireless access points for optimal coverage",
      features: ["Site Survey", "AP Placement", "Coverage Optimization", "Security Configuration"],
      benefits: "Seamless wireless coverage, optimal signal strength, secure connections"
    },
    {
      icon: Monitor,
      title: "Audio/Visual System Installation",
      description: "Professional installation of conference room AV systems and digital displays",
      features: ["Conference Room Setup", "Digital Signage", "Video Conferencing", "Sound Systems"],
      benefits: "Enhanced communication, professional presentations, seamless collaboration"
    },
    {
      icon: Shield,
      title: "Security System Installation",
      description: "Installation of CCTV cameras, access control systems, and security infrastructure",
      features: ["CCTV Installation", "Access Control", "Alarm Systems", "Security Cabling"],
      benefits: "Enhanced security, controlled access, comprehensive monitoring"
    },
    {
      icon: Settings,
      title: "Maintenance & Troubleshooting",
      description: "Ongoing maintenance and rapid troubleshooting of installed infrastructure",
      features: ["Preventive Maintenance", "Cable Testing", "Hardware Diagnostics", "Emergency Repairs"],
      benefits: "Minimized downtime, extended equipment life, rapid issue resolution"
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Professional Installation",
      description: "Certified technicians ensure all installations meet industry standards and best practices for optimal performance."
    },
    {
      icon: Shield,
      title: "Quality Materials",
      description: "We use only premium-grade cables, connectors, and hardware from trusted manufacturers for long-lasting reliability."
    },
    {
      icon: TrendingUp,
      title: "Future-Proof Solutions",
      description: "Infrastructure designed to support current needs while accommodating future technology upgrades and expansions."
    },
    {
      icon: Users,
      title: "Minimal Disruption",
      description: "Careful planning and execution ensure installations are completed with minimal impact on your daily operations."
    }
  ];

  const industries = [
    { name: "Corporate Offices", icon: TrendingUp },
    { name: "Healthcare Facilities", icon: Shield },
    { name: "Educational Institutions", icon: Users },
    { name: "Manufacturing Plants", icon: Cog },
    { name: "Retail Stores", icon: Globe },
    { name: "Government Buildings", icon: Award },
    { name: "Hotels & Hospitality", icon: Star },
    { name: "Data Centers", icon: Server }
  ];

  const cableTypes = [
    { name: "Cat6 Ethernet", category: "Data Cabling", speed: "1 Gbps" },
    { name: "Cat6A Ethernet", category: "High-Speed Data", speed: "10 Gbps" },
    { name: "Fiber Optic", category: "Long Distance", speed: "100+ Gbps" },
    { name: "Coaxial Cable", category: "Video/CCTV", speed: "Various" },
    { name: "Audio Cable", category: "Sound Systems", speed: "N/A" },
    { name: "Power Cable", category: "Electrical", speed: "N/A" }
  ];

  const hardwareTypes = [
    { name: "Network Switches", category: "Networking" },
    { name: "Wireless Access Points", category: "Wireless" },
    { name: "Server Racks", category: "Infrastructure" },
    { name: "Patch Panels", category: "Connectivity" },
    { name: "UPS Systems", category: "Power" },
    { name: "Security Cameras", category: "Surveillance" }
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
              <div className="inline-flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Cable className="w-4 h-4 mr-2" />
                Cabling & Hardware Installation
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Professional Infrastructure. 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600"> Expert Installation.</span> Reliable Performance.
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Build a solid foundation for your technology infrastructure with professional cabling and hardware installation services. From structured cabling to server setup, we ensure your physical infrastructure supports optimal performance and future growth.
              </p>

              {/* Key Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
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
                <a href="#contact" className="inline-flex items-center justify-center bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-200 hover:scale-105 hover:shadow-lg">
                  Schedule a Site Survey
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
                  src="https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Professional network cabling and hardware installation" 
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
                    <div className="text-sm font-semibold text-gray-900">Certified Install</div>
                    <div className="text-xs text-gray-500">Industry Standards</div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-6 bottom-16 bg-white p-4 rounded-lg shadow-lg z-20 hidden sm:block">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">25+</div>
                  <div className="text-xs text-gray-500">Years Experience</div>
                </div>
              </div>

              {/* Background Shapes */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl opacity-20 -z-10"></div>
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
              Cabling & Hardware Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive infrastructure installation services designed to provide reliable, scalable, and future-proof solutions for your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 group">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
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
                <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-4">
                  <p className="text-sm font-semibold text-orange-800 mb-1">Benefits:</p>
                  <p className="text-sm text-orange-700">{service.benefits}</p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-500 to-red-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cable Types & Hardware */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Cable Types & Hardware We Install
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with industry-standard cables and hardware from leading manufacturers to ensure optimal performance and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Cable Types */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Cable Types</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {cableTypes.map((cable, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group border border-gray-100">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Cable className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">{cable.name}</h4>
                    <p className="text-sm text-gray-600 mb-1">{cable.category}</p>
                    <p className="text-xs text-orange-600 font-semibold">Speed: {cable.speed}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Hardware Types */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Hardware Types</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {hardwareTypes.map((hardware, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group border border-gray-100">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Server className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">{hardware.name}</h4>
                    <p className="text-sm text-gray-600">{hardware.category}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our 6-Step Installation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures your cabling and hardware installations are completed professionally, on time, and to the highest standards.
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

      {/* Industries Served */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our cabling and hardware installation services are successfully deployed across diverse industries, each with customized solutions for specific requirements.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <industry.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900">{industry.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Installation Services */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Installation Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the difference of working with certified professionals who deliver quality installations that stand the test of time.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6">
                  <Award className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">Certified Technicians</h3>
                <p className="text-gray-600 mb-6">Our team holds industry certifications and brings years of hands-on installation experience.</p>
                
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Industry certified professionals
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    25+ years combined experience
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Ongoing training and certification
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Assurance</h3>
                <p className="text-gray-600 mb-6">Every installation is thoroughly tested and certified to ensure optimal performance and compliance.</p>
                
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Comprehensive testing protocols
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Industry standard compliance
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Performance certification
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">Future-Proof Solutions</h3>
                <p className="text-gray-600 mb-6">Infrastructure designed to support current needs while accommodating future technology upgrades.</p>
                
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Scalable infrastructure design
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Easy expansion capabilities
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Technology upgrade support
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Upgrade Your Infrastructure?
          </h2>
          <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
            Let's discuss your cabling and hardware needs and design a professional installation that supports your business operations and growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="inline-flex items-center bg-white text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              Schedule a Site Survey
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a href="#services" className="inline-flex items-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors">
              View Our Services
            </a>
          </div>

          {/* Contact Info */}
          <div className="mt-12 pt-8 border-t border-white border-opacity-20">
            <p className="text-white opacity-90 mb-4">
              Have questions about cabling and hardware installation? Our installation specialists are here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="mailto:install@binapulse.com" className="text-white hover:text-gray-200 transition-colors flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                install@binapulse.com
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

export default CablingHardwarePage;