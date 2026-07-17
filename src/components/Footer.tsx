/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowUp, ShieldCheck, Mail, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-bg-surface border-t border-border-subtle py-12 md:py-16 px-4 md:px-8 overflow-hidden z-20">
      <div className="mx-auto max-w-7xl relative z-10 flex flex-col space-y-10">
        
        {/* Upper footer */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Logo / Domain */}
          <div className="md:col-span-5 space-y-4 text-center md:text-left">
            <h2 className="font-serif text-2xl font-bold uppercase tracking-widest text-text-primary">
              HARRY <span className="text-gold-500 font-serif">HUSSAIN</span>
            </h2>
            <p className="text-text-tertiary text-sm max-w-md font-sans">
              Elite personal brand platform and private asset portal. Operating across secure logistics, national safeguarding compliance, property, and tech equity ventures.
            </p>
          </div>

          {/* Dual Registered Domains */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-bold text-text-secondary uppercase tracking-widest text-center md:text-left">
              Registered Domains
            </h4>
            <div className="flex flex-col space-y-1.5 text-sm text-gold-300 font-mono text-center md:text-left">
              <a href="#" className="hover:text-[var(--hover-accent)] transition-colors flex items-center justify-center md:justify-start space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
                <span>HarryHussain.co.uk</span>
              </a>
              <a href="#" className="hover:text-[var(--hover-accent)] transition-colors flex items-center justify-center md:justify-start space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
                <span>HarryHussain.com</span>
              </a>
            </div>
          </div>

          {/* Socials & Actions */}
          <div className="md:col-span-3 flex flex-col items-center md:items-end space-y-4">
            <button
              onClick={handleScrollTop}
              className="p-3 rounded-xl bg-bg-elevated border border-border-subtle text-text-secondary hover:text-text-primary hover:border-gold-500 transition-colors duration-300 flex items-center justify-center group"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
            </button>
            <a
              href="https://www.linkedin.com/in/harry-hussain-3a3b82195/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-text-secondary hover:text-[var(--hover-accent)] transition-colors flex items-center space-x-1"
            >
              <span>CONNECT ON LINKEDIN</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Lower copyright bar */}
        <div className="border-t border-border-subtle pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted font-mono">
          <div className="text-center sm:text-left">
            © {new Date().getFullYear()} Harry Hussain. All Rights Reserved.
          </div>
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-gold-500/80" />
              <span>Compliant Security Registry</span>
            </span>
            <span>•</span>
            <span>UK Edition</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
