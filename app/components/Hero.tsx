'use client';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-white to-emerald-50 pt-20">
      {/* Decorative wave background - inspired by zenzephyr */}
      <div className="absolute inset-0 opacity-40">
        <svg className="absolute bottom-0 w-full h-64" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#FEF3C7" fillOpacity="0.5" d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,154.7C672,160,768,192,864,197.3C960,203,1056,181,1152,154.7C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        <svg className="absolute top-0 w-full h-64" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#D1FAE5" fillOpacity="0.4" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,90.7C672,85,768,107,864,122.7C960,139,1056,149,1152,138.7C1248,128,1344,96,1392,80L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </div>

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-[#F5B335]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-10 w-60 h-60 bg-[#6BBF8E]/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-[#E94B4B]/10 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Premium Automation Technology for 
            <span className="block mt-2">
              <span className="text-[#F5B335]">Indonesian </span>
              <span className="text-[#E94B4B]">Industries</span>
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Authorized distributor of Norgren, Autonics, Airtac & Bless. Genuine products, expert support, 
            and complete solutions for power generation, electrical systems, sensors, and pneumatic automation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="/products"
              className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-[#F5B335] to-[#E94B4B] text-white font-medium rounded-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            >
              Explore Products
            </a>
            <a
              href="/contact"
              className="w-full sm:w-auto px-8 py-3 border-2 border-[#F5B335] text-gray-700 font-medium rounded-lg hover:bg-[#F5B335] hover:text-white transition-all duration-200"
            >
              Get in Touch
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-16">
            <div className="p-4">
              <div className="text-3xl md:text-4xl font-bold text-[#F5B335] mb-2">15+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="p-4">
              <div className="text-3xl md:text-4xl font-bold text-[#6BBF8E] mb-2">500+</div>
              <div className="text-sm text-gray-600">Projects Completed</div>
            </div>
            <div className="p-4">
              <div className="text-3xl md:text-4xl font-bold text-[#E94B4B] mb-2">4</div>
              <div className="text-sm text-gray-600">Trusted Brands</div>
            </div>
            <div className="p-4">
              <div className="text-3xl md:text-4xl font-bold text-[#F5B335] mb-2">24/7</div>
              <div className="text-sm text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
