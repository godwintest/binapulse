import React from 'react';
import { Cookie, Shield, Settings, Eye, Globe, Mail, Phone, Calendar, CheckCircle, AlertTriangle, Monitor, BarChart3, Target, Zap } from 'lucide-react';

const CookiePolicyPage: React.FC = () => {
  const lastUpdated = "January 15, 2025";

  const cookieTypes = [
    {
      id: "essential-cookies",
      title: "Essential Cookies",
      icon: Shield,
      color: "from-green-500 to-emerald-500",
      description: "These cookies are necessary for the website to function properly and cannot be disabled.",
      purpose: "Enable basic website functionality, security, and user authentication",
      examples: [
        "Session management cookies",
        "Security authentication tokens",
        "Load balancing cookies",
        "CSRF protection tokens"
      ],
      retention: "Session or up to 24 hours",
      canDisable: false
    },
    {
      id: "functional-cookies",
      title: "Functional Cookies",
      icon: Settings,
      color: "from-blue-500 to-cyan-500",
      description: "These cookies enhance functionality and personalization but are not essential for basic operation.",
      purpose: "Remember user preferences, settings, and provide enhanced features",
      examples: [
        "Language preference cookies",
        "Theme selection cookies",
        "Form auto-fill data",
        "Accessibility settings"
      ],
      retention: "Up to 1 year",
      canDisable: true
    },
    {
      id: "analytics-cookies",
      title: "Analytics Cookies",
      icon: BarChart3,
      color: "from-purple-500 to-pink-500",
      description: "These cookies help us understand how visitors interact with our website.",
      purpose: "Collect anonymous data about website usage and performance",
      examples: [
        "Google Analytics cookies",
        "Page view tracking",
        "User journey analysis",
        "Performance monitoring"
      ],
      retention: "Up to 2 years",
      canDisable: true
    },
    {
      id: "marketing-cookies",
      title: "Marketing Cookies",
      icon: Target,
      color: "from-orange-500 to-red-500",
      description: "These cookies are used to deliver relevant advertisements and track campaign effectiveness.",
      purpose: "Personalize advertising and measure marketing campaign performance",
      examples: [
        "Ad targeting cookies",
        "Conversion tracking pixels",
        "Social media integration",
        "Remarketing tags"
      ],
      retention: "Up to 1 year",
      canDisable: true
    }
  ];

  const thirdPartyServices = [
    {
      name: "Google Analytics",
      purpose: "Website analytics and user behavior tracking",
      cookies: ["_ga", "_gid", "_gat"],
      retention: "Up to 2 years",
      privacyPolicy: "https://policies.google.com/privacy"
    },
    {
      name: "Google Tag Manager",
      purpose: "Tag and script management",
      cookies: ["_gtm"],
      retention: "Session",
      privacyPolicy: "https://policies.google.com/privacy"
    },
    {
      name: "Facebook Pixel",
      purpose: "Social media integration and advertising",
      cookies: ["_fbp", "fr"],
      retention: "Up to 90 days",
      privacyPolicy: "https://www.facebook.com/privacy/policy"
    },
    {
      name: "LinkedIn Insight Tag",
      purpose: "Professional network integration and B2B advertising",
      cookies: ["li_gc", "lidc"],
      retention: "Up to 2 years",
      privacyPolicy: "https://www.linkedin.com/legal/privacy-policy"
    }
  ];

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      contact: "privacy@binapulse.com",
      description: "For cookie and privacy-related inquiries"
    },
    {
      icon: Phone,
      title: "Phone",
      contact: "+233 24 123 4567",
      description: "Speak directly with our privacy team"
    },
    {
      icon: Mail,
      title: "Postal Address",
      contact: "Binapulse Technologies, Accra, Ghana",
      description: "For formal privacy notices and correspondence"
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
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Cookie className="w-4 h-4 mr-2" />
              Cookie Policy
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Cookie 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600"> Policy</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              This Cookie Policy explains how Binapulse Technologies uses cookies and similar technologies to enhance your browsing experience, analyze website usage, and provide personalized content.
            </p>

            <div className="bg-white rounded-2xl p-6 shadow-lg max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-blue-600 mr-2" />
                <span className="font-semibold text-gray-900">Last Updated: {lastUpdated}</span>
              </div>
              <p className="text-gray-600">
                This cookie policy applies to all websites and services provided by Binapulse Technologies and explains our use of cookies and your choices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Are Cookies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                What Are Cookies?
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and analyzing how you use our services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 text-center">
                <Monitor className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Small Files</h3>
                <p className="text-gray-600">Tiny text files stored locally on your device by your web browser</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 text-center">
                <Zap className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Enhanced Experience</h3>
                <p className="text-gray-600">Remember your preferences and improve website functionality</p>
              </div>
              
              <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-2xl p-6 text-center">
                <BarChart3 className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Analytics</h3>
                <p className="text-gray-600">Help us understand how visitors interact with our website</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Cookies */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Types of Cookies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use different types of cookies for various purposes. Here's a detailed breakdown of each category and how you can manage them.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {cookieTypes.map((cookieType, index) => (
              <div key={index} id={cookieType.id} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${cookieType.color} rounded-2xl flex items-center justify-center mr-4`}>
                    <cookieType.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{cookieType.title}</h3>
                    <div className="flex items-center">
                      {cookieType.canDisable ? (
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                          Can be disabled
                        </span>
                      ) : (
                        <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                          Always active
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {cookieType.description}
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Purpose:</h4>
                    <p className="text-gray-600 text-sm">{cookieType.purpose}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Examples:</h4>
                    <ul className="space-y-1">
                      {cookieType.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="flex items-start text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Retention Period:</h4>
                    <p className="text-gray-600 text-sm">{cookieType.retention}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Third-Party Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Third-Party Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We use trusted third-party services to enhance our website functionality. Each service has its own privacy policy and cookie usage.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {thirdPartyServices.map((service, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center mr-4">
                      <Globe className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{service.name}</h3>
                  </div>

                  <p className="text-gray-600 mb-4">{service.purpose}</p>

                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Cookies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.cookies.map((cookie, cookieIndex) => (
                          <span key={cookieIndex} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-mono">
                            {cookie}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Retention:</h4>
                      <p className="text-gray-600 text-sm">{service.retention}</p>
                    </div>

                    <div>
                      <a 
                        href={service.privacyPolicy} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium"
                      >
                        View Privacy Policy
                        <Eye className="ml-1 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Managing Cookies */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Managing Your Cookie Preferences
              </h2>
              <p className="text-xl text-gray-600">
                You have control over how cookies are used on our website. Here are your options for managing cookie preferences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                  <Settings className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">Browser Settings</h3>
                <p className="text-gray-600 mb-6">Most browsers allow you to control cookies through their settings.</p>
                
                <ul className="space-y-2">
                  <li className="flex items-start text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Block all cookies or specific types
                  </li>
                  <li className="flex items-start text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Delete existing cookies
                  </li>
                  <li className="flex items-start text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Set notifications for new cookies
                  </li>
                  <li className="flex items-start text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Configure privacy settings
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">Opt-Out Options</h3>
                <p className="text-gray-600 mb-6">Use these tools to opt out of specific tracking services.</p>
                
                <ul className="space-y-2">
                  <li className="flex items-start text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Google Analytics Opt-out Browser Add-on
                  </li>
                  <li className="flex items-start text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Facebook advertising preferences
                  </li>
                  <li className="flex items-start text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    LinkedIn advertising controls
                  </li>
                  <li className="flex items-start text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Industry opt-out initiatives
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
              <div className="flex items-start">
                <AlertTriangle className="h-6 w-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-yellow-800 mb-2">Important Note</h4>
                  <p className="text-yellow-700 text-sm">
                    Disabling certain cookies may affect the functionality of our website. Essential cookies cannot be disabled as they are necessary for basic website operation and security.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Browser-Specific Instructions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Browser-Specific Cookie Management
              </h2>
              <p className="text-xl text-gray-600">
                Step-by-step instructions for managing cookies in popular web browsers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Google Chrome", steps: ["Settings → Privacy and security → Cookies and other site data", "Choose your preferred cookie settings", "Manage exceptions for specific sites"] },
                { name: "Mozilla Firefox", steps: ["Settings → Privacy & Security", "Cookies and Site Data section", "Manage Data or Clear Data options"] },
                { name: "Safari", steps: ["Preferences → Privacy", "Manage Website Data", "Configure cookie preferences"] },
                { name: "Microsoft Edge", steps: ["Settings → Cookies and site permissions", "Cookies and site data", "Manage and delete cookies"] },
                { name: "Opera", steps: ["Settings → Advanced → Privacy & security", "Site Settings → Cookies", "Configure cookie behavior"] },
                { name: "Mobile Browsers", steps: ["Access browser settings menu", "Find Privacy or Security section", "Manage cookie preferences"] }
              ].map((browser, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">{browser.name}</h3>
                  <ol className="space-y-2">
                    {browser.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="text-sm text-gray-600 flex items-start">
                        <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">
                          {stepIndex + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Cookie Questions or Concerns?</h2>
              <p className="text-xl text-gray-600">
                Our privacy team is here to help you understand our cookie usage and manage your preferences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <method.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{method.title}</h3>
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  <p className="font-semibold text-blue-600">{method.contact}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Response Time</h3>
              <p className="text-gray-600">
                We aim to respond to all cookie and privacy-related inquiries within <strong>48 hours</strong>. 
                For urgent matters, please call us directly at +233 24 123 4567.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Updates and Changes */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-3xl p-8 lg:p-12 text-white text-center">
              <h2 className="text-3xl font-bold mb-6">Cookie Policy Updates</h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                We may update this Cookie Policy from time to time to reflect changes in our practices, technology, or legal requirements.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white bg-opacity-20 rounded-2xl p-6">
                  <h3 className="text-lg font-bold mb-3">How We Notify You</h3>
                  <ul className="text-left space-y-2 opacity-90">
                    <li>• Email notification to registered users</li>
                    <li>• Website banner announcement</li>
                    <li>• Updated "Last Modified" date</li>
                    <li>• Cookie consent banner updates</li>
                  </ul>
                </div>
                <div className="bg-white bg-opacity-20 rounded-2xl p-6">
                  <h3 className="text-lg font-bold mb-3">Your Options</h3>
                  <ul className="text-left space-y-2 opacity-90">
                    <li>• Review changes before they take effect</li>
                    <li>• Update your cookie preferences</li>
                    <li>• Contact us with questions</li>
                    <li>• Opt-out of non-essential cookies</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicyPage;