import React, { useState, JSX } from 'react';
import { Link } from 'react-router-dom';
import WorkRow from '../../components/sections/WorkRow'; 

export default function Work(): JSX.Element {
  // State to track which accordion is open (null means all closed)
  const [openRowIndex, setOpenRowIndex] = useState<number | null>(null);

  const toggleRow = (index: number) => {
    setOpenRowIndex(prevIndex => (prevIndex === index ? null : index));
  };

  // Brand Colors: 
  // Navy: #0E0B42
  // Gold: #C4912A

  const workData = [
    {
      tag: "Commercial Dispute — MedTech",
      title: "Vendor walkout mid-delivery, operations at risk",
      situation: "A MedTech startup's key vendor threatened to walk out mid-delivery, citing payment disputes and unclear contract terms. Operations were at risk of shutting down.",
      action: "Reviewed the existing vendor agreement, identified enforceable obligations on both sides, and led a structured renegotiation. Drafted a revised agreement with clear payment milestones and dispute resolution terms.",
      outcome: "Operations continued without interruption. Revised agreement in place within two weeks."
    },
    {
      tag: "Payment Dispute — B2B SaaS",
      title: "Large client refusing to pay, citing alleged service failures",
      situation: "A B2B SaaS company had a large client refuse to pay a substantial invoice, citing alleged service failures with no prior written notice.",
      action: "Analysed the service agreement, usage logs, and correspondence history. Built a documented position establishing service levels had been met, and issued a formal demand supported by contract clauses.",
      outcome: "Invoice paid in full. Matter resolved without litigation."
    },
    {
      tag: "Employment — Sensitive Exit",
      title: "Senior exit with IP and client relationship risk",
      situation: "A startup needed to exit a senior employee who had access to critical IP and client relationships. The exit had to be handled carefully to protect the business.",
      action: "Advised on the separation process, drafted a comprehensive settlement and release agreement, and ensured IP assignment and non-solicitation obligations were properly documented.",
      outcome: "Clean exit. IP protected. No post-exit disputes."
    }
  ];

  return (
    <div className="pt-[72px] font-['Inter',sans-serif]">
      {/* Hero Section */}
      <div className="bg-[#0E0B42] pt-12 pb-11 px-6 md:px-[52px]">
        <p className="text-[11px] tracking-[.16em] md:tracking-[.22em] uppercase text-[#C4912A] font-bold mb-5">
          Selected Matters
        </p>
        <h1 className="font-['Cormorant_Garamond',serif] text-[clamp(38px,5.5vw,70px)] text-white font-bold leading-none tracking-[-.01em]">
          Real matters.<br />
          <em className="text-[#C4912A] italic font-normal">Real outcomes.</em>
        </h1>
        <p className="text-[14px] text-white/60 mt-5 max-w-[500px] leading-[1.8] font-light">
          Details anonymised to protect client confidentiality.
        </p>
      </div>

      {/* Work List */}
      <div className="bg-white">
        {workData.map((work, index) => (
          <WorkRow 
            key={index}
            tag={work.tag}
            title={work.title}
            situation={work.situation}
            action={work.action}
            outcome={work.outcome}
            // Passing props to control exclusive toggle
            // Note: Ensure your WorkRow component accepts 'isOpen' and 'onClick' props
            isOpen={openRowIndex === index}
            onToggle={() => toggleRow(index)}
          />
        ))}
      </div>

      {/* CTA Section */}
      <div className="bg-[#0E0B42] py-14 px-6 md:px-[52px] flex items-center justify-between gap-10 flex-wrap border-t border-white/5">
        <div>
          <div className="font-['Cormorant_Garamond',serif] text-[clamp(26px,3vw,42px)] text-white font-bold leading-[1.25] mb-4">
            Have a matter that needs <em className="text-[#C4912A] italic font-normal">careful handling?</em>
          </div>
          <p className="text-[13.5px] text-white/55 leading-[1.7] max-w-[480px]">
            Every engagement starts with a conversation, not a commitment.
          </p>
        </div>
        <Link 
          to="/contact" 
          className="bg-[#C4912A] hover:bg-[#C4912A]/90 text-white py-3.5 px-8 text-[12px] font-bold tracking-[.1em] uppercase inline-block transition-colors border border-[#C4912A]"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
}