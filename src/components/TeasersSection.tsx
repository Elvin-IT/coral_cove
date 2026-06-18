import React from 'react';
import { motion } from 'motion/react';
import { Compass, Sparkles, Plus, ArrowUpRight, ArrowRight } from 'lucide-react';
import { RESORT_IMAGES } from '../data';

interface TeasersSectionProps {
  onNavigateTo: (tab: string) => void;
  onOpenBooking: (type?: 'general' | 'villa' | 'offer', optionId?: string) => void;
}

export default function TeasersSection({ onNavigateTo, onOpenBooking }: TeasersSectionProps) {
  const teasers = [
    {
      id: 'villas',
      category: 'Accommodations',
      title: 'Barefoot Luxury Haven',
      desc: 'Set either directly upon the powdery sands or suspended above the shallow turquoise coral reef. Designed with organic materials, high-vaulted thatched ceilings, and private plunge pools.',
      image: RESORT_IMAGES.overwaterBungalow,
      actionLabel: 'Explore Villas & Bungalows',
    },
    {
      id: 'dining',
      category: 'Culinary Craft',
      title: 'Ocean-to-Fork Epicureanism',
      desc: 'From fresh Pemba lobsters caught hours before to spice-infused garden vegetables from our Swahili farm. Dine with your toes in the sand or on suspended ocean boardwalks.',
      image: RESORT_IMAGES.mainRestaurant,
      actionLabel: 'Savor Our Restaurants',
    },
    {
      id: 'experiences',
      category: 'Adventures',
      title: 'Sanctuary Journeys',
      desc: 'Reef diving with sea turtles, private sandbar castaway lunches, and classical sunset dhow sailing. Create a customized Tanzanian itinerary with native marine naturalists.',
      image: RESORT_IMAGES.diving,
      actionLabel: 'Discover Island Life',
    },
    {
      id: 'weddings',
      category: 'Romance & Bespoke Events',
      title: 'Zanzibar Love Stories',
      desc: 'Enquire about private beach wedding ceremonies on the jetty or simple romantic elopements. Unrivalled candlelit dinners under starry skies, specifically arranged for honeymoon couples.',
      image: RESORT_IMAGES.weddingBeach,
      actionLabel: 'Honeymoon & Weddings',
    },
  ];

  return (
    <section className="py-20 bg-stone-50 font-sans" id="home-teasers-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#FE8F8F] text-xs font-bold tracking-widest uppercase">The Coral Cove Experience</span>
          <h2 className="font-serif text-4xl text-stone-900 mt-2">Every aspect of life, beautifully paused</h2>
          <div className="h-0.5 w-16 bg-gradient-to-r from-[#59C1BD] to-[#FE8F8F] mx-auto mt-4" />
          <p className="text-stone-550 text-sm mt-3 leading-relaxed">
            Our private island sanctuary provides all the physical space, spiritual rest, and organic luxury required to restore connection with yourself and your loved ones.
          </p>
        </div>

        {/* Dynamic alternating grids */}
        <div className="space-y-24">
          {teasers.map((t, idx) => {
            const isAlternate = idx % 2 === 1;
            return (
              <div key={t.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* Image panel */}
                <div className={`lg:col-span-6 ${isAlternate ? 'lg:order-2' : ''}`}>
                  <motion.div
                    whileInView={{ opacity: [0, 1], scale: [0.97, 1] }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-lg border border-stone-200 group cursor-pointer"
                  >
                    <img
                      src={t.image}
                      alt={t.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-stone-900/5 transition-colors" />
                    
                    {/* Visual Stamp badge */}
                    <div className="absolute top-4 left-4 bg-[#FDFCFB]/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-stone-200 shadow-sm flex items-center gap-1.5 text-[9px] font-bold text-[#59C1BD] tracking-wider uppercase">
                      <Sparkles className="w-3.5 h-3.5 text-[#FE8F8F]" />
                      Eco Certified
                    </div>
                  </motion.div>
                </div>

                {/* Text Panel */}
                <div className={`lg:col-span-6 space-y-4 text-left ${isAlternate ? 'lg:order-1' : ''}`}>
                  <span className="text-xs font-bold uppercase tracking-widest text-teal-700 pb-1.5 block">
                    {t.category}
                  </span>
                  <h3 className="font-serif text-3xl text-stone-900 tracking-tight leading-snug">
                    {t.title}
                  </h3>
                  <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                    {t.desc}
                  </p>

                  <div className="pt-4 flex items-center gap-4">
                    <button
                      onClick={() => onNavigateTo(t.id)}
                      className="px-6 py-3 bg-stone-900 hover:bg-stone-900 text-amber-50 rounded-xl text-xs font-bold uppercase tracking-widest flex items-center gap-2 group shadow-md hover:shadow-lg transition-all cursor-pointer"
                    >
                      {t.actionLabel}
                      <ArrowRight className="w-4 h-4 text-[#FE8F8F] group-hover:translate-x-1.5 transition-transform" />
                    </button>
                    {t.id === 'villas' && (
                      <button
                        onClick={() => onOpenBooking('villa')}
                        className="text-stone-600 hover:text-[#FE8F8F] text-xs font-bold uppercase tracking-widest flex items-center gap-1"
                      >
                        Enquire Booking
                      </button>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Highlighting Honeymoon or Offers Banner at the bottom */}
        <div className="mt-28 bg-gradient-to-br from-teal-50 to-amber-50/40 rounded-3xl border border-teal-100/50 p-8 md:p-12 text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-teal-200/15 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative">
            <div className="md:col-span-8 space-y-3">
              <span className="text-[10px] bg-teal-100 text-teal-800 border border-teal-200/40 px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                Limited Time Promotion
              </span>
              <h3 className="font-serif text-3xl text-stone-900 leading-snug">
                The Spice Coast Slowdown
              </h3>
              <p className="text-stone-600 text-sm max-w-xl leading-relaxed">
                Stay five nights in our beachfront pool suite or sunset lagoon bungalow and enjoy the fifth night completely complimentary. Includes daily signature beachside breakfasts and speedboat transfers.
              </p>
            </div>
            
            <div className="md:col-span-4 justify-end flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => onNavigateTo('offers')}
                className="bg-teal-800 hover:bg-teal-900 text-white rounded-xl py-3 px-6 text-xs font-bold uppercase tracking-widest shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              >
                View Curated Offers
              </button>
              <button
                onClick={() => onOpenBooking('offer', 'stay-5-pay-4')}
                className="bg-white hover:bg-stone-100 border border-stone-200 text-stone-800 rounded-xl py-3 px-6 text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer"
              >
                Claim Package
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
