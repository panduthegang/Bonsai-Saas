import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-[#084734]/10 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className={`fixed top-0 right-0 h-screen w-screen md:w-80 z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="relative h-full w-full bg-gradient-to-br from-white/40 via-white/25 to-white/10 border-l border-[#CEEDB2]/60 shadow-2xl backdrop-blur-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_100%_0%,rgba(206,237,178,0.25),transparent_60%)] pointer-events-none" />

          <div className="flex justify-end p-4">
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="p-2 rounded-full bg-white/50 border border-white/60 text-[#084734] hover:bg-white/70 transition-colors backdrop-blur-md shadow"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col items-center space-y-5 mt-6 px-6">
            <a
              href="#features"
              onClick={onClose}
              className="w-full md:w-4/5 text-center py-3 px-6 rounded-full font-poppins text-[#084734] bg-white/40 border border-white/60 shadow-md hover:bg-white/60 active:bg-white/70 transition-colors backdrop-blur-md"
            >
              Features
            </a>
            <a
              href="#showcase"
              onClick={onClose}
              className="w-full md:w-4/5 text-center py-3 px-6 rounded-full font-poppins text-[#084734] bg-white/40 border border-white/60 shadow-md hover:bg-white/60 active:bg-white/70 transition-colors backdrop-blur-md"
            >
              Showcase
            </a>
            <Link
              to="/about"
              onClick={onClose}
              className="w-full md:w-4/5 text-center py-3 px-6 rounded-full font-poppins text-[#084734] bg-white/40 border border-white/60 shadow-md hover:bg-white/60 active:bg-white/70 transition-colors backdrop-blur-md"
            >
              About
            </Link>
            <button className="w-full md:w-4/5 bg-[#084734] text-white py-3 px-6 rounded-full font-poppins shadow-md hover:bg-[#084734]/90 transition-colors">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
