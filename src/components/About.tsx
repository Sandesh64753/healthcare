import React from 'react';
import { Brain, Shield, Users, Award, Heart, Target } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About HealthCare AI
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're revolutionizing healthcare accessibility through advanced AI technology, 
              making medical consultations available to everyone, anywhere, anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To democratize healthcare by providing AI-powered medical insights that are accurate, 
                accessible, and affordable. We believe everyone deserves quick access to quality 
                healthcare guidance, regardless of location or financial circumstances.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50K+</div>
                  <div className="text-gray-600">Consultations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
                  <div className="text-gray-600">Accuracy Rate</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-4 text-center">
                  <Target className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-sm font-semibold">Precision</div>
                </div>
                <div className="bg-white rounded-xl p-4 text-center">
                  <Heart className="h-8 w-8 text-red-500 mx-auto mb-2" />
                  <div className="text-sm font-semibold">Care</div>
                </div>
                <div className="bg-white rounded-xl p-4 text-center">
                  <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-sm font-semibold">Security</div>
                </div>
                <div className="bg-white rounded-xl p-4 text-center">
                  <Brain className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-sm font-semibold">Intelligence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Makes Us Different</h2>
            <p className="text-xl text-gray-600">Advanced technology meets compassionate care</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Advanced AI Technology</h3>
              <p className="text-gray-600 text-center">
                Our AI is trained on millions of medical cases and continuously updated with the latest 
                medical research and guidelines from leading healthcare institutions.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Privacy & Security</h3>
              <p className="text-gray-600 text-center">
                Your medical data is protected with end-to-end encryption and complies with HIPAA 
                regulations. We never share your personal information with third parties.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Expert Network</h3>
              <p className="text-gray-600 text-center">
                Backed by a network of medical professionals who continuously review and improve 
                our AI's recommendations to ensure the highest quality of care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600">Medical experts and AI researchers working together</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Dr. Sarah Johnson</h3>
              <p className="text-blue-600 font-medium mb-2">Chief Medical Officer</p>
              <p className="text-gray-600 text-sm">15+ years in emergency medicine and telemedicine</p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Dr. Michael Chen</h3>
              <p className="text-blue-600 font-medium mb-2">AI Research Director</p>
              <p className="text-gray-600 text-sm">PhD in Machine Learning, former Google Health researcher</p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Dr. Emily Rodriguez</h3>
              <p className="text-blue-600 font-medium mb-2">Head of Clinical Operations</p>
              <p className="text-gray-600 text-sm">Board-certified radiologist with AI imaging expertise</p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Award className="h-16 w-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-6">Recognition & Awards</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">2024</div>
              <div className="text-blue-100">Best Healthcare AI Innovation</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">2023</div>
              <div className="text-blue-100">Digital Health Excellence Award</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">2023</div>
              <div className="text-blue-100">Patient Safety Technology Leader</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;