import React, { JSX } from 'react';
import logoUrl from '../../assets/logo.png';
import { Link, useLocation } from 'react-router-dom';

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-[#052028] pt-11 px-6 md:px-12 pb-7 font-['Inter',sans-serif]">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 pb-10 border-b border-white/10">
        <div>
          <div className="font-['Cormorant_Garamond',serif] text-[17px] font-semibold text-white/70 tracking-[.04em] mb-3.5 flex items-center gap-2.5">
            <img src={logoUrl} alt="FCC" className="h-[36px] w-auto opacity-75" />
            <div>Founder's Counsel <span className="text-[#C4912A]">&amp;</span> Co</div>
          </div>
          <p className="text-[12.5px] text-white/40 leading-[1.7]">Corporate legal advisory for founders<br />and growing businesses. Bengaluru.</p>
        </div>
        <div className="flex flex-col">
          <div className="text-[10px] tracking-[.2em] uppercase text-[#C4912A] font-semibold mb-4.5">Firm</div>
          <Link to="/about" className="text-[13px] text-white/45 mb-2.5 hover:text-white/80 transition-colors">About</Link>
          <Link to="/services" className="text-[13px] text-white/45 mb-2.5 hover:text-white/80 transition-colors">Services</Link>
          <Link to="/work" className="text-[13px] text-white/45 mb-2.5 hover:text-white/80 transition-colors">Work</Link>
          <Link to="/careers" className="text-[13px] text-white/45 mb-2.5 hover:text-white/80 transition-colors">Careers</Link>
        </div>
        <div className="flex flex-col">
          <div className="text-[10px] tracking-[.2em] uppercase text-[#C4912A] font-semibold mb-4.5">Practice Areas</div>
          {['Corporate Advisory', 'Contracts & Commercial', 'Transactions', 'Real Estate', 'Fractional GC'].map(svc => (
            <Link key={svc} to="/services" className="text-[13px] text-white/45 mb-2.5 hover:text-white/80 transition-colors">{svc}</Link>
          ))}
        </div>
        <div className="flex flex-col">
          <div className="text-[10px] tracking-[.2em] uppercase text-[#C4912A] font-semibold mb-4.5">Contact</div>
          <p className="text-[13px] text-white/45 leading-[1.7]">sathwik@founderscounsel.in</p>
          <p className="text-[13px] text-white/45 leading-[1.7] mt-2">+91 98450 00000</p>
          <p className="text-[13px] text-white/45 leading-[1.7] mt-2">Bengaluru, Karnataka</p>
          <a href="https://in.linkedin.com/in/sathwikputta" className="text-[13px] text-white/45 mt-3 hover:text-white/80 transition-colors">LinkedIn</a>
        </div>
      </div>
      <div className="pt-7 flex items-center justify-between gap-5 flex-wrap">
        <span className="text-[12px] text-white/30">&copy; 2026 Founder's Counsel &amp; Co. All rights reserved.</span>
        <p className="text-[11px] text-white/30 max-w-[620px] leading-[1.6]">The Bar Council of India does not permit advertisement or solicitation by advocates. This website is for informational purposes only and does not constitute legal advice.</p>
      </div>
    </footer>
  );
}