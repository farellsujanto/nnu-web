'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
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
    <section id="contact" className="py-32 px-6 lg:px-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-950" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-400 to-emerald-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Ready to elevate your industrial operations? Let's discuss your needs
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-3xl p-10 border border-neutral-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2 text-neutral-300">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:border-amber-500 transition-colors text-white"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-neutral-300">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:border-amber-500 transition-colors text-white"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-neutral-300">
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:border-amber-500 transition-colors text-white"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-neutral-300">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:border-amber-500 transition-colors text-white resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-neutral-950 font-bold text-sm tracking-wider rounded-lg hover:from-amber-400 hover:to-amber-500 transition-all duration-300 shadow-lg hover:shadow-amber-500/50 hover:scale-105"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-3xl p-10 border border-neutral-800">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                  📍
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Visit Us</h3>
                  <p className="text-neutral-400">
                    Jakarta, Indonesia<br />
                    Industrial District
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                  📧
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Email</h3>
                  <p className="text-neutral-400">
                    info@nortechniagautama.com<br />
                    sales@nortechniagautama.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                  📞
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Call Us</h3>
                  <p className="text-neutral-400">
                    +62 21 XXXX XXXX<br />
                    Mon-Fri: 9:00 AM - 5:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-500/10 to-emerald-500/10 rounded-3xl p-10 border border-amber-500/30">
              <h3 className="text-2xl font-bold mb-4">Business Hours</h3>
              <div className="space-y-2 text-neutral-300">
                <p className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-semibold">9:00 AM - 5:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-semibold">9:00 AM - 2:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-semibold text-red-400">Closed</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
