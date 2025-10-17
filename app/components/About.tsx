'use client';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 px-4 lg:px-8 bg-white">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              About Nortech Niaga Utama
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Your trusted partner in industrial automation solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
            <div className="bg-[#FEF3C7] rounded-2xl p-6 md:p-8 border-2 border-[#F5B335]/30">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#F5B335]">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To deliver world-class industrial automation solutions that empower businesses 
                to achieve operational excellence through innovation, reliability, and 
                cutting-edge technology.
              </p>
            </div>

            <div className="bg-[#D1FAE5] rounded-2xl p-6 md:p-8 border-2 border-[#6BBF8E]/30">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#6BBF8E]">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be the leading provider of integrated industrial solutions in the region, 
                recognized for our commitment to quality, innovation, and customer satisfaction.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-200">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-900">Why Choose Us</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#F5B335] to-[#E94B4B] rounded-xl flex items-center justify-center text-2xl mx-auto mb-4 text-white font-bold">
                  ✓
                </div>
                <h4 className="text-lg md:text-xl font-bold mb-2 text-gray-900">Premium Quality</h4>
                <p className="text-gray-600 text-sm md:text-base">
                  Only the finest components from trusted global brands
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#6BBF8E] rounded-xl flex items-center justify-center text-2xl mx-auto mb-4 text-white font-bold">
                  ♦
                </div>
                <h4 className="text-lg md:text-xl font-bold mb-2 text-gray-900">Expert Support</h4>
                <p className="text-gray-600 text-sm md:text-base">
                  Dedicated technical team for comprehensive assistance
                </p>
              </div>
              
              <div className="text-center sm:col-span-2 md:col-span-1">
                <div className="w-16 h-16 bg-gradient-to-br from-[#F5B335] to-[#E94B4B] rounded-xl flex items-center justify-center text-2xl mx-auto mb-4 text-white font-bold">
                  ★
                </div>
                <h4 className="text-lg md:text-xl font-bold mb-2 text-gray-900">Innovation First</h4>
                <p className="text-gray-600 text-sm md:text-base">
                  Constantly evolving with industry advancements
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
