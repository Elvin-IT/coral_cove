import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, User, Mail, MessageSquare, CheckCircle, Flame, CalendarRange, ArrowRight } from 'lucide-react';
import { VILLAS, OFFERS } from '../data';
import { EnquiryFormInput } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: EnquiryFormInput['type'];
  initialOptionId?: string;
}

export default function BookingModal({ isOpen, onClose, initialType = 'general', initialOptionId = '' }: BookingModalProps) {
  const [formData, setFormData] = useState<EnquiryFormInput>({
    name: '',
    email: '',
    phone: '',
    type: initialType,
    selectedOptionId: initialOptionId,
    arrivalDate: '',
    departureDate: '',
    guestsCount: '2',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceCode, setReferenceCode] = useState('');

  // Sync initial type and option when opened
  useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({
        ...prev,
        type: initialType,
        selectedOptionId: initialOptionId,
      }));
      setIsSubmitted(false);
    }
  }, [isOpen, initialType, initialOptionId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      const uuid = 'COVE-' + Math.floor(Math.random() * 900000 + 100000);
      setReferenceCode(uuid);
    }, 1500);
  };

  const currentOptionName = () => {
    if (formData.type === 'villa') {
      const villa = VILLAS.find(v => v.id === formData.selectedOptionId);
      return villa ? villa.name : 'Select Luxury Villa';
    }
    if (formData.type === 'offer') {
      const offer = OFFERS.find(o => o.id === formData.selectedOptionId);
      return offer ? offer.title : 'Select Curated Offer';
    }
    return '';
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-neutral-900/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-stone-50 rounded-2xl shadow-2xl border border-stone-200 overflow-hidden z-10 font-sans"
          >
            {/* Top Accented Banner */}
            <div className="h-2 bg-gradient-to-r from-emerald-600/30 via-teal-500/50 to-orange-400/40" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-stone-400 hover:text-stone-700 p-2 rounded-full hover:bg-stone-100 transition-colors"
              id="close-modal-btn"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Inner Content */}
            <div className="p-6 md:p-8 max-h-[85vh] overflow-y-auto">
              {!isSubmitted ? (
                <>
                  <div className="mb-6">
                    <span className="text-orange-500 text-xs font-semibold tracking-widest uppercase">Coral Cove Zanzibar</span>
                    <h2 className="font-serif text-3xl text-stone-900 mt-1">
                      {formData.type === 'wedding' && 'Destination Wedding Enquiry'}
                      {formData.type === 'buyout' && 'Full Island Buyout Proposal'}
                      {formData.type === 'villa' && 'Book Your Escape'}
                      {formData.type === 'dining' && 'Fine Dining Reservation'}
                      {formData.type === 'spa' && 'Botanical Spa Booking'}
                      {formData.type === 'offer' && 'Claim Exclusive Offer'}
                      {formData.type === 'general' && 'Plan Your Sanctuary Escape'}
                    </h2>
                    <p className="text-stone-600 text-sm mt-2">
                      Please submit your parameters below. Our dedicated Island Curator will contact you personally within 12 hours.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Enquiry Type Selector */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-stone-700 uppercase tracking-wider mb-1.5Packed">Enquiry Type</label>
                        <select
                          id="enquiry-type"
                          value={formData.type}
                          onChange={(e) => setFormData({ ...formData, type: e.target.value as EnquiryFormInput['type'], selectedOptionId: '' })}
                          className="w-full bg-white border border-stone-200 rounded-lg py-2.5 px-3 text-stone-800 text-sm focus:ring-1 focus:ring-teal-500 focus:border-teal-500 outline-none"
                        >
                          <option value="villa">Villa & Bungalow Bookings</option>
                          <option value="offer">Special Package & Offers</option>
                          <option value="wedding">Destination Weddings & Elopements</option>
                          <option value="buyout">Entire Private Island Buyout</option>
                          <option value="dining">Island Table Reservation</option>
                          <option value="spa">Oceanfront Spa Pavilion Reserve</option>
                          <option value="general">General Premium Consultation</option>
                        </select>
                      </div>

                      {/* Contingent Selection UI */}
                      {(formData.type === 'villa' || formData.type === 'offer') && (
                        <div>
                          <label className="block text-xs font-medium text-stone-700 uppercase tracking-wider mb-1.5">
                            {formData.type === 'villa' ? 'Selected Villa Suite' : 'Selected Offer Package'}
                          </label>
                          <select
                            id="curor-option-select"
                            value={formData.selectedOptionId}
                            onChange={(e) => setFormData({ ...formData, selectedOptionId: e.target.value })}
                            className="w-full bg-white border border-stone-200 rounded-lg py-2.5 px-3 text-stone-800 text-sm focus:ring-1 focus:ring-teal-500 focus:border-teal-500 outline-none"
                            required
                          >
                            <option value="">{formData.type === 'villa' ? '-- Choose Villa Suite --' : '-- Choose Package --'}</option>
                            {formData.type === 'villa' && VILLAS.map(v => (
                              <option key={v.id} value={v.id}>{v.name} (from {v.startingPrice}/night)</option>
                            ))}
                            {formData.type === 'offer' && OFFERS.map(o => (
                              <option key={o.id} value={o.id}>{o.title}</option>
                            ))}
                          </select>
                        </div>
                      )}
                    </div>

                    {/* Guest Contact Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-stone-700 uppercase tracking-wider mb-1.5">Full Name</label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 w-4 h-4 text-stone-400" />
                          <input
                            type="text"
                            required
                            placeholder="Amina Patel"
                            id="guest-name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-white border border-stone-200 rounded-lg py-2.5 pl-10 pr-4 text-stone-800 text-sm focus:ring-1 focus:ring-teal-500 focus:border-teal-500 outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-stone-700 uppercase tracking-wider mb-1.5">Email Address</label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 w-4 h-4 text-stone-400" />
                          <input
                            type="email"
                            required
                            placeholder="amina@luxurytravel.com"
                            id="guest-email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-white border border-stone-200 rounded-lg py-2.5 pl-10 pr-4 text-stone-800 text-sm focus:ring-1 focus:ring-teal-500 focus:border-teal-500 outline-none"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Stay Paramters / Wedding Date */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-xs font-medium text-stone-700 uppercase tracking-wider mb-1.5">
                          {formData.type === 'dining' || formData.type === 'spa' ? 'Pref. Date' : 'Target Arrival'}
                        </label>
                        <div className="relative">
                          <input
                            type="date"
                            value={formData.arrivalDate}
                            onChange={(e) => setFormData({ ...formData, arrivalDate: e.target.value })}
                            className="w-full bg-white border border-stone-200 rounded-lg py-2.5 px-3 text-stone-800 text-sm focus:ring-1 focus:ring-teal-500 focus:border-teal-500 outline-none"
                            required
                          />
                        </div>
                      </div>

                      {!(formData.type === 'dining' || formData.type === 'spa') && (
                        <div>
                          <label className="block text-xs font-medium text-stone-700 uppercase tracking-wider mb-1.5">Departure Date</label>
                          <div className="relative">
                            <input
                              type="date"
                              value={formData.departureDate}
                              onChange={(e) => setFormData({ ...formData, departureDate: e.target.value })}
                              className="w-full bg-white border border-stone-200 rounded-lg py-2.5 px-3 text-stone-800 text-sm focus:ring-1 focus:ring-teal-500 focus:border-teal-500 outline-none"
                              required={formData.type === 'villa' || formData.type === 'offer'}
                            />
                          </div>
                        </div>
                      )}

                      <div className={formData.type === 'dining' || formData.type === 'spa' ? 'col-span-2' : 'col-span-2 md:col-span-1'}>
                        <label className="block text-xs font-medium text-stone-700 uppercase tracking-wider mb-1.5">Guests Count</label>
                        <select
                          id="guests-count"
                          value={formData.guestsCount}
                          onChange={(e) => setFormData({ ...formData, guestsCount: e.target.value })}
                          className="w-full bg-white border border-stone-200 rounded-lg py-2.5 px-3 text-stone-800 text-sm focus:ring-1 focus:ring-teal-500 focus:border-teal-500 outline-none"
                        >
                          <option value="1">1 Person</option>
                          <option value="2">2 Honeymooners / Double</option>
                          <option value="3">3 Guests</option>
                          <option value="4">4 Guests</option>
                          <option value="5+">5+ Large Party / Bridal</option>
                          <option value="buyout">Entire Group (Full Island Buyout)</option>
                        </select>
                      </div>
                    </div>

                    {/* Message Area */}
                    <div>
                      <label className="block text-xs font-medium text-stone-700 uppercase tracking-wider mb-1.5">
                        {formData.type === 'wedding' && 'Share Wedding Dream Layout (colors, layout, guests...)'}
                        {formData.type === 'buyout' && 'Special Event & Flight Logistics Details'}
                        {formData.type === 'dining' && 'Dietary Constraints, Sunset Prefeferences or Table Position'}
                        {formData.type === 'spa' && 'Target therapeutic goals or botanics (coconut, Pemba cinnamon...)'}
                        {formData.type !== 'wedding' && formData.type !== 'buyout' && formData.type !== 'dining' && formData.type !== 'spa' && 'Custom Requests (Dietary, flight times, pillow menu...)'}
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-stone-400" />
                        <textarea
                          id="custom-message"
                          rows={3}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Please let us know your arrival flight details or special dietary notes..."
                          className="w-full bg-white border border-stone-200 rounded-lg py-2.5 pl-10 pr-4 text-stone-800 text-sm focus:ring-1 focus:ring-teal-500 focus:border-teal-500 outline-none resize-none"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full mt-4 bg-teal-800 relative hover:bg-teal-900 active:bg-teal-950 text-white rounded-xl py-3 px-6 text-sm font-semibold uppercase tracking-wider shadow-lg flex items-center justify-center transition-all duration-150 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3" />
                          <span>Generating Safe Encryption Gateway...</span>
                        </>
                      ) : (
                        <span className="flex items-center gap-2">
                          Submit Booking Enquiry <ArrowRight className="w-4 h-4" />
                        </span>
                      )}
                    </button>
                    
                    {/* Eco-Friendly footprint notation */}
                    <div className="text-center text-[10px] text-stone-400 flex items-center justify-center gap-2 mt-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
                      100% Secure Carbon-neutral server connection. No plastic footprint.
                    </div>
                  </form>
                </>
              ) : (
                /* Success Layout */
                <div className="py-12 px-4 text-center">
                  <motion.div
                    initial={{ scale: 0.7, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="w-16 h-16 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle className="w-10 h-10" />
                  </motion.div>
                  <h3 className="font-serif text-3xl text-stone-800 mb-2">Request Transmitted</h3>
                  <p className="text-stone-600 text-sm max-w-md mx-auto mb-6">
                    Mambo, <span className="font-semibold text-stone-800">{formData.name}</span>! Your bespoke resort enquiry is encrypted and safely queued for our Private butler desks.
                  </p>

                  <div className="bg-stone-100 border border-stone-200 rounded-2xl p-5 max-w-md mx-auto text-left mb-8">
                    <div className="flex justify-between items-center border-b border-stone-200 pb-3 mb-3">
                      <span className="text-xs text-stone-500 tracking-wider font-semibold uppercase">Resort Booking Details</span>
                      <span className="bg-orange-100 text-orange-700 text-[10px] font-bold px-2 py-0.5 rounded-full">Eco-Premium</span>
                    </div>

                    <div className="space-y-2 text-stone-700 text-xs">
                      <div><strong className="text-stone-800">Enquiry Class:</strong> {formData.type.toUpperCase()}</div>
                      {currentOptionName() && (
                        <div><strong className="text-stone-800">Target Detail:</strong> {currentOptionName()}</div>
                      )}
                      {formData.arrivalDate && (
                        <div><strong className="text-stone-800">Requested Period:</strong> {formData.arrivalDate} {formData.departureDate ? `to ${formData.departureDate}` : ''}</div>
                      )}
                      <div><strong className="text-stone-800">Sovereign Guests:</strong> {formData.guestsCount}</div>
                      <div><strong className="text-stone-800">Reference:</strong> <span className="font-mono text-teal-700 text-sm font-semibold tracking-wider">{referenceCode}</span></div>
                    </div>
                  </div>

                  <p className="text-xs text-stone-500 mb-6">
                    A copies of your private catalog has been transmitted to <span className="font-semibold text-stone-700">{formData.email}</span>. We look forward to welcome you to Coral Cove.
                  </p>

                  <button
                    onClick={onClose}
                    className="bg-stone-800 hover:bg-stone-900 text-white rounded-xl py-2.5 px-6 text-xs font-semibold tracking-wider transition-colors uppercase"
                  >
                    Return to Cove
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
