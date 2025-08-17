import React from 'react';
import { Shield, FileText, Users, Globe, Mail, Phone, Calendar, CheckCircle, AlertTriangle, Scale, Lock, CreditCard, Gavel } from 'lucide-react';

const TermsOfServicePage: React.FC = () => {
  const lastUpdated = "January 15, 2025";

  const sections = [
    {
      id: "acceptance-of-terms",
      title: "Acceptance of Terms",
      icon: FileText,
      content: [
        {
          subtitle: "Agreement to Terms",
          items: [
            "By accessing or using Binapulse Technologies services, you agree to be bound by these Terms of Service",
            "These terms constitute a legally binding agreement between you and Binapulse Technologies",
            "If you do not agree to these terms, you must not use our services",
            "Your continued use of our services constitutes acceptance of any updates to these terms"
          ]
        },
        {
          subtitle: "Capacity to Enter Agreement",
          items: [
            "You must be at least 18 years old or have legal capacity to enter into contracts",
            "If representing a business, you must have authority to bind that entity to these terms",
            "You represent that all information provided is accurate and complete",
            "You agree to update information as necessary to maintain accuracy"
          ]
        }
      ]
    },
    {
      id: "services-description",
      title: "Description of Services",
      icon: Globe,
      content: [
        {
          subtitle: "Software Development Services",
          items: [
            "Custom software application development and deployment",
            "AI agent development and automation solutions",
            "ERP system implementation and customization",
            "Mobile and web application development"
          ]
        },
        {
          subtitle: "IT Infrastructure Services",
          items: [
            "Network design, implementation, and management",
            "Cabling and hardware installation services",
            "IT consultation and strategic planning",
            "System maintenance and technical support"
          ]
        },
        {
          subtitle: "Service Availability",
          items: [
            "We strive to maintain 99.9% uptime for our hosted services",
            "Scheduled maintenance will be communicated in advance",
            "Emergency maintenance may occur without prior notice",
            "Service availability may vary based on third-party dependencies"
          ]
        }
      ]
    },
    {
      id: "user-obligations",
      title: "User Obligations and Responsibilities",
      icon: Users,
      content: [
        {
          subtitle: "Acceptable Use",
          items: [
            "Use services only for lawful business purposes",
            "Comply with all applicable laws and regulations",
            "Respect intellectual property rights of others",
            "Maintain confidentiality of access credentials"
          ]
        },
        {
          subtitle: "Prohibited Activities",
          items: [
            "Attempting to gain unauthorized access to systems or data",
            "Interfering with or disrupting service operations",
            "Using services to transmit malicious code or content",
            "Violating any applicable laws or regulations"
          ]
        },
        {
          subtitle: "Data and Content Responsibility",
          items: [
            "You are responsible for all data and content you provide",
            "Ensure you have rights to use and share all provided content",
            "Maintain appropriate backups of your critical data",
            "Comply with data protection and privacy regulations"
          ]
        }
      ]
    },
    {
      id: "payment-terms",
      title: "Payment Terms and Billing",
      icon: CreditCard,
      content: [
        {
          subtitle: "Payment Obligations",
          items: [
            "All fees are due according to the agreed payment schedule",
            "Payments must be made in the currency specified in your agreement",
            "Late payments may incur additional charges as specified",
            "You are responsible for all taxes related to your use of services"
          ]
        },
        {
          subtitle: "Billing and Invoicing",
          items: [
            "Invoices will be sent to your designated billing contact",
            "Payment is due within 30 days of invoice date unless otherwise agreed",
            "Disputed charges must be reported within 30 days of invoice date",
            "Continued service may be suspended for overdue accounts"
          ]
        },
        {
          subtitle: "Refund Policy",
          items: [
            "Refunds are handled on a case-by-case basis",
            "Custom development work is generally non-refundable once commenced",
            "Subscription services may be refunded on a pro-rata basis",
            "Hardware purchases are subject to manufacturer warranty terms"
          ]
        }
      ]
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property Rights",
      icon: Shield,
      content: [
        {
          subtitle: "Our Intellectual Property",
          items: [
            "Binapulse Technologies retains all rights to our proprietary software and methodologies",
            "Our trademarks, logos, and brand materials remain our exclusive property",
            "Pre-existing intellectual property is not transferred through service agreements",
            "You receive only the rights explicitly granted in your service agreement"
          ]
        },
        {
          subtitle: "Custom Development Work",
          items: [
            "Custom software developed specifically for you becomes your property upon full payment",
            "We retain rights to general methodologies and non-specific technical approaches",
            "Third-party components remain subject to their respective licenses",
            "We may retain rights to use general knowledge and experience gained"
          ]
        },
        {
          subtitle: "Client Content and Data",
          items: [
            "You retain ownership of all data and content you provide",
            "You grant us necessary rights to use your content to provide services",
            "We will not use your confidential information for other purposes",
            "You are responsible for ensuring you have rights to all content provided"
          ]
        }
      ]
    },
    {
      id: "confidentiality",
      title: "Confidentiality and Data Protection",
      icon: Lock,
      content: [
        {
          subtitle: "Confidential Information",
          items: [
            "We will maintain confidentiality of your proprietary business information",
            "Confidential information includes business processes, data, and strategic plans",
            "Our employees and contractors are bound by confidentiality agreements",
            "Confidentiality obligations survive termination of our agreement"
          ]
        },
        {
          subtitle: "Data Security",
          items: [
            "We implement industry-standard security measures to protect your data",
            "Regular security audits and updates are performed on our systems",
            "Data breaches will be reported according to applicable legal requirements",
            "You are responsible for maintaining security of your access credentials"
          ]
        },
        {
          subtitle: "Data Processing",
          items: [
            "We process personal data in accordance with our Privacy Policy",
            "Data processing is limited to what is necessary to provide services",
            "We comply with applicable data protection regulations",
            "Data retention periods are specified in our Privacy Policy"
          ]
        }
      ]
    },
    {
      id: "limitation-of-liability",
      title: "Limitation of Liability and Disclaimers",
      icon: AlertTriangle,
      content: [
        {
          subtitle: "Service Warranties",
          items: [
            "Services are provided 'as is' without warranties beyond those explicitly stated",
            "We warrant that services will be performed with professional skill and care",
            "We do not warrant that services will be uninterrupted or error-free",
            "Third-party components are subject to their respective warranty terms"
          ]
        },
        {
          subtitle: "Limitation of Liability",
          items: [
            "Our liability is limited to the amount paid for services in the 12 months preceding the claim",
            "We are not liable for indirect, consequential, or punitive damages",
            "We are not liable for damages caused by factors beyond our reasonable control",
            "Some jurisdictions may not allow certain liability limitations"
          ]
        },
        {
          subtitle: "Indemnification",
          items: [
            "You agree to indemnify us against claims arising from your use of services",
            "This includes claims related to your content, data, or violation of these terms",
            "We will provide reasonable notice of any claims requiring indemnification",
            "We reserve the right to participate in defense of any indemnified claims"
          ]
        }
      ]
    },
    {
      id: "termination",
      title: "Termination and Suspension",
      icon: Gavel,
      content: [
        {
          subtitle: "Termination Rights",
          items: [
            "Either party may terminate agreements with appropriate notice as specified",
            "We may terminate immediately for material breach of these terms",
            "You may terminate at any time with written notice",
            "Termination does not relieve obligations that accrued before termination"
          ]
        },
        {
          subtitle: "Effect of Termination",
          items: [
            "Upon termination, access to services will be discontinued",
            "We will provide reasonable assistance with data export",
            "Outstanding fees remain due and payable",
            "Confidentiality and intellectual property provisions survive termination"
          ]
        },
        {
          subtitle: "Data Retention After Termination",
          items: [
            "We will retain your data for 30 days after termination for recovery purposes",
            "After 30 days, data will be securely deleted unless legally required to retain",
            "You are responsible for exporting any data you wish to retain",
            "Some data may be retained in anonymized form for analytical purposes"
          ]
        }
      ]
    }
  ];

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      contact: "legal@binapulse.com",
      description: "For legal and terms-related inquiries"
    },
    {
      icon: Phone,
      title: "Phone",
      contact: "+233 24 123 4567",
      description: "Speak directly with our legal team"
    },
    {
      icon: Mail,
      title: "Postal Address",
      contact: "Binapulse Technologies, Accra, Ghana",
      description: "For formal legal notices and correspondence"
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
              <Scale className="w-4 h-4 mr-2" />
              Terms of Service
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Terms of 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600"> Service</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              These terms govern your use of Binapulse Technologies services. Please read them carefully as they contain important information about your rights and obligations.
            </p>

            <div className="bg-white rounded-2xl p-6 shadow-lg max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-blue-600 mr-2" />
                <span className="font-semibold text-gray-900">Last Updated: {lastUpdated}</span>
              </div>
              <p className="text-gray-600">
                These terms of service apply to all services provided by Binapulse Technologies and constitute a legally binding agreement.
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

      {/* Terms of Service Sections */}
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

      {/* Dispute Resolution */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-6">
                  <Gavel className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Dispute Resolution</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Governing Law</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    These Terms of Service are governed by the laws of Ghana. Any disputes arising from these terms or your use of our services will be subject to the exclusive jurisdiction of the courts of Ghana.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Dispute Resolution Process</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-3">1. Direct Negotiation</h4>
                      <p className="text-gray-600 text-sm">We encourage direct communication to resolve disputes amicably and efficiently.</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-3">2. Mediation</h4>
                      <p className="text-gray-600 text-sm">If direct negotiation fails, we may engage in mediation through a mutually agreed mediator.</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-3">3. Legal Action</h4>
                      <p className="text-gray-600 text-sm">As a last resort, disputes may be resolved through the appropriate legal channels.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Limitation Period</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Any claims arising from these terms or your use of our services must be brought within one (1) year of the date the claim arose, or such claim will be permanently barred.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modifications and Updates */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-3xl p-8 lg:p-12">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mr-6">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Modifications to Terms</h2>
              </div>

              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  We may update these Terms of Service from time to time to reflect changes in our services, legal requirements, or business practices. We will notify you of any material changes through appropriate channels.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">How We Notify You</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Email notification to registered users</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Website banner announcement</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Updated "Last Modified" date</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Direct communication for material changes</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Your Options</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Review changes before they take effect</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Contact us with questions or concerns</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Terminate services if you disagree</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">Continued use implies acceptance</span>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Legal Questions or Concerns?</h2>
              <p className="text-xl text-gray-600">
                Our legal team is here to help you understand these terms and address any questions about your rights and obligations.
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
                We aim to respond to all legal inquiries within <strong>5 business days</strong>. 
                For urgent matters, please call us directly at +233 24 123 4567.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Severability and Entire Agreement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-3xl p-8 lg:p-12 text-white text-center">
              <h2 className="text-3xl font-bold mb-6">Important Legal Notes</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div className="bg-white bg-opacity-20 rounded-2xl p-6">
                  <h3 className="text-lg font-bold mb-3">Severability</h3>
                  <p className="opacity-90 text-sm">
                    If any provision of these terms is found to be unenforceable, the remaining provisions will continue in full force and effect. The unenforceable provision will be replaced with an enforceable provision that most closely reflects the original intent.
                  </p>
                </div>
                <div className="bg-white bg-opacity-20 rounded-2xl p-6">
                  <h3 className="text-lg font-bold mb-3">Entire Agreement</h3>
                  <p className="opacity-90 text-sm">
                    These Terms of Service, together with our Privacy Policy and any specific service agreements, constitute the entire agreement between you and Binapulse Technologies regarding your use of our services.
                  </p>
                </div>
                <div className="bg-white bg-opacity-20 rounded-2xl p-6">
                  <h3 className="text-lg font-bold mb-3">Assignment</h3>
                  <p className="opacity-90 text-sm">
                    You may not assign or transfer your rights under these terms without our written consent. We may assign our rights and obligations under these terms to any third party without restriction.
                  </p>
                </div>
                <div className="bg-white bg-opacity-20 rounded-2xl p-6">
                  <h3 className="text-lg font-bold mb-3">Waiver</h3>
                  <p className="opacity-90 text-sm">
                    Our failure to enforce any provision of these terms does not constitute a waiver of that provision or any other provision. Any waiver must be in writing and signed by an authorized representative.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfServicePage;