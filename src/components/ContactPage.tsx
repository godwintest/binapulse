import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, Clock, Facebook, Linkedin, Instagram, Twitter, MessageCircle, CheckCircle, User, Building, Briefcase, MessageSquare } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    timeline: '',
    message: ''
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
        company: '',
        service: '',
        budget: '',
        timeline: '',
        message: ''
      });
    }, 2000);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our team",
      contact: "+233 55 412 9334",
      action: "Call Now",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us a detailed message",
      contact: "info@binapulse.com",
      action: "Send Email",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Quick chat on WhatsApp",
      contact: "+233 55 412 9334",
      action: "Chat Now",
      color: "from-green-600 to-green-500"
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 2:00 PM" },
    { day: "Sunday", hours: "Closed" }
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
              Let's Build Something 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600"> Amazing Together</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Transform your business with cutting-edge technology solutions. Our expert team is ready to understand your challenges, explore opportunities, and deliver results that exceed expectations.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-teal-600 mb-2">200+</div>
              <div className="text-gray-600">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-purple-600 mb-2">15+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>

          {/* Quick Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <div key={index} className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group border border-gray-100 overflow-hidden">
                {/* Background Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                      <method.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-teal-600 transition-all duration-300">
                    {method.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {method.description}
                  </p>
                  
                  <div className="mb-6">
                    <div className="bg-gray-50 rounded-xl p-4 group-hover:bg-gray-100 transition-colors">
                      <p className="font-bold text-gray-900 text-lg">{method.contact}</p>
                      <p className="text-xs text-gray-500 mt-1">Available 24/7</p>
                    </div>
                  </div>
                  
                  <button className={`w-full bg-gradient-to-r ${method.color} text-white px-6 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center group-hover:shadow-2xl`}>
                    <method.icon className="mr-3 h-5 w-5" />
                    {method.action}
                  </button>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500 -z-10"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-15 group-hover:opacity-30 transition-opacity duration-500 -z-10"></div>
                  <method.icon className="h-8 w-8 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-blue-600 to-teal-600 rounded-3xl p-8 lg:p-10 text-white relative overflow-hidden h-full">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full transform translate-x-16 -translate-y-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full transform -translate-x-12 translate-y-12"></div>

                <div className="relative z-10">
                  <h2 className="text-2xl lg:text-3xl font-bold mb-6">Let's Start a Conversation</h2>
                  <p className="text-lg opacity-90 mb-8">
                    Our team is ready to discuss your technology needs and provide tailored solutions for your business growth.
                  </p>

                  {/* Contact Details */}
                  <div className="space-y-6 mb-8">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="font-semibold">Head Office</p>
                        <p className="opacity-90">Accra, Ghana</p>
                        <p className="opacity-75 text-sm">West Africa</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="font-semibold">Phone</p>
                        <p className="opacity-90">+233 55 412 9334</p>
                        <p className="opacity-75 text-sm">24/7 Support Available</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="font-semibold">Email</p>
                        <p className="opacity-90">info@binapulse.com</p>
                        <p className="opacity-75 text-sm">Response within 24 hours</p>
                      </div>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="mb-8">
                    <div className="flex items-center mb-4">
                      <Clock className="h-6 w-6 mr-3" />
                      <h3 className="font-semibold text-lg">Business Hours</h3>
                    </div>
                    <div className="space-y-2">
                      {officeHours.map((schedule, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="opacity-90">{schedule.day}</span>
                          <span className="font-semibold">{schedule.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Social Media */}
                  <div className="border-t border-white border-opacity-20 pt-6">
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
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg">
                <div className="mb-8">
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    Request Your Free Consultation
                  </h2>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you within 24 hours with a customized solution for your business needs.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
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
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        <Phone className="inline h-4 w-4 mr-1" />
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="+233 24 123 4567"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                        <Building className="inline h-4 w-4 mr-1" />
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  {/* Project Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                        <Briefcase className="inline h-4 w-4 mr-1" />
                        Service of Interest *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      >
                        <option value="">Select a service</option>
                        <option value="custom-software">Custom Software Development</option>
                        <option value="ai-agents">AI Agent Development</option>
                        <option value="network-infrastructure">Network Infrastructure</option>
                        <option value="cabling-hardware">Cabling & Hardware Installation</option>
                        <option value="it-consultation">IT Consultation</option>
                        <option value="awoyaa">Awoyaa ERP</option>
                        <option value="edziban">Edziban Restaurant ERP</option>
                        <option value="erkamka">Erkamka Email Marketing</option>
                        <option value="multiple">Multiple Services</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 mb-2">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-5k">Under $5,000</option>
                        <option value="5k-15k">$5,000 - $15,000</option>
                        <option value="15k-50k">$15,000 - $50,000</option>
                        <option value="50k-100k">$50,000 - $100,000</option>
                        <option value="over-100k">Over $100,000</option>
                        <option value="discuss">Prefer to discuss</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="timeline" className="block text-sm font-semibold text-gray-700 mb-2">
                      Project Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-3-months">1-3 months</option>
                      <option value="3-6-months">3-6 months</option>
                      <option value="6-12-months">6-12 months</option>
                      <option value="over-12-months">Over 12 months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      <MessageSquare className="inline h-4 w-4 mr-1" />
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical"
                      placeholder="Tell us about your project, challenges, goals, and any specific requirements..."
                    ></textarea>
                  </div>

                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2" />
                      Thank you for your inquiry! We'll get back to you within 24 hours with a customized proposal.
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                      There was an error submitting your form. Please try again or contact us directly.
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
                        Submitting...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>

                  <p className="text-sm text-gray-600 text-center">
                    We respect your privacy and will never share your information with third parties. 
                    By submitting this form, you agree to our privacy policy.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quick answers to common questions about our services and processes.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3">How quickly can you start my project?</h3>
                  <p className="text-gray-600">Most projects can begin within 1-2 weeks after contract signing and initial requirements gathering.</p>
                </div>
                
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3">Do you provide ongoing support?</h3>
                  <p className="text-gray-600">Yes, we offer comprehensive support packages including maintenance, updates, and 24/7 technical assistance.</p>
                </div>
                
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3">Can you work with our existing systems?</h3>
                  <p className="text-gray-600">Absolutely. We specialize in integrating new solutions with existing infrastructure and legacy systems.</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3">What's included in a free consultation?</h3>
                  <p className="text-gray-600">A comprehensive assessment of your needs, technology recommendations, project timeline, and detailed cost estimate.</p>
                </div>
                
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3">Do you work with international clients?</h3>
                  <p className="text-gray-600">Yes, we serve clients across Africa and internationally, with remote collaboration tools and local support networks.</p>
                </div>
                
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="font-bold text-gray-900 mb-3">What payment options do you accept?</h3>
                  <p className="text-gray-600">We accept various payment methods including bank transfers, mobile money, and international payment platforms.</p>
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
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have accelerated their growth with our innovative technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              <Phone className="mr-2 h-5 w-5" />
              Call +233 55 412 9334
            </a>
            <a href="#" className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;