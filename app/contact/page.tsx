'use client';

import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-16 md:pb-24 px-4 lg:px-8 bg-gradient-to-b from-white to-amber-50 relative overflow-hidden">
        {/* Decorative wave */}
        <svg className="absolute top-0 left-0 w-full h-24" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path fill="white" d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,42.7C960,43,1056,53,1152,53.3C1248,53,1344,43,1392,37.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Let's Talk Solutions
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Need expert advice on automation products? Our technical team is here to help you 
              find the right solutions for your specific requirements.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-6 md:p-10 border border-gray-200 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                    Full Name <span className="text-[#E94B4B]">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-[#F5B335] focus:ring-2 focus:ring-[#F5B335]/20 transition-colors text-gray-900"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    Email Address <span className="text-[#E94B4B]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-[#6BBF8E] focus:ring-2 focus:ring-[#6BBF8E]/20 transition-colors text-gray-900"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-[#E94B4B] focus:ring-2 focus:ring-[#E94B4B]/20 transition-colors text-gray-900"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                    Message <span className="text-[#E94B4B]">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-[#F5B335] focus:ring-2 focus:ring-[#F5B335]/20 transition-colors text-gray-900 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 md:py-4 bg-gradient-to-r from-[#F5B335] to-[#E94B4B] text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <span className="text-[#F5B335]">📧</span> Email
                    </h3>
                    <a href="mailto:info@nortechniaga.com" className="text-gray-700 hover:text-[#F5B335] transition-colors">
                      info@nortechniaga.com
                    </a>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <span className="text-[#6BBF8E]">📞</span> Phone
                    </h3>
                    <a href="tel:+6221xxxxxxxx" className="text-gray-700 hover:text-[#6BBF8E] transition-colors">
                      +62 21 XXXX XXXX
                    </a>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <span className="text-[#E94B4B]">📱</span> WhatsApp
                    </h3>
                    <a href="https://wa.me/62xxxxxxxxxx" className="text-gray-700 hover:text-[#E94B4B] transition-colors">
                      +62 8XX XXXX XXXX
                    </a>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <span className="text-[#F5B335]">📍</span> Address
                    </h3>
                    <p className="text-gray-700">
                      Jakarta, Indonesia
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#FEF3C7] to-[#D1FAE5] rounded-2xl p-6 md:p-8 border-2 border-[#F5B335]/30">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">Business Hours</h3>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span className="font-medium">Monday - Friday</span>
                    <span>8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Saturday</span>
                    <span>9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Quick Links</h3>
                <div className="space-y-3">
                  <a href="/products" className="block text-[#F5B335] hover:text-[#E94B4B] transition-colors font-medium">
                    → Browse Our Products
                  </a>
                  <a href="/brands" className="block text-[#6BBF8E] hover:text-[#F5B335] transition-colors font-medium">
                    → Our Partner Brands
                  </a>
                  <a href="/about" className="block text-[#E94B4B] hover:text-[#6BBF8E] transition-colors font-medium">
                    → Learn About Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
