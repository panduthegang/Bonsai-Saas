import { Leaf, ShoppingCart, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-white/90 backdrop-blur-md px-8 py-4 rounded-full shadow-lg border border-[#CEEDB2] w-[90%] max-w-4xl">
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 cursor-pointer hover:opacity-70 transition-opacity">
          <Leaf className="w-6 h-6 text-[#084734]" />
          <span className="font-playfair text-2xl font-bold text-[#084734]">ZenBonsai</span>
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-[#084734] hover:text-[#084734]/70 font-poppins transition-colors">Features</a>
          <a href="#showcase" className="text-[#084734] hover:text-[#084734]/70 font-poppins transition-colors">Showcase</a>
          <Link to="/about" className="text-[#084734] hover:text-[#084734]/70 font-poppins transition-colors">About</Link>
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-[#084734] text-white px-6 py-2 rounded-full font-poppins hover:bg-[#084734]/90 transition-colors">
            Shop Now
          </button>
        </div>
      </div>
    </nav>
  );
}
