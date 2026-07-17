/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowDown, Award, Shield, Landmark, Sparkles } from 'lucide-react';
import { HERO_TAGLINES, ABOUT_LEAD } from '../data';

export default function Hero() {
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % HERO_TAGLINES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const pictureUrl = "https://media.licdn.com/dms/image/v2/D4D03AQG1If5CoQ2Gmg/profile-displayphoto-scale_400_400/B4DZjsG2_BHsAk-/0/1756307879921?e=1785974400&v=beta&t=oAWFiNVHWibdBD0IvJmzK52ppAUBKkmh6GqKM36buCg";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 px-4 md:px-8">
      {/* Absolute Ambient Background Vectors */}
      <div className="absolute inset-0 bg-bg-surface z-0" />
      
      {/* Decorative Grid Mesh */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] bg-grid-pattern" 
        style={{ maskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, #000 70%, transparent 100%)', WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, #000 70%, transparent 100%)' }}
      />

      {/* Floating Ambient Gold/Bronze Light Orbs */}
      <div className="ambient-glow bg-gold-600/20 w-[450px] h-[450px] top-1/4 left-10 -translate-y-1/2 z-0" />
      <div className="ambient-glow bg-gold-700/15 w-[500px] h-[500px] bottom-10 right-10 z-0" />

      <div className="mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Copy Column (Left) */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-8 text-center lg:text-left">
          
          {/* Elite Mini Badge */}
          <div className="inline-flex items-center self-center lg:self-start space-x-2 glass-panel px-3 py-1.5 rounded-full">
            <span className="flex h-2 w-2 rounded-full bg-gold-500 animate-pulse" />
            <span className="text-[11px] font-semibold tracking-widest text-gold-200 uppercase font-mono">
              Founder • Investor • Board Advisor
            </span>
          </div>

          {/* Main Hero Header */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-text-primary tracking-tight leading-none">
              Strategic Capital & <br className="hidden sm:inline" />
              <span className="gold-text-gradient">Architectural Growth</span>
            </h1>
            
            {/* Tagline Cycler */}
            <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={taglineIndex}
                  initial={{ y: 25, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -25, opacity: 0 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="text-lg sm:text-xl font-mono text-gold-300 font-medium"
                >
                  {HERO_TAGLINES[taglineIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          {/* Bio introduction */}
          <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans">
            {ABOUT_LEAD.description1}
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            <a
              href="#contact"
              className="w-full sm:w-auto text-center px-8 py-4 rounded-xl text-sm font-semibold uppercase tracking-wider text-black bg-gold-300 hover:bg-gold-200 shadow-xl shadow-gold-500/10 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Initiate Partnership
            </a>
            <a
              href="#about"
              className="w-full sm:w-auto text-center px-8 py-4 rounded-xl text-sm font-semibold uppercase tracking-wider text-text-primary border border-border-default hover:border-gold-400 hover:bg-bg-elevated transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Explore Portfolio</span>
              <ArrowDown className="w-4 h-4 text-gold-300 animate-bounce" />
            </a>
          </div>

          {/* Key Metrics row */}
          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border-subtle max-w-md mx-auto lg:mx-0">
            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-text-primary font-mono">15+</div>
              <div className="text-[10px] text-text-tertiary uppercase tracking-widest mt-1 font-sans">Years Scale</div>
            </div>
            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-text-primary font-mono">£50M+</div>
              <div className="text-[10px] text-text-tertiary uppercase tracking-widest mt-1 font-sans">Capital Managed</div>
            </div>
            <div>
              <div className="font-display text-2xl sm:text-3xl font-bold text-text-primary font-mono">12+</div>
              <div className="text-[10px] text-text-tertiary uppercase tracking-widest mt-1 font-sans">Sectors Backed</div>
            </div>
          </div>

        </div>

        {/* Profile Picture / Frame Column (Right) */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <div className="relative group">
            
            {/* Animated Background Gold Rings */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-gold-500 to-gold-700 opacity-25 blur-xl group-hover:opacity-40 transition-opacity duration-700" />
            
            {/* Secondary Glass Border Backing */}
            <div className="absolute inset-0 rounded-3xl border border-border-default transform rotate-3 group-hover:rotate-1 transition-transform duration-500" />
            
            {/* Main Picture Frame */}
            <div className="relative glass-panel rounded-3xl p-3 shadow-2xl overflow-hidden max-w-[340px] sm:max-w-[380px] transition-transform duration-500 group-hover:scale-[1.01] transform -rotate-2 group-hover:rotate-0">
              
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-zinc-900">
                <img
                  src={pictureUrl}
                  alt="Harry Hussain Portrait"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale brightness-95 hover:grayscale-0 transition-all duration-700 scale-100 hover:scale-105"
                />
                
                {/* Visual Accent Layer Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                
                {/* Floating Micro-Badges on Image */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center bg-black/40 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-border-subtle">
                  <div>
                    <h3 className="text-white font-display text-xs font-semibold">Harry Hussain</h3>
                    <p className="text-gold-300 text-[9px] font-mono uppercase tracking-wider">UK Entrepreneur & Angel</p>
                  </div>
                  <Sparkles className="w-4 h-4 text-gold-300" />
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
