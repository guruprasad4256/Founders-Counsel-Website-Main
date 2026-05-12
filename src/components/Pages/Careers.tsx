import React, { JSX } from 'react';
import { Link } from 'react-router-dom';

export default function Careers(): JSX.Element {
  return (
    <div className="pt-[72px] font-['Inter',sans-serif]">
      <div className="bg-[#052028] pt-16 pb-14 md:pt-[80px] md:pb-[64px] px-6 md:px-[52px]">
        <p className="text-[11px] tracking-[.22em] uppercase text-[#C4912A] font-semibold mb-5">
          Careers
        </p>
        <h1 className="font-['Cormorant_Garamond',serif] text-[clamp(38px,5.5vw,70px)] text-white font-normal leading-none">
          Work with <em className="text-[#C4912A] italic">Founder's Counsel.</em>
        </h1>
      </div>
      
      <div className="bg-white py-14 md:py-[72px] px-6 md:px-[52px]">
        <p className="text-[11px] tracking-[.22em] uppercase text-[#C4912A] font-semibold mb-6">
          Current Openings
        </p>
        <p className="text-[14.5px] text-[#5c5c5c] leading-[1.9] max-w-[620px] mb-4.5">
          FCC is a boutique practice and we hire selectively. We look for lawyers who think clearly, write well, and are genuinely interested in the commercial context behind legal questions.
        </p>
        <p className="text-[14.5px] text-[#5c5c5c] leading-[1.9] max-w-[620px] mb-4.5">
          If you are a law graduate or junior associate interested in corporate and commercial work write to us at <strong className="text-[#0B3B4A] font-semibold">sathwik@founderscounsel.in</strong> with a brief note about yourself.
        </p>
        <p className="text-[14.5px] text-[#5c5c5c] leading-[1.9] max-w-[620px] mb-4.5">
          We do not have open positions listed at all times. If there is a fit, we will find a way to make it work.
        </p>
        <div className="mt-9">
          <Link 
            to="/contact" 
            className="bg-[#C4912A] hover:bg-[#a87822] text-white py-[13px] px-[30px] text-[11.5px] font-semibold tracking-[.1em] uppercase inline-block transition-colors border-none"
          >
            Write to Us
          </Link>
        </div>
      </div>
    </div>
  );
}