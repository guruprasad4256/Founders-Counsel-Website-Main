import React, { JSX } from 'react';

interface ServiceCardProps {
  num: string;
  title: string;
  sub: string;
  desc1: string;
  desc2?: string;
  tags: string[];
  isOpen: boolean;
  onToggle: () => void;
}

export default function ServiceCard({ num, title, sub, desc1, desc2, tags, isOpen, onToggle }: ServiceCardProps): JSX.Element {
  // Brand Colors: 
  // Navy: #0E0B42
  // Gold: #C4912A

  return (
    <div className="border-b border-[#0E0B42]/10 first:border-t overflow-hidden font-['Inter',sans-serif]">
      <div 
        className="flex items-center justify-between py-7 cursor-pointer gap-6 transition-colors group"
        onClick={onToggle}
      >
        <div className="flex-1">
          <div className="text-[10.5px] tracking-[.2em] uppercase text-[#C4912A] font-semibold mb-2">{num}</div>
          <div className={`font-['Cormorant_Garamond',serif] text-[clamp(20px,2.2vw,28px)] font-bold leading-[1.2] transition-colors ${isOpen ? 'text-[#0E0B42]' : 'text-[#0E0B42]/90 group-hover:text-[#0E0B42]'}`}>
            {title}
          </div>
          <div className="text-[12.5px] text-[#0E0B42]/60 mt-1.5 tracking-[.01em]">{sub}</div>
        </div>
        <div className={`w-9 h-9 border rounded-full flex items-center justify-center shrink-0 transition-all duration-300 text-[18px] font-light leading-none ${isOpen ? 'bg-[#0E0B42] border-[#0E0B42] text-white rotate-45' : 'border-[#0E0B42]/20 text-[#0E0B42]/60'}`}>
          +
        </div>
      </div>
      <div className={`transition-all duration-500 overflow-hidden ${isOpen ? 'max-h-[600px]' : 'max-h-0'}`}>
        <div className="pb-9">
          <p className="text-[16px] leading-[1.9] text-[#0E0B42]/70 max-w-[720px] mb-3.5">{desc1}</p>
          {desc2 && (
            <p className="text-[16px] leading-[1.9] text-[#0E0B42]/70 max-w-[720px] mb-3.5">{desc2}</p>
          )}
          <div className="flex flex-wrap gap-2 mt-5">
            {tags.map((tag, idx) => (
              <span key={idx} className="text-[11px] tracking-[.06em] uppercase text-[#0E0B42] bg-[#C4912A]/10 py-1.5 px-3.5 font-semibold rounded-[2px]">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}