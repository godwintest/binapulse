import React, { useState, useEffect } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Kwame Asante",
      position: "CEO, Asante Retail Group",
      company: "Multi-location retail chain",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      content: "Binapulse transformed our entire retail operation with Awoyaa. We now manage 12 locations seamlessly, and our inventory accuracy has improved by 95%. Their local support team is exceptional.",
      rating: 5,
      results: "95% inventory accuracy improvement",
      industry: "Retail"
    },
    {
      name: "Fatima Al-Hassan",
      position: "Operations Manager",
      company: "Golden Spoon Restaurant Chain",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      content: "Edziban revolutionized how we manage our restaurant operations. The kitchen integration and inventory control have reduced our food waste by 40% and improved customer satisfaction significantly.",
      rating: 5,
      results: "40% reduction in food waste",
      industry: "Food & Beverage"
    },
    {
      name: "David Osei",
      position: "IT Director",
      company: "Osei Manufacturing Ltd.",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      content: "The network infrastructure setup by Binapulse has been rock solid for 3 years. Their proactive monitoring and 24/7 support have kept our operations running smoothly without any major downtime.",
      rating: 5,
      results: "99.9% network uptime achieved",
      industry: "Manufacturing"
    },
    {
      name: "Aisha Mohammed",
      position: "Marketing Director",
      company: "Sahara Marketing Agency",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      content: "Erkamka has transformed our email marketing campaigns. The AI-powered suggestions and automation features have increased our client engagement rates by 60% and saved us countless hours.",
      rating: 5,
      results: "60% increase in engagement",
      industry: "Marketing"
    },
    {
      name: "Samuel Mensah",
      position: "Founder",
      company: "Tech Startup Incubator",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face",
      content: "Working with Binapulse on our custom software development was a game-changer. They understood our vision and delivered beyond expectations. Their ongoing support has been phenomenal.",
      rating: 5,
      results: "300% faster processes",
      industry: "Technology"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what business leaders across Africa say about their experience with Binapulse Technologies.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="relative max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full opacity-50 transform translate-x-32 -translate-y-32"></div>
            
            {/* Quote Icon */}
            <div className="absolute top-8 left-8 w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-600 rounded-2xl flex items-center justify-center">
              <Quote className="h-8 w-8 text-white" />
            </div>

            <div className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
                {/* Client Photo and Info */}
                <div className="text-center lg:text-left order-2 lg:order-1">
                  <div className="inline-block relative mb-6">
                    <img 
                      src={testimonials[currentTestimonial].image} 
                      alt={testimonials[currentTestimonial].name}
                      className="w-24 h-24 rounded-full object-cover mx-auto lg:mx-0 ring-4 ring-white shadow-lg"
                    />
                    {/* Industry Badge */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-teal-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {testimonials[currentTestimonial].industry}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {testimonials[currentTestimonial].name}
                  </h3>
                  <p className="text-gray-600 mb-2">
                    {testimonials[currentTestimonial].position}
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    {testimonials[currentTestimonial].company}
                  </p>
                  
                  {/* Rating */}
                  <div className="flex justify-center lg:justify-start mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Results Badge */}
                  <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                    {testimonials[currentTestimonial].results}
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="lg:col-span-2 order-1 lg:order-2">
                  <blockquote className="text-xl lg:text-2xl font-medium text-gray-900 leading-relaxed mb-8">
                    "{testimonials[currentTestimonial].content}"
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial 
                      ? 'bg-blue-600' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8">Trusted by leading businesses across Africa</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
            {/* Company logos would go here - using placeholder text for now */}
            <div className="text-gray-400 font-semibold text-lg">Asante Retail</div>
            <div className="text-gray-400 font-semibold text-lg">Golden Spoon</div>
            <div className="text-gray-400 font-semibold text-lg">Osei Manufacturing</div>
            <div className="text-gray-400 font-semibold text-lg">Sahara Marketing</div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Ready to join our satisfied clients?
          </p>
          <a href="#contact" className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 hover:scale-105">
            Start Your Success Story
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;