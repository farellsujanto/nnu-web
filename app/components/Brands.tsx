'use client';

const brands = [
  {
    name: 'Bless',
    tagline: 'Innovation in Motion',
    description: 'Cutting-edge automation solutions',
  },
  {
    name: 'Norgren',
    tagline: 'Motion & Fluid Control',
    description: 'World-class pneumatic systems',
  },
  {
    name: 'Airtac',
    tagline: 'Pneumatic Excellence',
    description: 'Industry-leading components',
  },
  {
    name: 'Autonics',
    tagline: 'Sensing & Control',
    description: 'Advanced sensor technology',
  },
];

export default function Brands() {
  return (
    <section id="brands" className="py-16 md:py-24 px-4 lg:px-8 bg-gradient-to-b from-amber-50 to-white relative overflow-hidden">
      {/* Decorative wave */}
      <svg className="absolute top-0 left-0 w-full h-32 -mt-1" viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path fill="white" d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
      </svg>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Trusted Partner Brands
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Collaborating with world-leading manufacturers to deliver excellence
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 md:p-8 border-2 border-gray-100 hover:border-[#F5B335] transition-all duration-300 hover:shadow-lg text-center group"
            >
              <div className="mb-4 h-20 flex items-center justify-center">
                <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#F5B335] to-[#E94B4B] bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                  {brand.name}
                </h3>
              </div>

              <p className="text-sm text-[#F5B335] font-medium mb-2">
                {brand.tagline}
              </p>
              <p className="text-gray-600 text-sm">
                {brand.description}
              </p>
            </div>
          ))}
        </div>

        {/* Partnership statement */}
        <div className="max-w-4xl mx-auto text-center bg-white rounded-2xl p-8 md:p-12 border-2 border-[#6BBF8E]/30 shadow-sm">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Our strategic partnerships with industry leaders ensure that we deliver 
            cutting-edge technology and unparalleled quality to our clients. 
            Together, we drive innovation in industrial automation.
          </p>
        </div>
      </div>
    </section>
  );
}
