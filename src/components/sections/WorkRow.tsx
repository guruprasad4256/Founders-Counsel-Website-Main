import React, { useState, JSX } from 'react';

interface WorkRowProps {
  tag: string;
  title: string;
  situation: string;
  action: string;
  outcome: string;
}

export default function WorkRow({ tag, title, situation, action, outcome }: WorkRowProps): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="border-b border-[#DDD8D0]">
      <div className="flex items-center justify-between py-6 px-6 md:px-[52px] cursor-pointer transition-colors hover:bg-[#FAF8F4] gap-6 group" onClick={() => setIsOpen(!isOpen)}>
        <div>
          <div className="text-[11px] tracking-[.16em] uppercase text-[#C4912A] font-semibold mb-2">{tag}</div>
          <div className="font-['Cormorant_Garamond',serif] text-[22px] text-[#0B3B4A] font-medium">{title}</div>
        </div>
        <div className={`text-[24px] font-light transition-colors shrink-0 ${isOpen ? 'text-[#C4912A]' : 'text-[#DDD8D0] group-hover:text-[#C4912A]'}`}>
          {isOpen ? '-' : '+'}
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} px-6 md:px-[52px] pb-10`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-4">
          <div>
            <div className="text-[10.5px] tracking-[.18em] uppercase text-[#999] font-semibold mb-3">Situation</div>
            <p className="text-[13.5px] text-[#5c5c5c] leading-[1.8]">{situation}</p>
          </div>
          <div>
            <div className="text-[10.5px] tracking-[.18em] uppercase text-[#999] font-semibold mb-3">What FCC Did</div>
            <p className="text-[13.5px] text-[#5c5c5c] leading-[1.8]">{action}</p>
          </div>
        </div>
        <div className="bg-[#F2EDE5] border-l-[3px] border-[#C4912A] py-4.5 px-6 mt-6">
          <div className="text-[10px] tracking-[.18em] uppercase text-[#C4912A] font-semibold mb-1.5">Outcome</div>
          <div className="text-[13.5px] text-[#0B3B4A] font-medium leading-[1.65]">{outcome}</div>
        </div>
      </div>
    </div>
  );
}