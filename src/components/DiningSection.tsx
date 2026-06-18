import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Utensils, Clock, Flame, GlassWater, ChevronDown, ChevronUp, CheckCircle } from 'lucide-react';
import { DINING } from '../data';
import { DiningOutlet } from '../types';

interface DiningSectionProps {
  onOpenBooking: (type: 'dining', optionId: string) => void;
}

export default function DiningSection({ onOpenBooking }: DiningSectionProps) {
  const [activeMenuOutletId, setActiveMenuOutletId] = useState<string | null>(null);

  return (
    <section className="py-16 bg-[#FDFCFB] font-sans" id="resort-dining-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Text */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#FE8F8F] text-xs font-bold tracking-widest uppercase">Zanzibar Gastronomy</span>
          <h2 className="font-serif text-4xl text-stone-900 mt-1">Evolving Culinary Journeys</h2>
          <div className="h-0.5 w-16 bg-gradient-to-r from-[#59C1BD] to-[#FE8F8F] mx-auto mt-4" />
          <p className="text-stone-600 text-sm mt-3 leading-relaxed">
            Sourced exclusively from our on-island marine sanctuary or our organic Swahili spice plantation. Taste local stone crab, rock lobsters, lemongrass infusions, and vanilla-pod reductions.
          </p>
        </div>

        {/* Outlets Grid */}
        <div className="grid grid-cols-1 gap-16 lg:gap-24">
          {DINING.map((outlet, idx) => {
            const isMenuOpen = activeMenuOutletId === outlet.id;
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={outlet.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left"
              >
                {/* Widescreen image */}
                <div className={`lg:col-span-6 relative rounded-3xl overflow-hidden aspect-[4/3] shadow-md border border-stone-200 ${!isEven ? 'lg:order-2' : ''}`}>
                  <img
                    src={outlet.image}
                    alt={outlet.name}
                    className="w-full h-full object-cover select-none"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Decorative Overlay */}
                  <div className="absolute inset-0 bg-stone-950/15" />
                  
                  {/* Hours badge */}
                  <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur px-3 py-2 rounded-xl text-[10px] font-bold text-stone-700 tracking-wider uppercase border border-stone-100 flex items-center gap-1.5 shadow-sm">
                    <Clock className="w-3.5 h-3.5 text-teal-700" />
                    <span>{outlet.hours}</span>
                  </div>
                </div>

                {/* Outlet copy detailing concept & signature dishes */}
                <div className={`lg:col-span-6 space-y-5 ${!isEven ? 'lg:order-1' : ''}`}>
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-teal-750 uppercase tracking-widest">{outlet.concept}</span>
                    <h3 className="font-serif text-3.5xl text-stone-900 tracking-tight leading-none">
                      {outlet.name}
                    </h3>
                    <p className="text-[#FE8F8F] text-xs font-semibold tracking-wider uppercase italic pt-1">
                      {outlet.tagline}
                    </p>
                  </div>

                  <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                    {outlet.description}
                  </p>

                  {/* Signature Dish Spotlight board */}
                  <div className="bg-white rounded-2xl p-5 border border-stone-200 shadow-inner flex items-start gap-3">
                    <div className="w-9 h-9 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center shrink-0">
                      <Utensils className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-stone-850 text-xs font-semibold tracking-widest uppercase">Gastronomic Highlight</h4>
                      <p className="text-stone-700 text-sm italic font-medium mt-1">"{outlet.signatureDish}"</p>
                    </div>
                  </div>

                  {/* Interactive Button row */}
                  <div className="pt-4 flex flex-wrap gap-4 items-center">
                    <button
                      onClick={() => onOpenBooking('dining', outlet.id)}
                      className="bg-stone-900 hover:bg-stone-800 text-white rounded-xl py-3 px-6 text-xs font-bold uppercase tracking-widest shadow-md transition-shadow cursor-pointer"
                      id={`reserve-table-${outlet.id}`}
                    >
                      Reserve a Table
                    </button>
                    
                    <button
                      onClick={() => setActiveMenuOutletId(isMenuOpen ? null : outlet.id)}
                      className="text-teal-800 hover:text-teal-900 text-xs font-bold uppercase tracking-widest flex items-center gap-1.5 cursor-pointer"
                      id={`toggle-menu-${outlet.id}`}
                    >
                      <span>{isMenuOpen ? 'Hide Sample Menu' : 'View Sample Menu'}</span>
                      {isMenuOpen ? <ChevronUp className="w-4 h-4 text-[#FE8F8F]" /> : <ChevronDown className="w-4 h-4 text-teal-700" />}
                    </button>
                  </div>

                  {/* Detailed Interactive Multi-category Sample Menu Display */}
                  {isMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="bg-white rounded-2xl p-6 border border-stone-200 mt-4 text-left"
                    >
                      <h4 className="font-serif text-lg text-stone-900 border-b border-stone-150 pb-2 mb-4 flex items-center justify-between">
                        <span>A-La-Carte Selection</span>
                        <span className="text-[10px] uppercase bg-stone-100 px-2 py-0.5 rounded font-sans font-bold text-stone-500">Subject to catch</span>
                      </h4>

                      <div className="space-y-6">
                        {outlet.menu.map((category, cidx) => (
                          <div key={cidx} className="space-y-3">
                            <h5 className="text-[10px] font-bold text-teal-700 tracking-widest uppercase border-l-2 border-teal-600 pl-2">
                              {category.category}
                            </h5>
                            <div className="grid grid-cols-1 gap-3.5">
                              {category.items.map((item, iidx) => (
                                <div key={iidx} className="flex justify-between items-start gap-4">
                                  <div className="space-y-0.5">
                                    <h6 className="text-stone-850 font-bold text-sm tracking-tight">{item.name}</h6>
                                    <p className="text-stone-500 text-[11px] leading-snug">{item.description}</p>
                                  </div>
                                  <span className="text-xs font-semibold text-[#FE8F8F] bg-[#E9F3F2] px-2 py-0.5 rounded-md shrink-0">
                                    {item.price || 'Market'}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
