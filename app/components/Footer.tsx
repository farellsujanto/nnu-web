export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="sm:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              Nortech Niaga Utama
            </h3>
            <p className="text-gray-400 mb-6 max-w-md text-sm md:text-base">
              Your trusted partner in industrial automation, delivering premium solutions 
              for generator sets, electrical systems, sensors, and pneumatic equipment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-blue-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/products" className="hover:text-blue-400 transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-blue-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-blue-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Products</h4>
            <ul className="space-y-2 text-sm">
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
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-gray-500">
            © {new Date().getFullYear()} Nortech Niaga Utama. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
