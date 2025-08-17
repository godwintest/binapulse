import React, { useState } from 'react';
import { Users, MapPin, DollarSign, CheckCircle, Send, User, Mail, Phone, Building, FileText, Target, TrendingUp, Award, Globe, Handshake, Briefcase, Clock, Star } from 'lucide-react';

const CareersPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    roleType: '',
    experience: '',
    motivation: '',
    availability: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        location: '',
        roleType: '',
        experience: '',
        motivation: '',
        availability: ''
      });
    }, 2000);
  };

  const roles = [
    {
      title: "Binapulse Agents",
      type: "Individual",
      icon: User,
      description: "Join our network of individual representatives promoting innovative technology solutions across Ghana.",
      color: "from-blue-500 to-cyan-500",
      benefits: [
        "Flexible working hours",
        "Commission-based earnings",
        "Comprehensive training provided",
        "Work from anywhere in Ghana",
        "Direct support from head office"
      ]
    },
    {
      title: "Binapulse Partners",
      type: "Company",
      icon: Building,
      description: "Partner with us as a company to expand our reach and provide technology solutions in your region.",
      color: "from-teal-500 to-green-500",
      benefits: [
        "Higher commission rates",
        "Bulk setup opportunities",
        "Priority support access",
        "Co-marketing opportunities",
        "Exclusive territory rights"
      ]
    }
  ];

  const responsibilities = [
    {
      icon: Target,
      title: "Promote Software Solutions",
      description: "Introduce businesses to our ERP systems, AI agents, and custom software solutions"
    },
    {
      icon: Users,
      title: "Business Setup & Onboarding",
      description: "Guide new clients through system setup and initial configuration processes"
    },
    {
      icon: FileText,
      title: "Data & Product Entry",
      description: "Assist clients with initial data migration and product catalog setup"
    },
    {
      icon: Handshake,
      title: "Customer Support",
      description: "Provide both remote and in-person support to ensure client satisfaction"
    },
    {
      icon: CheckCircle,
      title: "System Compliance Audits",
      description: "Conduct regular checks to ensure systems are running optimally"
    },
    {
      icon: TrendingUp,
      title: "Continuous Learning",
      description: "Stay updated with new features and industry best practices"
    }
  ];

  const requirements = [
    "Basic computer knowledge and digital literacy",
    "High integrity and self-motivation",
    "Quick learning ability and adaptability",
    "Excellent communication skills in local languages",
    "Ability to work independently with minimal supervision",
    "Reliable internet connection and smartphone/computer access"
  ];

  const locations = [
    "Greater Accra Region", "Ashanti Region", "Western Region", "Central Region",
    "Eastern Region", "Volta Region", "Northern Region", "Upper East Region",
    "Upper West Region", "Brong-Ahafo Region"
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
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Join Our Growing Network Across Ghana
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Join Us in Powering 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600"> Business Growth</span> Across Ghana
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Become part of our mission to transform businesses across Ghana with innovative technology solutions. Whether you're an individual or a company, we have opportunities that fit your goals.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600">Businesses Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">50+</div>
                <div className="text-gray-600">Active Partners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">10</div>
                <div className="text-gray-600">Regions Covered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Roles */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Available Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the role that best fits your goals and capabilities. Both options offer excellent earning potential and growth opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {roles.map((role, index) => (
              <div key={index} className="group relative">
                <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 h-full">
                  {/* Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`inline-flex items-center bg-gradient-to-r ${role.color} text-white px-4 py-2 rounded-full text-sm font-semibold`}>
                      {role.type}
                    </div>
                    <div className="flex items-center text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${role.color} rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <role.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">{role.title}</h3>
                      <p className="text-lg text-gray-600">For {role.type}s</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {role.description}
                  </p>

                  {/* Benefits */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-4">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {role.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start text-sm text-gray-600">
                          <CheckCircle className={`w-4 h-4 mr-3 mt-0.5 flex-shrink-0 text-green-600`} />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <button 
                    onClick={() => {
                      setFormData({...formData, roleType: role.title});
                      document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`w-full bg-gradient-to-r ${role.color} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105`}
                  >
                    Apply for {role.title}
                  </button>

                  {/* Hover Effect */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${role.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsibilities */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Your Responsibilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              As a Binapulse representative, you'll play a crucial role in helping businesses across Ghana embrace digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {responsibilities.map((responsibility, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <responsibility.icon className="h-6 w-6 text-white" />
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {responsibility.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {responsibility.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compensation & Requirements */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Compensation */}
            <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-3xl p-8 lg:p-10 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full transform translate-x-16 -translate-y-16"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mb-6">
                  <DollarSign className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold mb-6">Compensation Structure</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Commission-Based Earnings</p>
                      <p className="opacity-90 text-sm">Earn competitive commissions on every successful setup</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Setup Fees</p>
                      <p className="opacity-90 text-sm">Immediate payment for each business onboarding</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Recurring Monthly Commissions</p>
                      <p className="opacity-90 text-sm">Ongoing earnings from active client subscriptions</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Performance Bonuses</p>
                      <p className="opacity-90 text-sm">Additional rewards for exceeding targets</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-white bg-opacity-20 rounded-lg">
                  <p className="font-semibold text-center">Potential Monthly Earnings</p>
                  <p className="text-2xl font-bold text-center mt-2">GHS 0 - 15,000+</p>
                  <p className="text-sm opacity-90 text-center">Based on performance and client base</p>
                </div>
              </div>
            </div>

            {/* Requirements */}
            <div className="bg-gradient-to-br from-blue-600 to-teal-600 rounded-3xl p-8 lg:p-10 text-white relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full transform -translate-x-12 translate-y-12"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mb-6">
                  <Award className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold mb-6">Requirements</h3>
                
                <div className="space-y-4">
                  {requirements.map((requirement, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                      <p className="opacity-90">{requirement}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-white bg-opacity-20 rounded-lg">
                  <p className="font-semibold mb-2">Training Provided</p>
                  <p className="text-sm opacity-90">
                    Comprehensive training on all our products, sales techniques, and customer support processes. No prior experience required!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Available Locations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're expanding across all regions of Ghana. Find opportunities in your area and help bring technology solutions to local businesses.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center">
                <MapPin className="h-8 w-8 text-white" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {locations.map((location, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-blue-50 transition-colors">
                  <Globe className="h-5 w-5 text-blue-600 mx-auto mb-2" />
                  <p className="font-semibold text-gray-900">{location}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">Don't see your location? We're always expanding!</p>
              <p className="text-sm text-gray-500">Contact us to discuss opportunities in your area.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Apply Now
              </h2>
              <p className="text-xl text-gray-600">
                Ready to join our team? Fill out the application form below and we'll get back to you within 48 hours.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      <User className="inline h-4 w-4 mr-1" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      <Mail className="inline h-4 w-4 mr-1" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      <Phone className="inline h-4 w-4 mr-1" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="+233 24 123 4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-2">
                      <MapPin className="inline h-4 w-4 mr-1" />
                      Location/Region *
                    </label>
                    <select
                      id="location"
                      name="location"
                      required
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select your region</option>
                      {locations.map((location, index) => (
                        <option key={index} value={location}>{location}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="roleType" className="block text-sm font-semibold text-gray-700 mb-2">
                      <Briefcase className="inline h-4 w-4 mr-1" />
                      Role Interest *
                    </label>
                    <select
                      id="roleType"
                      name="roleType"
                      required
                      value={formData.roleType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select role type</option>
                      <option value="Binapulse Agents">Binapulse Agents (Individual)</option>
                      <option value="Binapulse Partners">Binapulse Partners (Company)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="experience" className="block text-sm font-semibold text-gray-700 mb-2">
                      <Award className="inline h-4 w-4 mr-1" />
                      Relevant Experience
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select experience level</option>
                      <option value="no-experience">No prior experience</option>
                      <option value="some-sales">Some sales experience</option>
                      <option value="tech-background">Technology background</option>
                      <option value="business-owner">Business owner/manager</option>
                      <option value="extensive">Extensive relevant experience</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="availability" className="block text-sm font-semibold text-gray-700 mb-2">
                    <Clock className="inline h-4 w-4 mr-1" />
                    Availability
                  </label>
                  <select
                    id="availability"
                    name="availability"
                    value={formData.availability}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select availability</option>
                    <option value="full-time">Full-time (40+ hours/week)</option>
                    <option value="part-time">Part-time (20-40 hours/week)</option>
                    <option value="flexible">Flexible hours</option>
                    <option value="weekends">Weekends only</option>
                    <option value="evenings">Evenings only</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="motivation" className="block text-sm font-semibold text-gray-700 mb-2">
                    <FileText className="inline h-4 w-4 mr-1" />
                    Why do you want to join Binapulse? *
                  </label>
                  <textarea
                    id="motivation"
                    name="motivation"
                    required
                    rows={4}
                    value={formData.motivation}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical"
                    placeholder="Tell us about your motivation, goals, and how you plan to contribute to our mission..."
                  ></textarea>
                </div>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Thank you for your application! We'll review it and get back to you within 48 hours.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                    There was an error submitting your application. Please try again or contact us directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 hover:scale-[1.02] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Submitting Application...
                    </>
                  ) : (
                    <>
                      Submit Application
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </button>

                <p className="text-sm text-gray-600 text-center">
                  By submitting this application, you agree to our terms and conditions. We'll contact you within 48 hours to discuss next steps.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Have Questions?
          </h2>
          <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
            Our careers team is here to help you understand the opportunities and guide you through the application process.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:careers@binapulse.com" 
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <Mail className="mr-2 h-5 w-5" />
              careers@binapulse.com
            </a>
            <a 
              href="#" 
              className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              <Phone className="mr-2 h-5 w-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;