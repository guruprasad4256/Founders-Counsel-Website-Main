import React, { JSX } from 'react';
import { Link } from 'react-router-dom';

export default function Home(): JSX.Element {
  const marqueeItems = [
    'Technology & SaaS',
    'Real Estate',
    'Healthcare',
    'Media & Entertainment',
    'Manufacturing',
    'Serving founders across India'
  ];

  const experienceYears = new Date().getFullYear() - 2013;

  // Brand Colors: Navy: #0E0B42, Gold: #C4912A

  return (
    <div className="pt-[60px] md:pt-[72px] font-['Inter',sans-serif] bg-white overflow-hidden">
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            width: max-content;
            animation: marquee 30s linear infinite;
          }
          @keyframes linePulse {
            0% { stroke-dashoffset: 1000; opacity: 0.1; }
            50% { opacity: 0.3; }
            100% { stroke-dashoffset: 0; opacity: 0.1; }
          }
          .network-line {
            stroke-dasharray: 1000;
            animation: linePulse 15s linear infinite;
          }
        `}
      </style>

      {/* HERO SECTION */}
      <section className="bg-[#0E0B42] relative flex items-center overflow-hidden selection:bg-[#C4912A]/30 selection:text-white w-full">
        
        {/* VISUAL NETWORK LAYER */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <svg className="absolute inset-0 w-full h-full hidden md:block opacity-30" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C4912A" stopOpacity="0" />
                <stop offset="50%" stopColor="#C4912A" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#C4912A" stopOpacity="0" />
              </linearGradient>
            </defs>
            <g stroke="url(#lineGrad)" strokeWidth="1" fill="none" className="network-line">
              <line x1="78%" y1="30%" x2="90%" y2="5%" />
              <line x1="78%" y1="30%" x2="65%" y2="8%" />
              <line x1="78%" y1="30%" x2="58%" y2="25%" />
              <line x1="78%" y1="30%" x2="62%" y2="52%" />
              <line x1="78%" y1="30%" x2="90%" y2="55%" />
              <path d="M 90% 5% L 65% 8% L 58% 25% L 62% 52% L 90% 55% Z" strokeWidth="0.5" strokeOpacity="0.1" />
            </g>
          </svg>
        </div>

        {/* HERO CONTENT */}
        <div className="max-w-5xl mx-auto pt-16 md:pt-20 px-6 md:px-12 pb-12 relative z-10 w-full">
          
          <h1 className="font-['Cormorant_Garamond',serif] text-[clamp(40px,7.5vw,84px)] text-white leading-[1.1] md:leading-[1.02] font-bold tracking-[-.01em] mb-6 max-w-[850px]">
            Legal strategy for founders<br className="hidden sm:block" />who want to <em className="text-[#C4912A] italic font-normal">move fast.</em>
          </h1>
          <p className="text-[15px] md:text-[16px] text-white/65 leading-[1.7] md:leading-[1.8] max-w-[520px] mb-9 font-light">
            Protecting founders and emerging businesses from 0 to 1
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-5 mb-16">
            <Link to="/services" className="w-full sm:w-auto text-center bg-[#C4912A] hover:bg-[#C4912A]/90 text-white py-[13px] px-[30px] text-[11px] md:text-[11.5px] font-bold tracking-[.1em] uppercase transition-all border border-[#C4912A] shadow-lg shadow-[#C4912A]/10">
              Our Practice Areas
            </Link>
            <Link to="/about" className="text-[12px] tracking-[.1em] uppercase text-white/70 font-bold flex items-center gap-2 cursor-pointer border-b border-white/20 pb-px hover:text-[#C4912A] hover:border-[#C4912A] transition-colors">
              Meet Sathwik <span className="text-[15px]">&#8594;</span>
            </Link>
          </div>

          {/* STATS SECTION */}
          <div className="flex flex-row border-t border-white/10 w-full overflow-x-auto no-scrollbar pt-2">
            <div className="py-5 pr-8 md:pr-12 mr-8 md:mr-12 border-r border-white/10 flex gap-3.5 items-baseline whitespace-nowrap">
              <div className="font-['Cormorant_Garamond',serif] text-[28px] md:text-[36px] text-white font-bold leading-none">{experienceYears}+</div>
              <div className="text-[11px] md:text-[12.5px] text-white/50 leading-[1.4] font-medium">years corporate legal and advisory experience</div>
            </div>
            
            <div className="py-5 pr-8 md:pr-12 mr-8 md:mr-12 border-r border-white/10 flex items-baseline whitespace-nowrap">
              <div className="font-['Cormorant_Garamond',serif] text-[28px] md:text-[36px] leading-none select-none" aria-hidden="true">&#8203;</div>
              <div className="text-[11px] md:text-[12.5px] text-white/50 leading-[1.4] font-medium">Founder focused</div>
            </div>
            
            <div className="py-5 flex gap-3.5 items-baseline whitespace-nowrap">
              <div className="font-['Cormorant_Garamond',serif] text-[28px] md:text-[36px] text-white font-bold leading-none">150+</div>
              <div className="text-[11px] md:text-[12.5px] text-white/50 leading-[1.4] font-medium">businesses across India</div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE SECTION */}
      <div className="bg-[#0E0B42] py-3 md:py-[18px] border-t border-white/5 relative overflow-hidden">
        <div className="animate-marquee items-center">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <React.Fragment key={i}>
              <span className="text-[10px] md:text-[11.5px] tracking-[.12em] uppercase text-white/55 font-bold whitespace-nowrap mx-4 md:mx-6" dangerouslySetInnerHTML={{ __html: item }}>
              </span>
              <span className="text-[#C4912A] text-[16px] md:text-[18px]">&middot;</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* WHY FCC SECTION */}
      <div className="bg-[#FAF8F4] selection:bg-[#0E0B42]/10 selection:text-[#0E0B42]">
        <div className="py-12 md:pt-[52px] md:pb-9 px-6 md:px-[52px] grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-10 items-baseline border-b border-[#0E0B42]/10">
          <span className="text-[10px] md:text-[11px] tracking-[.22em] uppercase text-[#C4912A] font-bold">Why FCC</span>
          <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(26px,4vw,40px)] text-[#0E0B42] font-bold leading-[1.2]">
            Built for businesses that move fast<br className="hidden md:block" />and need legal support that keeps up.
          </h2>
        </div>
        <div className="px-6 md:px-[52px]">
          {[
            { 
              n: "01", 
              t: "Built from the inside out", 
              b: "Most law firms have never worked inside a business. FCC is led by a lawyer who has &middot; which means advice accounts for how decisions actually get made.", 
              d: "In-house experience at growth-stage companies means Sathwik understands the operational context behind every legal question." 
            },
            { 
              n: "02", 
              t: "Accessible without the overhead", 
              b: "Serious legal help should not require a retainer with a large firm. FCC brings the same depth of counsel available when you need it.", 
              d: "Founders get direct access to senior counsel. Every matter is handled personally, from first brief to resolution." 
            },
            { 
              n: "03", 
              t: "Sector-specific recognition", 
              b: "Twelve years across SaaS, MedTech, and FinTech means FCC recognises the legal patterns that repeat within industries.", 
              d: "You spend less time explaining your business and more time getting advice that actually fits it. Domain familiarity is built-in." 
            },
            { 
              n: "04", 
              t: "Founder-first mindset", 
              b: "The goal is to help you move forward &middot; with a clear picture of the risk and a recommendation to act on it.", 
              d: "Legal counsel that helps you close the deal, make the hire, or resolve the dispute &middot; not one that finds reasons why you shouldn't." 
            }
          ].map((w, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-[56px_1fr_1fr] border-b border-[#0E0B42]/10 py-8 md:py-7 last:border-none">
              <div className="font-['Cormorant_Garamond',serif] text-[32px] md:text-[42px] text-[#0E0B42]/10 font-bold leading-none mb-4 md:mb-0 md:pt-1">{w.n}</div>
              <div className="md:pr-12 md:border-r border-[#0E0B42]/10 mb-6 md:mb-0">
                <div className="font-['Cormorant_Garamond',serif] text-[19px] md:text-[20px] text-[#0E0B42] font-bold mb-3 leading-[1.2]">{w.t}</div>
                <p className="text-[14px] md:text-[14.5px] text-[#0E0B42]/70 leading-[1.7] md:leading-[1.8]">{w.b}</p>
              </div>
              <div className="md:pl-12">
                <p className="text-[14px] md:text-[14.5px] text-[#0E0B42]/70 leading-[1.7] md:leading-[1.8]">{w.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CALL TO ACTION */}
      <div className="bg-[#0E0B42] py-16 md:py-14 px-6 md:px-[52px] flex flex-col md:flex-row items-start md:items-center justify-between gap-10 border-t border-white/5">
        <div className="w-full md:w-auto">
          <div className="font-['Cormorant_Garamond',serif] text-[clamp(28px,5vw,42px)] text-white font-bold leading-[1.2] mb-4">
            Have a matter in mind?<br /><em className="text-[#C4912A] italic font-normal">Let's talk.</em>
          </div>
          <p className="text-[14px] md:text-[14.5px] text-white/55 leading-[1.7] max-w-[480px]">No obligation. A short conversation is usually enough to understand whether FCC can help and how.</p>
        </div>
        <Link to="/contact" className="w-full md:w-auto text-center bg-[#C4912A] hover:bg-[#C4912A]/90 text-white py-4 px-10 text-[11px] md:text-[12px] font-bold tracking-[.1em] uppercase transition-all border border-[#C4912A] shadow-lg shadow-[#C4912A]/10">
          Get in Touch
        </Link>
      </div>
    </div>
  );
}