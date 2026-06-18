import React from 'react';
import { motion } from 'motion/react';
import { Heart, Camera, Sparkles, HelpCircle, ArrowRight, Sunset } from 'lucide-react';
import { RESORT_IMAGES } from '../data';

interface WeddingsSectionProps {
  onOpenBooking: (type: 'wedding' | 'offer', optionId?: string) => void;
  onNavigateTo: (tab: string) => void;
}

export default function WeddingsSection({ onOpenBooking, onNavigateTo }: WeddingsSectionProps) {
  const weddingThemes = [
    {
      title: 'Ocean Jetty Elopements',
      desc: 'Stand suspended above deep water, framed by local white orchids and sail drapes. Say your vows surrounded by 360 degrees of sea at sunset.',
      highlights: ['Private jetty drapes', 'Native flower bouquet', 'Violinist or Swahili choir'],
    },
    {
      title: 'Beachfront Cove Ceremonies',
      desc: 'An intimate setup on whispering powdery white sand. Accommodates up to 30 loved ones with coconut charcoal barbecues and tiki torch lanes.',
      highlights: ['Torch-lit barefoot path', 'Fresh seafood banquet', 'Custom cocktail bars'],
    },
  ];

  return (
    <section className="py-16 bg-stone-50 font-sans" id="resort-weddings-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#FE8F8F] text-xs font-bold tracking-widest uppercase">Zanzibar Island Romance</span>
          <h2 className="font-serif text-4xl text-stone-900 mt-1">Timeless Love Stories</h2>
          <div className="h-0.5 w-16 bg-gradient-to-r from-[#59C1BD] to-[#FE8F8F] mx-auto mt-4" />
          <p className="text-stone-605 text-sm mt-3 leading-relaxed">
            Whether a quiet barefoot beach elopement or an extensive private island buyout wedding. Coral Cove elevates your celebration into an uncompromised lifetime milestone.
          </p>
        </div>

        {/* Storytelling & Visual Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20 text-left">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[10px] bg-[#E9F3F2] text-[#FE8F8F] border border-[#FE8F8F]/20 px-3 py-1 rounded-full font-bold uppercase tracking-wider">
              An Intimate Paradise
            </span>
            <h3 className="font-serif text-3.5xl text-stone-900 tracking-tight leading-snug">
              Bespoke island unions, crafted with pure romantic stillness
            </h3>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              We understand you seek a wedding free of administrative noise. At Coral Cove, we curate a customized marriage environment: beachfront dinners lit solely by candles and evening stars, customized botanical body masques, and high-end local photography sessions that memorialize your beach sand vows.
            </p>

            {/* Included highlights bullet cards */}
            <div className="space-y-3.5 pt-2">
              <div className="flex gap-3 items-start">
                <div className="w-5 h-5 bg-[#E9F3F2] text-[#FE8F8F] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <Sunset className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-stone-850 text-xs font-bold uppercase tracking-widest leading-none">Bespoke Jetty Dinners</h4>
                  <p className="text-stone-500 text-xs mt-1">Multi-course lobster and spice-infused menus served direct on the beachfront surf.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="w-5 h-5 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <Heart className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-stone-850 text-xs font-bold uppercase tracking-widest leading-none">Couples Spa Journeys</h4>
                  <p className="text-stone-500 text-xs mt-1">Signature hot-stone coconut massages overlooking the marine channel reef life.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="w-5 h-5 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <Camera className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-stone-850 text-xs font-bold uppercase tracking-widest leading-none">High-end Drone & Film shoots</h4>
                  <p className="text-stone-500 text-xs mt-1">Capturing stunning wide-angles of the tropical lagoon boardwalks and beaches.</p>
                </div>
              </div>
            </div>

            {/* Main Action CTAs */}
            <div className="pt-6 flex flex-wrap gap-4">
              <button
                onClick={() => onNavigateTo('offers')}
                className="bg-teal-800 hover:bg-teal-900 text-white font-bold tracking-wider text-xs uppercase px-7 py-4 rounded-xl shadow-md transition-shadow cursor-pointer"
                id="cta-view-honey"
              >
                View honeymoon packages
              </button>
              
              <button
                onClick={() => onOpenBooking('wedding')}
                className="bg-white hover:bg-stone-100 text-stone-850 border border-stone-200 font-bold tracking-wider text-xs uppercase px-7 py-4 rounded-xl transition-colors cursor-pointer"
                id="cta-wedding-enquire"
              >
                Enquire about weddings
              </button>
            </div>
          </div>

          {/* Right Wide Image Grid */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-md border-2 border-white/80"
            >
              <img
                src={RESORT_IMAGES.weddingBeach}
                alt="Romantic beachfront wedding candlelit dinner in Coral Cove Zanzibar"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                <p className="text-[10px] uppercase font-bold tracking-widest text-[#FE8F8F]">Unparalleled Seclusion</p>
                <p className="font-serif text-xl mt-0.5">"The waves played Swahili luths as we exchanged our sands."</p>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Wedding Themes List cards */}
        <div className="border-t border-stone-200 pt-16 mt-16 text-left">
          <div className="max-w-md mb-8">
            <h3 className="text-xs font-bold text-[#FE8F8F] uppercase tracking-widest">Bridal Blueprints</h3>
            <p className="text-stone-500 text-sm mt-1">Starting frameworks designed to host weddings on our private coast.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {weddingThemes.map((theme, tidx) => (
              <div key={tidx} className="bg-white rounded-3xl p-6 md:p-8 border border-stone-150 shadow-sm space-y-4">
                <div className="flex justify-between items-center border-b border-stone-150 pb-3">
                  <h4 className="font-serif text-2xl text-stone-900 font-semibold">{theme.title}</h4>
                  <Sparkles className="w-5 h-5 text-teal-700" />
                </div>
                
                <p className="text-stone-600 text-sm leading-relaxed">{theme.desc}</p>
                
                <div className="space-y-1.5">
                  <span className="text-[10px] tracking-widest uppercase font-bold text-stone-400">Included Core Elements</span>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {theme.highlights.map((hlt, hldx) => (
                      <span key={hldx} className="bg-teal-50 text-teal-800 text-[10px] font-semibold px-2.5 py-1 rounded-full border border-teal-100/50">
                        {hlt}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => onOpenBooking('wedding')}
                    className="text-[#FE8F8F] hover:text-[#FE8F8F]/80 font-bold text-xs uppercase tracking-widest flex items-center gap-1 cursor-pointer"
                  >
                    <span>Enquire Wedding Layout</span>
                    <ArrowRight className="w-4 h-4 text-orange-400" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
