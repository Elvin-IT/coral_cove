import React from 'react';
import { motion } from 'motion/react';
import { Sun, Shield, Heart, HeartHandshake, Sparkles, Sprout, ArrowRight } from 'lucide-react';
import { SUSTAINABILITY_INFO } from '../data';

interface SustainabilitySectionProps {
  onOpenBooking: () => void;
}

export default function SustainabilitySection({ onOpenBooking }: SustainabilitySectionProps) {
  const pillarIcons = [Sun, Shield, Sprout, HeartHandshake];

  return (
    <section className="py-16 bg-stone-50 font-sans" id="resort-about-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Text */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#FE8F8F] text-xs font-bold tracking-widest uppercase">Our Sacred Philosophy</span>
          <h2 className="font-serif text-4xl text-stone-900 mt-1">Eco-Luxury Without Compromise</h2>
          <div className="h-0.5 w-16 bg-gradient-to-r from-[#59C1BD] to-[#FE8F8F] mx-auto mt-4" />
          <p className="text-stone-600 text-sm mt-3 leading-relaxed">
            Coral Cove is a carbon-negative private island marine sanctuary built from the sand up to actively restore its environment rather than merely occupy it.
          </p>
        </div>

        {/* Philosophy Storytelling Section */}
        <div className="bg-white rounded-3xl border border-stone-200 p-8 md:p-12 shadow-sm text-left max-w-5xl mx-auto mb-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold tracking-widest uppercase text-teal-750 block">The Founders' Commitment</span>
            <h3 className="font-serif text-3xl text-stone-900 tracking-tight leading-snug">
              Zanzibar is a fragile treasure, and we are its protective guardians.
            </h3>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              {SUSTAINABILITY_INFO.philosophy}
            </p>
            <p className="text-stone-600 text-sm">
              We did not clear a single ancient palm to build our boardwalks. Instead, our architects structured layouts around existing spice trees and sandstone formations, utilizing FSC-certified local timbers and hand-dyed organic sails.
            </p>
          </div>

          <div className="lg:col-span-5 bg-[#FDFCFB] border border-stone-150 rounded-2xl p-6 space-y-4">
            <h4 className="font-bold text-stone-850 text-xs tracking-widest uppercase pb-2 border-b border-stone-200 flex items-center justify-between">
              <span>Sanctuary Credentials</span>
              <Sparkles className="w-4 h-4 text-[#FE8F8F]" />
            </h4>
            
            <ul className="space-y-3.5 text-stone-700 text-xs font-semibold">
              <li className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block animate-pulse shrink-0" />
                <span>100% Tesla Custom Solar Microgrid</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block animate-pulse shrink-0" />
                <span>Zero Single-Use Plastic Bottle Integrity</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block animate-pulse shrink-0" />
                <span>On-Site Coral Splicing & Transplantation</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block animate-pulse shrink-0" />
                <span>85% Staff Living in Local Zanzibar Villages</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Four Core Pillars list */}
        <div className="border-t border-stone-200/60 pt-16">
          <div className="text-center mb-12">
            <h3 className="text-xs font-bold text-stone-400 uppercase tracking-widest">Procedural Pillars</h3>
            <p className="text-stone-500 text-xs mt-1">Our day-to-day operations are guided by severe environmental benchmarks.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {SUSTAINABILITY_INFO.pillars.map((pillar, pidx) => {
              const PillarIconComp = pillarIcons[pidx] || Sprout;
              return (
                <motion.div
                  key={pidx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: pidx * 0.1 }}
                  className="bg-white border border-stone-200/80 p-6 rounded-2xl shadow-inner hover:shadow-md transition-shadow group cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 bg-[#E9F3F2] text-[#59C1BD] rounded-full flex items-center justify-center mb-4 group-hover:bg-[#FE8F8F]/15 group-hover:text-[#FE8F8F] transition-all">
                      <PillarIconComp className="w-5 h-5" />
                    </div>
                    
                    <h4 className="font-serif text-base font-bold text-stone-900 tracking-tight">
                      {pillar.title}
                    </h4>
                    
                    <p className="text-stone-550 text-xs leading-relaxed mt-2">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-stone-100 flex items-center text-[10px] uppercase font-bold text-teal-800 tracking-wider">
                    <span>Restorative Protocol</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Buyout Callout */}
        <div className="mt-20 border border-teal-100 bg-teal-50/45 rounded-3xl p-8 md:p-12 text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#F07167]/5 rounded-full blur-2xl pointer-events-none" />
          
          <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-2">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#F07167] bg-rose-50 border border-rose-100 rounded px-2.5 py-1 inline-block">Sovereign Booking</span>
              <h3 className="font-serif text-3xl text-stone-900">Full Island Buyout Proposals</h3>
              <p className="text-stone-600 text-sm max-w-xl leading-relaxed">
                For complete spiritual seclusion or sprawling direct family milestones, reserve Coral Cove in its entirety. Host up to 100 private guests with personalized catering, custom dives, and dedicated security.
              </p>
            </div>
            
            <div className="md:col-span-4 flex justify-end">
              <button
                onClick={onOpenBooking}
                className="bg-teal-850 hover:bg-teal-900 text-amber-50 rounded-xl py-3 px-6 text-xs font-bold uppercase tracking-widest flex items-center gap-2 shadow shadow-teal-900/10 transition-shadow cursor-pointer"
                id="story-buyout-btn"
              >
                Inquire Full Buyout <ArrowRight className="w-4 h-4 text-orange-400" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
