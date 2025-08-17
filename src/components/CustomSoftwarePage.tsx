import React from 'react';
import { Code, Users, Zap, Shield, CheckCircle, ArrowRight, Target, Lightbulb, Cog, TestTube, Rocket, Headphones, ShoppingBag, Sparkles, Hotel, Utensils, Mail, Truck, Phone, Monitor, Star, TrendingUp } from 'lucide-react';

const CustomSoftwarePage: React.FC = () => {
  const developmentProcess = [
    {
      step: 1,
      icon: Target,
      title: "Discovery",
      description: "Understanding Your Business Challenges",
      details: "We dive deep into your business processes, pain points, and goals to create a comprehensive understanding of your needs.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      step: 2,
      icon: Lightbulb,
      title: "Design",
      description: "Crafting Intuitive User Interfaces",
      details: "Our design team creates user-friendly interfaces that prioritize usability and align with your brand identity.",
      color: "from-cyan-500 to-teal-500"
    },
    {
      step: 3,
      icon: Cog,
      title: "Development",
      description: "Building with Modern Frameworks",
      details: "Using cutting-edge technologies and best practices to build scalable, secure, and high-performance applications.",
      color: "from-teal-500 to-green-500"
    },
    {
      step: 4,
      icon: TestTube,
      title: "Testing",
      description: "Rigorous Quality Assurance",
      details: "Comprehensive testing across all devices and scenarios to ensure flawless functionality and user experience.",
      color: "from-green-500 to-emerald-500"
    },
    {
      step: 5,
      icon: Rocket,
      title: "Deployment",
      description: "Secure Launch Process",
      details: "Smooth deployment with minimal downtime, including data migration and staff training for seamless transition.",
      color: "from-emerald-500 to-blue-500"
    },
    {
      step: 6,
      icon: Headphones,
      title: "Support & Maintenance",
      description: "Ongoing Partnership",
      details: "Continuous support, updates, and enhancements to ensure your software evolves with your business needs.",
      color: "from-blue-500 to-purple-500"
    }
  ];

  const industries = [
    {
      icon: ShoppingBag,
      title: "Retail & E-commerce",
      description: "Point-of-sale systems, inventory management, and online store solutions",
      features: ["POS Systems", "Inventory Control", "Customer Management", "Sales Analytics"]
    },
    {
      icon: Sparkles,
      title: "Beauty & Wellness",
      description: "Appointment booking, client management, and service tracking systems",
      features: ["Booking Systems", "Client Profiles", "Service Tracking", "Payment Processing"]
    },
    {
      icon: Hotel,
      title: "Hospitality & Food",
      description: "Restaurant management, hotel booking, and guest experience platforms",
      features: ["Reservation Systems", "Menu Management", "Guest Services", "Staff Coordination"]
    },
    {
      icon: Mail,
      title: "Marketing & Sales",
      description: "CRM systems, campaign management, and lead tracking solutions",
      features: ["Lead Management", "Campaign Tracking", "Customer Analytics", "Automation Tools"]
    },
    {
      icon: Truck,
      title: "Logistics & Delivery",
      description: "Fleet management, route optimization, and delivery tracking systems",
      features: ["Fleet Tracking", "Route Planning", "Delivery Management", "Real-time Updates"]
    },
    {
      icon: Phone,
      title: "Telecommunications & IT",
      description: "Network management, billing systems, and customer service platforms",
      features: ["Network Monitoring", "Billing Systems", "Service Management", "Customer Support"]
    }
  ];

  const technologies = [
    { name: "React & Next.js", category: "Frontend" },
    { name: "Node.js & Python", category: "Backend" },
    { name: "PostgreSQL & MongoDB", category: "Database" },
    { name: "AWS & Azure", category: "Cloud" },
    { name: "Docker & Kubernetes", category: "DevOps" },
    { name: "React Native & Flutter", category: "Mobile" }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Built Around Your Workflow",
      description: "Custom solutions designed to fit your exact business processes, not the other way around."
    },
    {
      icon: TrendingUp,
      title: "Scalable as You Grow",
      description: "Architecture that grows with your business, handling increased users and data seamlessly."
    },
    {
      icon: Shield,
      title: "Fast, Secure, and User-Friendly",
      description: "Optimized performance with enterprise-grade security and intuitive user interfaces."
    },
    {
      icon: Users,
      title: "Africa-Focused, Globally Applicable",
      description: "Solutions designed for African businesses but built to international standards."
    }
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
                <Code className="w-4 h-4 mr-2" />
                Custom Software Development
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Building Smart, 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600"> Scalable Solutions</span> That Fit Your Business
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your business operations with custom software solutions designed specifically for your workflow. From concept to deployment, we build applications that grow with your business and deliver measurable results.
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
                  Get a Free Quote for Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                
                <a href="#process" className="inline-flex items-center justify-center bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-gray-200 hover:border-gray-300 transition-all duration-200 hover:scale-105">
                  View Our Process
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Software development team working on custom solutions" 
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
                    <div className="text-sm font-semibold text-gray-900">Custom Built</div>
                    <div className="text-xs text-gray-500">For Your Business</div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-6 bottom-16 bg-white p-4 rounded-lg shadow-lg z-20 hidden sm:block">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">100%</div>
                  <div className="text-xs text-gray-500">Scalable Solutions</div>
                </div>
              </div>

              {/* Background Shapes */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-teal-400 to-blue-500 rounded-2xl opacity-20 -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl opacity-20 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section id="process" className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven 6-step approach that ensures your custom software solution is delivered on time, within budget, and exceeds your expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {developmentProcess.map((process, index) => (
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
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage the latest technologies and frameworks to build robust, scalable, and future-proof software solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Monitor className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{tech.name}</h3>
                <p className="text-sm text-gray-600">{tech.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From retail to telecommunications, we've built custom software solutions across diverse industries, understanding unique challenges and requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <industry.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {industry.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {industry.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {industry.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study - Awoyaa */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div>
                  <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <Star className="w-4 h-4 mr-2" />
                    Success Story
                  </div>
                  
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                    Awoyaa ERP: Transforming Retail Operations
                  </h2>
                  
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    We developed Awoyaa, a comprehensive ERP solution specifically designed for general shops and retail businesses across Africa. The system handles everything from inventory management to multi-location operations.
                  </p>

                  {/* Key Results */}
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                      <div className="text-sm text-gray-600">Active Businesses</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
                      <div className="text-sm text-gray-600">Efficiency Improvement</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600 mb-2">12</div>
                      <div className="text-sm text-gray-600">Countries Served</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-teal-600 mb-2">24/7</div>
                      <div className="text-sm text-gray-600">System Availability</div>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                      <span className="text-gray-700">Multi-business & multi-location support</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                      <span className="text-gray-700">Advanced inventory management with barcode support</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                      <span className="text-gray-700">Integrated POS, accounting, and CRM modules</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                      <span className="text-gray-700">Offline functionality and multi-currency support</span>
                    </div>
                  </div>

                  <a href="#solutions" className="inline-flex items-center bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-200 hover:scale-105">
                    Read Full Story
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </div>

                {/* Image */}
                <div className="relative">
                  <img 
                    src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Awoyaa ERP dashboard showing retail analytics" 
                    className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
                  />
                  
                  {/* Overlay Badge */}
                  <div className="absolute top-4 left-4 bg-white bg-opacity-90 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <div className="flex items-center">
                      <ShoppingBag className="h-5 w-5 text-blue-600 mr-2" />
                      <span className="font-semibold text-gray-900">Awoyaa ERP</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Build Your Custom Solution?
          </h2>
          <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and create a software solution that transforms your business operations and drives growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              Get a Free Quote for Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a href="#process" className="inline-flex items-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              View Our Process
            </a>
          </div>

          {/* Contact Info */}
          <div className="mt-12 pt-8 border-t border-white border-opacity-20">
            <p className="text-white opacity-90 mb-4">
              Have questions? Our development team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="mailto:info@binapulse.com" className="text-white hover:text-gray-200 transition-colors">
                info@binapulse.com
              </a>
              <span className="hidden sm:block text-white opacity-50">|</span>
              <a href="tel:+233241234567" className="text-white hover:text-gray-200 transition-colors">
                +233 24 123 4567
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomSoftwarePage;