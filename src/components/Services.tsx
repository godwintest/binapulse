import React from 'react';
import { Code, Bot, Network, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Code,
      title: "Custom Software Development & AI Agent Development",
      description: "Tailored software solutions and intelligent AI agents that automate your business processes and scale with your growth.",
      features: ["Custom Web & Mobile Apps", "AI-Powered Automation", "ERP Systems", "E-commerce Solutions"],
      link: "#custom-software",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Network,
      title: "Network and IT Design and Setup",
      description: "Complete IT infrastructure design, implementation, and maintenance services to keep your business connected and secure.",
      features: ["Network Architecture", "Server Setup", "Security Implementation", "Cloud Integration"],
      link: "#network-infrastructure",
      color: "from-teal-500 to-green-500"
    },
    {
      icon: Bot,
      title: "IT & Network Consultation",
      description: "Strategic technology advisory services to align your IT investments with business objectives and drive digital transformation.",
      features: ["Technology Strategy", "Infrastructure Assessment", "Digital Transformation", "Cybersecurity Planning"],
      link: "#it-consultation",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Core Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth and digital transformation journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              {/* Service Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 h-full">
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Link */}
                <a 
                  href={service.link}
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group-hover:translate-x-1"
                >
                  Learn More 
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}></div>
              </div>

              {/* Background Decoration */}
              <div className={`absolute -inset-1 bg-gradient-to-br ${service.color} rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300 -z-10`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Ready to transform your business with our technology solutions?
          </p>
          <a href="#contact" className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 hover:scale-105">
            Get Your Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;