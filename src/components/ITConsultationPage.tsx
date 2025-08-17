import React from 'react';
import { Users, Target, TrendingUp, Shield, CheckCircle, ArrowRight, Lightbulb, Cog, TestTube, Rocket, Headphones, Globe, Zap, Award, Star, Phone, Mail, Clock, Settings, Monitor, Database, Cpu, Network, BarChart3, FileText, Search, Presentation as PresentationChart } from 'lucide-react';

const ITConsultationPage: React.FC = () => {
  const consultationProcess = [
    {
      step: 1,
      icon: Search,
      title: "IT Assessment & Discovery",
      description: "Comprehensive Technology Audit",
      details: "We conduct thorough assessments of your current IT infrastructure, processes, and business objectives to identify opportunities and challenges.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      step: 2,
      icon: Target,
      title: "Strategic Planning",
      description: "Technology Roadmap Development",
      details: "Our experts develop customized IT strategies aligned with your business goals, including technology roadmaps and implementation timelines.",
      color: "from-cyan-500 to-teal-500"
    },
    {
      step: 3,
      icon: PresentationChart,
      title: "Solution Design",
      description: "Architecture & Implementation Plan",
      details: "We design comprehensive solutions and create detailed implementation plans with clear milestones, budgets, and resource requirements.",
      color: "from-teal-500 to-green-500"
    },
    {
      step: 4,
      icon: Cog,
      title: "Implementation Support",
      description: "Guided Technology Deployment",
      details: "Our team provides hands-on support during implementation, ensuring smooth deployment and minimal business disruption.",
      color: "from-green-500 to-emerald-500"
    },
    {
      step: 5,
      icon: BarChart3,
      title: "Performance Monitoring",
      description: "Continuous Optimization",
      details: "We monitor system performance, track KPIs, and provide ongoing optimization recommendations to maximize ROI.",
      color: "from-emerald-500 to-blue-500"
    },
    {
      step: 6,
      icon: Headphones,
      title: "Ongoing Advisory",
      description: "Strategic Technology Partnership",
      details: "Continuous strategic guidance, technology updates, and advisory services to keep your IT aligned with business evolution.",
      color: "from-blue-500 to-purple-500"
    }
  ];

  const consultationServices = [
    {
      icon: Target,
      title: "IT Strategy & Planning",
      description: "Develop comprehensive IT strategies that align technology investments with business objectives",
      features: ["Technology Roadmapping", "Budget Planning", "Risk Assessment", "ROI Analysis"],
      benefits: "Aligned IT investments, reduced costs, improved efficiency"
    },
    {
      icon: Shield,
      title: "Cybersecurity Assessment",
      description: "Comprehensive security audits and strategic cybersecurity planning for robust protection",
      features: ["Security Audits", "Vulnerability Assessment", "Compliance Planning", "Incident Response"],
      benefits: "Enhanced security posture, regulatory compliance, risk mitigation"
    },
    {
      icon: TrendingUp,
      title: "Digital Transformation",
      description: "Guide your organization through digital transformation initiatives and technology modernization",
      features: ["Process Digitization", "Cloud Migration", "Automation Strategy", "Change Management"],
      benefits: "Improved productivity, competitive advantage, operational efficiency"
    },
    {
      icon: Database,
      title: "Data Strategy & Analytics",
      description: "Develop data strategies and implement analytics solutions for data-driven decision making",
      features: ["Data Architecture", "Analytics Implementation", "BI Strategy", "Data Governance"],
      benefits: "Better insights, informed decisions, competitive intelligence"
    },
    {
      icon: Globe,
      title: "Cloud Strategy & Migration",
      description: "Strategic cloud planning and migration services for scalable, cost-effective infrastructure",
      features: ["Cloud Assessment", "Migration Planning", "Cost Optimization", "Hybrid Solutions"],
      benefits: "Reduced infrastructure costs, improved scalability, enhanced flexibility"
    },
    {
      icon: Users,
      title: "IT Governance & Compliance",
      description: "Establish IT governance frameworks and ensure compliance with industry regulations",
      features: ["Governance Framework", "Policy Development", "Compliance Audits", "Risk Management"],
      benefits: "Regulatory compliance, reduced risk, improved governance"
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Strategic Alignment",
      description: "Ensure your IT investments directly support and accelerate your business objectives and growth plans."
    },
    {
      icon: Shield,
      title: "Risk Mitigation",
      description: "Identify and address potential IT risks before they impact your business operations or security."
    },
    {
      icon: TrendingUp,
      title: "Cost Optimization",
      description: "Optimize IT spending through strategic planning, vendor management, and efficient resource allocation."
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description: "Access to experienced IT professionals and industry best practices without full-time hiring costs."
    }
  ];

  const industries = [
    { name: "Financial Services", icon: TrendingUp },
    { name: "Healthcare", icon: Shield },
    { name: "Manufacturing", icon: Cog },
    { name: "Retail & E-commerce", icon: Globe },
    { name: "Education", icon: Users },
    { name: "Government", icon: Award },
    { name: "Professional Services", icon: Lightbulb },
    { name: "Non-Profit Organizations", icon: Star }
  ];

  const consultingAreas = [
    { name: "IT Strategy", category: "Strategic Planning", icon: Target },
    { name: "Cybersecurity", category: "Security & Compliance", icon: Shield },
    { name: "Cloud Computing", category: "Infrastructure", icon: Globe },
    { name: "Data Analytics", category: "Business Intelligence", icon: BarChart3 },
    { name: "Digital Transformation", category: "Modernization", icon: Rocket },
    { name: "IT Governance", category: "Management", icon: Settings }
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
              <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Users className="w-4 h-4 mr-2" />
                IT Consultation & Advisory
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Strategic Technology. 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600"> Expert Guidance.</span> Business Growth.
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Navigate the complex technology landscape with confidence. Our IT consultation services provide strategic guidance, expert recommendations, and actionable roadmaps to align your technology investments with business success.
              </p>

              {/* Key Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
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
                <a href="#contact" className="inline-flex items-center justify-center bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-green-700 hover:to-teal-700 transition-all duration-200 hover:scale-105 hover:shadow-lg">
                  Schedule a Strategic IT Assessment
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
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="IT consultation and strategic planning session" 
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
                    <div className="text-sm font-semibold text-gray-900">Strategic Planning</div>
                    <div className="text-xs text-gray-500">Expert Guidance</div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-6 bottom-16 bg-white p-4 rounded-lg shadow-lg z-20 hidden sm:block">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">200+</div>
                  <div className="text-xs text-gray-500">Successful Projects</div>
                </div>
              </div>

              {/* Background Shapes */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-green-400 to-teal-500 rounded-2xl opacity-20 -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl opacity-20 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What is IT Consultation */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              What is IT Consultation?
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              IT Consultation is strategic advisory service that helps businesses make informed technology decisions, optimize IT investments, and align technology initiatives with business objectives. Our experts provide guidance on everything from infrastructure planning to digital transformation.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-6">
                <Target className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Strategic</h3>
                <p className="text-gray-600">Align technology with business goals and objectives</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6">
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Expert</h3>
                <p className="text-gray-600">Access to experienced IT professionals and best practices</p>
              </div>
              
              <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-2xl p-6">
                <TrendingUp className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Results-Driven</h3>
                <p className="text-gray-600">Focus on measurable outcomes and business value</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Services */}
      <section id="services" className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              IT Consultation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive IT advisory services designed to help you make informed technology decisions and maximize your IT investments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {consultationServices.map((service, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Areas:</h4>
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
                <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-4">
                  <p className="text-sm font-semibold text-green-800 mb-1">Expected Outcomes:</p>
                  <p className="text-sm text-green-700">{service.benefits}</p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-green-500 to-teal-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Process */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Consultation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven 6-step approach that ensures you receive strategic guidance tailored to your business needs and technology objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {consultationProcess.map((process, index) => (
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

      {/* Consulting Areas */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Our Areas of Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide strategic guidance across all major areas of information technology and business systems.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {consultingAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <area.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{area.name}</h3>
                <p className="text-sm text-gray-600">{area.category}</p>
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
              Our IT consultation services are successfully deployed across diverse industries, each with customized strategies for specific sector requirements.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-green-50 rounded-2xl p-6 text-center hover:from-green-50 hover:to-teal-50 transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <industry.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900">{industry.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Consultation Services */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-green-50 via-white to-teal-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our IT Consultation Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the difference of working with strategic IT advisors who understand your business and deliver actionable recommendations.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Award className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">Proven Expertise</h3>
                <p className="text-gray-600 mb-6">Our consultants bring decades of combined experience across various industries and technology domains.</p>
                
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Industry certified professionals
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    15+ years combined experience
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Cross-industry expertise
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">Actionable Recommendations</h3>
                <p className="text-gray-600 mb-6">We provide clear, practical recommendations with detailed implementation roadmaps and success metrics.</p>
                
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Detailed implementation plans
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Clear success metrics
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Ongoing support available
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-green-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">Measurable Results</h3>
                <p className="text-gray-600 mb-6">Our consultation services deliver measurable business value and return on investment.</p>
                
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    ROI-focused recommendations
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Performance tracking
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Continuous optimization
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-green-600 to-teal-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Optimize Your IT Strategy?
          </h2>
          <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
            Let's discuss your technology challenges and develop a strategic roadmap that aligns IT with your business objectives and drives growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="inline-flex items-center bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              Schedule a Strategic IT Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a href="#services" className="inline-flex items-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
              View Our Services
            </a>
          </div>

          {/* Contact Info */}
          <div className="mt-12 pt-8 border-t border-white border-opacity-20">
            <p className="text-white opacity-90 mb-4">
              Have questions about IT strategy? Our consultation specialists are here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="mailto:consulting@binapulse.com" className="text-white hover:text-gray-200 transition-colors flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                consulting@binapulse.com
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

export default ITConsultationPage;