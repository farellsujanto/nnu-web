'use client';

export default function About() {
  return (
    <section id="about" className="py-32 px-6 lg:px-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
              <span className="bg-gradient-to-r from-amber-400 via-emerald-400 to-amber-400 bg-clip-text text-transparent">
                About Nortech Niaga Utama
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-3xl p-10 border border-neutral-800">
              <h3 className="text-3xl font-bold mb-6 text-amber-400">Our Mission</h3>
              <p className="text-neutral-300 leading-relaxed text-lg">
                To deliver world-class industrial automation solutions that empower businesses 
                to achieve operational excellence through innovation, reliability, and 
                cutting-edge technology.
              </p>
            </div>

            <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-3xl p-10 border border-neutral-800">
              <h3 className="text-3xl font-bold mb-6 text-emerald-400">Our Vision</h3>
              <p className="text-neutral-300 leading-relaxed text-lg">
                To be the leading provider of integrated industrial solutions in the region, 
                recognized for our commitment to quality, innovation, and customer satisfaction.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-3xl p-12 border border-neutral-800 mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center">Why Choose Us</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                  ⭐
                </div>
                <h4 className="text-xl font-bold mb-3">Premium Quality</h4>
                <p className="text-neutral-400">
                  Only the finest components from trusted global brands
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                  🔧
                </div>
                <h4 className="text-xl font-bold mb-3">Expert Support</h4>
                <p className="text-neutral-400">
                  Dedicated technical team for comprehensive assistance
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                  🚀
                </div>
                <h4 className="text-xl font-bold mb-3">Innovation First</h4>
                <p className="text-neutral-400">
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
