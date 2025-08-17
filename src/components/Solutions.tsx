import React from 'react';
import { ShoppingBag, Utensils, Mail, Settings, ExternalLink, Star } from 'lucide-react';

const Solutions: React.FC = () => {
  const solutions = [
    {
      icon: ShoppingBag,
      name: "Awoyaa",
      title: "ERP for General Shops & Retail",
      description: "Comprehensive business management solution designed for retail stores, supermarkets, and general merchandise businesses across Africa.",
      features: [
        "Multi-Business & Multi-Location Support",
        "Advanced User & Role Management", 
        "Smart Inventory Management",
        "POS & Sales Management",
        "Accounting & Financial Reporting",
        "Customer & Supplier Management"
      ],
      additionalFeatures: [
        "HRM Module",
        "CRM Integration", 
        "Barcode Support",
        "Offline Functionality",
        "Multi-Currency Support"
      ],
      badge: "Most Popular",
      color: "from-blue-500 to-cyan-500",
      link: "#"
    },
    {
      icon: Utensils,
      name: "Edziban", 
      title: "ERP for Restaurants and Food Businesses",
      description: "Specialized restaurant management system with table management, kitchen integration, and food-specific inventory control.",
      features: [
        "Table & Order Management",
        "Kitchen Display System Integration",
        "Ingredient-Level Inventory Control",
        "Menu Management & Pricing",
        "Customer & Loyalty Management",
        "Restaurant-Tailored POS System"
      ],
      additionalFeatures: [
        "Online Order Support",
        "Staff Management",
        "Sales Analytics",
        "Recipe Management",
        "Secure & Scalable"
      ],
      badge: "Industry Specific",
      color: "from-orange-500 to-red-500",
      link: "#"
    },
    {
      icon: Mail,
      name: "Erkamka",
      title: "Email Marketing Platform", 
      description: "Powerful email marketing automation platform with AI-powered suggestions and comprehensive analytics for businesses of all sizes.",
      features: [
        "Drag-and-Drop Campaign Builder",
        "Advanced Campaign Analytics",
        "Contact Management & Segmentation", 
        "Automated Email Workflows",
        "AI-Powered Content Suggestions",
        "GDPR & CAN-SPAM Compliance"
      ],
      additionalFeatures: [
        "Custom Templates",
        "A/B Testing",
        "Integration APIs",
        "Multi-language Support",
        "Real-time Reporting"
      ],
      badge: "AI-Powered",
      color: "from-purple-500 to-pink-500",
      link: "#"
    },
    {
      icon: Settings,
      name: "Daavi",
      title: "Custom Business Solutions",
      description: "Tailored business management solutions built specifically for your unique industry requirements and business processes.",
      features: [
        "Custom Workflow Design",
        "Industry-Specific Features",
        "Scalable Architecture", 
        "Integration Capabilities",
        "Advanced Reporting",
        "Multi-Platform Support"
      ],
      additionalFeatures: [
        "API Integration",
        "Cloud & On-Premise",
        "Mobile Apps",
        "24/7 Support",
        "Regular Updates"
      ],
      badge: "Fully Customizable",
      color: "from-teal-500 to-green-500", 
      link: "#"
    }
  ];

  return (
    <section id="solutions" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Solutions Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Proven software solutions designed for African businesses, from retail management to email marketing automation.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <div key={index} className="group relative">
              <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-gray-100 h-full">
                {/* Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`inline-flex items-center bg-gradient-to-r ${solution.color} text-white px-4 py-2 rounded-full text-sm font-semibold`}>
                    {solution.badge}
                  </div>
                  <div className="flex items-center text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Icon & Title */}
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <solution.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{solution.name}</h3>
                    <p className="text-lg text-gray-600">{solution.title}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {solution.description}
                </p>

                {/* Core Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Core Features:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm text-gray-600">
                        <div className={`w-2 h-2 bg-gradient-to-r ${solution.color} rounded-full mr-3 mt-2 flex-shrink-0`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Additional Features */}
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-3">Additional Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {solution.additionalFeatures.map((feature, featureIndex) => (
                      <span key={featureIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a 
                    href={solution.link}
                    className={`inline-flex items-center justify-center bg-gradient-to-r ${solution.color} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105`}
                  >
                    Learn More
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                  <a 
                    href="#contact"
                    className="inline-flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Request Demo
                  </a>
                </div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Our team specializes in creating bespoke software solutions tailored to your specific industry and business requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 hover:scale-105">
              Discuss Your Project
            </a>
            <a href="#custom-software" className="inline-flex items-center bg-gray-100 hover:bg-gray-200 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              View Development Process
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;