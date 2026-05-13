import React, { JSX } from 'react';
import { Link } from 'react-router-dom';
import profileUrl from '../../assets/SathwikFcc.png';

export default function Home(): JSX.Element {
  const marqueeItems = [
    'Corporate Advisory',
    'Contracts & Commercial',
    'Transactions & Deals',
    'Real Estate',
    'Fractional GC',
    'Bengaluru &middot; Serving founders across India'
  ];

  // 6 Founder Positions - Shifted HIGHER up the page
  const founders = [
    { id: 1, t: '30%', r: '22%', mt: '35%', mr: '15%', size: 'md:w-48 md:h-48 w-28 h-28', delay: '0s' }, // HUB
    { id: 2, t: '5%', r: '10%', mt: '5%', mr: '70%', size: 'md:w-36 md:h-36 w-20 h-20', delay: '1s' },
    { id: 3, t: '8%', r: '35%', mt: '12%', mr: '10%', size: 'md:w-28 md:h-28 w-16 h-16', delay: '2s' },
    { id: 4, t: '25%', r: '42%', mt: '28%', mr: '75%', size: 'md:w-24 md:h-24 w-14 h-14', delay: '0.5s' },
    { id: 5, t: '52%', r: '38%', mt: '60%', mr: '65%', size: 'md:w-32 md:h-32 w-18 h-18', delay: '1.5s' },
    { id: 6, t: '55%', r: '10%', mt: '65%', mr: '15%', size: 'md:w-40 md:h-40 w-24 h-24', delay: '2.5s' },
  ];

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
          @keyframes float {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            50% { transform: translateY(-10px) translateX(5px); }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          @keyframes linePulse {
            0% { stroke-dashoffset: 1000; opacity: 0.1; }
            50% { opacity: 0.4; }
            100% { stroke-dashoffset: 0; opacity: 0.1; }
          }
          .network-line {
            stroke-dasharray: 1000;
            animation: linePulse 12s linear infinite;
          }
        `}
      </style>

      {/* HERO SECTION */}
      <section className="bg-[#0B3B4A] relative min-h-[100vh] md:min-h-[850px] flex items-center overflow-hidden">
        
        {/* VISUAL NETWORK LAYER */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <svg className="absolute inset-0 w-full h-full hidden md:block opacity-40" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C4912A" stopOpacity="0" />
                <stop offset="50%" stopColor="#C4912A" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#C4912A" stopOpacity="0" />
              </linearGradient>
            </defs>
            <g stroke="url(#lineGrad)" strokeWidth="1" fill="none" className="network-line">
              {/* Radiating from Hub (Pos 1) to the 5 others */}
              <line x1="78%" y1="30%" x2="90%" y2="5%" />
              <line x1="78%" y1="30%" x2="65%" y2="8%" />
              <line x1="78%" y1="30%" x2="58%" y2="25%" />
              <line x1="78%" y1="30%" x2="62%" y2="52%" />
              <line x1="78%" y1="30%" x2="90%" y2="55%" />
              
              {/* Tightened perimeter connection */}
              <path d="M 90% 5% L 65% 8% L 58% 25% L 62% 52% L 90% 55% Z" strokeWidth="0.5" strokeOpacity="0.15" />
            </g>
          </svg>

          {founders.map((f) => (
            <div
              key={f.id}
              className="absolute animate-float opacity-30 md:opacity-100 transition-all duration-700"
              style={{
                top: window.innerWidth < 768 ? f.mt : f.t,
                right: window.innerWidth < 768 ? f.mr : f.r,
                animationDelay: f.delay,
              }}
            >
              <div className="relative">
                <div className="absolute inset-[-12px] rounded-full bg-[#C4912A]/20 blur-2xl animate-pulse" />
                <div className={`${f.size} rounded-full border-[1.5px] md:border-[2.5px] border-[#C4912A]/50 overflow-hidden relative shadow-[0_0_50px_rgba(196,145,42,0.3)]`}>
                  <div 
                    className="w-full h-full bg-cover bg-center grayscale scale-110" 
                    style={{ backgroundImage: `url(${profileUrl})` }} 
                  />
                  <div className="absolute inset-0 bg-[#C4912A]/5 mix-blend-overlay" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* HERO CONTENT */}
        <div className="max-w-[1440px] mx-auto pt-24 md:pt-[72px] px-6 md:px-12 pb-16 relative z-10 w-full">
          <p className="text-[9px] md:text-[10.5px] tracking-[.24em] uppercase text-white/50 font-semibold mb-6 flex items-center gap-3 before:content-[''] before:block before:w-5 md:before:w-7 before:h-px before:bg-white/30">
            Advocates &amp; Legal Advisors &nbsp;&middot;&nbsp; Bengaluru
          </p>
          <h1 className="font-['Cormorant_Garamond',serif] text-[clamp(40px,7.5vw,84px)] text-white leading-[1.1] md:leading-[1.02] font-normal tracking-[-.01em] mb-6 max-w-[850px]">
            Legal strategy for founders<br className="hidden sm:block" />who want to <em className="text-[#C4912A] italic">move fast.</em>
          </h1>
          <p className="text-[14px] md:text-[15px] text-white/65 leading-[1.7] md:leading-[1.8] max-w-[520px] mb-9 font-light">
            12+ years of in-house and private practice experience &middot; now available to the founders and businesses that need it most.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-5 mb-16">
            <Link to="/services" className="w-full sm:w-auto text-center bg-[#C4912A] hover:bg-[#a87822] text-white py-[13px] px-[30px] text-[11px] md:text-[11.5px] font-semibold tracking-[.1em] uppercase transition-colors">
              Our Practice Areas
            </Link>
            <Link to="/about" className="text-[12px] tracking-[.1em] uppercase text-white/70 font-medium flex items-center gap-2 cursor-pointer border-b border-white/20 pb-px hover:text-[#C4912A] transition-colors">
              Meet Sathwik <span className="text-[15px]">&#8594;</span>
            </Link>
          </div>

          {/* STATS SECTION - Strictly single line */}
          <div className="flex flex-row border-t border-white/10 w-full overflow-x-auto no-scrollbar pt-2">
            <div className="py-5 pr-8 md:pr-12 mr-8 md:mr-12 border-r border-white/10 flex gap-3.5 items-baseline whitespace-nowrap">
              <div className="font-['Cormorant_Garamond',serif] text-[28px] md:text-[36px] text-white leading-none">12+</div>
              <div className="text-[10px] md:text-[11.5px] text-white/50 leading-[1.4] font-sans">Years in-house &middot; private practice</div>
            </div>
            <div className="py-5 pr-8 md:pr-12 mr-8 md:mr-12 border-r border-white/10 flex gap-3.5 items-baseline whitespace-nowrap">
              <div className="font-['Cormorant_Garamond',serif] text-[28px] md:text-[36px] text-white leading-none">5</div>
              <div className="text-[10px] md:text-[11.5px] text-white/50 leading-[1.4] font-sans">Core practice areas</div>
            </div>
            <div className="py-5 flex gap-3.5 items-baseline whitespace-nowrap">
              <div className="font-['Cormorant_Garamond',serif] text-[28px] md:text-[36px] text-white leading-none">Est. 2024</div>
              <div className="text-[10px] md:text-[11.5px] text-white/50 leading-[1.4] font-sans">Bengaluru &middot; Serving India</div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE SECTION */}
      <div className="bg-[#0B3B4A] py-3 md:py-[18px] border-t border-white/5 relative overflow-hidden">
        <div className="animate-marquee">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <React.Fragment key={i}>
              <span className="text-[10px] md:text-[11.5px] tracking-[.12em] uppercase text-white/55 font-medium whitespace-nowrap mx-4 md:mx-6" dangerouslySetInnerHTML={{ __html: item }}>
              </span>
              <span className="text-[#C4912A] text-[16px] md:text-[18px]">&middot;</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* WHY FCC SECTION */}
      <div className="bg-[#FAF8F4]">
        <div className="py-12 md:pt-[52px] md:pb-9 px-6 md:px-[52px] grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-10 items-baseline border-b border-[#0B3B4A]/10">
          <span className="text-[10px] md:text-[11px] tracking-[.22em] uppercase text-[#C4912A] font-semibold">Why FCC</span>
          <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(26px,4vw,40px)] text-[#0B3B4A] font-normal leading-[1.2]">
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
            <div key={i} className="grid grid-cols-1 md:grid-cols-[56px_1fr_1fr] border-b border-[#0B3B4A]/10 py-8 md:py-7 last:border-none">
              <div className="font-['Cormorant_Garamond',serif] text-[32px] md:text-[42px] text-[#0B3B4A]/10 font-bold leading-none mb-4 md:mb-0 md:pt-1">{w.n}</div>
              <div className="md:pr-12 md:border-r border-[#0B3B4A]/10 mb-6 md:mb-0">
                <div className="font-['Cormorant_Garamond',serif] text-[19px] md:text-[20px] text-[#0B3B4A] font-medium mb-3 leading-[1.2]">{w.t}</div>
                <p className="text-[13px] md:text-[13.5px] text-[#5c5c5c] leading-[1.7] md:leading-[1.8]">{w.b}</p>
              </div>
              <div className="md:pl-12">
                <p className="text-[13px] md:text-[13.5px] text-[#5c5c5c] leading-[1.7] md:leading-[1.8]">{w.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CALL TO ACTION */}
      <div className="bg-[#0B3B4A] py-16 md:py-14 px-6 md:px-[52px] flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
        <div className="w-full md:w-auto">
          <div className="font-['Cormorant_Garamond',serif] text-[clamp(28px,5vw,42px)] text-white font-normal leading-[1.2] mb-4">
            Have a matter in mind?<br /><em className="text-[#C4912A] italic">Let's talk.</em>
          </div>
          <p className="text-[13px] md:text-[13.5px] text-white/55 leading-[1.7] max-w-[480px]">No obligation. A short conversation is usually enough to understand whether FCC can help and how.</p>
        </div>
        <Link to="/contact" className="w-full md:w-auto text-center bg-[#C4912A] hover:bg-[#a87822] text-white py-4 px-10 text-[11px] md:text-[12px] font-semibold tracking-[.1em] uppercase transition-colors">
          Get in Touch
        </Link>
      </div>
    </div>
  );
}