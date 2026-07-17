/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ComponentType } from 'react';
import { motion } from 'motion/react';
import { 
  Handshake, 
  Briefcase, 
  TrendingUp, 
  Workflow, 
  Building2, 
  Users, 
  PieChart, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { COLLABORATION_OPTIONS } from '../data';

// Dynamic Icon Registry
const IconRegistry: Record<string, ComponentType<any>> = {
  Handshake,
  Briefcase,
  TrendingUp,
  Workflow,
  Building2,
  Users,
  PieChart,
  Sparkles
};

export default function Collaboration() {
  return (
    <section id="collaboration" className="relative py-24 md:py-32 px-4 md:px-8 bg-[#0A0A0B] overflow-hidden">
      {/* Decorative ambient backdrop shapes */}
      <div className="ambient-glow bg-gold-700/10 w-[550px] h-[550px] top-10 right-10 z-0" />
      <div className="ambient-glow bg-zinc-800/20 w-[450px] h-[450px] bottom-10 left-10 z-0" />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-gold-500 uppercase">
            Collaboration Channels
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            How We Can <span className="gold-text-gradient">Work Together</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed font-sans">
            I actively partner with high-calibre professionals, venture hubs, and business owners looking to step back or amplify their enterprise values. Here are the core structures for mutual engagement.
          </p>
        </div>

        {/* Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COLLABORATION_OPTIONS.map((option, idx) => {
            const IconComponent = IconRegistry[option.iconName] || Briefcase;
            return (
              <motion.div
                key={option.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col justify-between group transition-all duration-300 border-white/[0.04]"
              >
                <div className="space-y-4">
                  {/* Icon Frame */}
                  <div className="w-12 h-12 flex items-center justify-center bg-white/[0.02] border border-white/5 rounded-xl text-gold-500 group-hover:text-black group-hover:bg-gold-300 group-hover:border-transparent transition-all duration-300">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-display font-bold text-white group-hover:text-gold-200 transition-colors">
                      {option.title}
                    </h3>
                    <p className="text-gray-400 text-xs leading-relaxed font-sans">
                      {option.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.03] flex items-center justify-between text-[11px] font-mono tracking-wider text-gray-500 group-hover:text-gold-500 transition-colors">
                  <span>ENGAGE CHANNEL</span>
                  <a href="#contact" className="p-1 rounded-md bg-white/[0.01] hover:bg-gold-300/10 group-hover:text-gold-200 transition-colors">
                    <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-gold-500" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Small bottom action banner */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between p-6 md:p-8 rounded-2xl bg-white/[0.01] border border-white/5 backdrop-blur-sm gap-6">
          <div className="text-center md:text-left">
            <h4 className="text-white font-display font-bold text-lg">Have a specific venture or opportunity to analyze?</h4>
            <p className="text-gray-400 text-sm mt-1">Submit non-disclosure details through our secure private channel.</p>
          </div>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 text-xs font-semibold uppercase tracking-wider transition-colors duration-200 shrink-0"
          >
            Submit Proposal
          </a>
        </div>

      </div>
    </section>
  );
}
