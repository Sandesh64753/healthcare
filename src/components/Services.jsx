import React from 'react';
import { 
  Camera, 
  MessageCircle, 
  FileSearch, 
  Activity, 
  Brain, 
  Shield,
  Clock,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Camera,
      title: "Medical Image Analysis",
      description: "Upload X-rays, MRIs, CT scans, and other medical images for AI-powered analysis and insights.",
      features: ["Instant analysis", "High accuracy", "Multiple image formats", "Detailed reports"],
      color: "blue"
    },
    {
      icon: MessageCircle,
      title: "AI Health Consultation",
      description: "24/7 chat with our AI health consultant for symptoms analysis and health recommendations.",
      features: ["Available 24/7", "Symptom checker", "Health recommendations", "Follow-up care"],
      color: "green"
    },
    {
      icon: FileSearch,
      title: "Health Record Analysis",
      description: "Upload and analyze your medical records, lab results, and health documents.",
      features: ["Record digitization", "Trend analysis", "Risk assessment", "Care planning"],
      color: "purple"
    },
    {
      icon: Activity,
      title: "Vital Signs Monitoring",
      description: "Track and analyze vital signs patterns with AI-powered health monitoring.",
      features: ["Real-time tracking", "Pattern recognition", "Alert system", "Health insights"],
      color: "red"
    }
  ];

  const plans = [
    {
      name: "Basic",
      price: "Free",
      period: "Forever",
      description: "Perfect for occasional health consultations",
      features: [
        "5 AI consultations per month",
        "Basic image analysis",
        "Health record storage",
        "Email support"
      ],
      buttonText: "Get Started",
      popular: false
    },
    {
      name: "Pro",
      price: "$19",
      period: "per month",
      description: "Ideal for regular health monitoring",
      features: [
        "Unlimited AI consultations",
        "Advanced image analysis",
        "Priority support",
        "Detailed health reports",
        "Vital signs tracking",
        "Family account sharing"
      ],
      buttonText: "Start Free Trial",
      popular: true
    },
    {
      name: "Family",
      price: "$39",
      period: "per month",
      description: "Complete healthcare for your family",
      features: [
        "Everything in Pro",
        "Up to 6 family members",
        "Pediatric AI consultation",
        "Emergency consultation",
        "Health data sharing",
        "Dedicated health coordinator"
      ],
      buttonText: "Start Free Trial",
      popular: false
    }
  ];

  const colorClasses = {
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
    purple: "bg-purple-100 text-purple-600",
    red: "bg-red-100 text-red-600"
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI-powered healthcare services designed to provide you with 
            accurate, accessible, and personalized medical insights.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className={`w-16 h-16 ${colorClasses[service.color]} rounded-full flex items-center justify-center mb-6`}>
                  <service.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Simple steps to get the healthcare guidance you need</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Sign Up & Upload</h3>
              <p className="text-gray-600">
                Create your account and upload medical images, symptoms, or health questions 
                through our secure platform.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Analysis</h3>
              <p className="text-gray-600">
                Our advanced AI analyzes your information using medical databases and 
                machine learning algorithms trained by healthcare professionals.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Get Results</h3>
              <p className="text-gray-600">
                Receive detailed insights, recommendations, and next steps. Connect with 
                healthcare professionals for further consultation if needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
            <p className="text-xl text-gray-600">Flexible pricing to meet your healthcare needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className={`relative bg-white rounded-2xl shadow-lg p-8 ${plan.popular ? 'border-2 border-blue-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    {plan.price !== "Free" && (
                      <span className="text-gray-600 ml-2">{plan.period}</span>
                    )}
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>
                
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.popular 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Trusted by Thousands</h2>
            <p className="text-xl text-blue-100">Your health and privacy are our top priorities</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <Shield className="h-12 w-12 text-white mx-auto mb-4" />
              <div className="text-2xl font-bold text-white mb-2">HIPAA</div>
              <div className="text-blue-100">Compliant</div>
            </div>
            <div>
              <Brain className="h-12 w-12 text-white mx-auto mb-4" />
              <div className="text-2xl font-bold text-white mb-2">98%</div>
              <div className="text-blue-100">AI Accuracy</div>
            </div>
            <div>
              <Clock className="h-12 w-12 text-white mx-auto mb-4" />
              <div className="text-2xl font-bold text-white mb-2">24/7</div>
              <div className="text-blue-100">Availability</div>
            </div>
            <div>
              <CheckCircle className="h-12 w-12 text-white mx-auto mb-4" />
              <div className="text-2xl font-bold text-white mb-2">50K+</div>
              <div className="text-blue-100">Consultations</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;