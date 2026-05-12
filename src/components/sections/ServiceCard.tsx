import React, { JSX, useState } from 'react';

interface ServiceCardProps {
  num: string;
  title: string;
  sub: string;
  desc1: string;
  desc2: string;
  tags: string[];
  isOpen: boolean;
  onToggle: () => void;
}

export default function ServiceCard({ num, title, sub, desc1, desc2, tags, isOpen, onToggle }: ServiceCardProps): JSX.Element {
  return (
    <div className="border-b border-[#DDD8D0] first:border-t overflow-hidden">
      <div 
        className="flex items-center justify-between py-7 cursor-pointer gap-6 transition-colors group"
        onClick={onToggle}
      >
        <div className="flex-1">
          <div className="text-[10.5px] tracking-[.2em] uppercase text-[#C4912A] font-semibold mb-2">{num}</div>
          <div className={`font-['Cormorant_Garamond',serif] text-[clamp(20px,2.2vw,28px)] font-medium leading-[1.2] transition-colors ${isOpen ? 'text-[#0B3B4A]' : 'text-[#1A1A1A] group-hover:text-[#0B3B4A]'}`}>
            {title}
          </div>
          <div className="text-[12.5px] text-[#5c5c5c] mt-1.5 tracking-[.01em]">{sub}</div>
        </div>
        <div className={`w-9 h-9 border rounded-full flex items-center justify-center shrink-0 transition-all duration-300 text-[18px] font-light leading-none ${isOpen ? 'bg-[#0B3B4A] border-[#0B3B4A] text-white rotate-45' : 'border-[#DDD8D0] text-[#5c5c5c]'}`}>
          +
        </div>
      </div>
      <div className={`transition-all duration-500 overflow-hidden ${isOpen ? 'max-h-[600px]' : 'max-h-0'}`}>
        <div className="pb-9">
          <p className="text-[14px] leading-[1.9] text-[#5c5c5c] max-w-[720px] mb-3.5">{desc1}</p>
          <p className="text-[14px] leading-[1.9] text-[#5c5c5c] max-w-[720px] mb-3.5">{desc2}</p>
          <div className="flex flex-wrap gap-2 mt-5">
            {tags.map((tag, idx) => (
              <span key={idx} className="text-[11px] tracking-[.06em] uppercase text-[#0B3B4A] bg-[#F2EDE5] py-1.5 px-3.5 font-medium rounded-[2px]">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}