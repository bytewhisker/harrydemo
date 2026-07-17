/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Award, Star, Mic, ShieldCheck } from 'lucide-react';
import { RECOGNITIONS } from '../data';

export default function Awards() {
  const icons = [Award, Mic, Star, ShieldCheck];

  return (
    <section id="achievements" className="relative py-24 md:py-32 px-4 md:px-8 bg-[#0A0A0B] overflow-hidden">
      {/* Absolute decorative ambient light blob */}
      <div className="ambient-glow bg-gold-600/10 w-[500px] h-[500px] top-1/2 left-10 -translate-y-1/2 z-0" />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-gold-500 uppercase">
            Milestones & Accolades
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            Awards & <span className="gold-text-gradient">Recognition</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed font-sans">
            A chronological overview of strategic validations, industry assessments, keynote deliverances, and cumulative portfolio valuations.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative border-l border-white/5 pl-6 md:pl-12 max-w-4xl mx-auto space-y-12">
          {/* Glowing central timeline line */}
          <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-gradient-to-b from-gold-500/40 via-gold-500/10 to-transparent pointer-events-none" />

          {RECOGNITIONS.map((award, idx) => {
            const IconComponent = icons[idx % icons.length];
            return (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative group"
              >
                {/* Timeline node */}
                <div className="absolute -left-[31px] md:-left-[55px] top-1.5 w-4 h-4 md:w-6 md:h-6 rounded-full bg-black border-2 border-gold-500 flex items-center justify-center group-hover:bg-gold-300 transition-colors duration-300">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gold-500 group-hover:bg-black" />
                </div>

                {/* Main Card */}
                <div className="glass-panel border-white/5 p-6 md:p-8 rounded-2xl group-hover:border-gold-500/20 transition-all duration-300 relative overflow-hidden">
                  {/* Subtle hover backlight */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gold-500/5 rounded-full blur-xl group-hover:bg-gold-500/10 transition-colors" />

                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="space-y-3">
                      {/* Year and Issuer badge */}
                      <div className="flex items-center space-x-2.5">
                        <span className="text-xs font-mono font-bold text-gold-300 bg-gold-500/10 border border-gold-500/20 px-2.5 py-1 rounded-md">
                          {award.year}
                        </span>
                        <span className="text-[10px] md:text-xs font-mono text-gray-500 uppercase tracking-wider">
                          {award.issuer}
                        </span>
                      </div>

                      <h3 className="text-lg md:text-xl font-display font-bold text-white group-hover:text-gold-100 transition-colors">
                        {award.title}
                      </h3>
                      
                      <p className="text-gray-400 text-sm leading-relaxed font-sans">
                        {award.description}
                      </p>
                    </div>

                    {/* Accolade Icon badge */}
                    <div className="p-3 bg-white/[0.02] border border-white/5 rounded-xl text-gold-500/80 group-hover:text-gold-300 shrink-0 self-start">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Small feature citation */}
        <div className="mt-20 text-center text-xs font-mono text-gray-500">
          <span>* NOTABLE CITATIONS VERIFIABLE VIA LINKEDIN CREDENTIALS REGISTRY *</span>
        </div>

      </div>
    </section>
  );
}
