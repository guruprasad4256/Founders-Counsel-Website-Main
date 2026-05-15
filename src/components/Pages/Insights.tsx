import React, { JSX } from 'react';
import { Link } from 'react-router-dom';

export default function Insights(): JSX.Element {
  // Brand Colors: 
  // Navy: #0E0B42
  // Gold: #C4912A

  return (
    <div className="pt-[72px] font-['Inter',sans-serif]">
      {/* HERO SECTION */}
      <div className="bg-[#0E0B42] pt-16 pb-14 md:pt-[80px] md:pb-[64px] px-6 md:px-[52px]">
        <p className="text-[11px] tracking-[.22em] uppercase text-[#C4912A] font-bold mb-5">
          Insights
        </p>
        <h1 className="font-['Cormorant_Garamond',serif] text-[clamp(38px,5.5vw,70px)] text-white font-bold leading-none tracking-tight">
          Thinking on law,<br />
          <em className="text-[#C4912A] italic font-normal">business &amp; practice.</em>
        </h1>
      </div>
      
      {/* CONTENT SECTION */}
      <div className="bg-white py-14 md:py-[72px] px-6 md:px-[52px]">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[11px] tracking-[.22em] uppercase text-[#C4912A] font-bold">
            Coming Soon
          </span>
          <div className="h-px w-8 bg-[#C4912A]/30"></div>
        </div>
        
        <p className="text-[14.5px] text-[#0E0B42]/70 leading-[1.9] max-w-[580px] mb-4">
          Sathwik writes on the legal questions founders actually face structuring decisions, contract red flags, what to look out for when raising, and how to handle common disputes.
        </p>
        
        <p className="text-[14.5px] text-[#0E0B42]/70 leading-[1.9] max-w-[580px]">
          Articles and notes will be published here. In the meantime, follow updates on {' '}
          <Link 
            to="https://in.linkedin.com/in/sathwikputta" 
            className="text-[#0E0B42] font-bold underline decoration-[#C4912A]/40 underline-offset-4 hover:text-[#C4912A] hover:decoration-[#C4912A] transition-all"
          >
            LinkedIn
          </Link>.
        </p>
      </div>

      {/* SUBTLE BRAND STRIP */}
      <div className="h-1 bg-gradient-to-r from-[#0E0B42] via-[#C4912A] to-[#0E0B42] opacity-20"></div>
    </div>
  );
}