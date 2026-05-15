import React, { JSX } from 'react';

interface WorkRowProps {
  tag: string;
  title: string;
  situation: string;
  action: string;
  outcome: string;
  isOpen: boolean;    // Controlled by parent
  onToggle: () => void; // Controlled by parent
}

export default function WorkRow({ 
  tag, 
  title, 
  situation, 
  action, 
  outcome, 
  isOpen, 
  onToggle 
}: WorkRowProps): JSX.Element {

  // Brand Colors: 
  // Navy: #0E0B42
  // Gold: #C4912A

  return (
    <div className="border-b border-[#0E0B42]/10 font-['Inter',sans-serif]">
      <div 
        className="flex items-center justify-between py-6 px-6 md:px-[52px] cursor-pointer transition-colors hover:bg-[#0E0B42]/5 gap-6 group" 
        onClick={onToggle}
      >
        <div>
          <div className="text-[11px] tracking-[.16em] uppercase text-[#C4912A] font-bold mb-2">{tag}</div>
          <div className="font-['Cormorant_Garamond',serif] text-[22px] text-[#0E0B42] font-bold leading-tight transition-colors group-hover:text-[#0E0B42]">
            {title}
          </div>
        </div>
        <div className={`text-[24px] font-light transition-colors shrink-0 ${isOpen ? 'text-[#C4912A]' : 'text-[#0E0B42]/20 group-hover:text-[#C4912A]'}`}>
          {isOpen ? '-' : '+'}
        </div>
      </div>
      
      {/* Content Section */}
      <div className={`${isOpen ? 'block' : 'hidden'} px-6 md:px-[52px] pb-10 transition-all`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-4">
          <div>
            <div className="text-[10.5px] tracking-[.18em] uppercase text-[#0E0B42]/40 font-bold mb-3">Situation</div>
            {/* Updated from 13.5px to 15px */}
            <p className="text-[15px] text-[#0E0B42]/70 leading-[1.8] max-w-full">{situation}</p>
          </div>
          <div>
            <div className="text-[10.5px] tracking-[.18em] uppercase text-[#0E0B42]/40 font-bold mb-3">What FCC Did</div>
            {/* Updated from 13.5px to 15px */}
            <p className="text-[15px] text-[#0E0B42]/70 leading-[1.8] max-w-full">{action}</p>
          </div>
        </div>
        
        <div className="bg-[#C4912A]/10 border-l-[3px] border-[#C4912A] py-5 px-6 mt-8">
          <div className="text-[10px] tracking-[.18em] uppercase text-[#C4912A] font-bold mb-2">Outcome</div>
          {/* Updated from 13.5px to 15px */}
          <div className="text-[15px] text-[#0E0B42] font-semibold leading-[1.65] italic max-w-full">
            {outcome}
          </div>
        </div>
      </div>
    </div>
  );
}