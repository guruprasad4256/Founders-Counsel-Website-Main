import React, { useState, JSX } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../../components/sections/ServiceCard';

const servicesData = [
  {
    num: "01 — Corporate Advisory & Structuring",
    title: "Getting the foundation right.",
    sub: "Entity setup · Shareholder agreements · Governance · Restructuring",
    desc1: "The structure of your company shapes everything downstream from how investors come in to how founders exit. FCC advises on entity setup, shareholder agreements, governance, and restructuring with the goal of building something that holds up as the business grows.",
    desc2: "Whether you are setting up for the first time or untangling structures that no longer serve the business, the foundation matters more than most founders realise until something breaks.",
    tags: ["Private Limited Companies", "LLPs", "Shareholder Agreements", "ESOP Structuring", "Board Governance"]
  },
  {
    num: "02 — Contracts & Commercial Agreements",
    title: "Agreements that reflect what you actually agreed.",
    sub: "Drafting · Review · Negotiation · Dispute prevention",
    desc1: "Contracts are the operating layer of any business. FCC drafts, reviews, and negotiates commercial agreements with a focus on clarity, enforceability, and protecting your interests  without making it impossible to do business.",
    desc2: "A well-drafted contract is the cheapest form of dispute resolution. Most problems that end up in litigation started with a contract that didn't say what both sides thought it did.",
    tags: ["Vendor Agreements", "Client MSAs", "SaaS Contracts", "Employment Agreements", "NDAs"]
  },
  {
    num: "03 — Transactions & Deals",
    title: "Deals done right.",
    sub: "Fundraising · Acquisitions · JVs · Term sheets",
    desc1: "Whether you are raising a round, acquiring a business, or entering a joint venture, the legal work around the deal determines how clean and durable the outcome is. FCC supports founders through the full transaction lifecycle from term sheet review to closing documentation.",
    desc2: "Deals have momentum. FCC is built to move with that momentum, not against it while making sure the protections are actually in place.",
    tags: ["Seed & Pre-Series A", "Term Sheet Review", "SHA / SSA Drafting", "Due Diligence Support", "Asset Acquisitions"]
  },
  {
    num: "04 — Real Estate & Premises",
    title: "Premises without the problems.",
    sub: "Leases · Warehouse agreements · Property documentation",
    desc1: "Office leases, warehouse agreements, and property acquisitions involve more legal risk than most businesses expect. FCC reviews, drafts, and negotiates real estate documentation with a focus on protecting your operational and financial interests.",
    desc2: "The fine print in a commercial lease often comes back in the form of locked-in costs, unclear exit clauses, or liability for fixtures. FCC catches it before you sign.",
    tags: ["Commercial Leases", "Leave & Licence", "Warehouse & Logistics", "Property Due Diligence"]
  },
  {
    num: "05 — Fractional General Counsel",
    title: "Senior legal leadership, without the full-time hire.",
    sub: "Embedded counsel · Strategic advisory · Ongoing support",
    desc1: "For businesses that need more than occasional advice but are not ready for a full-time in-house counsel, FCC's Fractional GC model provides embedded legal leadership. Sathwik works alongside your team, understands your business in depth, and gives you the kind of counsel that used to require a full-time hire.",
    desc2: "This is not a retainer for quick queries. It is a model for businesses that want legal thinking embedded in how they operate available at the table, not just when something goes wrong.",
    tags: ["Monthly Engagement", "Strategic Legal Review", "Contract Calendar", "HR Legal Support"]
  }
];

export default function ServicesPage(): JSX.Element {
  const [openCardIndex, setOpenCardIndex] = useState<number | null>(null);

  const toggleCard = (index: number): void => {
    setOpenCardIndex(openCardIndex === index ? null : index);
  };

  return (
    <div className="pt-[72px] font-['Inter',sans-serif]">
      <div className="bg-[#052028] py-12 md:py-[52px] px-6 md:px-[52px]">
        <p className="text-[11px] tracking-[.22em] uppercase text-[#C4912A] font-semibold mb-5">Practice Areas</p>
        <h1 className="font-['Cormorant_Garamond',serif] text-[clamp(38px,5.5vw,70px)] text-white font-normal leading-none tracking-[-.01em]">
          Five practice areas.<br /><em className="text-[#C4912A] italic">One standard of work.</em>
        </h1>
        <p className="text-[14px] text-white/60 mt-5 max-w-[540px] leading-[1.8]">Each service reflects the real legal needs of businesses at the stage FCC is built to serve.</p>
      </div>
      <div className="bg-white max-w-[1160px] mx-auto py-12 px-6 md:px-12">
        {servicesData.map((svc, idx) => (
          <ServiceCard 
            key={idx} 
            {...svc} 
            isOpen={openCardIndex === idx} 
            onToggle={() => toggleCard(idx)} 
          />
        ))}
      </div>
      <div className="bg-[#FAF8F4] py-12 px-6 md:px-[52px]">
        <div className="pb-9">
          <span className="text-[11px] tracking-[.22em] uppercase text-[#C4912A] font-semibold block mb-2">Engagement</span>
          <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(28px,3vw,40px)] text-[#0B3B4A] font-normal leading-[1.2]">Four models. One standard of work.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#DDD8D0] mt-10">
          <div className="bg-[#FAF8F4] p-7"><div className="font-['Cormorant_Garamond',serif] text-[36px] text-[#0B3B4A]/10 font-bold mb-2.5">01</div><div className="font-['Cormorant_Garamond',serif] text-[21px] text-[#0B3B4A] font-medium mb-2.5">Matter-Specific Engagement</div><p className="text-[13.5px] text-[#5c5c5c] leading-[1.75]">A specific matter a contract to review, a dispute to resolve, a deal to close. Scoped, priced, and delivered start to finish.</p></div>
          <div className="bg-[#FAF8F4] p-7"><div className="font-['Cormorant_Garamond',serif] text-[36px] text-[#0B3B4A]/10 font-bold mb-2.5">02</div><div className="font-['Cormorant_Garamond',serif] text-[21px] text-[#0B3B4A] font-medium mb-2.5">Fractional GC</div><p className="text-[13.5px] text-[#5c5c5c] leading-[1.75]">An ongoing engagement where Sathwik functions as your embedded general counsel available for day-to-day queries, reviews, and strategic decisions. Billed monthly.</p></div>
          <div className="bg-[#FAF8F4] p-7"><div className="font-['Cormorant_Garamond',serif] text-[36px] text-[#0B3B4A]/10 font-bold mb-2.5">03</div><div className="font-['Cormorant_Garamond',serif] text-[21px] text-[#0B3B4A] font-medium mb-2.5">Transaction Support</div><p className="text-[13.5px] text-[#5c5c5c] leading-[1.75]">Full-cycle support for a fundraise, acquisition, or significant commercial deal from term sheet to closing.</p></div>
          <div className="bg-[#FAF8F4] p-7"><div className="font-['Cormorant_Garamond',serif] text-[36px] text-[#0B3B4A]/10 font-bold mb-2.5">04</div><div className="font-['Cormorant_Garamond',serif] text-[21px] text-[#0B3B4A] font-medium mb-2.5">Legal Audit &amp; Review</div><p className="text-[13.5px] text-[#5c5c5c] leading-[1.75]">A structured review of your contracts and legal position identifying risk before it surfaces. Useful before a fundraise or significant new engagement.</p></div>
        </div>
      </div>
      <div className="bg-[#0B3B4A] py-14 px-6 md:px-[52px] flex items-center justify-between gap-10 flex-wrap">
        <div>
          <div className="font-['Cormorant_Garamond',serif] text-[clamp(26px,3vw,42px)] text-white font-normal leading-[1.25] mb-4">
            Not sure which model fits?<br /><em className="text-[#C4912A] italic">Let's find out.</em>
          </div>
          <p className="text-[13.5px] text-white/55 leading-[1.7] max-w-[480px]">A short conversation is usually enough to identify the right starting point.</p>
        </div>
        <Link to="/contact" className="bg-[#C4912A] hover:bg-[#a87822] text-white py-3.5 px-8 text-[12px] font-semibold tracking-[.1em] uppercase inline-block transition-colors">Get in Touch</Link>
      </div>
    </div>
  );
}