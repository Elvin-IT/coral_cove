import React, { useState } from 'react';
import { Menu, X, Compass, Waves, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenBooking: () => void;
}

export default function Navbar({ activeTab, setActiveTab, onOpenBooking }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'villas', label: 'Villas & Bungalows' },
    { id: 'dining', label: 'Dining' },
    { id: 'spa', label: 'Spa' },
    { id: 'experiences', label: 'Experiences' },
    { id: 'weddings', label: 'Honeymoons' },
    { id: 'offers', label: 'Offers' },
    { id: 'about', label: 'About & Eco' },
    { id: 'contact', label: 'Gallery & Contact' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-40 bg-stone-50/80 backdrop-blur-md border-b border-stone-200/55 shadow-sm font-sans" id="resort-navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo Brand Brand */}
          <div className="flex items-center">
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center space-x-2 text-left group"
              id="brand-logo-btn"
            >
              <a href="/" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>
                <img
                  src="https://i.ibb.co/4n0hYzW9/Secondary-logo.jpg"
                  alt="Secondary-logo"
                  border="0"
                  className="h-16 w-auto max-w-[171px] object-contain"
                />
              </a>

            </button>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 text-xs font-semibold tracking-wider uppercase rounded-full transition-all duration-200 cursor-pointer ${
                  activeTab === item.id
                    ? 'text-teal-800 bg-teal-50 border border-teal-200/50'
                    : 'text-stone-600 hover:text-[#F07167]'
                }`}
              >
                {item.id === 'about' ? 'Eco & Story' : item.label}
              </button>
            ))}
          </div>

          {/* Desktop Call to Action */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={onOpenBooking}
              className="bg-[#59C1BD] hover:bg-[#48A8A4] active:bg-[#3b8e8b] text-white px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-150 cursor-pointer"
              id="nav-book-btn"
            >
              Reserve Escape
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-stone-600 hover:text-teal-700 p-2 rounded-lg"
              id="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-stone-50 shadow-inner px-4 pt-2 pb-6 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full py-2.5 px-4 text-left text-sm font-semibold tracking-wider uppercase rounded-lg transition-colors ${
                activeTab === item.id
                  ? 'bg-teal-50 text-teal-800 border-l-4 border-teal-700'
                  : 'text-stone-600 hover:bg-stone-100 hover:text-[#FE8F8F]'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 px-4">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full bg-[#59C1BD] hover:bg-[#48A8A4] text-white py-3 rounded-xl text-center text-xs font-bold uppercase tracking-widest shadow-md cursor-pointer"
            >
              Reserve Island Escape
            </button>
          </div>
          <div className="text-[10px] text-stone-400 text-center flex items-center justify-center gap-1.5 pt-2">
            <Waves className="w-3.5 h-3.5 text-teal-600 animate-pulse" />
            100% Eco Sanctuary | Zanzibar Archipelago
          </div>
        </div>
      )}
    </nav>
  );
}
