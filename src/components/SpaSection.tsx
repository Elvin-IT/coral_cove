import React from 'react';
import { motion } from 'motion/react';
import { Waves, Heart, Flame, Sparkles, Sprout, ShieldCheck, Sun } from 'lucide-react';
import { RESORT_IMAGES } from '../data';

interface SpaSectionProps {
  onOpenBooking: (type: 'spa', optionId?: string) => void;
  onNavigateTo: (tab: string) => void;
}

export default function SpaSection({ onOpenBooking, onNavigateTo }: SpaSectionProps) {
  const spaCeremonies = [
    {
      title: 'Zanzibar Spice Ritual',
      duration: '90 Minutes',
      focus: 'Circulatory renewal and skin polish',
      desc: 'An intensive, sensory skin polish using native ground Pemba cardamom, cloves, cinnamon bark, and raw honey. Concludes with an intensive full-body deep pressure massage with cold-pressed coconut oil.',
    },
    {
      title: 'Indian Ocean Seaweed Wrap',
      duration: '75 Minutes',
      focus: 'Lymphatic detoxification and salt hydration',
      desc: 'Harvested sustainably from local Zanzibar reef channels. Features mineral-rich hand-processed seaweed compresses, heated clay application, and a calming outdoor botanical scalp rinse.',
    },
    {
      title: 'Prana Sunken Sound Healing',
      duration: '60 Minutes',
      focus: 'Spiritual grounding and nervous alignment',
      desc: 'Conducted at sunset on our over-water deck platform. Incorporates classical bronze singing bowls, pure quartz vibrations, and gentle guided deep-breathing exercises.',
    },
  ];

  return (
    <section className="py-16 bg-stone-50 font-sans" id="resort-spa-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-teal-700 text-xs font-bold tracking-widest uppercase">The Wellness Cathedral</span>
          <h2 className="font-serif text-4xl text-stone-900 mt-1">Coral Cove Spa Sanctuary</h2>
          <div className="h-0.5 w-16 bg-gradient-to-r from-teal-550 to-orange-400 mx-auto mt-4" />
          <p className="text-stone-600 text-sm mt-3 leading-relaxed">
            Suspended upon the shoreline under rustic palm-slas thatched domes. Slip into an intensive rhythm of restorative therapeutic treatment utilizing botanical oils and ocean breeze acoustics.
          </p>
        </div>

        {/* Hero Visual Collage & copy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          
          {/* Custom Generated Image Area */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-md border-2 border-white"
            >
              <img
                src={RESORT_IMAGES.spa}
                alt="Coral Cove Oceanfront Spa Sanctuary treatments"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[#FE8F8F]/5 mix-blend-color pointer-events-none" />
            </motion.div>
          </div>

          {/* Copy Panel explaining Native Botanicals */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <span className="text-[10px] bg-teal-50 text-teal-800 border border-teal-200/40 px-3 py-1 rounded-full font-bold uppercase tracking-wider">
              Organic Beach pavilions
            </span>
            <h3 className="font-serif text-3.5xl text-stone-900 tracking-tight leading-snug">
              Restore balance with the elements
            </h3>
            <p className="text-stone-650 text-sm sm:text-base leading-relaxed">
              Our open-air pavilions capture the high mineral salt spray of Kizimkazi. We have banned all synthetic perfumes or petroleum formulas: every cream, salt polish, or oil blend is mixed fresh daily. We use local frangipani blossoms, cinnamon leaf, lemongrass, coconut pulp, and seaweed concentrates.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="border border-stone-200 rounded-2xl p-4 bg-white shadow-sm">
                <Sun className="w-5 h-5 text-[#FE8F8F] mb-2" />
                <h4 className="font-serif text-sm font-semibold text-stone-850">Yoga Platform</h4>
                <p className="text-stone-500 text-[11px] mt-1">Daily greeting sunrise breathing sessions</p>
              </div>
              <div className="border border-stone-200 rounded-2xl p-4 bg-white shadow-sm">
                <Sprout className="w-5 h-5 text-teal-600 mb-2" />
                <h4 className="font-serif text-sm font-semibold text-stone-850">Local Sourcing</h4>
                <p className="text-stone-500 text-[11px] mt-1">Raw spices grown in local Pemba groves</p>
              </div>
            </div>

            <div className="pt-4 flex gap-4">
              <button
                onClick={() => onOpenBooking('spa')}
                className="bg-teal-800 hover:bg-teal-900 text-white font-bold tracking-wider text-xs uppercase px-6 py-3.5 rounded-xl shadow-md transition-shadow cursor-pointer"
              >
                Reserve Spa Treatment
              </button>
              <button
                onClick={() => onNavigateTo('offers')}
                className="bg-white hover:bg-stone-100 text-stone-800 border border-stone-200 font-bold tracking-wider text-xs uppercase px-6 py-3.5 rounded-xl transition-colors cursor-pointer"
              >
                Wellness Packages
              </button>
            </div>
          </div>

        </div>

        {/* Signature Botanical Ceremonies */}
        <div className="border-t border-stone-200 pt-16">
          <div className="text-center mb-10 max-w-sm mx-auto">
            <h3 className="text-xs font-bold tracking-widest text-[#FE8F8F] uppercase">Signature Journeys</h3>
            <p className="text-stone-500 text-xs mt-1">Meticulously targeted wellness experiences for our guests</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {spaCeremonies.map((ceremony, cidx) => (
              <motion.div
                key={cidx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: cidx * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow text-left flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-center bg-stone-50 px-3 py-1.5 rounded-xl border border-stone-150">
                    <span className="text-[10px] font-bold text-teal-800 uppercase tracking-widest">{ceremony.duration}</span>
                    <Sparkles className="w-4 h-4 text-orange-400" />
                  </div>
                  <h4 className="font-serif text-lg text-stone-900 font-semibold">{ceremony.title}</h4>
                  <p className="text-[#FE8F8F] text-[10px] uppercase tracking-wide font-extrabold">{ceremony.focus}</p>
                  <p className="text-stone-500 text-xs leading-relaxed">{ceremony.desc}</p>
                </div>

                <div className="pt-6">
                  <button
                    onClick={() => onOpenBooking('spa')}
                    className="w-full bg-[#FDFCFB] text-stone-800 border border-stone-200 text-[10px] py-1.5 rounded-lg hover:bg-stone-100 font-semibold uppercase tracking-wider transition-all cursor-pointer"
                  >
                    Select Ceremony
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
