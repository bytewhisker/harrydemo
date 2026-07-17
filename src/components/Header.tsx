/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'How We Work', href: '#collaboration' },
    { label: 'Experience', href: '#experience' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 md:px-8 py-4">
        <div 
          className={`mx-auto max-w-7xl transition-all duration-500 rounded-2xl flex items-center justify-between px-6 py-3.5 ${
            scrolled 
              ? 'glass-panel shadow-lg border-border-default backdrop-blur-md translate-y-1' 
              : 'bg-transparent border-transparent'
          }`}
        >
          {/* Brand/Logo */}
          <div className="flex flex-col">
            <a href="#" className="flex items-center space-x-2">
              <span className="font-serif text-xl font-bold tracking-widest text-text-primary uppercase">
                Harry <span className="text-gold-500 font-serif">Hussain</span>
              </span>
            </a>
            <div className="hidden sm:flex items-center space-x-2 text-[10px] text-text-tertiary font-mono mt-0.5 uppercase tracking-wider">
              <span>harryhussain.com</span>
              <span className="w-1 h-1 rounded-full bg-gold-500/40"></span>
              <span>harryhussain.co.uk</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-text-secondary hover:text-[var(--hover-accent)] transition-colors duration-200 tracking-wide"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Theme Toggle + Desktop Call To Action */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl border border-border-subtle text-text-secondary hover:text-text-primary hover:border-border-default transition-all duration-200"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <a
              href="#contact"
              className="relative group overflow-hidden px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-black bg-gold-300 hover:bg-gold-200 transition-colors duration-300 flex items-center space-x-1.5"
            >
              <span>Enquire Now</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-text-secondary hover:text-text-primary transition-colors"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-text-secondary hover:text-text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-24 mx-4 z-40 glass-panel border-border-default rounded-2xl p-6 md:hidden shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-text-primary hover:text-[var(--hover-accent)] transition-colors py-1"
                >
                  {item.label}
                </a>
              ))}
              <hr className="border-border-subtle my-2" />
              <div className="flex flex-col space-y-2 font-mono text-xs text-text-secondary">
                <div className="flex justify-between">
                  <span>Primary Domain</span>
                  <span className="text-gold-300">harryhussain.co.uk</span>
                </div>
                <div className="flex justify-between">
                  <span>Alternative Alias</span>
                  <span className="text-gold-300">harryhussain.com</span>
                </div>
              </div>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-xl text-sm font-semibold uppercase tracking-wider text-black bg-gold-300 flex items-center justify-center space-x-2"
              >
                <span>Enquire Now</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
