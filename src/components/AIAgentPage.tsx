import React from 'react';
import { Bot, Zap, Shield, Users, CheckCircle, ArrowRight, Target, Lightbulb, Cog, TestTube, Rocket, Headphones, Brain, MessageSquare, Clock, TrendingUp, Star, Monitor, Cpu, Database, Globe, Phone, Mail } from 'lucide-react';

const AIAgentPage: React.FC = () => {
  const developmentProcess = [
    {
      step: 1,
      icon: Target,
      title: "Discovery & Analysis",
      description: "Understanding Your Automation Needs",
      details: "We analyze your current workflows, identify repetitive tasks, and determine the best opportunities for AI automation to maximize efficiency.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      step: 2,
      icon: Lightbulb,
      title: "AI Strategy Design",
      description: "Crafting Intelligent Solutions",
      details: "Our AI experts design custom agent architectures that integrate seamlessly with your existing systems and business processes.",
      color: "from-cyan-500 to-teal-500"
    },
    {
      step: 3,
      icon: Cog,
      title: "Agent Development",
      description: "Building Smart Automation",
      details: "Using advanced AI frameworks and machine learning models to create intelligent agents that learn and adapt to your business needs.",
      color: "from-teal-500 to-green-500"
    },
    {
      step: 4,
      icon: TestTube,
      title: "Training & Testing",
      description: "Optimizing Performance",
      details: "Comprehensive training with your data and rigorous testing to ensure agents perform accurately and reliably in real-world scenarios.",
      color: "from-green-500 to-emerald-500"
    },
    {
      step: 5,
      icon: Rocket,
      title: "Deployment & Integration",
      description: "Seamless Implementation",
      details: "Smooth deployment with minimal disruption, including integration with existing systems and comprehensive staff training.",
      color: "from-emerald-500 to-blue-500"
    },
    {
      step: 6,
      icon: Headphones,
      title: "Monitoring & Optimization",
      description: "Continuous Improvement",
      details: "Ongoing monitoring, performance optimization, and updates to ensure your AI agents continue to deliver maximum value.",
      color: "from-blue-500 to-purple-500"
    }
  ];

  const useCases = [
    {
      icon: MessageSquare,
      title: "Customer Service Automation",
      description: "24/7 intelligent customer support with natural language processing",
      features: ["Multi-language Support", "Sentiment Analysis", "Escalation Management", "Knowledge Base Integration"],
      benefits: "Reduce response time by 90%, handle 80% of inquiries automatically"
    },
    {
      icon: Brain,
      title: "IT Workflow Automation",
      description: "Streamline IT operations with intelligent process automation",
      features: ["Ticket Routing", "System Monitoring", "Automated Diagnostics", "Preventive Maintenance"],
      benefits: "Cut IT response time by 70%, reduce manual tasks by 85%"
    },
    {
      icon: Database,
      title: "Data Processing & Analysis",
      description: "Intelligent data extraction, processing, and reporting automation",
      features: ["Document Processing", "Data Validation", "Report Generation", "Trend Analysis"],
      benefits: "Process data 10x faster, eliminate manual data entry errors"
    },
    {
      icon: Users,
      title: "Employee Onboarding",
      description: "Automated onboarding processes with personalized guidance",
      features: ["Document Collection", "Training Scheduling", "Progress Tracking", "Compliance Checks"],
      benefits: "Reduce onboarding time by 60%, improve new hire satisfaction"
    },
    {
      icon: TrendingUp,
      title: "Sales & Lead Management",
      description: "Intelligent lead qualification and sales process automation",
      features: ["Lead Scoring", "Follow-up Automation", "Pipeline Management", "Performance Analytics"],
      benefits: "Increase conversion rates by 40%, save 20 hours per week"
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Automated security monitoring and compliance management",
      features: ["Threat Detection", "Compliance Monitoring", "Risk Assessment", "Incident Response"],
      benefits: "Detect threats 24/7, ensure 100% compliance monitoring"
    }
  ];

  const technologies = [
    { name: "OpenAI GPT", category: "Language Models", icon: Brain },
    { name: "TensorFlow", category: "Machine Learning", icon: Cpu },
    { name: "Python & FastAPI", category: "Backend", icon: Cog },
    { name: "React & TypeScript", category: "Frontend", icon: Monitor },
    { name: "Vector Databases", category: "Data Storage", icon: Database },
    { name: "Cloud Platforms", category: "Infrastructure", icon: Globe }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "AI agents work around the clock, providing consistent service without breaks or downtime."
    },
    {
      icon: TrendingUp,
      title: "Cost Reduction",
      description: "Reduce operational costs by up to 60% through intelligent automation of repetitive tasks."
    },
    {
      icon: Zap,
      title: "Instant Response",
      description: "Provide immediate responses to customer inquiries and internal requests, improving satisfaction."
    },
    {
      icon: Shield,
      title: "Consistent Quality",
      description: "Eliminate human error and ensure consistent, high-quality outputs every time."
    }
  ];

  const industries = [
    "Financial Services", "Healthcare", "E-commerce", "Manufacturing", 
    "Education", "Real Estate", "Telecommunications", "Government"
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
              <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Bot className="w-4 h-4 mr-2" />
                AI Agent Development
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Automate Your Business, 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600"> Amplify Your Success</span> with AI Agents
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your operations with intelligent AI agents that handle repetitive tasks, provide 24/7 customer support, and streamline workflows. Built specifically for your business needs and integrated seamlessly with your existing systems.
              </p>

              {/* Key Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
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
                <a href="#contact" className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200 hover:scale-105 hover:shadow-lg">
                  Request a Demo of Our AI Capabilities
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                
                <a href="#use-cases" className="inline-flex items-center justify-center bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-gray-200 hover:border-gray-300 transition-all duration-200 hover:scale-105">
                  Explore Use Cases
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="AI and automation technology in modern business environment" 
                  className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                />
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -left-6 top-16 bg-white p-4 rounded-lg shadow-lg z-20 hidden sm:block">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Bot className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="ml-3">
                    <div className="text-sm font-semibold text-gray-900">AI Agent Active</div>
                    <div className="text-xs text-gray-500">24/7 Automation</div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-6 bottom-16 bg-white p-4 rounded-lg shadow-lg z-20 hidden sm:block">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">90%</div>
                  <div className="text-xs text-gray-500">Task Automation</div>
                </div>
              </div>

              {/* Background Shapes */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-purple-400 to-blue-500 rounded-2xl opacity-20 -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-teal-400 to-green-500 rounded-2xl opacity-20 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What are AI Agents */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              What are AI Agents?
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              AI Agents are intelligent software tools that can understand, learn, and act autonomously to complete tasks on behalf of your business. They combine the power of artificial intelligence with deep integration into your existing systems to provide 24/7 automated assistance.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6">
                <Brain className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Intelligent</h3>
                <p className="text-gray-600">Learn from data and improve performance over time</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
                <Zap className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Autonomous</h3>
                <p className="text-gray-600">Work independently without constant human supervision</p>
              </div>
              
              <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-2xl p-6">
                <Cog className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Integrated</h3>
                <p className="text-gray-600">Seamlessly connect with your existing business systems</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="use-cases" className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              AI Agent Use Cases
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how AI agents can transform different aspects of your business operations, from customer service to data processing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <useCase.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                  {useCase.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {useCase.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {useCase.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-4">
                  <p className="text-sm font-semibold text-purple-800 mb-1">Expected Results:</p>
                  <p className="text-sm text-purple-700">{useCase.benefits}</p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500 to-blue-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our AI Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven 6-step approach that ensures your AI agents are perfectly tailored to your business needs and deliver measurable results.
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
              AI Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage cutting-edge AI technologies and frameworks to build intelligent, scalable, and reliable AI agents.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <tech.icon className="h-6 w-6 text-white" />
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
              Our AI agents are successfully deployed across diverse industries, each with customized solutions for specific sector needs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 text-center hover:from-purple-50 hover:to-blue-50 transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Our AI Agent Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive AI agent development services tailored to your specific business requirements and objectives.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Bot className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">Custom AI Agent Development</h3>
                <p className="text-gray-600 mb-6">Build intelligent agents tailored to your specific business processes and requirements.</p>
                
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Custom workflow automation
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Natural language processing
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Machine learning integration
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Cog className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">Integration with Existing Systems</h3>
                <p className="text-gray-600 mb-6">Seamlessly integrate AI agents with your current software and business systems.</p>
                
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    API integration and development
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Database connectivity
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Legacy system compatibility
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-green-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">AI-Powered Workflow Automation</h3>
                <p className="text-gray-600 mb-6">Automate complex business workflows with intelligent decision-making capabilities.</p>
                
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Process optimization
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Intelligent routing
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Performance analytics
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
            Let's discuss how AI agents can automate your processes, reduce costs, and improve efficiency. Get a personalized demo of our AI capabilities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="inline-flex items-center bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              Request a Demo of Our AI Capabilities
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a href="#use-cases" className="inline-flex items-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
              Explore Use Cases
            </a>
          </div>

          {/* Contact Info */}
          <div className="mt-12 pt-8 border-t border-white border-opacity-20">
            <p className="text-white opacity-90 mb-4">
              Have questions about AI implementation? Our AI specialists are here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="mailto:ai@binapulse.com" className="text-white hover:text-gray-200 transition-colors flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                ai@binapulse.com
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

export default AIAgentPage;