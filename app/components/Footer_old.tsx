export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 py-12 px-6 lg:px-12">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-playfair font-bold bg-gradient-to-r from-amber-400 via-emerald-400 to-red-400 bg-clip-text text-transparent mb-4">
              Nortech Niaga Utama
            </h3>
            <p className="text-neutral-400 mb-6 max-w-md">
              Your trusted partner in industrial automation, delivering premium solutions 
              for generator sets, electrical systems, sensors, and pneumatic equipment.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-neutral-800 hover:bg-amber-500 rounded-lg flex items-center justify-center transition-colors duration-300">
                <span className="text-xl">🔗</span>
              </a>
              <a href="#" className="w-10 h-10 bg-neutral-800 hover:bg-amber-500 rounded-lg flex items-center justify-center transition-colors duration-300">
                <span className="text-xl">📱</span>
              </a>
              <a href="#" className="w-10 h-10 bg-neutral-800 hover:bg-amber-500 rounded-lg flex items-center justify-center transition-colors duration-300">
                <span className="text-xl">✉️</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-amber-400">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-neutral-400 hover:text-amber-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#products" className="text-neutral-400 hover:text-amber-400 transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#brands" className="text-neutral-400 hover:text-amber-400 transition-colors">
                  Brands
                </a>
              </li>
              <li>
                <a href="#about" className="text-neutral-400 hover:text-amber-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-neutral-400 hover:text-amber-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-emerald-400">Products</h4>
            <ul className="space-y-2 text-neutral-400 text-sm">
              <li>Generator Sets</li>
              <li>Electrical Systems</li>
              <li>Sensors</li>
              <li>Automation</li>
              <li>Controllers</li>
              <li>Pneumatic</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-sm">
            © {new Date().getFullYear()} Nortech Niaga Utama. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-neutral-500">
            <a href="#" className="hover:text-amber-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-amber-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
