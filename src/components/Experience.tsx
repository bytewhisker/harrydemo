/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, ComponentType } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldAlert, Home, Cpu, Truck, ChevronRight, Check } from 'lucide-react';
import { EXPERIENCE_SECTORS } from '../data';

const IconRegistry: Record<string, ComponentType<any>> = {
  ShieldAlert,
  Home,
  Cpu,
  Truck
};

export default function Experience() {
  const [activeSector, setActiveSector] = useState<string>(EXPERIENCE_SECTORS[0].id);

  return (
    <section id="experience" className="relative py-24 md:py-32 px-4 md:px-8 bg-bg-surface overflow-hidden">
      {/* Background glow overlay */}
      <div className="ambient-glow bg-gold-400/5 w-[500px] h-[500px] bottom-1/4 right-1/4 z-0" />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 md:mb-24 items-end">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-mono font-bold tracking-widest text-gold-500 uppercase">
              Operational Depth
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-text-primary tracking-tight">
              Businesses & <span className="gold-text-gradient">Sectors</span>
            </h2>
            <p className="text-text-secondary text-base md:text-lg leading-relaxed font-sans">
              Illustrating structural versatility and capital depth across diverse risk environments, high-value asset classes, and systemized distribution grids.
            </p>
          </div>
          <div className="lg:col-span-5 flex justify-end">
            <div className="hidden lg:flex items-center space-x-2 text-xs font-mono text-text-tertiary">
              <span>ACTIVE DISCLOSURES</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>COMPLIANT STATUS</span>
            </div>
          </div>
        </div>

        {/* Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Sector Selector List (Left) */}
          <div className="lg:col-span-5 space-y-4">
            {EXPERIENCE_SECTORS.map((sector) => {
              const Icon = IconRegistry[sector.iconName] || Cpu;
              const isActive = activeSector === sector.id;

              return (
                <button
                  key={sector.id}
                  onClick={() => setActiveSector(sector.id)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 flex items-center space-x-4 ${
                    isActive
                      ? 'glass-panel border-gold-500/40 bg-gold-300/[0.02] shadow-lg'
                      : 'border-white/[0.02] hover:border-white/10 hover:bg-white/[0.01]'
                  }`}
                >
                    <div className={`p-3.5 rounded-xl border transition-colors ${
                      isActive 
                        ? 'bg-gold-300 text-black border-transparent' 
                        : 'bg-bg-elevated text-text-secondary border-border-subtle'
                    }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-gold-500 font-mono font-medium uppercase tracking-wider">
                      {sector.role}
                    </div>
                    <div className="text-base font-display font-bold text-text-primary mt-0.5 truncate">
                      {sector.title}
                    </div>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${
                    isActive ? 'text-gold-300 translate-x-1' : 'text-text-muted'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Sector Detail Panel (Right) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {EXPERIENCE_SECTORS.map((sector) => {
                if (sector.id !== activeSector) return null;
                const Icon = IconRegistry[sector.iconName] || Cpu;

                return (
                  <motion.div
                    key={sector.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="glass-panel border-border-subtle p-8 md:p-10 rounded-3xl space-y-8 shadow-xl relative overflow-hidden"
                  >
                    {/* Visual corner decoration */}
                    <div className="absolute -top-12 -right-12 w-40 h-40 bg-gold-500/5 rounded-full blur-2xl" />

                    {/* Meta Section */}
                    <div className="flex items-center justify-between border-b border-border-subtle pb-6">
                      <div>
                        <span className="text-xs text-gold-500 font-mono uppercase tracking-widest">
                          SECTOR PORTFOLIO
                        </span>
                        <h3 className="text-2xl font-display font-extrabold text-text-primary mt-1">
                          {sector.title}
                        </h3>
                      </div>
                      <div className="p-4 bg-bg-elevated border border-border-subtle rounded-2xl text-gold-300">
                        <Icon className="w-8 h-8" />
                      </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-4">
                      <h4 className="text-xs font-mono font-bold text-text-secondary uppercase tracking-widest">
                        Strategic Objective & Involvement
                      </h4>
                      <p className="text-text-secondary text-sm md:text-base leading-relaxed font-sans">
                        {sector.description}
                      </p>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-4 pt-2">
                      <h4 className="text-xs font-mono font-bold text-text-secondary uppercase tracking-widest">
                        Key Milestones & Contributions
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-1 gap-3">
                        {sector.highlights.map((highlight, index) => (
                          <div
                            key={index}
                            className="flex items-start space-x-3 bg-bg-elevated border border-border-subtle p-4 rounded-xl hover:border-gold-500/20 transition-colors"
                          >
                            <div className="p-1 rounded-full bg-gold-500/10 text-gold-300 mt-0.5 shrink-0">
                              <Check className="w-3.5 h-3.5" />
                            </div>
                            <span className="text-text-secondary text-sm font-sans leading-snug">
                              {highlight}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
