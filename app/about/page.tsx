'use client';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section with Background */}
      <section className="pt-32 pb-16 px-4 lg:px-8 bg-gradient-to-br from-amber-50 via-white to-emerald-50">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                About Nortech Niaga Utama
              </h1>
              <p className="text-lg md:text-xl text-gray-600">
                Indonesia's trusted partner for world-class industrial automation solutions
              </p>
            </div>

            {/* Image Gallery Showcase */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/genset/genset2.png"
                  alt="Generator Sets"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/panel/3(9).png"
                  alt="Electrical Panels"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/sensorcontrol/autonics1.png"
                  alt="Sensors"
                  fill
                  className="object-contain bg-white p-4"
                />
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/pneumatic/norgren/norgren1.png"
                  alt="Pneumatic Systems"
                  fill
                  className="object-contain bg-white p-4"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
              <div className="bg-[#FEF3C7] rounded-2xl p-6 md:p-8 border-2 border-[#F5B335]/30">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#F5B335]">Our Mission</h2>
                <p className="text-gray-700 leading-relaxed">
                  To empower Indonesian industries with world-class automation technology from global leaders. 
                  We bridge the gap between international innovation and local expertise, delivering reliable 
                  solutions backed by comprehensive technical support and genuine products.
                </p>
              </div>

              <div className="bg-[#D1FAE5] rounded-2xl p-6 md:p-8 border-2 border-[#6BBF8E]/30">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#6BBF8E]">Our Vision</h2>
                <p className="text-gray-700 leading-relaxed">
                  To be Indonesia's most trusted distributor of industrial automation products, 
                  recognized for authentic quality, technical expertise, and unwavering commitment 
                  to customer success across all manufacturing sectors.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-200 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-900">Why Choose Nortech</h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#F5B335] to-[#E94B4B] rounded-xl flex items-center justify-center text-2xl mx-auto mb-4 text-white font-bold">
                    ✓
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-900">Genuine Products Only</h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    Authorized distributor with direct manufacturer relationships
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#6BBF8E] rounded-xl flex items-center justify-center text-2xl mx-auto mb-4 text-white font-bold">
                    ♦
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-900">Technical Expertise</h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    Experienced engineers provide consultation and support
                  </p>
                </div>
                
                <div className="text-center sm:col-span-2 md:col-span-1">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#F5B335] to-[#E94B4B] rounded-xl flex items-center justify-center text-2xl mx-auto mb-4 text-white font-bold">
                    ★
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-900">Complete Solutions</h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    From selection to installation, we support your entire journey
                  </p>
                </div>
              </div>
            </div>

            {/* Company History with Images */}
            <div className="bg-white rounded-2xl p-8 md:p-12 border-2 border-gray-200 mb-12 shadow-lg">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">Our Story</h2>
              
              <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Founded with a vision to bring world-class automation technology to Indonesian industries, 
                    Nortech Niaga Utama has established itself as a reliable distributor of premium industrial 
                    components. We represent only the finest global brands in power generation, electrical systems, 
                    sensing technology, and pneumatic automation.
                  </p>
                  <p>
                    With over 15 years of dedicated service, we've supported more than 500 successful projects 
                    across manufacturing, infrastructure, and commercial sectors. From small workshops to large 
                    industrial facilities, our clients trust us for genuine products and expert guidance.
                  </p>
                </div>
                <div className="relative h-64 rounded-xl overflow-hidden shadow-md">
                  <Image
                    src="/panel/1(3).png"
                    alt="Our Projects"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-64 rounded-xl overflow-hidden shadow-md order-2 md:order-1">
                  <Image
                    src="/genset/8(3).png"
                    alt="Quality Solutions"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4 text-gray-700 leading-relaxed order-1 md:order-2">
                  <p>
                    What sets us apart is our commitment to authenticity and technical excellence. We only supply 
                    genuine products directly from authorized manufacturers—no imitations, no compromises. 
                    Our technical team provides pre-sales consultation, proper product selection, and after-sales 
                    support to ensure your investment delivers maximum value.
                  </p>
                  <p>
                    Whether you need a backup generator for critical operations, precision sensors for quality control, 
                    custom electrical panels, or reliable pneumatic systems—we have the expertise and inventory to 
                    support your success.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center bg-gradient-to-br from-[#FEF3C7] to-[#D1FAE5] rounded-2xl p-8 md:p-12 border-2 border-[#F5B335]/30">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                Partner with Indonesia's Automation Experts
              </h2>
              <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
                Whether you're upgrading existing equipment or building a new facility, our team is ready 
                to provide expert guidance and genuine products that deliver lasting value.
              </p>
              <a
                href="/contact"
                className="inline-block px-8 py-3 bg-gradient-to-r from-[#F5B335] to-[#E94B4B] text-white font-medium rounded-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
              >
                Contact Our Team
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
