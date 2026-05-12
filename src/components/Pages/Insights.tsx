import React, { JSX } from 'react';
import { Link } from 'react-router-dom';

export default function Insights(): JSX.Element {
  return (
    <div className="pt-[72px] font-['Inter',sans-serif]">
      <div className="bg-[#052028] pt-16 pb-14 md:pt-[80px] md:pb-[64px] px-6 md:px-[52px]">
        <p className="text-[11px] tracking-[.22em] uppercase text-[#C4912A] font-semibold mb-5">
          Insights
        </p>
        <h1 className="font-['Cormorant_Garamond',serif] text-[clamp(38px,5.5vw,70px)] text-white font-normal leading-none">
          Thinking on law,<br />
          <em className="text-[#C4912A] italic">business &amp; practice.</em>
        </h1>
      </div>
      
      <div className="bg-white py-14 md:py-[72px] px-6 md:px-[52px]">
        <p className="text-[11px] tracking-[.22em] uppercase text-[#C4912A] font-semibold mb-6">
          Coming Soon
        </p>
        <p className="text-[14px] text-[#5c5c5c] leading-[1.9] max-w-[580px] mb-4">
          Sathwik writes on the legal questions founders actually face — structuring decisions, contract red flags, what to look out for when raising, and how to handle common disputes.
        </p>
        <p className="text-[14px] text-[#5c5c5c] leading-[1.9] max-w-[580px]">
          Articles and notes will be published here. In the meantime, follow updates on <Link to="/contact" className="text-[#0B3B4A] font-medium underline hover:text-[#C4912A] transition-colors">LinkedIn</Link>.
        </p>
      </div>
    </div>
  );
}