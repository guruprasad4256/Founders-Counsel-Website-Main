import React, { JSX } from 'react';
import { Link } from 'react-router-dom';
import TestimonialCarousel from '../sections/TestimonialCarousel';
import profileUrl from '../../assets/SathwikPortfolio.jpg'; 

export default function About(): JSX.Element {
  // BRAND COLORS:
  // Navy: #0E0B42
  // Gold: #C4912A

  return (
    <div className="pt-[72px] font-['Inter',sans-serif]">
      {/* ABOUT HERO */}
      <div className="bg-[#0E0B42] py-14 px-6 md:px-[52px]">
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-12 items-center max-w-full mx-auto">
          <div className="max-w-[240px] md:max-w-full mx-auto text-center">
            <img 
              src={profileUrl} 
              alt="Sathwik Putta" 
              className="w-full aspect-square object-cover rounded-full shadow-xl grayscale-[20%] hover:grayscale-0 transition-all border-2 border-[#C4912A]/30" 
            />
            <p className="text-[10.5px] tracking-[.15em] uppercase text-white/35 mt-4 font-medium">Sathwik Putta</p>
          </div>
          <div>
            <h1 className="font-['Cormorant_Garamond',serif] text-[46px] text-white font-bold leading-none mb-1.5">Sathwik Putta</h1>
            <p className="text-[11px] tracking-[.18em] uppercase text-[#C4912A] font-bold mb-7">Founder & Chief Counsel</p>
            <div className="space-y-4 text-[14.5px] leading-[1.9] text-white/70 font-light">
              <p>Sathwik Putta founded Founder's Counsel & Co after over 12 years working across in-house legal roles and private practice. His experience spans growth-stage startups, mid-market businesses, and transactions across sectors - giving him a ground-level understanding of how legal decisions play out inside real businesses.</p>
              <p>FCC is built on a single conviction: that founders and growing businesses deserve the same quality of legal thinking that large corporates take for granted, without the overhead, the distance, or the billing structures that make good counsel feel inaccessible.</p>
              <p>Sathwik is an Advocate enrolled with the Bar Council of Karnataka and the Bar Council of India</p>
              <p>FCC works exclusively with founders, startups, and emerging businesses those in the 0-to-1 stage or early growth phase. This focus is intentional. It shapes how we work, how we price, and how we think.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="about-body bg-white">
        {/* PROBLEM & TIMELINE SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-b border-[#0E0B42]/10">
          <div className="p-6 md:p-12 md:border-r border-[#0E0B42]/10 border-b md:border-b-0">
            <div className="text-[11px] tracking-[.2em] uppercase text-[#C4912A] font-bold mb-5">The Problem He Saw</div>
            <h3 className="font-['Cormorant_Garamond',serif] text-[24px] text-[#0E0B42] mb-4.5 font-bold leading-[1.2]">Founders build through key legal moments without counsel that has seen them from the inside.</h3>
            <p className="text-[14px] leading-[1.85] text-[#0E0B42]/70">Structuring, fundraising, first hires, vendor crises - these are legal inflection points. Most businesses handle them with generic templates, overpriced retainers, or no counsel at all. The cost only becomes visible later - in a poorly drafted shareholder agreement, an unenforceable contract, or an avoidable dispute. FCC exists to close that gap.</p>
          </div>
          <div className="p-6 md:p-12">
            <div className="text-[11px] tracking-[.2em] uppercase text-[#C4912A] font-bold mb-5">Career at a Glance</div>
            
            {/* TIMELINE SECTION */}
            <div className="relative border-l border-[#0E0B42]/20 ml-2 mt-4 space-y-8 pb-2">
              <div className="relative pl-6 md:pl-8">
                <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#C4912A] ring-4 ring-white" />
                <div className="text-[12px] text-[#C4912A] font-bold tracking-[.04em] mb-1.5">2018</div>
                <div className="text-[13.5px] text-[#0E0B42]/70 leading-[1.65]">
                  <strong className="text-[#0E0B42] font-bold">Independent boutique lawyer</strong> working with founders, early stage and growth startups
                </div>
              </div>
              <div className="relative pl-6 md:pl-8">
                <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#C4912A] ring-4 ring-white" />
                <div className="text-[12px] text-[#C4912A] font-bold tracking-[.04em] mb-1.5">2014</div>
                <div className="text-[13.5px] text-[#0E0B42]/70 leading-[1.65]">
                  <strong className="text-[#0E0B42] font-bold">In-house legal counsel</strong>, Healthcare, Health tech & Pharma
                </div>
              </div>
              <div className="relative pl-6 md:pl-8">
                <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#C4912A] ring-4 ring-white" />
                <div className="text-[12px] text-[#C4912A] font-bold tracking-[.04em] mb-1.5">2012</div>
                <div className="text-[13.5px] text-[#0E0B42]/70 leading-[1.65]">
                  <strong className="text-[#0E0B42] font-bold">LL.B.</strong> Enrolled with Bar Council of Karnataka
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* HOW IT WORKS SECTION */}
        <div className="p-6 md:p-12 border-b border-[#0E0B42]/10">
          <div className="text-[11px] tracking-[.2em] uppercase text-[#C4912A] font-bold mb-5">How It Works</div>
          <h3 className="font-['Cormorant_Garamond',serif] text-[24px] text-[#0E0B42] mb-4.5 font-bold leading-[1.2]">FCC is built to deliver consistently and efficiently.</h3>
          <p className="text-[14px] leading-[1.85] text-[#0E0B42]/70">We use AI-powered systems and automation for process-heavy and routine legal work — freeing our human attention for what matters most: sound legal judgment, strategic advice, and the decisions that shape your business.</p>
        </div>
        
        <div className="bg-[#FAF8F4] py-12 px-6 md:px-[52px]">
          <div className="pb-9">
            <span className="text-[11px] tracking-[.22em] uppercase text-[#C4912A] font-bold block mb-2">Industries</span>
            <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(28px,3vw,40px)] text-[#0E0B42] font-bold leading-[1.2]">Domain familiarity that shapes the counsel.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#0E0B42]/10 mt-9 border border-[#0E0B42]/10">
            <div className="bg-[#FAF8F4] p-7 md:px-8 hover:bg-white transition-colors">
              <div className="font-['Cormorant_Garamond',serif] text-[17px] text-[#0E0B42] font-bold mb-1.5">Technology & SaaS</div>
              <p className="text-[12.5px] text-[#0E0B42]/60 leading-[1.6]">Product companies, B2B SaaS, and tech-enabled services</p>
            </div>
            <div className="bg-[#FAF8F4] p-7 md:px-8 hover:bg-white transition-colors">
              <div className="font-['Cormorant_Garamond',serif] text-[17px] text-[#0E0B42] font-bold mb-1.5">Real Estate</div>
              <p className="text-[12.5px] text-[#0E0B42]/60 leading-[1.6]">Developers, operators, and property needs</p>
            </div>
            <div className="bg-[#FAF8F4] p-7 md:px-8 hover:bg-white transition-colors">
              <div className="font-['Cormorant_Garamond',serif] text-[17px] text-[#0E0B42] font-bold mb-1.5">Healthcare</div>
              <p className="text-[12.5px] text-[#0E0B42]/60 leading-[1.6]">Regulated sector with compliance-heavy decisions</p>
            </div>
            <div className="bg-[#FAF8F4] p-7 md:px-8 hover:bg-white transition-colors">
              <div className="font-['Cormorant_Garamond',serif] text-[17px] text-[#0E0B42] font-bold mb-1.5">Media & Entertainment</div>
              <p className="text-[12.5px] text-[#0E0B42]/60 leading-[1.6]">Artists, production houses, content platforms, and media businesses</p>
            </div>
            <div className="bg-[#FAF8F4] p-7 md:px-8 hover:bg-white transition-colors">
              <div className="font-['Cormorant_Garamond',serif] text-[17px] text-[#0E0B42] font-bold mb-1.5">Manufacturing</div>
              <p className="text-[12.5px] text-[#0E0B42]/60 leading-[1.6]">Vendor contracts, supply chain documentation, premises</p>
            </div>
            <div className="bg-[#FAF8F4] p-7 md:px-8 hover:bg-white transition-colors">
              <div className="font-['Cormorant_Garamond',serif] text-[17px] text-[#0E0B42] font-bold mb-1.5">Others</div>
              <p className="text-[12.5px] text-[#0E0B42]/60 leading-[1.6]">Consulting firms, agencies, and service businesses</p>
            </div>
          </div>
        </div>

        <div className="bg-[#0E0B42] py-16">
          <div className="max-w-[820px] mx-auto px-6 md:px-12">
            <div>
              <span className="text-[11px] tracking-[.22em] uppercase text-[#C4912A] font-bold block mb-2">What Clients Say</span>
              <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(28px,3vw,40px)] text-white font-bold leading-[1.2]">Trusted by founders, MSMEs and growing businesses.</h2>
            </div>
            <div className="mt-10 w-full min-w-0 relative block">
              <TestimonialCarousel />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#0E0B42] py-14 px-6 md:px-[52px] flex items-center justify-between gap-10 flex-wrap border-t border-white/5">
        <div>
          <div className="font-['Cormorant_Garamond',serif] text-[clamp(26px,3vw,42px)] text-white font-bold leading-[1.25] mb-4">
            Ready for legal support that<br /><em className="text-[#C4912A] italic font-normal">thinks like you do?</em>
          </div>
          <p className="text-[13.5px] text-white/55 leading-[1.7] max-w-[480px]">Direct access to senior counsel. No associates, no overhead, no runaround.</p>
        </div>
        <Link to="/contact" className="bg-[#C4912A] hover:bg-[#C4912A]/90 text-white py-3.5 px-8 text-[12px] font-bold tracking-[.1em] uppercase inline-block transition-colors border border-[#C4912A]">Get in Touch</Link>
      </div>
    </div>
  );
}