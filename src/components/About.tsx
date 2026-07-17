/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Landmark, Briefcase, TrendingUp, Cpu, Compass, Flame } from 'lucide-react';
import { ABOUT_LEAD } from '../data';

export default function About() {
  const cards = [
    {
      role: "Founder",
      desc: "Architecting and establishing market-critical enterprises from initial validation up to self-sustaining operations.",
      metric: "0 to 1 Ventures",
      icon: Compass,
      size: "col-span-1 md:col-span-1 lg:col-span-4"
    },
    {
      role: "Entrepreneur",
      desc: "Harnessing rigorous systemization, robust delegation, and pricing structures to build autonomous, high-cashflow operations.",
      metric: "Systemization-First",
      icon: Flame,
      size: "col-span-1 md:col-span-2 lg:col-span-8"
    },
    {
      role: "Investor",
      desc: "Deploying intelligent seed-capital, angel investing, and secondary equity acquisitions into high-potential companies.",
      metric: "Seed & Growth Equities",
      icon: TrendingUp,
      size: "col-span-1 md:col-span-1 lg:col-span-4"
    },
    {
      role: "Business Builder",
      desc: "Re-engineering internal supply chains, operational guidelines, and organizational cultures to enable aggressive, repeatable growth.",
      metric: "Scaling Playbooks",
      icon: Cpu,
      size: "col-span-1 md:col-span-1 lg:col-span-4"
    },
    {
      role: "Advisor & Partner",
      desc: "Delivering structural governance, strategic joint ventures, and safety-critical guidance for boards and leadership teams.",
      metric: "Board Oversight",
      icon: Briefcase,
      size: "col-span-1 md:col-span-1 lg:col-span-4"
    }
  ];

  return (
    <section id="about" className="relative py-24 md:py-32 px-4 md:px-8 bg-[#0A0A0B] overflow-hidden">
      {/* Decorative Blur Backlight */}
      <div className="ambient-glow bg-gold-500/10 w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0" />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center md:text-left max-w-3xl mb-16 md:mb-24 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-gold-500 uppercase">
            Executive Profile
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            About <span className="gold-text-gradient">Harry Hussain</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed font-sans mt-4">
            {ABOUT_LEAD.description2}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {cards.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={card.role}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`${card.size} glass-panel glass-panel-hover p-8 rounded-2xl flex flex-col justify-between group transition-all duration-300 relative overflow-hidden`}
              >
                {/* Micro Ambient Glow inside Card */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/5 rounded-full blur-2xl group-hover:bg-gold-400/10 transition-colors duration-500" />

                <div className="space-y-6 relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-white/[0.03] border border-white/5 rounded-xl text-gold-300 group-hover:text-gold-200 group-hover:border-gold-500/30 transition-all duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest bg-white/[0.01] px-2.5 py-1 rounded-md border border-white/[0.02]">
                      {card.metric}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-display font-bold text-white group-hover:text-gold-100 transition-colors">
                      {card.role}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed font-sans">
                      {card.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/[0.03] flex items-center text-xs font-semibold uppercase tracking-wider text-gold-500 group-hover:text-gold-300 transition-colors relative z-10">
                  <span>Strategic Integration</span>
                  <div className="h-0.5 w-8 bg-gold-500/30 ml-3 rounded transition-all duration-300 group-hover:w-12 group-hover:bg-gold-500" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Closing Passion Quote banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 glass-panel border-white/5 p-8 md:p-12 rounded-3xl text-center space-y-4 relative overflow-hidden"
        >
          <div className="absolute -inset-10 bg-radial from-gold-500/5 to-transparent blur-xl pointer-events-none" />
          <h3 className="text-xl md:text-2xl font-display font-semibold text-white max-w-3xl mx-auto italic leading-relaxed">
            &ldquo;Passionate about building businesses, engineering robust enterprise governance, and investing heavily in the future.&rdquo;
          </h3>
          <p className="text-xs font-mono tracking-widest text-gold-500 uppercase">
            — HARRY HUSSAIN • UK FOUNDER & ADVISOR
          </p>
        </motion.div>

      </div>
    </section>
  );
}
