import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Calendar, Receipt, Gift, Tag, Check, Copy, CheckCircle } from 'lucide-react';
import { OFFERS } from '../data';
import { Offer } from '../types';

interface OffersSectionProps {
  onOpenBooking: (type: 'offer', optionId: string) => void;
}

export default function OffersSection({ onOpenBooking }: OffersSectionProps) {
  const [copiedCodeId, setCopiedCodeId] = useState<string | null>(null);

  const handleCopyCode = (id: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  return (
    <section className="py-16 bg-[#FDFCFB] font-sans" id="resort-offers-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#FE8F8F] text-xs font-bold tracking-widest uppercase">Curated Indulgences</span>
          <h2 className="font-serif text-4xl text-stone-900 mt-1">Exclusive Island Sanctuary Offers</h2>
          <div className="h-0.5 w-16 bg-gradient-to-r from-[#59C1BD] to-[#FE8F8F] mx-auto mt-4" />
          <p className="text-stone-600 text-sm mt-3 leading-relaxed">
            Engineered to reward slower travel and deeper rest. Book seasonal promotions, romantic honeymoon extensions, or intensive holistic wellness weeks.
          </p>
        </div>

        {/* Offers Cards Map */}
        <div className="space-y-16">
          {OFFERS.map((offer, idx) => {
            const isCopied = copiedCodeId === offer.id;
            const isAlternate = idx % 2 === 1;

            return (
              <motion.div
                key={offer.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-3xl border border-stone-200 shadow-sm hover:shadow-lg transition-shadow grid grid-cols-1 lg:grid-cols-12 gap-0 text-left"
              >
                
                {/* Visual Image Panel */}
                <div className={`lg:col-span-5 relative min-h-[280px] lg:min-h-[440px] ${isAlternate ? 'lg:order-2' : ''}`}>
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-stone-950/20 pointer-events-none" />
                  
                  {/* Decorative tag badge */}
                  <div className="absolute top-6 left-6 bg-[#FDFCFB]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-stone-150 shadow-sm flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-widest text-[#FE8F8F]">
                    <Tag className="w-3.5 h-3.5 text-[#FE8F8F]" />
                    <span>Exclusive Release</span>
                  </div>
                </div>

                {/* Offer Specs and Details Content */}
                <div className={`lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between ${isAlternate ? 'lg:order-1' : ''}`}>
                  <div className="space-y-4">
                    
                    {/* Expiry / Code header row */}
                    <div className="flex flex-wrap items-center justify-between gap-3 bg-[#FDFCFB] border border-stone-150 p-2.5 rounded-2xl">
                      <div className="flex items-center gap-1.5 text-[10px] text-stone-550 font-bold uppercase tracking-widest">
                        <Calendar className="w-3.5 h-3.5 text-teal-700" />
                        <span>Valid Until: {offer.validUntil}</span>
                      </div>
                      
                      {/* Copy Coupon interactive trigger */}
                      <button
                        onClick={() => handleCopyCode(offer.id, offer.code)}
                        className="flex items-center gap-1.5 text-[10px] font-bold text-stone-700 hover:text-teal-700 uppercase tracking-widest bg-white border border-stone-250 px-2.5 py-1 rounded-lg transition-all shadow-sm cursor-pointer"
                        id={`copy-code-${offer.id}`}
                      >
                        {isCopied ? (
                          <>
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                            <span className="text-emerald-700 font-semibold">COPIED CODE</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3 text-stone-400" />
                            <span>CODE: {offer.code}</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-serif text-2.5xl text-stone-900 tracking-tight leading-none leading-snug">
                        {offer.title}
                      </h3>
                      <p className="text-teal-750 text-xs font-semibold tracking-wider uppercase">
                        {offer.tagline}
                      </p>
                    </div>

                    <p className="text-stone-600 text-sm leading-relaxed pb-2">
                      {offer.description}
                    </p>

                    {/* Inclusion items points */}
                    <div className="space-y-2 border-t border-stone-150 pt-4">
                      <h4 className="text-stone-850 text-xs font-extrabold uppercase tracking-widest flex items-center gap-1.5">
                        <Gift className="w-4 h-4 text-[#FE8F8F]" />
                        Bespoke Package Inclusions
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-stone-600 text-xs font-medium">
                        {offer.inclusions.map((inc, iidx) => (
                          <li key={iidx} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                            <span>{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                  {/* Actions buttons */}
                  <div className="pt-8 border-t border-stone-150 flex items-center gap-4">
                    <button
                      onClick={() => onOpenBooking('offer', offer.id)}
                      className="bg-teal-800 hover:bg-teal-900 active:bg-teal-950 text-white font-bold tracking-wider text-xs px-8 py-3.5 rounded-xl uppercase shadow-md transition-shadow cursor-pointer"
                      id={`claim-${offer.id}`}
                    >
                      Draft Packages Enquiry
                    </button>
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
