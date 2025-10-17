'use client';

const products = [
  {
    title: 'Generator Sets',
    description: 'High-performance power generation systems engineered for reliability and efficiency in any environment.',
    color: 'yellow',
  },
  {
    title: 'Electrical Systems',
    description: 'Comprehensive electrical solutions for industrial and commercial applications with proven track record.',
    color: 'green',
  },
  {
    title: 'Sensors',
    description: 'Precision sensor technology for accurate monitoring and control in demanding industrial conditions.',
    color: 'red',
  },
  {
    title: 'Automation',
    description: 'Advanced automation solutions to optimize your industrial processes and increase productivity.',
    color: 'yellow',
  },
  {
    title: 'Controllers',
    description: 'Intelligent control systems for seamless operation management and enhanced process efficiency.',
    color: 'green',
  },
  {
    title: 'Pneumatic',
    description: 'Premium pneumatic components and systems for industrial automation with superior performance.',
    color: 'red',
  },
];

const colorMap: Record<string, { bg: string; hover: string; text: string; border: string }> = {
  yellow: { bg: 'bg-[#FEF3C7]', hover: 'group-hover:bg-[#FDE68A]', text: 'text-[#F5B335]', border: 'border-[#F5B335]/20' },
  green: { bg: 'bg-[#D1FAE5]', hover: 'group-hover:bg-[#A7F3D0]', text: 'text-[#6BBF8E]', border: 'border-[#6BBF8E]/20' },
  red: { bg: 'bg-[#FEE2E2]', hover: 'group-hover:bg-[#FECACA]', text: 'text-[#E94B4B]', border: 'border-[#E94B4B]/20' },
};

export default function Products() {
  return (
    <section id="products" className="py-16 md:py-24 px-4 lg:px-8 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-0 w-64 h-64 bg-[#F5B335]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-0 w-64 h-64 bg-[#6BBF8E]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Product Range
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive industrial solutions designed to meet your specific needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, index) => {
            const colors = colorMap[product.color];
            return (
              <div
                key={index}
                className={`group ${colors.bg} ${colors.hover} rounded-2xl p-6 md:p-8 transition-all duration-300 border-2 ${colors.border} hover:shadow-lg`}
              >
                <h3 className={`text-xl md:text-2xl font-bold mb-3 ${colors.text}`}>
                  {product.title}
                </h3>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  {product.description}
                </p>

                <button className={`${colors.text} font-medium flex items-center gap-2 text-sm group-hover:gap-3 transition-all duration-200`}>
                  Learn More
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
