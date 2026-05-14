import React, { JSX } from 'react';
import logoUrl from '../../assets/FCCLogo.png'; 
import { Link } from 'react-router-dom';

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-[#0E0B42] pt-11 px-6 md:px-12 pb-7 font-['Inter',sans-serif]">
      {/* Top Section: Brand and Links */}
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 pb-10 border-b border-white/10">
        <div>
          <div className="font-['Cormorant_Garamond',serif] text-[17px] font-semibold text-white/90 tracking-[.04em] mb-3.5 flex items-center gap-2.5">
            <img 
              src={logoUrl} 
              alt="FCC" 
              className="h-[44px] w-auto block" 
            />
            <div className="ml-1">
              Founder's Counsel <span className="text-[#C4912A]">&amp;</span> Co
            </div>
          </div>
          <p className="text-[12.5px] text-white/50 leading-[1.7]">
            Corporate legal advisory for founders<br />and growing businesses. Bengaluru.
          </p>
        </div>

        <div className="flex flex-col">
          <div className="text-[10px] tracking-[.2em] uppercase text-[#C4912A] font-semibold mb-4.5">Firm</div>
          <Link to="/about" className="text-[13px] text-white/50 mb-2.5 hover:text-[#C4912A] transition-colors">About</Link>
          <Link to="/services" className="text-[13px] text-white/50 mb-2.5 hover:text-[#C4912A] transition-colors">Services</Link>
          <Link to="/work" className="text-[13px] text-white/50 mb-2.5 hover:text-[#C4912A] transition-colors">Work</Link>
          <Link to="/careers" className="text-[13px] text-white/50 mb-2.5 hover:text-[#C4912A] transition-colors">Careers</Link>
        </div>

        <div className="flex flex-col">
          <div className="text-[10px] tracking-[.2em] uppercase text-[#C4912A] font-semibold mb-4.5">Practice Areas</div>
          {['Corporate Advisory', 'Contracts & Commercial', 'Transactions', 'Real Estate', 'Fractional GC'].map(svc => (
            <Link key={svc} to="/services" className="text-[13px] text-white/50 mb-2.5 hover:text-[#C4912A] transition-colors">{svc}</Link>
          ))}
        </div>

        <div className="flex flex-col">
          <div className="text-[10px] tracking-[.2em] uppercase text-[#C4912A] font-semibold mb-4.5">Contact</div>
          <a href="mailto:contact@founderscounsel.co" className="text-[13px] text-white/50 leading-[1.7] hover:text-[#C4912A] transition-colors">contact@founderscounsel.co</a>
          <a href="tel:+919480363788" className="text-[13px] text-white/50 leading-[1.7] mt-2 hover:text-[#C4912A] transition-colors">+91 94803 63788</a>
          <p className="text-[13px] text-white/50 leading-[1.7] mt-2">Bengaluru, Karnataka</p>
          <a href="https://in.linkedin.com/in/sathwikputta" target="_blank" rel="noopener noreferrer" className="text-[13px] text-white/50 mt-3 hover:text-[#C4912A] transition-colors">LinkedIn</a>
        </div>
      </div>

      {/* Bottom Section: 2-Column Layout (Updated from 3) */}
      <div className="pt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          
          {/* Col 1: Copyright */}
          <div className="text-[11px] text-white/30 text-center md:text-left">
            &copy; 2026 Founder's Counsel &amp; Co. All rights reserved.
          </div>

          {/* Col 2: Disclaimer - Wrapped in 2 lines */}
          <div className="text-[10.5px] text-white/30 leading-[1.5] text-center md:text-right md:max-w-[420px] md:ml-auto">
            The Bar Council of India does not permit advertisement or solicitation by advocates. 
            This website is for informational purposes only and does not constitute legal advice.
          </div>

        </div>
      </div>
    </footer>
  );
}