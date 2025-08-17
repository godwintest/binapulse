import React from 'react';
import { Globe, Users, Headphones, TrendingUp } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: Globe,
      title: "Locally Built, Globally Aligned",
      description: "Deep understanding of African business challenges with international quality standards and best practices.",
      stats: "10+ Years Local Experience"
    },
    {
      icon: Users,
      title: "End-to-End Expertise", 
      description: "Complete technology solutions from initial consultation to deployment, training, and ongoing maintenance.",
      stats: "Full Stack Capabilities"
    },
    {
      icon: Headphones,
      title: "Support That Stays",
      description: "Local community tech representatives provide on-ground support, ensuring you're never alone in your digital journey.",
      stats: "24/7 Local Support"
    },
    {
      icon: TrendingUp,
      title: "Solutions That Scale",
      description: "Future-proof technology solutions designed to grow with your business, from startup to enterprise level.",
      stats: "500+ Scaling Businesses"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600"> Binapulse</span>?
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We're not just another tech company. We're your strategic partner in digital transformation, combining local insights with global expertise.
            </p>

            <div className="space-y-8">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start group">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <reason.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="ml-6">
                    <div className="flex items-center mb-2">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {reason.title}
                      </h3>
                      <span className="ml-4 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {reason.stats}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a href="#contact" className="inline-flex items-center bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-200 hover:scale-105 hover:shadow-lg">
                Experience the Difference
              </a>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative z-10">
              <img 
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Team collaboration and technology" 
                className="w-full h-[600px] object-cover rounded-3xl shadow-2xl"
              />
            </div>

            {/* Floating Success Cards */}
            <div className="absolute top-8 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 hidden sm:block">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
            </div>

            <div className="absolute bottom-8 -right-6 bg-white p-6 rounded-2xl shadow-xl z-20 hidden sm:block">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">200+ Projects</div>
                  <div className="text-sm text-gray-600">Successfully Delivered</div>
                </div>
              </div>
            </div>

            {/* Background Decorations */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-teal-400 to-blue-500 rounded-3xl opacity-20 -z-10"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-3xl opacity-20 -z-10"></div>
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent rounded-3xl z-10 pointer-events-none"></div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-teal-600 rounded-3xl p-8 lg:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">Our Track Record Speaks</h3>
            <p className="text-lg opacity-90">Numbers that reflect our commitment to excellence and client success</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold mb-2">500+</div>
              <div className="text-sm lg:text-base opacity-90">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold mb-2">200+</div>
              <div className="text-sm lg:text-base opacity-90">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold mb-2">15+</div>
              <div className="text-sm lg:text-base opacity-90">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold mb-2">99.9%</div>
              <div className="text-sm lg:text-base opacity-90">Uptime Guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;