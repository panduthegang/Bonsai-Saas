import { Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#084734] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4 cursor-pointer hover:opacity-70 transition-opacity">
              <Leaf className="w-6 h-6" />
              <span className="font-playfair text-2xl font-bold">ZenBonsai</span>
            </Link>
            <p className="font-poppins text-white/70 text-sm mb-6">
              Cultivating peace and beauty since 2004. Grow Calm. Grow Smart.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-[#CEF17B] transition-colors"
              />
              <button className="bg-[#CEF17B] text-[#084734] px-6 py-3 rounded-full font-poppins font-medium hover:bg-[#CEF17B]/90 transition-all">
                Subscribe
              </button>
            </div>
          </div>
          <div>
            <h4 className="font-playfair text-lg font-bold mb-4">Explore</h4>
            <ul className="space-y-2 font-poppins text-sm text-white/70">
              <li><a href="#showcase" className="hover:text-white transition-colors">Collection</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Care Guides</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-playfair text-lg font-bold mb-4">Support</h4>
            <ul className="space-y-2 font-poppins text-sm text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="font-poppins text-sm text-white/60">
            © 2024 ZenBonsai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
