import React from 'react';
import { Shield, Eye, Lock, Users, FileText, Globe, Mail, Phone, Calendar, CheckCircle } from 'lucide-react';

const PrivacyPolicyPage: React.FC = () => {
  const lastUpdated = "January 15, 2025";

  const sections = [
    {
      id: "information-collection",
      title: "Information We Collect",
      icon: FileText,
      content: [
        {
          subtitle: "Personal Information",
          items: [
            "Name, email address, phone number, and business contact details",
            "Company information including business name, industry, and size",
            "Professional details such as job title and role responsibilities",
            "Communication preferences and marketing consent"
          ]
        },
        {
          subtitle: "Technical Information",
          items: [
            "IP address, browser type, and device information",
            "Website usage data including pages visited and time spent",
            "Cookies and similar tracking technologies data",
            "System performance and error logs for our services"
          ]
        },
        {
          subtitle: "Business Information",
          items: [
            "Project requirements and technical specifications",
            "Business processes and workflow information",
            "System configurations and infrastructure details",
            "Support tickets and communication history"
          ]
        }
      ]
    },
    {
      id: "information-use",
      title: "How We Use Your Information",
      icon: Users,
      content: [
        {
          subtitle: "Service Delivery",
          items: [
            "Provide and maintain our software and IT services",
            "Process transactions and manage client accounts",
            "Deliver customer support and technical assistance",
            "Customize services to meet your specific business needs"
          ]
        },
        {
          subtitle: "Communication",
          items: [
            "Respond to inquiries and provide requested information",
            "Send service updates, security alerts, and important notices",
            "Share relevant industry insights and technology updates",
            "Conduct satisfaction surveys and gather feedback"
          ]
        },
        {
          subtitle: "Business Operations",
          items: [
            "Improve our services and develop new offerings",
            "Analyze usage patterns to enhance user experience",
            "Conduct research and development activities",
            "Ensure compliance with legal and regulatory requirements"
          ]
        }
      ]
    },
    {
      id: "information-sharing",
      title: "Information Sharing and Disclosure",
      icon: Globe,
      content: [
        {
          subtitle: "We Do Not Sell Personal Information",
          items: [
            "We never sell, rent, or trade your personal information to third parties",
            "Your data is used exclusively for providing our services",
            "We maintain strict confidentiality of all client information"
          ]
        },
        {
          subtitle: "Limited Sharing Scenarios",
          items: [
            "With trusted service providers who assist in service delivery",
            "When required by law or legal process",
            "To protect our rights, property, or safety",
            "With your explicit consent for specific purposes"
          ]
        },
        {
          subtitle: "Business Partners",
          items: [
            "Technology vendors for software licensing and support",
            "Cloud service providers for hosting and infrastructure",
            "Payment processors for transaction handling",
            "All partners are bound by strict confidentiality agreements"
          ]
        }
      ]
    },
    {
      id: "data-security",
      title: "Data Security and Protection",
      icon: Shield,
      content: [
        {
          subtitle: "Security Measures",
          items: [
            "Industry-standard encryption for data transmission and storage",
            "Multi-factor authentication for system access",
            "Regular security audits and vulnerability assessments",
            "Secure data centers with physical and digital protection"
          ]
        },
        {
          subtitle: "Access Controls",
          items: [
            "Role-based access controls limiting data access to authorized personnel",
            "Regular access reviews and permission updates",
            "Secure authentication protocols for all systems",
            "Monitoring and logging of all data access activities"
          ]
        },
        {
          subtitle: "Data Backup and Recovery",
          items: [
            "Regular automated backups of all client data",
            "Geographically distributed backup storage",
            "Tested disaster recovery procedures",
            "Business continuity planning for service availability"
          ]
        }
      ]
    },
    {
      id: "data-retention",
      title: "Data Retention and Deletion",
      icon: Calendar,
      content: [
        {
          subtitle: "Retention Periods",
          items: [
            "Client data retained for the duration of active service agreements",
            "Communication records kept for 7 years for business purposes",
            "Technical logs and system data retained for 2 years",
            "Marketing data retained until consent is withdrawn"
          ]
        },
        {
          subtitle: "Data Deletion",
          items: [
            "Secure deletion of data upon service termination",
            "Right to request data deletion at any time",
            "Automated deletion of expired backup data",
            "Certificate of data destruction provided upon request"
          ]
        }
      ]
    },
    {
      id: "your-rights",
      title: "Your Privacy Rights",
      icon: Eye,
      content: [
        {
          subtitle: "Access and Control",
          items: [
            "Right to access all personal information we hold about you",
            "Right to correct or update inaccurate information",
            "Right to request deletion of your personal data",
            "Right to restrict or object to certain data processing"
          ]
        },
        {
          subtitle: "Data Portability",
          items: [
            "Right to receive your data in a structured, machine-readable format",
            "Right to transfer your data to another service provider",
            "Assistance with data migration when switching services"
          ]
        },
        {
          subtitle: "Marketing Communications",
          items: [
            "Right to opt-out of marketing communications at any time",
            "Granular control over communication preferences",
            "Easy unsubscribe options in all marketing emails"
          ]
        }
      ]
    }
  ];

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      contact: "privacy@binapulse.com",
      description: "For privacy-related inquiries and requests"
    },
    {
      icon: Phone,
      title: "Phone",
      contact: "+233 24 123 4567",
      description: "Speak directly with our privacy officer"
    },
    {
      icon: Mail,
      title: "Postal Address",
      contact: "Binapulse Technologies, Accra, Ghana",
      description: "For formal privacy requests and notices"
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
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Privacy Policy
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Your Privacy is 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600"> Our Priority</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              We are committed to protecting your privacy and ensuring the security of your personal information. This policy explains how we collect, use, and safeguard your data.
            </p>

            <div className="bg-white rounded-2xl p-6 shadow-lg max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-blue-600 mr-2" />
                <span className="font-semibold text-gray-900">Last Updated: {lastUpdated}</span>
              </div>
              <p className="text-gray-600">
                This privacy policy applies to all services provided by Binapulse Technologies and governs our collection and use of your information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Table of Contents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {sections.map((section, index) => (
                <a
                  key={index}
                  href={`#${section.id}`}
                  className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-1 group"
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-200">
                      <section.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {section.title}
                      </h3>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Sections */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-16">
            {sections.map((section, index) => (
              <div key={index} id={section.id} className="scroll-mt-24">
                <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-gray-100">
                  <div className="flex items-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mr-6">
                      <section.icon className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">{section.title}</h2>
                  </div>

                  <div className="space-y-8">
                    {section.content.map((subsection, subIndex) => (
                      <div key={subIndex}>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">{subsection.subtitle}</h3>
                        <ul className="space-y-3">
                          {subsection.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700 leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cookies and Tracking */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-6">
                  <Lock className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Cookies and Tracking Technologies</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">What Are Cookies</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Cookies are small text files stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and analyzing how you use our services.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Types of Cookies We Use</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Essential Cookies</h4>
                      <p className="text-gray-600 text-sm">Required for basic website functionality and security. These cannot be disabled.</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Analytics Cookies</h4>
                      <p className="text-gray-600 text-sm">Help us understand how visitors interact with our website to improve user experience.</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Functional Cookies</h4>
                      <p className="text-gray-600 text-sm">Remember your preferences and settings to provide personalized features.</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Marketing Cookies</h4>
                      <p className="text-gray-600 text-sm">Used to deliver relevant advertisements and track campaign effectiveness.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Managing Cookies</h3>
                  <p className="text-gray-700 leading-relaxed">
                    You can control and manage cookies through your browser settings. However, disabling certain cookies may affect the functionality of our website. Most browsers allow you to refuse cookies or alert you when cookies are being sent.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* International Data Transfers */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl p-8 lg:p-12">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mr-6">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">International Data Transfers</h2>
              </div>

              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  As a technology company serving clients across Africa and internationally, we may transfer your personal information to countries outside of Ghana. We ensure that all international data transfers are protected by appropriate safeguards.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Safeguards We Use</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Standard contractual clauses approved by data protection authorities</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Adequacy decisions for countries with equivalent protection</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Binding corporate rules for intra-group transfers</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Your Rights</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Right to be informed about international transfers</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Right to object to transfers in certain circumstances</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Right to receive copies of safeguards in place</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Privacy Questions or Concerns?</h2>
              <p className="text-xl text-gray-600">
                Our privacy team is here to help you understand your rights and address any concerns about how we handle your personal information.
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
                We aim to respond to all privacy-related inquiries within <strong>30 days</strong>. 
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
              <h2 className="text-3xl font-bold mb-6">Policy Updates</h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                We may update this privacy policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white bg-opacity-20 rounded-2xl p-6">
                  <h3 className="text-lg font-bold mb-3">How We Notify You</h3>
                  <ul className="text-left space-y-2 opacity-90">
                    <li>• Email notification to registered users</li>
                    <li>• Website banner announcement</li>
                    <li>• Updated "Last Modified" date</li>
                  </ul>
                </div>
                <div className="bg-white bg-opacity-20 rounded-2xl p-6">
                  <h3 className="text-lg font-bold mb-3">Your Options</h3>
                  <ul className="text-left space-y-2 opacity-90">
                    <li>• Review changes before they take effect</li>
                    <li>• Contact us with questions or concerns</li>
                    <li>• Opt-out of services if you disagree</li>
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

export default PrivacyPolicyPage;