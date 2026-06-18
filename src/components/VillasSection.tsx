import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Ruler, Users, ArrowUpRight, HelpCircle, Check, Info, Sparkles } from 'lucide-react';
import { VILLAS } from '../data';
import { Villa } from '../types';

interface VillasSectionProps {
  onOpenBooking: (type: 'villa', optionId: string) => void;
}

export default function VillasSection({ onOpenBooking }: VillasSectionProps) {
  const [selectedSpecVillaId, setSelectedSpecVillaId] = useState<string | null>(null);

  return (
    <section className="py-16 bg-stone-50 font-sans" id="resort-villas-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Text */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-teal-700 text-xs font-bold tracking-widest uppercase">Coastal Sanctuaries</span>
          <h2 className="font-serif text-4xl text-stone-950 mt-1">Sovereign Beachfront Living</h2>
          <div className="h-0.5 w-16 bg-gradient-to-r from-teal-650 to-orange-400 mx-auto mt-4" />
          <p className="text-stone-600 text-sm mt-3 leading-relaxed">
            Barefoot luxury combined with rigid carbon-negative engineering. Each private villa and overwater suite incorporates native Swahili aesthetics, natural materials, raw slate plunge pools, and silent eco-conditioning.
          </p>
        </div>

        {/* Accommodation Cards Grid */}
        <div className="space-y-16">
          {VILLAS.map((villa, idx) => {
            const isCollapsibleOpen = selectedSpecVillaId === villa.id;
            return (
              <motion.div
                key={villa.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-105px' }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow grid grid-cols-1 lg:grid-cols-12 gap-0 text-left"
              >
                
                {/* Villa Image Side */}
                <div className="lg:col-span-7 col-span-1 relative min-h-[320px] lg:min-h-[480px]">
                  <img
                    src={villa.image}
                    alt={villa.name}
                    className="absolute inset-0 w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Top Quality Stamp */}
                  <div className="absolute top-6 left-6 bg-[#FDFCFB]/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-stone-150 shadow-sm flex items-center gap-1 text-[10px] uppercase font-extrabold tracking-widest text-[#FE8F8F]">
                    <Sparkles className="w-3.5 h-3.5 text-[#FE8F8F]" />
                    Private Retreat
                  </div>

                  {/* Pricing Overlay Badge */}
                  <div className="absolute bottom-6 left-6 bg-[#FDFCFB]/95 backdrop-blur-md px-4 py-3 rounded-2xl border border-stone-100 shadow-md">
                    <p className="text-[10px] uppercase tracking-widest font-bold text-stone-500">Starting Tariff</p>
                    <p className="font-serif text-xl font-semibold text-stone-900 mt-0.5">
                      {villa.startingPrice} <span className="text-xs text-stone-550 font-sans font-normal">/ Night</span>
                    </p>
                  </div>
                </div>

                {/* Villa Specifications & Booking Side */}
                <div className="lg:col-span-5 col-span-1 p-6 sm:p-10 flex flex-col justify-between">
                  <div className="space-y-4">
                    {/* Villa Name */}
                    <h3 className="font-serif text-3.5xl text-stone-900 tracking-tight leading-none leading-snug">
                      {villa.name}
                    </h3>
                    
                    {/* Size & Guests capacity badge bar */}
                    <div className="flex gap-4 items-center border-y border-stone-150 py-3 text-stone-600 text-xs font-semibold tracking-wide">
                      <div className="flex items-center gap-1.5">
                        <Ruler className="w-4 h-4 text-teal-700" />
                        <span>{villa.size}</span>
                      </div>
                      <span className="text-stone-300">|</span>
                      <div className="flex items-center gap-1.5">
                        <Users className="w-4 h-4 text-teal-700" />
                        <span>{villa.capacity}</span>
                      </div>
                    </div>

                    <p className="text-stone-600 text-sm leading-relaxed">
                      {villa.description}
                    </p>

                    {/* Elite Highlights bullet points */}
                    <div className="space-y-2 pt-1">
                      <h4 className="text-stone-850 text-xs font-bold tracking-widest uppercase">Premium Indulgences</h4>
                      <ul className="space-y-2 text-stone-600 text-xs font-medium">
                        {villa.highlights.map((hlt, hidx) => (
                          <li key={hidx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-[#FE8F8F] rounded-full" />
                            <span>{hlt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="mt-8 pt-4 border-t border-stone-150 space-y-4">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => onOpenBooking('villa', villa.id)}
                        className="flex-1 bg-teal-800 hover:bg-teal-900 active:bg-teal-950 text-white font-bold tracking-wider text-xs py-3.5 px-6 rounded-xl shadow-md uppercase transition-all cursor-pointer"
                        id={`book-villa-${villa.id}`}
                      >
                        Reserve Suite
                      </button>
                      <button
                        onClick={() => setSelectedSpecVillaId(isCollapsibleOpen ? null : villa.id)}
                        className="p-3.5 bg-stone-100 hover:bg-stone-200 border border-stone-200 text-stone-700 rounded-xl transition-colors cursor-pointer"
                        title="View Full Specifications List"
                        id={`specs-toggle-${villa.id}`}
                      >
                        <Info className="w-4.5 h-4.5 text-stone-600" />
                      </button>
                    </div>

                    {/* Expandable Specifications Area */}
                    {isCollapsibleOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="bg-stone-50 rounded-2xl p-4 border border-stone-200 text-left text-xs"
                      >
                        <h4 className="font-bold text-stone-800 uppercase tracking-widest mb-2 border-b border-stone-150 pb-1">Included Guest Specs</h4>
                        <ul className="space-y-1.5 text-stone-600">
                          {villa.features.map((feature, fidx) => (
                            <li key={fidx} className="flex gap-2 items-start">
                              <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </div>

                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
