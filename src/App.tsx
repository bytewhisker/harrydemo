/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Collaboration from './components/Collaboration';
import Experience from './components/Experience';
import Awards from './components/Awards';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen text-white bg-[#030303] overflow-x-hidden antialiased selection:bg-gold-400/20 selection:text-gold-100">
      
      {/* Dynamic Navigation Capsule Header */}
      <Header />

      {/* Main Sections */}
      <main>
        
        {/* Hero Banner with Typist Switchel and Image Frame */}
        <Hero />

        {/* About Me Bento Grid Profile Block */}
        <About />

        {/* How We Can Work Together Grid Block */}
        <Collaboration />

        {/* Businesses & Experiential Sectors Selector Block */}
        <Experience />

        {/* Awards, Keynotes and Recognitions Timeline Block */}
        <Awards />

        {/* Contact form & Live Interactive CRM Review Block */}
        <Contact />

      </main>

      {/* Footer with Registered Domains citations */}
      <Footer />

    </div>
  );
}
