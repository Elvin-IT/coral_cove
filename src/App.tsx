import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, Mail, Phone, MapPin, Sparkles, AlertCircle, Waves, Heart, Globe, ArrowRight } from 'lucide-react';

// Components
import Navbar from './components/Navbar';
import BookingModal from './components/BookingModal';
import Hero from './components/Hero';
import TeasersSection from './components/TeasersSection';
import VillasSection from './components/VillasSection';
import DiningSection from './components/DiningSection';
import SpaSection from './components/SpaSection';
import ExperiencesSection from './components/ExperiencesSection';
import WeddingsSection from './components/WeddingsSection';
import OffersSection from './components/OffersSection';
import SustainabilitySection from './components/SustainabilitySection';
import GalleryContactSection from './components/GalleryContactSection';

import { EnquiryFormInput } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingType, setBookingType] = useState<EnquiryFormInput['type']>('general');
  const [selectedOptionId, setSelectedOptionId] = useState<string>('');

  const handleOpenBooking = (type: EnquiryFormInput['type'] = 'general', optionId: string = '') => {
    setBookingType(type);
    setSelectedOptionId(optionId);
    setIsBookingOpen(true);
  };

  const handleNavigate = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Helper render to route layouts smoothly with fading transitions
  const renderActiveContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <motion.div
            key="home"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="space-y-0"
          >
            <Hero onOpenBooking={handleOpenBooking} onNavigateTo={handleNavigate} />
            <TeasersSection onNavigateTo={handleNavigate} onOpenBooking={handleOpenBooking} />
          </motion.div>
        );
      case 'villas':
        return (
          <motion.div
            key="villas"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <VillasSection onOpenBooking={(optionId) => handleOpenBooking('villa', optionId)} />
          </motion.div>
        );
      case 'dining':
        return (
          <motion.div
            key="dining"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <DiningSection onOpenBooking={(optionId) => handleOpenBooking('dining', optionId)} />
          </motion.div>
        );
      case 'spa':
        return (
          <motion.div
            key="spa"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <SpaSection onOpenBooking={() => handleOpenBooking('spa')} onNavigateTo={handleNavigate} />
          </motion.div>
        );
      case 'experiences':
        return (
          <motion.div
            key="experiences"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <ExperiencesSection onOpenBooking={() => handleOpenBooking('general')} />
          </motion.div>
        );
      case 'weddings':
        return (
          <motion.div
            key="weddings"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <WeddingsSection onOpenBooking={handleOpenBooking} onNavigateTo={handleNavigate} />
          </motion.div>
        );
      case 'offers':
        return (
          <motion.div
            key="offers"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <OffersSection onOpenBooking={(optionId) => handleOpenBooking('offer', optionId)} />
          </motion.div>
        );
      case 'about':
        return (
          <motion.div
            key="about"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <SustainabilitySection onOpenBooking={() => handleOpenBooking('buyout')} />
          </motion.div>
        );
      case 'contact':
        return (
          <motion.div
            key="contact"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <GalleryContactSection />
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#4A433E] flex flex-col justify-between font-sans selection:bg-teal-100 selection:text-teal-900" id="applet-main-body">
      
      {/* Scroll-top Accented Banner */}
      <div className="bg-stone-900 text-amber-50 py-2.5 px-4 text-center text-[10px] sm:text-xs tracking-widest uppercase font-semibold flex items-center justify-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse shrink-0" />
        <span>100% Carbon-Neutral Marine Protected Sanctuary | Zanzibar Channel Resort</span>
        <span className="hidden md:inline-block text-stone-550">|</span>
        <button
          onClick={() => handleNavigate('offers')}
          className="hidden md:inline-block underline text-[#FE8F8F] hover:text-white transition-colors"
        >
          Slow Travel: Fifth Night On Us
        </button>
      </div>

      {/* Header Sticky Navigation */}
      <Navbar activeTab={activeTab} setActiveTab={handleNavigate} onOpenBooking={() => handleOpenBooking('general')} />

      {/* Dynamic Main Body Content */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {renderActiveContent()}
        </AnimatePresence>
      </main>

      {/* Footer Block */}
      <footer className="bg-stone-900 text-stone-300 border-t border-stone-850 pt-16 pb-8" id="resort-footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-12 text-left pb-12 border-b border-stone-800">
          
          {/* Brand Col */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center space-x-2">
              <Compass className="w-8 h-8 text-[#FE8F8F]" />
              <div>
                <span className="block font-serif text-2xl tracking-wider text-amber-50">CORAL COVE</span>
                <span className="block text-[8px] tracking-widest text-[#FE8F8F] uppercase font-bold">Eco-Luxury Private Island</span>
              </div>
            </div>
            <p className="text-stone-450 text-xs leading-relaxed max-w-sm">
              An uncompromised slow living sanctuary off the timeworn coast of Zanzibar. Supported wholly by organic local farming, sustainable hybrid-solar systems, and reef transplantation.
            </p>
            <div className="text-[10px] text-stone-500 font-semibold uppercase tracking-wider flex items-center gap-1.5 pt-2">
              <Globe className="w-4 h-4 text-[#59C1BD]" />
              Zanzibar Archipelago, East Africa
            </div>
          </div>

          {/* Quick Access Col */}
          <div className="md:col-span-3 space-y-3.5">
            <h4 className="text-amber-50 font-serif text-sm font-semibold tracking-wider uppercase">Sovereign Spaces</h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button onClick={() => handleNavigate('villas')} className="hover:text-[#FE8F8F] text-left transition-colors">
                  Beachfront Pool Villas (from $1,250)
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('villas')} className="hover:text-[#FE8F8F] text-left transition-colors">
                  Over Water Bungalows (from $1,650)
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('dining')} className="hover:text-[#FE8F8F] text-left transition-colors">
                  Lamu Ocean Hub Fine Dining
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('spa')} className="hover:text-[#FE8F8F] text-left transition-colors">
                  Oceanfront Botanical Spa Therapy
                </button>
              </li>
            </ul>
          </div>

          {/* Package and weddings Col */}
          <div className="md:col-span-2 space-y-3.5">
            <h4 className="text-amber-50 font-serif text-sm font-semibold tracking-wider uppercase">Celebrations</h4>
            <ul className="space-y-2 text-xs text-stone-450">
              <li>
                <button onClick={() => handleNavigate('weddings')} className="hover:text-[#FE8F8F] text-left transition-colors">
                  Beach Elopements
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('weddings')} className="hover:text-[#FE8F8F] text-left transition-colors">
                  Couples Photography
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigate('offers')} className="hover:text-[#FE8F8F] text-left transition-colors">
                  Vows & Honeymoon specials
                </button>
              </li>
              <li>
                <button onClick={() => handleOpenBooking('buyout')} className="hover:text-[#FE8F8F] text-left flex items-center gap-1 transition-colors">
                  Private Island Buyouts <ArrowRight className="w-3.5 h-3.5 text-[#FE8F8F]" />
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="md:col-span-3 space-y-3.5">
            <h4 className="text-amber-50 font-serif text-sm font-semibold tracking-wider uppercase">Reservations Desk</h4>
            <p className="text-stone-450 text-xs">Reach out to our private island registrars for custom speedboat coordinates.</p>
            <div className="space-y-2 pt-1 text-xs text-stone-400 font-semibold">
              <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-teal-650" /> +255 (24) 880-2683</p>
              <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-teal-650" /> butler@coralcovezanzibar.com</p>
            </div>
          </div>

        </div>

        {/* Legal copyrights strip */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-stone-500">
          <p>© 2026 Coral Cove Island Sanctuary Ltd. All Sovereign Rights Reserved.</p>
          <div className="flex gap-4">
            <a href="#privacy" className="hover:text-[#FE8F8F] transition-colors">Privacy Charter</a>
            <span>•</span>
            <a href="#terms" className="hover:text-[#FE8F8F] transition-colors">Eco-Ethic Guidelines</a>
            <span>•</span>
            <a href="#licensing" className="hover:text-[#FE8F8F] transition-colors">Zanzibar Licensing</a>
          </div>
        </div>
      </footer>

      {/* Booking Dialogue gateway */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialType={bookingType}
        initialOptionId={selectedOptionId}
      />

    </div>
  );
}
