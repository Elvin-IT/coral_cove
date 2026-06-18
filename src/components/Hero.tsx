import React from 'react';
import { motion } from 'motion/react';
import { Compass, Sparkles, Waves, Sun, Anchor, Heart, ShieldCheck, ArrowRight } from 'lucide-react';
import { RESORT_IMAGES } from '../data';

interface HeroProps {
  onOpenBooking: (type?: 'general' | 'villa' | 'offer') => void;
  onNavigateTo: (tab: string) => void;
}

export default function Hero({ onOpenBooking, onNavigateTo }: HeroProps) {
  const highlights = [
    { icon: Waves, title: '40 Beachfront Villas', desc: 'Individually walled private pools' },
    { icon: Anchor, title: '10 Overwater Bungalows', desc: 'Suspended above shallow coral' },
    { icon: Sun, title: 'Solar & Plastic Free', desc: 'Powered 100% by local clean energy' },
    { icon: Sparkles, title: 'Oceanfront Botanical Spa', desc: 'Native Zanzibar clove therapy' },
    { icon: Heart, title: 'PADI Marine Center', desc: 'Active barrier reef transplantation' },
  ];

  return (
    <div className="relative overflow-hidden font-sans bg-stone-50" id="home-hero-section">
      {/* Decorative Warm Backgroud Grid */}
      <div className="absolute inset-0 bg-[#FDFBF7]" />
      
      {/* Curved Coral Wave Ornament (SVG background) */}
      <div className="absolute -top-[30%] -right-[15%] w-[60%] h-[80%] rounded-full bg-[#FE8F8F]/5 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[70%] rounded-full bg-teal-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content Block */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-[#E9F3F2] border border-[#D6EFEF] rounded-full text-[#59C1BD] text-[10px] font-bold tracking-widest uppercase"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#FE8F8F]" />
              5-Star Eco-Luxury Sanctuary
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-5xl sm:text-6xl text-stone-900 leading-[1.1] tracking-tight"
            >
              An island made for <br />
              <span className="text-teal-700 font-normal italic pr-2">slow days</span> 
              and ocean breezes.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-stone-600 text-base sm:text-lg max-w-lg leading-relaxed"
            >
              Surrender to barefoot luxury. Coral Cove is a secluded private island marine sanctuary off the timeless spice coast of Zanzibar—where sustainable engineering meets world-class tranquility.
            </motion.p>

            {/* Direct Booking Call to Actions */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <button
                onClick={() => onOpenBooking('villa')}
                className="bg-teal-800 hover:bg-teal-900 active:bg-teal-950 text-white font-semibold uppercase tracking-wider text-xs px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
                id="hero-book-escape"
              >
                Book your escape
              </button>
              <button
                onClick={() => onNavigateTo('villas')}
                className="bg-stone-100 hover:bg-stone-200 border border-stone-200 text-stone-800 font-semibold uppercase tracking-wider text-xs px-8 py-4 rounded-xl flex items-center gap-2 transition-all cursor-pointer"
                id="hero-view-villas"
              >
                View villas <ArrowRight className="w-4 h-4 text-teal-700" />
              </button>
            </motion.div>

            {/* Micro Sustainability Seal */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-2 text-stone-400 text-xs pt-4"
            >
              <div className="flex -space-x-1">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse inline-block" />
              </div>
              <span className="text-[11px] font-semibold tracking-wider uppercase text-emerald-700">100% Carbon Neutral Footprint</span>
              <span className="text-stone-300">|</span>
              <span className="text-[11px] text-stone-500 font-medium">No Single-Use Plastic</span>
            </motion.div>
          </div>

          {/* Hero Visual Image Block */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
              className="relative rounded-3xl overflow-hidden aspect-[16/11] shadow-2xl border-4 border-white/60 bg-stone-250"
            >
              <img
                src={RESORT_IMAGES.hero}
                alt="Coral Cove Zanzibar Eco Luxury Resort hero perspective"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-stone-900/10" />
              
              {/* Overlapping sand-colored luxury frame */}
              <div className="absolute bottom-6 left-6 right-6 bg-stone-50/95 backdrop-blur-md p-4 rounded-2xl flex items-center justify-between border border-white/30 shadow-md">
                <div className="text-left">
                  <p className="text-[10px] tracking-widest text-[#59C1BD] font-extrabold uppercase">Zanzibar Archipelago</p>
                  <p className="font-serif text-lg text-stone-800 font-medium mt-0.5">Barefoot luxury reinvented.</p>
                </div>
                <div className="flex gap-1.5">
                  <Compass className="w-5 h-5 text-[#FE8F8F]" />
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Highlight Badges / Icons Strip */}
        <div className="mt-20 border-t border-stone-200/60 pt-12">
          <div className="text-center mb-8">
            <h3 className="text-xs font-bold tracking-widest text-stone-400 uppercase">The Sanctuary Blueprint</h3>
            <p className="text-stone-500 text-sm mt-1">Thoughtfully crafted amenities with clean ecological compliance</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {highlights.map((h, idx) => {
              const IconComp = h.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-5 rounded-2xl border border-stone-150 shadow-sm text-left hover:shadow-md transition-shadow group cursor-pointer"
                >
                  <div className="w-10 h-10 bg-[#E9F3F2] text-[#59C1BD] rounded-full flex items-center justify-center mb-3 group-hover:bg-[#FE8F8F]/10 group-hover:text-[#FE8F8F] transition-all">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-sm font-semibold text-stone-900">{h.title}</h4>
                  <p className="text-stone-500 text-[11px] mt-1 leading-normal">{h.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
