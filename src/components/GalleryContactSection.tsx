import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Image, Phone, Mail, MapPin, Anchor, MessageSquare, CheckCircle, Flame, Plus, ChevronLeft, ChevronRight, X, Sparkles } from 'lucide-react';
import { RESORT_IMAGES } from '../data';
import { EnquiryFormInput } from '../types';

export default function GalleryContactSection() {
  const [activeGalleryFilter, setActiveGalleryFilter] = useState<'all' | 'villa' | 'nature' | 'dining'>('all');
  const [selectedLightboxIndex, setSelectedLightboxIndex] = useState<number | null>(null);

  // Form states
  const [formData, setFormData] = useState<EnquiryFormInput>({
    name: '',
    email: '',
    phone: '',
    type: 'general',
    arrivalDate: '',
    departureDate: '',
    guestsCount: '2',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [refCode, setRefCode] = useState('');

  const galleryItems = [
    { src: RESORT_IMAGES.hero, category: 'villa', title: 'Coral Cove Aerial Sweep' },
    { src: RESORT_IMAGES.overwaterBungalow, category: 'villa', title: 'Lagoon Boardwalk Sunset' },
    { src: RESORT_IMAGES.spa, category: 'nature', title: 'Oceanfront Spa Sanctuary' },
    { src: RESORT_IMAGES.beachfrontPoolVilla, category: 'villa', title: 'Beachfront Pool Suite' },
    { src: RESORT_IMAGES.gardenVilla, category: 'villa', title: 'Secret Garden Sabi Villa' },
    { src: RESORT_IMAGES.mainRestaurant, category: 'dining', title: 'Lamu Ocean Hub Vaults' },
    { src: RESORT_IMAGES.beachGrill, category: 'dining', title: 'Manga Reef Fire Grill' },
    { src: RESORT_IMAGES.sunsetBar, category: 'dining', title: 'The Dhow Lounge Sunset' },
    { src: RESORT_IMAGES.diving, category: 'nature', title: 'Kizimkazi Coral Sanctuary' },
    { src: RESORT_IMAGES.sandbankPicnic, category: 'nature', title: 'Castaway Snark sandbank' },
    { src: RESORT_IMAGES.weddingBeach, category: 'nature', title: 'Wedding Surf Ceremonies' },
    { src: RESORT_IMAGES.stargazing, category: 'nature', title: 'Jetty Astronomy Bed' },
  ];

  const filteredGallery = galleryItems.filter(item => {
    if (activeGalleryFilter === 'all') return true;
    return item.category === activeGalleryFilter;
  });

  const handleNextLightboxImage = () => {
    if (selectedLightboxIndex === null) return;
    const nextIndex = (selectedLightboxIndex + 1) % filteredGallery.length;
    setSelectedLightboxIndex(nextIndex);
  };

  const handlePrevLightboxImage = () => {
    if (selectedLightboxIndex === null) return;
    const prevIndex = (selectedLightboxIndex - 1 + filteredGallery.length) % filteredGallery.length;
    setSelectedLightboxIndex(prevIndex);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setRefCode('COVE-' + Math.floor(Math.random() * 800000 + 100000));
    }, 1500);
  };

  return (
    <section className="py-16 bg-[#FDFCFB] font-sans" id="resort-gallery-contact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Gallery Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[#FE8F8F] text-xs font-bold tracking-widest uppercase">Visual Poetry</span>
          <h2 className="font-serif text-4xl text-stone-900 mt-1">Sights of the Cove</h2>
          <div className="h-0.5 w-16 bg-gradient-to-r from-[#59C1BD] to-[#FE8F8F] mx-auto mt-4" />
          <p className="text-stone-600 text-sm mt-3 leading-relaxed">
            A window into slow days, uncompromised tropical horizons, and organic dining settings. Click any image to trigger the fullscreen lightroom view.
          </p>
        </div>

        {/* Gallery Filters */}
        <div className="flex justify-center gap-3 mb-8">
          {(['all', 'villa', 'dining', 'nature'] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => {
                setActiveGalleryFilter(filter);
                setSelectedLightboxIndex(null);
              }}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full border transition-all duration-150 cursor-pointer ${
                activeGalleryFilter === filter
                  ? 'bg-stone-900 text-white border-stone-900 shadow-sm'
                  : 'bg-white text-stone-500 border-stone-200 hover:border-stone-300 hover:text-stone-700'
              }`}
            >
              {filter === 'all' && 'All Perspectives'}
              {filter === 'villa' && 'Accommodation'}
              {filter === 'dining' && 'Culinary'}
              {filter === 'nature' && 'Island & reef'}
            </button>
          ))}
        </div>

        {/* Filtered Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
          {filteredGallery.map((item, index) => (
            <motion.div
              layout
              key={item.title}
              onClick={() => setSelectedLightboxIndex(index)}
              className="relative rounded-2xl overflow-hidden aspect-square border border-stone-200 group cursor-pointer shadow-sm hover:scale-[1.01] transition-all"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-stone-950/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-3">
                <div className="text-center space-y-1">
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur text-white flex items-center justify-center mx-auto mb-2">
                    <Plus className="w-4 h-4" />
                  </div>
                  <p className="font-serif text-sm text-white font-medium">{item.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedLightboxIndex !== null && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/95 p-4">
              {/* Close Click Overlay */}
              <div className="absolute inset-0" onClick={() => setSelectedLightboxIndex(null)} />
              
              {/* Controls */}
              <button
                onClick={() => setSelectedLightboxIndex(null)}
                className="absolute top-6 right-6 text-white/55 hover:text-white p-3 rounded-full hover:bg-white/10 z-10 transition-colors"
                id="close-lightbox"
              >
                <X className="w-6 h-6" />
              </button>
              
              <button
                onClick={handlePrevLightboxImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/55 hover:text-white p-4 rounded-full hover:bg-white/10 z-10 transition-colors"
                id="prev-lightbox"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNextLightboxImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/55 hover:text-white p-4 rounded-full hover:bg-white/10 z-10 transition-colors"
                id="next-lightbox"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Lightbox Main Image Frame */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative max-w-4xl max-h-[85vh] overflow-hidden rounded-2xl border-4 border-white/5 shadow-2xl z-10"
              >
                <img
                  src={filteredGallery[selectedLightboxIndex].src}
                  alt={filteredGallery[selectedLightboxIndex].title}
                  className="w-full h-auto max-h-[75vh] object-contain mx-auto"
                  referrerPolicy="no-referrer"
                />
                <div className="bg-stone-900/80 backdrop-blur-md px-6 py-4 text-left text-white border-t border-white/5">
                  <p className="text-[10px] uppercase font-bold tracking-widest text-[#FE8F8F]">Coral Cove Zanzibar</p>
                  <p className="font-serif text-lg mt-0.5">{filteredGallery[selectedLightboxIndex].title}</p>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Contact Layout */}
        <div className="border-t border-stone-200 pt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 text-left" id="contact-panel-anchor">
          
          {/* Details & Interactive SVG regional Map Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-[#FE8F8F] text-xs font-bold tracking-widest uppercase">Connecting with paradise</span>
              <h3 className="font-serif text-3.5xl text-stone-900 tracking-tight leading-snug">
                We are poised to plan your escape
              </h3>
              <p className="text-stone-605 text-sm leading-relaxed">
                Coral Cove operates customized high-speed private speedboats departing from the Kizimkazi boat launch pad on Zanzibar’s southern tip. Flight transfers can also be coordinated directly with private puddle-jump planes landing on Jomo's strip near our reef boundary.
              </p>
            </div>

            {/* Direct Contact specs */}
            <div className="space-y-4 text-stone-700 text-sm">
              <div className="flex gap-3 items-center">
                <MapPin className="w-5 h-5 text-teal-700 shrink-0" />
                <div>
                  <strong className="text-stone-850">Resort Sanctuary:</strong>
                  <p className="text-stone-550 text-xs mt-0.5">Coral Cove Private Island, Kizimkazi Reef Shelf, Zanzibar</p>
                </div>
              </div>

              <div className="flex gap-3 items-center">
                <Phone className="w-5 h-5 text-teal-700 shrink-0" />
                <div>
                  <strong className="text-stone-850">WhatsApp Butler Line (Concierge):</strong>
                  <p className="text-stone-550 text-xs mt-0.5">+255 (24) 880-COVE (2683)</p>
                </div>
              </div>

              <div className="flex gap-3 items-center">
                <Mail className="w-5 h-5 text-teal-700 shrink-0" />
                <div>
                  <strong className="text-stone-850">Direct Booking Registrar:</strong>
                  <p className="text-stone-550 text-xs mt-0.5">butler@coralcovezanzibar.com</p>
                </div>
              </div>
            </div>

            {/* Custom Interactive Styled SVG Map of the Region */}
            <div className="border border-stone-200 rounded-3xl p-5 bg-stone-100 shadow-inner">
              <h4 className="text-[10px] uppercase font-extrabold tracking-widest text-[#FE8F8F] mb-2 flex items-center justify-between">
                <span>Zanzibar Archipelago Vector Map</span>
                <span className="bg-emerald-100 text-emerald-700 font-bold px-1.5 py-0.5 rounded text-[8px]">ECO MARINES</span>
              </h4>
              
              <div className="relative aspect-[16/10] bg-teal-50 border border-teal-150 rounded-2xl overflow-hidden shadow-inner flex items-center justify-center">
                {/* SVG Archipelago map drawing */}
                <svg viewBox="0 0 400 250" className="w-full h-full text-emerald-800">
                  {/* Indian Ocean Grid */}
                  <pattern id="sea-pattern" width="10" height="10" patternUnits="userSpaceOnUse">
                    <circle cx="1" cy="1" r="0.5" fill="#c4e3e3" />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#sea-pattern)" />
                  
                  {/* Zanzibar Mainland (Unguja Island) SVG outline */}
                  <path
                    d="M170,30 C200,45 220,100 215,160 C210,195 210,210 195,230 C190,235 155,200 157,175 C160,150 148,135 142,120 C136,105 150,90 152,70 Z"
                    fill="#e0d6c5"
                    stroke="#b5a794"
                    strokeWidth="1.5"
                    filter="drop-shadow(1px 2px 3px rgba(0,0,0,0.05))"
                  />
                  
                  {/* Pemba outline top corner */}
                  <path
                    d="M260,10 C270,12 280,30 275,50 C270,60 260,65 255,20 Z"
                    fill="#e0d6c5"
                    stroke="#b5a794"
                    strokeWidth="1.2"
                  />

                  {/* Coral Cove Private Island */}
                  <circle cx="232" cy="205" r="7" fill="#FE8F8F" stroke="white" strokeWidth="1.5" />
                  <path d="M232,198 C232,190 258,190 258,198 Z" />
                  <ellipse cx="232" cy="205" r="14" fill="none" stroke="#FE8F8F" strokeDasharray="2,2" strokeWidth="1" />
                  
                  {/* Kizimkazi Beach boat launch pad */}
                  <circle cx="196" cy="195" r="4.5" fill="#0d9488" stroke="white" strokeWidth="1" />

                  {/* Route indicators */}
                  <path d="M196,195 Q212,195 232,205" fill="none" stroke="#0d9488" strokeWidth="1.5" strokeDasharray="3,3" />

                  {/* Text Nodes */}
                  <text x="145" y="85" fontSize="8" fontWeight="bold" fill="#6b5b47" fontFamily="sans-serif">UNGUJA ISLAND</text>
                  <text x="142" y="93" fontSize="6" fill="#8c775c" fontFamily="sans-serif">(ZANZIBAR)</text>
                  
                  <text x="148" y="145" fontSize="6.5" fill="#3f3f46" fontFamily="sans-serif">Stone Town</text>
                  <circle cx="152" cy="138" r="2.5" fill="#3f3f46"/>

                  <text x="150" y="198" fontSize="6" fill="#115e59" fontFamily="sans-serif">Kizimkazi Harbor</text>
                  
                  <text x="249" y="210" fontSize="8.5" fontWeight="extrabold" fill="#ef4444" fontFamily="serif">Coral Cove</text>
                  <text x="249" y="217" fontSize="5" fill="#ef4544" fontFamily="sans-serif">(Private Sanctuary)</text>

                  {/* Wind rose */}
                  <g transform="translate(45, 195)">
                    <circle cx="0" cy="0" r="12" fill="none" stroke="#b5a794" strokeWidth="0.8"/>
                    <line x1="0" y1="-14" x2="0" y2="14" stroke="#b5a794" strokeWidth="1"/>
                    <line x1="-14" y1="0" x2="14" y2="0" stroke="#b5a794" strokeWidth="1"/>
                    <polygon points="0,-15 -3,-5 0,-8 3,-5" fill="#FE8F8F"/>
                    <text x="-3" y="-17" fontSize="7" fontWeight="bold" fill="#FE8F8F">N</text>
                  </g>
                </svg>

                {/* Legend bar overlays */}
                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur px-2.5 py-1.5 rounded-xl text-[8px] font-bold text-stone-700 uppercase border border-stone-150 leading-normal text-left">
                  <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#FE8F8F]"/> Coral Cove Island</div>
                  <div className="flex items-center gap-1 mt-0.5"><span className="w-2 h-2 rounded-full bg-teal-600"/> Speedboat Transfer (20 Min)</div>
                </div>
              </div>
            </div>

          </div>

          {/* Core Enquiry Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-stone-200 p-6 md:p-8 shadow-sm">
              {!isSubmitted ? (
                <>
                  <div className="mb-6">
                    <h4 className="font-serif text-2xl text-stone-900 font-semibold">Transmit An Invitation Proposal</h4>
                    <p className="text-stone-550 text-xs mt-1">Please provide parameters. We handle transfers and dietary profiling seamlessly.</p>
                  </div>

                  <form onSubmit={handleFormSubmit} className="space-y-4 font-sans text-left">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-stone-750 uppercase tracking-wider mb-1.5">Full Name</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          id="contact-form-name"
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-[#FDFCFB] border border-stone-250 rounded-xl py-2.5 px-3 text-stone-850 text-sm focus:ring-1 focus:ring-[#59C1BD] focus:bg-white outline-none"
                          placeholder="Amina Patel"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-stone-750 uppercase tracking-wider mb-1.5">Email Address</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          id="contact-form-email"
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-[#FDFCFB] border border-stone-250 rounded-xl py-2.5 px-3 text-stone-850 text-sm focus:ring-1 focus:ring-[#59C1BD] focus:bg-white outline-none"
                          placeholder="amina@luxurytravel.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-stone-750 uppercase tracking-wider mb-1.5">Class of Enquiry</label>
                        <select
                          value={formData.type}
                          id="contact-form-class"
                          onChange={(e) => setFormData({ ...formData, type: e.target.value as EnquiryFormInput['type'] })}
                          className="w-full bg-[#FDFCFB] border border-stone-250 rounded-xl py-3 px-3 text-stone-850 text-xs focus:ring-1 focus:ring-[#59C1BD] focus:bg-white outline-none font-bold uppercase tracking-wider"
                        >
                          <option value="general">Escape Planning</option>
                          <option value="wedding">Wedding / Vows elopement</option>
                          <option value="buyout">Full Island Buyout</option>
                          <option value="dining">Coastal Dining Space</option>
                          <option value="spa">Wellness Treatment</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-stone-750 uppercase tracking-wider mb-1.5">Preferred Period</label>
                        <input
                          type="date"
                          value={formData.arrivalDate}
                          onChange={(e) => setFormData({ ...formData, arrivalDate: e.target.value })}
                          className="w-full bg-[#FDFCFB] border border-stone-250 rounded-xl py-2.5 px-3 text-stone-850 text-xs focus:ring-1 focus:ring-[#59C1BD] focus:bg-white outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-stone-750 uppercase tracking-wider mb-1.5">Guests Party Count</label>
                        <select
                          value={formData.guestsCount}
                          id="contact-form-guests"
                          onChange={(e) => setFormData({ ...formData, guestsCount: e.target.value })}
                          className="w-full bg-[#FDFCFB] border border-stone-250 rounded-xl py-3 px-3 text-stone-850 text-xs focus:ring-1 focus:ring-[#59C1BD] focus:bg-white outline-none"
                        >
                          <option value="1">1 Person</option>
                          <option value="2">2 Honeymooners</option>
                          <option value="3">3 Guests</option>
                          <option value="4">4 Guests</option>
                          <option value="5+">5+ Large Party</option>
                          <option value="buyout">Entire Group Buyout</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-750 uppercase tracking-wider mb-1.5">Bespoke request details</label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        id="contact-form-msg"
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-[#FDFCFB] border border-stone-250 rounded-xl py-2.5 px-3 text-stone-850 text-sm focus:ring-1 focus:ring-[#59C1BD] focus:bg-white outline-none resize-none"
                        placeholder="Please layout your private boat transfer requirements, flight coordinates, or dietary profiles..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#59C1BD] hover:bg-[#48A8A4] text-white rounded-xl py-3 px-6 text-xs font-bold uppercase tracking-widest shadow-md flex items-center justify-center gap-2 transition-colors cursor-pointer font-sans"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Processing Secure Gateway...</span>
                        </>
                      ) : (
                        <span>Initiate Butler Consultation</span>
                      )}
                    </button>
                    
                    <div className="text-center text-[9px] text-stone-400">
                      100% Organic paperless communication loop. Coral transplantation funding active.
                    </div>
                  </form>
                </>
              ) : (
                /* Form success feedback */
                <div className="py-10 text-center space-y-6">
                  <div className="w-16 h-16 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-serif text-2xl text-stone-900 font-semibold">Enquiry Safely Logged</h4>
                    <p className="text-stone-605 text-xs max-w-sm mx-auto">
                      Assante, <span className="font-semibold text-stone-800">{formData.name}</span>! Your escape inquiry has bypassed standard servers and sits safely with our Island Curator.
                    </p>
                  </div>

                  <div className="bg-stone-50 border border-stone-200 rounded-2xl p-4 text-xs text-stone-700 max-w-xs mx-auto text-left space-y-1">
                    <div><strong>Reference:</strong> <span className="font-mono text-teal-700 font-bold tracking-wider">{refCode}</span></div>
                    <div><strong>Party Volume:</strong> {formData.guestsCount} Guests</div>
                    <div><strong>Type:</strong> {formData.type.toUpperCase()} Consultation</div>
                  </div>

                  <p className="text-[10px] text-stone-400">Our private butler will contact you within 12 hours via phone & secure email.</p>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        type: 'general',
                        arrivalDate: '',
                        departureDate: '',
                        guestsCount: '2',
                        message: '',
                      });
                    }}
                    className="bg-stone-800 hover:bg-stone-900 text-white rounded-xl py-2 px-4 text-[10px] font-bold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Send Another Proposal
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
