import React from 'react';

export default function MeetingScheduler() {
  const meetingUrl = "https://meet.brevo.com/kaliq-media-blr/borderless?l=30-minute-meeting";

  // Brand Colors: 
  // Navy: #0E0B42
  // Gold: #C4912A

  return (
    <section className="w-full min-h-[90dvh] flex flex-col items-center justify-center bg-[#0E0B42] font-['Inter',sans-serif] pt-28 pb-28 px-6 selection:bg-[#C4912A]/30">
      
      {/* Optional Header to match your site's aesthetic */}
      <div className="text-center mb-10 shrink-0">
        <span className="text-[10px] uppercase tracking-[0.4em] text-[#C4912A] font-semibold mb-3 block">
          Founder's Counsel
        </span>
        <h2 className="font-['Cormorant_Garamond',serif] text-4xl md:text-5xl font-bold text-white tracking-tight">
          Secure your <span className="text-[#C4912A] italic">time.</span>
        </h2>
      </div>

      <div className="w-full max-w-5xl relative group">
        {/* Brand Glow Effect behind the scheduler */}
        <div className="absolute -inset-1 bg-gradient-to-r from-[#C4912A] to-[#0E0B42] rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
        
        {/* The Scheduler Iframe */}
        <iframe 
          src={meetingUrl} 
          width="100%"
          height="650px" 
          // Refined container styling using brand colors
          className="relative w-full bg-white rounded-xl shadow-2xl border border-[#C4912A]/20 overflow-hidden" 
          style={{ 
            border: 'none', 
          }}
          title="Meeting Scheduler"
        />
      </div>

      {/* Subtle footer note */}
      <p className="mt-8 text-white/30 text-xs tracking-widest uppercase opacity-50">
        Secure Encryption • Instant Confirmation
      </p>
    </section>
  );
}