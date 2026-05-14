import React, { JSX } from 'react';
import { Link } from 'react-router-dom';

export default function Careers(): JSX.Element {
  // Brand Colors: 
  // Navy: #0E0B42
  // Gold: #C4912A

  return (
    <div className="pt-[72px] font-['Inter',sans-serif]">
      {/* HERO SECTION */}
      <div className="bg-[#0E0B42] pt-16 pb-14 md:pt-[80px] md:pb-[64px] px-6 md:px-[52px]">
        <p className="text-[11px] tracking-[.22em] uppercase text-[#C4912A] font-bold mb-5">
          Careers
        </p>
        <h1 className="font-['Cormorant_Garamond',serif] text-[clamp(38px,5.5vw,70px)] text-white font-bold leading-none tracking-tight">
          Work with <em className="text-[#C4912A] italic font-normal">Founder's Counsel.</em>
        </h1>
      </div>
      
      {/* CONTENT SECTION */}
      <div className="bg-white py-14 md:py-[72px] px-6 md:px-[52px]">
        <p className="text-[11px] tracking-[.22em] uppercase text-[#C4912A] font-bold mb-6">
          Current Openings
        </p>
        
        <div className="space-y-6">
          <p className="text-[14.5px] text-[#0E0B42]/70 leading-[1.9] max-w-[620px]">
            FCC is a boutique practice and we hire selectively. We look for lawyers who think clearly, write well, and are genuinely interested in the commercial context behind legal questions.
          </p>
          
          <p className="text-[14.5px] text-[#0E0B42]/70 leading-[1.9] max-w-[620px]">
            If you are a law graduate or junior associate interested in corporate and commercial work, write to us at {' '}
            <strong className="text-[#0E0B42] font-bold border-b border-[#C4912A]/30 pb-0.5">
              contact@founderscounsel.co
            </strong> {' '}
            with a brief note about yourself.
          </p>
          
          <p className="text-[14.5px] text-[#0E0B42]/70 leading-[1.9] max-w-[620px]">
            We do not have open positions listed at all times. If there is a fit, we will find a way to make it work.
          </p>
        </div>

        <div className="mt-12">
          <Link 
            to="/contact" 
            className="bg-[#C4912A] hover:bg-[#C4912A]/90 text-white py-[14px] px-[32px] text-[11.5px] font-bold tracking-[.12em] uppercase inline-block transition-all border border-[#C4912A] shadow-lg shadow-[#C4912A]/10"
          >
            Write to Us
          </Link>
        </div>
      </div>

      {/* SUBTLE BRAND STRIP */}
      <div className="h-1 bg-gradient-to-r from-[#0E0B42] via-[#C4912A] to-[#0E0B42] opacity-10"></div>
    </div>
  );
}