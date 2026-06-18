import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Anchor, Waves, Clock, Sun, Sparkles, Filter, Check } from 'lucide-react';
import { EXPERIENCES } from '../data';
import { Experience } from '../types';

interface ExperiencesSectionProps {
  onOpenBooking: (type: 'general', optionId?: string) => void;
}

type FilterCategory = 'all' | 'water' | 'land' | 'romantic';

export default function ExperiencesSection({ onOpenBooking }: ExperiencesSectionProps) {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');

  const filteredExperiences = EXPERIENCES.filter((exp) => {
    if (activeFilter === 'all') return true;
    return exp.category === activeFilter;
  });

  const categories: { id: FilterCategory; label: string }[] = [
    { id: 'all', label: 'All Journeys' },
    { id: 'water', label: 'Aquatic & Sanctuary' },
    { id: 'land', label: 'Zanzibar Culture' },
    { id: 'romantic', label: 'Sunset & Romantic' },
  ];

  return (
    <section className="py-16 bg-[#FDFCFB] font-sans" id="resort-experiences-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Text */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[#FE8F8F] text-xs font-bold tracking-widest uppercase">Curated Journeys</span>
          <h2 className="font-serif text-4xl text-stone-900 mt-1">Sovereign Adventures</h2>
          <div className="h-0.5 w-16 bg-gradient-to-r from-[#59C1BD] to-[#FE8F8F] mx-auto mt-4" />
          <p className="text-stone-600 text-sm mt-3 leading-relaxed">
            From the deep blue marine shelf of the Kizimkazi channel to the silent, starry heights of Tanzanian night skies. Plan beautiful bespoke itineraries guided by professional Swahili naturalists.
          </p>
        </div>

        {/* Filter Selection Panel */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full border transition-all duration-150 cursor-pointer ${
                activeFilter === cat.id
                  ? 'bg-teal-800 text-white border-teal-800 shadow-sm'
                  : 'bg-white text-stone-600 border-stone-200 hover:border-teal-555 hover:text-teal-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredExperiences.map((exp, idx) => (
            <motion.div
              layout
              key={exp.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow text-left flex flex-col justify-between"
            >
              <div>
                {/* Product Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={exp.image}
                    alt={exp.name}
                    className="w-full h-full object-cover select-none"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Category Stamp info */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-2.5 py-1 rounded-full text-[9px] font-bold text-stone-700 uppercase tracking-widest border border-stone-150 shadow-sm flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-[#FE8F8F] rounded-full" />
                    <span>{exp.category === 'romantic' ? 'Exquisite' : exp.category.toUpperCase()}</span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-3">
                  <h3 className="font-serif text-xl text-stone-900 leading-snug font-semibold">
                    {exp.name}
                  </h3>
                  
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>

              {/* Specs & Enquiry CTA trigger inside card footer */}
              <div className="p-6 pt-0 border-t border-stone-100 flex flex-col gap-4">
                <div className="flex gap-4 items-center text-[10px] uppercase font-semibold text-stone-500 tracking-wide mt-4">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-teal-700" />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Sun className="w-3.5 h-3.5 text-orange-400" />
                    <span>{exp.bestTime}</span>
                  </div>
                </div>

                <button
                  onClick={() => onOpenBooking('general')}
                  className="w-full bg-[#FDFCFB] hover:bg-stone-100 text-stone-800 border border-stone-200 text-xs py-2.5 rounded-xl font-bold uppercase tracking-wider transition-colors cursor-pointer"
                  id={`experience-book-btn-${exp.id}`}
                >
                  Request Experience
                </button>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Itinerary planner Box card */}
        <div className="mt-20 bg-stone-900 rounded-3xl relative overflow-hidden border border-stone-850 p-8 sm:p-12 text-left shadow-xl max-w-4xl mx-auto">
          <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[50%] bg-[#FE8F8F]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-[20%] -right-[15%] w-[40%] h-[50%] bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#FE8F8F] flex items-center gap-1">
                <Sparkles className="w-4 h-4 text-[#FE8F8F]" />
                Co-Created Island Timelines
              </span>
              <h3 className="font-serif text-3xl sm:text-4.5xl text-stone-100 font-normal leading-tight">
                Plan your bespoke <br className="hidden sm:block" />
                island itinerary.
              </h3>
              <p className="text-stone-450 text-sm max-w-lg leading-relaxed">
                Our Private Guest Experience curator is prepped to draft custom schedules matching your personal interests. Whether you wish to focus on oceanic wellness, reef diving certificate tracking, or private dining.
              </p>
            </div>

            <div className="md:col-span-4 flex items-center justify-end">
              <button
                onClick={() => onOpenBooking('general')}
                className="w-full md:w-auto bg-[#59C1BD] hover:bg-[#48A8A4] text-white rounded-xl py-4 px-8 text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer"
                id="cta-itinerary-form"
              >
                Assemble Sunset Schedule
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
