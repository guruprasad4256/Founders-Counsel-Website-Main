import React, { JSX } from 'react';
import { Link } from 'react-router-dom';

export default function Home(): JSX.Element {
  const marqueeItems = [
    'Corporate Advisory',
    'Contracts & Commercial',
    'Transactions & Deals',
    'Real Estate',
    'Fractional GC',
    'Bengaluru &middot; Serving founders across India'
  ];

  return (
    <div className="pt-[72px] font-['Inter',sans-serif] bg-white overflow-hidden">
      {/* Custom Marquee Animation */}
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
        `}
      </style>

      {/* HERO SECTION */}
      <section className="bg-[#0B3B4A]">
        <div className="max-w-[1160px] mx-auto pt-[72px] px-6 md:px-12 pb-16">
          <p className="text-[10.5px] tracking-[.24em] uppercase text-white/50 font-semibold mb-6 flex items-center gap-3 before:content-[''] before:block before:w-7 before:h-px before:bg-white/30">
            Advocates &amp; Legal Advisors &nbsp;&middot;&nbsp; Bengaluru
          </p>
          <h1 className="font-['Cormorant_Garamond',serif] text-[clamp(44px,5.8vw,84px)] text-white leading-[1.02] font-normal tracking-[-.01em] mb-6 max-w-[820px]">
            Legal strategy for founders<br />who want to <em className="text-[#C4912A] italic">move fast.</em>
          </h1>
          <p className="text-[15px] text-white/65 leading-[1.8] max-w-[560px] mb-9 font-light">
            12+ years of in-house and private practice experience &middot; now available to the founders and businesses that need it most.
          </p>
          <div className="flex items-center gap-5 flex-wrap mb-12">
            <Link to="/services" className="bg-[#C4912A] hover:bg-[#a87822] text-white py-[13px] px-[30px] text-[11.5px] font-semibold tracking-[.1em] uppercase transition-colors inline-block">
              Our Practice Areas
            </Link>
            <Link to="/about" className="text-[12px] tracking-[.1em] uppercase text-white/70 font-medium flex items-center gap-2 cursor-pointer border-b border-white/20 pb-px hover:text-[#C4912A] transition-colors">
              Meet Sathwik <span className="text-[15px]">&#8594;</span>
            </Link>
          </div>

          {/* STATS SECTION - Strictly Single Line with Dividers and Correct Fonts */}
          <div className="flex flex-row border-t border-white/10 w-full overflow-x-auto md:overflow-x-visible no-scrollbar">
            <div className="py-5 pr-6 md:pr-12 mr-6 md:mr-12 border-r border-white/10 flex gap-3.5 items-baseline whitespace-nowrap">
              <div className="font-['Cormorant_Garamond',serif] text-[28px] md:text-[36px] text-white font-normal leading-none">12+</div>
              <div className="text-[10px] md:text-[11.5px] text-white/50 leading-[1.4] font-normal font-sans">Years in-house &middot; private practice</div>
            </div>
            <div className="py-5 pr-6 md:pr-12 mr-6 md:mr-12 border-r border-white/10 flex gap-3.5 items-baseline whitespace-nowrap">
              <div className="font-['Cormorant_Garamond',serif] text-[28px] md:text-[36px] text-white font-normal leading-none">5</div>
              <div className="text-[10px] md:text-[11.5px] text-white/50 leading-[1.4] font-normal font-sans">Core practice areas</div>
            </div>
            <div className="py-5 flex gap-3.5 items-baseline whitespace-nowrap">
              <div className="font-['Cormorant_Garamond',serif] text-[28px] md:text-[36px] text-white font-normal leading-none">Est. 2024</div>
              <div className="text-[10px] md:text-[11.5px] text-white/50 leading-[1.4] font-normal font-sans">Bengaluru &middot; serving founders across India</div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE SECTION - Moving Left */}
      <div className="bg-[#0B3B4A] py-[18px] border-t border-white/5 relative overflow-hidden">
        <div className="animate-marquee">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <React.Fragment key={i}>
              <span className="text-[11.5px] tracking-[.12em] uppercase text-white/55 font-medium whitespace-nowrap mx-6" dangerouslySetInnerHTML={{ __html: item }}>
              </span>
              <span className="text-[#C4912A] text-[18px]">&middot;</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* WHY FCC SECTION - Full Expanded Content from Image */}
      <div className="bg-[#FAF8F4]">
        <div className="py-12 md:pt-[52px] md:pb-9 px-6 md:px-[52px] grid grid-cols-1 md:grid-cols-[200px_1fr] gap-3 md:gap-10 items-baseline border-b border-[#0B3B4A]/10">
          <span className="text-[11px] tracking-[.22em] uppercase text-[#C4912A] font-semibold">Why FCC</span>
          <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(28px,3vw,40px)] text-[#0B3B4A] font-normal leading-[1.2]">
            Built for businesses that move fast<br />and need legal support that keeps up.
          </h2>
        </div>
        <div className="px-6 md:px-[52px]">
          {[
            { 
              n: "01", 
              t: "Built from the inside out", 
              b: "Most law firms have never worked inside a business. FCC is led by a lawyer who has &middot; which means advice accounts for how decisions actually get made, not just how contracts are supposed to work.", 
              d: "In-house experience at growth-stage companies means Sathwik understands the operational and commercial context behind every legal question &middot; including the ones you haven't asked yet." 
            },
            { 
              n: "02", 
              t: "Accessible without the overhead", 
              b: "Serious legal help should not require a retainer with a large firm. FCC brings the same depth of counsel &middot; available when you need it, without the billing structures that make quality advice feel out of reach.", 
              d: "Founders get direct access to senior counsel, not a junior associate. Every matter is handled by Sathwik personally, from first brief to resolution." 
            },
            { 
              n: "03", 
              t: "Sector-specific pattern recognition", 
              b: "Twelve years across SaaS, MedTech, manufacturing, and financial services means FCC recognises the legal patterns that repeat within industries and brings that understanding to your specific situation.", 
              d: "You spend less time explaining your business and more time getting advice that actually fits it. Domain familiarity is not a bonus &middot; it is built into every engagement." 
            },
            { 
              n: "04", 
              t: "Founder-first mindset", 
              b: "The goal is not to be the most cautious voice in the room. It is to help you move forward &middot; with a clear picture of the risk, a clear recommendation, and the support to act on it.", 
              d: "Legal counsel that helps you close the deal, make the hire, or resolve the dispute &middot; not one that finds reasons why you shouldn't." 
            }
          ].map((w, i) => (
            <div key={i} className="grid grid-cols-[44px_1fr] md:grid-cols-[56px_1fr_1fr] border-b border-[#0B3B4A]/10 py-7 last:border-none">
              <div className="font-['Cormorant_Garamond',serif] text-[42px] text-[#0B3B4A]/10 font-bold leading-none pt-1">{w.n}</div>
              <div className="md:pr-12 md:border-r border-[#0B3B4A]/10">
                <div className="font-['Cormorant_Garamond',serif] text-[20px] text-[#0B3B4A] font-medium mb-2.5 leading-[1.2]">{w.t}</div>
                <p className="text-[13.5px] text-[#5c5c5c] leading-[1.8]">{w.b}</p>
              </div>
              <div className="hidden md:block pl-12">
                <p className="text-[13.5px] text-[#5c5c5c] leading-[1.8]">{w.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CALL TO ACTION */}
      <div className="bg-[#0B3B4A] py-14 px-6 md:px-[52px] flex items-center justify-between gap-10 flex-wrap">
        <div>
          <div className="font-['Cormorant_Garamond',serif] text-[clamp(26px,3vw,42px)] text-white font-normal leading-[1.25] mb-4">
            Have a matter in mind?<br /><em className="text-[#C4912A] italic">Let's talk.</em>
          </div>
          <p className="text-[13.5px] text-white/55 leading-[1.7] max-w-[480px]">No obligation. A short conversation is usually enough to understand whether FCC can help and how.</p>
        </div>
        <Link to="/contact" className="bg-[#C4912A] hover:bg-[#a87822] text-white py-3.5 px-8 text-[12px] font-semibold tracking-[.1em] uppercase inline-block transition-colors">Get in Touch</Link>
      </div>
    </div>
  );
}