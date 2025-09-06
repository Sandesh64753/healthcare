import React, { useState } from 'react';
import { Bot, Upload, Camera, FileText, Clock, User, MessageCircle, Send, Image as ImageIcon } from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  image?: string;
  timestamp: Date;
}

const Dashboard: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'ai',
      content: "Hello! I'm your AI Health Consultant. I can help analyze medical images, answer health questions, and provide personalized recommendations. How can I assist you today?",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageUrl = reader.result as string;
        setUploadedImage(imageUrl);
        
        // Add user message with image
        const userMessage: Message = {
          id: Date.now().toString() + '_user',
          type: 'user',
          content: 'I have uploaded a medical image for analysis.',
          image: imageUrl,
          timestamp: new Date()
        };
        
        setMessages(prev => [...prev, userMessage]);
        
        // Simulate AI response
        setTimeout(() => {
          const aiResponse: Message = {
            id: Date.now().toString() + '_ai',
            type: 'ai',
            content: "I've analyzed your medical image. Based on the visual examination, I can see the anatomical structures clearly. However, please note that this is an AI-assisted analysis and should not replace professional medical consultation. I recommend discussing these findings with a qualified healthcare provider for a comprehensive evaluation. Would you like me to explain what I observe in the image or do you have specific questions about it?",
            timestamp: new Date()
          };
          setMessages(prev => [...prev, aiResponse]);
        }, 2000);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const userMessage: Message = {
        id: Date.now().toString() + '_user',
        type: 'user',
        content: inputMessage,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, userMessage]);
      setInputMessage('');
      
      // Simulate AI response
      setTimeout(() => {
        const responses = [
          "Based on your symptoms, I recommend monitoring your condition and considering a consultation with a healthcare provider if symptoms persist.",
          "That's a great question! Based on current medical guidelines, here are some recommendations...",
          "I understand your concern. Let me provide you with some evidence-based information that might help.",
          "Thank you for sharing this information. Based on what you've described, here are some general recommendations..."
        ];
        
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        
        const aiResponse: Message = {
          id: Date.now().toString() + '_ai',
          type: 'ai',
          content: randomResponse,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, aiResponse]);
      }, 1500);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">John Doe</h3>
                <p className="text-gray-600">Patient ID: #12345</p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Clock className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-sm font-medium text-blue-800">Last Consultation</span>
                  </div>
                  <p className="text-sm text-blue-700">2 days ago</p>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <FileText className="h-5 w-5 text-green-600 mr-2" />
                    <span className="text-sm font-medium text-green-800">Total Consultations</span>
                  </div>
                  <p className="text-sm text-green-700">12 sessions</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h4>
              <div className="space-y-3">
                <label className="block">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  <div className="flex items-center p-3 bg-blue-50 rounded-lg cursor-pointer hover:bg-blue-100 transition-colors">
                    <Upload className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-sm font-medium text-blue-800">Upload Medical Image</span>
                  </div>
                </label>
                
                <div className="flex items-center p-3 bg-green-50 rounded-lg cursor-pointer hover:bg-green-100 transition-colors">
                  <Camera className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-sm font-medium text-green-800">Take Photo</span>
                </div>
                
                <div className="flex items-center p-3 bg-purple-50 rounded-lg cursor-pointer hover:bg-purple-100 transition-colors">
                  <FileText className="h-5 w-5 text-purple-600 mr-3" />
                  <span className="text-sm font-medium text-purple-800">View History</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Chat Area */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-lg h-[700px] flex flex-col">
              {/* Chat Header */}
              <div className="border-b border-gray-200 p-6 flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Bot className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">AI Health Consultant</h3>
                  <p className="text-green-600 text-sm flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Online
                  </p>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-xs lg:max-w-md ${
                      message.type === 'user' 
                        ? 'bg-blue-600 text-white rounded-l-xl rounded-tr-xl' 
                        : 'bg-gray-100 text-gray-900 rounded-r-xl rounded-tl-xl'
                    } p-4`}>
                      {message.image && (
                        <div className="mb-3">
                          <img src={message.image} alt="Medical" className="w-full rounded-lg" />
                          <div className="flex items-center mt-2 text-xs opacity-75">
                            <ImageIcon className="h-3 w-3 mr-1" />
                            Medical Image
                          </div>
                        </div>
                      )}
                      <p className="text-sm leading-relaxed">{message.content}</p>
                      <p className={`text-xs mt-2 ${message.type === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input Area */}
              <div className="border-t border-gray-200 p-4">
                <div className="flex items-end space-x-3">
                  <div className="flex-1">
                    <textarea
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type your health question or concern..."
                      className="w-full resize-none border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      rows={2}
                    />
                  </div>
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputMessage.trim()}
                    className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <Send className="h-5 w-5" />
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  <strong>Disclaimer:</strong> This AI consultant provides general information only. Always consult with qualified healthcare professionals for medical advice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;