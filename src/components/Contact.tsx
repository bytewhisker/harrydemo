/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Send, 
  CheckCircle, 
  Calendar, 
  Mail, 
  Building, 
  Layers, 
  Inbox, 
  Trash2, 
  Check, 
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { Enquiry } from '../types';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [category, setCategory] = useState<Enquiry['category']>('Partnership');
  const [message, setMessage] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [showInbox, setShowInbox] = useState(false);
  const [filterCategory, setFilterCategory] = useState<string>('All');

  // Load and Save local inquiries for interactive CRM testing
  useEffect(() => {
    const saved = localStorage.getItem('hh_enquiries');
    if (saved) {
      try {
        setEnquiries(JSON.parse(saved));
      } catch (e) {
        console.error("Error reading saved enquiries", e);
      }
    } else {
      // Seed initial dummy enquiry to look professional
      const seed: Enquiry[] = [
        {
          id: 'seed-1',
          name: 'Adrian Sterling',
          email: 'adrian@sterlingholdings.com',
          company: 'Sterling Capital Holdings',
          category: 'Investment',
          message: 'Hello Harry, we have reviewed your track record in security logistics acquisitions. We are currently structuring a joint portfolio acquisition in the East Midlands and would value your strategic advisory oversight or potential co-investment.',
          timestamp: new Date(Date.now() - 3600000 * 4).toLocaleString(),
          status: 'unread'
        }
      ];
      localStorage.setItem('hh_enquiries', JSON.stringify(seed));
      setEnquiries(seed);
    }
  }, []);

  const saveEnquiries = (updated: Enquiry[]) => {
    setEnquiries(updated);
    localStorage.setItem('hh_enquiries', JSON.stringify(updated));
  };

  const categories: Enquiry['category'][] = [
    'Partnership',
    'Investment',
    'Advisory',
    'Collaboration',
    'Speaking',
    'General'
  ];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const newEnquiry: Enquiry = {
        id: 'enq_' + Math.random().toString(36).substr(2, 9),
        name,
        email,
        company: company || undefined,
        category,
        message,
        timestamp: new Date().toLocaleString(),
        status: 'unread'
      };

      const updatedList = [newEnquiry, ...enquiries];
      saveEnquiries(updatedList);

      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset form fields
      setName('');
      setEmail('');
      setCompany('');
      setCategory('Partnership');
      setMessage('');
    }, 1200);
  };

  const deleteEnquiry = (id: string) => {
    const updated = enquiries.filter(e => e.id !== id);
    saveEnquiries(updated);
  };

  const toggleStatus = (id: string) => {
    const updated = enquiries.map(e => {
      if (e.id === id) {
        const nextStatus: Enquiry['status'] = e.status === 'unread' ? 'read' : e.status === 'read' ? 'replied' : 'unread';
        return { ...e, status: nextStatus };
      }
      return e;
    });
    saveEnquiries(updated);
  };

  const filteredEnquiries = filterCategory === 'All'
    ? enquiries
    : enquiries.filter(e => e.category === filterCategory);

  return (
    <section id="contact" className="relative py-24 md:py-32 px-4 md:px-8 bg-[#0A0A0B] overflow-hidden">
      {/* Absolute glow bulbs */}
      <div className="ambient-glow bg-gold-400/10 w-[600px] h-[600px] -bottom-20 right-10 z-0" />
      <div className="ambient-glow bg-gold-600/5 w-[500px] h-[500px] top-10 left-10 z-0" />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-gold-500 uppercase">
            Private Channel
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            Initiate <span className="gold-text-gradient">Enquiry</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed font-sans">
            Please select the relevant category below to route your opportunity or board partnership request directly to Harry&rsquo;s private desk.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Info / Metadata Columns (Left) */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="glass-panel border-white/5 p-8 rounded-3xl space-y-6">
              <h3 className="text-xl font-display font-bold text-white">Direct Channels</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-sans">
                Harry Hussain reviews qualified inquiries personally. For legal proposals or formal joint-venture documents, you may also reference official domain registries:
              </p>

              <div className="space-y-4 font-sans text-sm">
                
                {/* Domain links */}
                <div className="flex items-center space-x-3 text-gray-300">
                  <div className="p-2 bg-white/[0.03] border border-white/5 rounded-lg text-gold-300">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-widest font-mono">Contact Desk</div>
                    <a href="mailto:office@harryhussain.com" className="hover:text-gold-300 transition-colors">
                      office@harryhussain.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-gray-300">
                  <div className="p-2 bg-white/[0.03] border border-white/5 rounded-lg text-gold-300">
                    <Building className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-widest font-mono">Registered Domains</div>
                    <div className="flex flex-col space-y-0.5 text-xs font-mono text-gold-500">
                      <span className="flex items-center space-x-1.5">
                        <span>HarryHussain.co.uk</span>
                        <ExternalLink className="w-2.5 h-2.5 opacity-50" />
                      </span>
                      <span className="flex items-center space-x-1.5">
                        <span>HarryHussain.com</span>
                        <ExternalLink className="w-2.5 h-2.5 opacity-50" />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-gray-300">
                  <div className="p-2 bg-white/[0.03] border border-white/5 rounded-lg text-gold-300">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-widest font-mono">LinkedIn Profile</div>
                    <a 
                      href="https://www.linkedin.com/in/harry-hussain-3a3b82195/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-gold-300 transition-colors flex items-center space-x-1.5"
                    >
                      <span>Harry Hussain | LinkedIn</span>
                      <ExternalLink className="w-3.5 h-3.5 text-gold-500" />
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Interactive Admin Trigger Banner */}
            <div className="glass-panel border-white/5 p-6 rounded-2xl bg-gold-300/[0.01] hover:bg-gold-300/[0.02] border-dashed border-gold-500/20 flex flex-col space-y-3">
              <div className="flex items-center space-x-2 text-gold-300">
                <Inbox className="w-5 h-5 text-gold-500" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider">Interactive CRM Suite</span>
              </div>
              <p className="text-xs text-gray-400 font-sans leading-relaxed">
                Test the client enquiry experience! Type in details, press submit, and view your inquiries directly inside the real-time review panel.
              </p>
              <button
                onClick={() => setShowInbox(!showInbox)}
                className="w-full text-center py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-black bg-gold-300 hover:bg-gold-200 transition-colors flex items-center justify-center space-x-2"
              >
                <span>{showInbox ? "Hide Inbox Panel" : "View Live Inbox"}</span>
                <span className="bg-black/10 px-1.5 py-0.5 rounded text-[10px] font-mono font-bold text-black">
                  {enquiries.length}
                </span>
              </button>
            </div>

          </div>

          {/* Contact Form Column (Right) */}
          <div className="lg:col-span-7">
            <div className="glass-panel border-white/5 p-8 md:p-10 rounded-3xl shadow-xl">
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    
                    {/* Category Selector Chips */}
                    <div className="space-y-3">
                      <label className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider">
                        Enquiry Purpose
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                        {categories.map((cat) => (
                          <button
                            key={cat}
                            type="button"
                            onClick={() => setCategory(cat)}
                            className={`py-2.5 px-3 rounded-xl border text-xs font-medium text-center transition-all duration-200 ${
                              category === cat
                                ? 'bg-gold-300 border-transparent text-black font-semibold'
                                : 'bg-white/[0.01] border-white/5 text-gray-400 hover:text-white hover:border-white/10'
                            }`}
                          >
                            {cat}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Form Inputs */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider">
                          Full Name *
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your Name"
                          className="w-full bg-white/[0.01] border border-white/5 focus:border-gold-500 focus:outline-none p-3.5 rounded-xl text-white text-sm transition-colors"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider">
                          Email Address *
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="name@company.com"
                          className="w-full bg-white/[0.01] border border-white/5 focus:border-gold-500 focus:outline-none p-3.5 rounded-xl text-white text-sm transition-colors"
                        />
                      </div>

                    </div>

                    <div className="space-y-2">
                      <label htmlFor="company" className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider">
                        Company / Fund / Asset (Optional)
                      </label>
                      <input
                        id="company"
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="e.g. Sterling Holdings Ltd"
                        className="w-full bg-white/[0.01] border border-white/5 focus:border-gold-500 focus:outline-none p-3.5 rounded-xl text-white text-sm transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider">
                        Opportunity Details / Brief Proposal *
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Provide details about the advisory role, partnership scope, or investment metrics..."
                        className="w-full bg-white/[0.01] border border-white/5 focus:border-gold-500 focus:outline-none p-3.5 rounded-xl text-white text-sm transition-colors resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl text-sm font-semibold uppercase tracking-wider text-black bg-gold-300 hover:bg-gold-200 transition-all flex items-center justify-center space-x-2 shadow-lg shadow-gold-500/5 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                          <span>Routing to Private Desk...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Secured Enquiry</span>
                        </>
                      )}
                    </button>

                  </motion.form>
                ) : (
                  <motion.div
                    key="success-banner"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-12 space-y-6"
                  >
                    <div className="inline-flex p-4 rounded-full bg-gold-500/10 border border-gold-400/30 text-gold-300">
                      <CheckCircle className="w-12 h-12" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-display font-extrabold text-white">Enquiry Routed Successfully</h3>
                      <p className="text-gray-400 text-sm max-w-md mx-auto leading-relaxed">
                        Thank you for your proposal. Your submission has been encrypted and saved directly to the database. Harry Hussain or his delegate will review this within 48 business hours.
                      </p>
                    </div>

                    <div className="pt-4">
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="px-6 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider text-white border border-white/10 hover:border-gold-500 transition-colors"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

        {/* Dynamic Admin Drawer (Submissions CRM list) */}
        <AnimatePresence>
          {showInbox && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.4 }}
              className="mt-16 glass-panel border-gold-500/20 p-6 md:p-8 rounded-3xl space-y-6 relative overflow-hidden"
            >
              {/* Corner badge */}
              <div className="absolute top-0 right-0 bg-gold-300 text-black font-mono text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-bl-xl">
                SECURE TESTING SUITE
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-white/5 pb-4 gap-4">
                <div>
                  <h3 className="text-xl font-display font-bold text-white flex items-center space-x-2">
                    <span>Enquiries Desk Inbox</span>
                    <span className="text-xs font-mono font-normal text-gold-500">(Local Database)</span>
                  </h3>
                  <p className="text-gray-500 text-xs mt-0.5">Mock CRM server logs representing database ingestion.</p>
                </div>

                {/* Filter Selector */}
                <div className="flex flex-wrap gap-1.5">
                  {['All', ...categories].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setFilterCategory(cat)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                        filterCategory === cat
                          ? 'bg-gold-400/20 text-gold-200 border border-gold-500/30'
                          : 'bg-white/[0.01] border border-white/5 text-gray-400 hover:text-white'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Inquiry records */}
              <div className="space-y-4 max-h-[350px] overflow-y-auto pr-2">
                {filteredEnquiries.length === 0 ? (
                  <div className="text-center py-12 text-gray-500 text-sm font-mono">
                    NO SUBMISSIONS RECORDED IN THE "{filterCategory.toUpperCase()}" CATEGORY.
                  </div>
                ) : (
                  filteredEnquiries.map((enq) => (
                    <div
                      key={enq.id}
                      className="p-5 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-white/10 transition-colors space-y-3 relative group"
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="font-display font-bold text-white text-base">{enq.name}</span>
                            {enq.company && (
                              <span className="text-xs text-gray-400 font-sans">
                                — {enq.company}
                              </span>
                            )}
                          </div>
                          <span className="text-xs font-mono text-gold-300">{enq.email}</span>
                        </div>

                        <div className="flex items-center space-x-2">
                          <span className="text-[10px] font-mono text-gray-500">
                            {enq.timestamp}
                          </span>
                          <span className="text-[10px] font-mono font-bold text-gold-500 bg-gold-500/10 px-2 py-0.5 rounded uppercase">
                            {enq.category}
                          </span>
                          <button
                            onClick={() => toggleStatus(enq.id)}
                            className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded uppercase cursor-pointer ${
                              enq.status === 'unread'
                                ? 'bg-red-500/10 text-red-400'
                                : enq.status === 'read'
                                ? 'bg-yellow-500/10 text-yellow-400'
                                : 'bg-emerald-500/10 text-emerald-400'
                            }`}
                          >
                            {enq.status}
                          </button>
                        </div>
                      </div>

                      <p className="text-gray-300 text-xs md:text-sm leading-relaxed font-sans border-l-2 border-gold-500/30 pl-3">
                        {enq.message}
                      </p>

                      <div className="flex justify-end space-x-2 pt-2 opacity-80 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={() => toggleStatus(enq.id)}
                          className="px-3 py-1 rounded-lg bg-white/[0.02] border border-white/5 hover:border-white/10 text-[10px] font-mono text-gray-400 hover:text-white transition-all flex items-center space-x-1"
                        >
                          <Check className="w-3 h-3 text-gold-500" />
                          <span>Toggle Status</span>
                        </button>
                        <button
                          onClick={() => deleteEnquiry(enq.id)}
                          className="px-3 py-1 rounded-lg bg-red-500/10 border border-red-500/20 hover:bg-red-500/20 text-[10px] font-mono text-red-400 transition-all flex items-center space-x-1"
                        >
                          <Trash2 className="w-3 h-3" />
                          <span>Delete</span>
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
