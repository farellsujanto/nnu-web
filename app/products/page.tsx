'use client';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Image from 'next/image';

const products = [
  {
    title: 'Generator Sets',
    subtitle: 'Uninterrupted Power Solutions',
    description: 'Industrial-grade generator sets engineered for continuous operation in critical applications. From backup power to prime power generation, our gensets deliver unwavering reliability when you need it most. Designed for factories, hospitals, data centers, and commercial facilities.',
    features: [
      'Silent operation technology',
      'Automatic mains failure detection',
      'Remote monitoring & diagnostics',
      '24/7 operation capability',
    ],
    color: 'yellow',
    images: [
      { src: '/genset/5(3).webp', alt: 'Industrial Generator Set' },
      { src: '/genset/8(3).webp', alt: 'Commercial Power Generation' },
      { src: '/genset/genset2.webp', alt: 'Backup Power System' },
      { src: '/genset/genset5.webp', alt: 'Prime Power Generator' },
    ]
  },
  {
    title: 'Control Panels & Electrical Systems',
    subtitle: 'Engineered for Safety & Performance',
    description: 'Custom-built electrical control panels designed to your exact specifications. Our panels integrate advanced protection systems, precision controls, and intelligent monitoring for safe, efficient power distribution. Each panel is engineered, tested, and certified to international standards.',
    features: [
      'Custom design & fabrication',
      'UL/CE certified components',
      'Comprehensive safety interlocks',
      'Modular expandable design',
    ],
    color: 'green',
    images: [
      { src: '/panel/1(3).webp', alt: 'Industrial Control Panel' },
      { src: '/panel/2(5).webp', alt: 'Custom Electrical Panel' },
      { src: '/panel/3(9).webp', alt: 'Power Distribution System' },
      { src: '/panel/4(4).webp', alt: 'Motor Control Center' },
    ]
  },
  {
    title: 'Sensors & Automation Controllers',
    subtitle: 'Powered by Autonics Korea',
    description: 'Advanced sensing and control technology from Autonics, a global leader in industrial automation. From photoelectric sensors to temperature controllers, our product range covers every automation need. Trusted by manufacturers worldwide for precision, reliability, and innovation.',
    features: [
      'Photoelectric & proximity sensors',
      'Temperature & pressure controllers',
      'Rotary encoders & timers',
      'Counter & panel meters',
    ],
    color: 'red',
    brand: {
      name: 'Autonics',
      tagline: 'Korea\'s Leading Automation Brand',
      info: 'Since 1977, Autonics has been at the forefront of sensing and control technology. Their comprehensive product line includes sensors, controllers, motion devices, and measuring instruments used across automotive, semiconductor, food & beverage, and packaging industries worldwide.',
    },
    images: [
      { src: '/sensorcontrol/autonics1.webp', alt: 'Autonics Photoelectric Sensors' },
      { src: '/sensorcontrol/autonics2.webp', alt: 'Autonics Control Systems' },
      { src: '/sensorcontrol/Untitled design (2).webp', alt: 'Autonics Automation Solutions' },
    ]
  },
  {
    title: 'Pneumatic Components & Systems',
    subtitle: 'Trusted Brands: Norgren, Airtac & Bless',
    description: 'Complete pneumatic solutions from the world\'s most respected manufacturers. Our extensive inventory includes cylinders, valves, air preparation units, and fittings for every industrial application. Whether you need precise motion control or powerful actuation, we deliver the right solution.',
    features: [
      'Cylinders & actuators',
      'Directional control valves',
      'Air preparation equipment (FRL)',
      'Fittings & quick couplers',
    ],
    color: 'blue',
    brands: [
      {
        name: 'Norgren',
        tagline: 'IMI Precision Engineering',
        info: 'Part of IMI plc, Norgren is a world leader in motion and fluid control with over 125 years of innovation. Their pneumatic solutions power industries from automotive assembly to food processing, delivering precision, efficiency, and reliability in the harshest conditions.',
      },
      {
        name: 'Airtac',
        tagline: 'Global Pneumatic Solutions',
        info: 'Airtac International Group is one of Asia\'s largest pneumatic manufacturers, offering comprehensive automation components. With ISO 9001 certification and products meeting international standards, Airtac delivers exceptional value without compromising quality.',
      },
      {
        name: 'Bless',
        tagline: 'Premium Pneumatic Components',
        info: 'Bless Pneumatic specializes in high-performance pneumatic components for demanding applications. Their innovative designs and rigorous quality control ensure long service life and consistent performance in industrial environments.',
      },
    ],
    images: [
      { src: '/pneumatic/norgren/11(2).webp', alt: 'Norgren Pneumatic Cylinders' },
      { src: '/pneumatic/norgren/12(2).webp', alt: 'Pneumatic Control Valves' },
      { src: '/pneumatic/norgren/13(2).webp', alt: 'Air Preparation Units' },
      { src: '/pneumatic/norgren/norgren1.webp', alt: 'Norgren FRL Components' },
      { src: '/pneumatic/norgren/norgren2.webp', alt: 'Industrial Pneumatic Systems' },
      { src: '/pneumatic/norgren/Untitled design (3).webp', alt: 'Complete Pneumatic Solutions' },
    ]
  },
];

const colorMap: Record<string, { bg: string; accent: string; text: string; border: string; gradient: string }> = {
  yellow: { 
    bg: 'bg-gradient-to-br from-amber-50 to-yellow-50', 
    accent: 'bg-[#F5B335]', 
    text: 'text-[#F5B335]', 
    border: 'border-[#F5B335]',
    gradient: 'from-[#F5B335] to-[#E94B4B]'
  },
  green: { 
    bg: 'bg-gradient-to-br from-emerald-50 to-green-50', 
    accent: 'bg-[#6BBF8E]', 
    text: 'text-[#6BBF8E]', 
    border: 'border-[#6BBF8E]',
    gradient: 'from-[#6BBF8E] to-[#4DB87D]'
  },
  red: { 
    bg: 'bg-gradient-to-br from-red-50 to-orange-50', 
    accent: 'bg-[#E94B4B]', 
    text: 'text-[#E94B4B]', 
    border: 'border-[#E94B4B]',
    gradient: 'from-[#E94B4B] to-[#F5B335]'
  },
  blue: { 
    bg: 'bg-gradient-to-br from-blue-50 to-cyan-50', 
    accent: 'bg-blue-600', 
    text: 'text-blue-600', 
    border: 'border-blue-600',
    gradient: 'from-blue-600 to-cyan-600'
  },
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 lg:px-8 bg-gradient-to-br from-amber-50 via-white to-emerald-50">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Industrial Automation Products
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            Premium solutions from global leaders in automation. Engineered for reliability, designed for Indonesia's industries.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-4 lg:px-8">
        <div className="container mx-auto">
          <div className="space-y-24">
            {products.map((product, index) => {
              const colors = colorMap[product.color];
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className="max-w-7xl mx-auto">
                  {/* Product Header */}
                  <div className={`${colors.bg} rounded-3xl p-8 md:p-12 mb-8 shadow-lg`}>
                    <div className="max-w-4xl">
                      <h2 className={`text-4xl md:text-5xl font-bold mb-3 ${colors.text}`}>
                        {product.title}
                      </h2>
                      <p className="text-gray-600 text-lg md:text-xl font-medium mb-6">
                        {product.subtitle}
                      </p>
                      <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        {product.description}
                      </p>
                      
                      {/* Features */}
                      <div className="grid sm:grid-cols-2 gap-3">
                        {product.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <span className={`${colors.accent} w-2 h-2 rounded-full`}></span>
                            <span className="text-gray-700 font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Product Gallery & Brand Info */}
                  <div className={`grid lg:grid-cols-${product.brands || product.brand ? '3' : '1'} gap-8`}>
                    {/* Gallery */}
                    <div className={`${product.brands || product.brand ? 'lg:col-span-2' : ''}`}>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {product.images.map((image, imgIndex) => (
                          <div
                            key={imgIndex}
                            className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                          >
                            <div className="aspect-square relative">
                              <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-contain p-4"
                                sizes="(max-width: 768px) 50vw, 33vw"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Brand Info */}
                    {(product.brand || product.brands) && (
                      <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                          {product.brands ? 'Partner Brands' : 'Powered By'}
                        </h3>
                        
                        {product.brand && (
                          <div className="bg-white rounded-2xl p-6 shadow-md border-2 border-gray-100">
                            <h4 className={`text-2xl font-bold ${colors.text} mb-2`}>
                              {product.brand.name}
                            </h4>
                            <p className="text-sm font-medium text-gray-500 mb-3">
                              {product.brand.tagline}
                            </p>
                            <p className="text-gray-700 text-sm leading-relaxed">
                              {product.brand.info}
                            </p>
                          </div>
                        )}
                        
                        {product.brands && product.brands.map((brand, brandIdx) => (
                          <div key={brandIdx} className="bg-white rounded-2xl p-6 shadow-md border-2 border-gray-100 hover:border-blue-300 transition-colors">
                            <h4 className="text-xl font-bold text-blue-600 mb-2">
                              {brand.name}
                            </h4>
                            <p className="text-xs font-medium text-gray-500 mb-2">
                              {brand.tagline}
                            </p>
                            <p className="text-gray-700 text-sm leading-relaxed">
                              {brand.info}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 lg:px-8 bg-gradient-to-br from-amber-50 to-emerald-50">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Need Expert Guidance?
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Not sure which products are right for your application? Our experienced technical team provides 
              free consultation to help you select the optimal solutions for your specific requirements. 
              We offer complete support from specification to installation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-[#F5B335] to-[#E94B4B] text-white font-semibold rounded-xl hover:shadow-2xl transition-all duration-200 transform hover:scale-105"
              >
                Request Consultation
              </a>
              <a
                href="/about"
                className="px-8 py-4 border-2 border-[#F5B335] text-gray-700 font-semibold rounded-xl hover:bg-[#F5B335] hover:text-white transition-all duration-200"
              >
                About Our Company
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
