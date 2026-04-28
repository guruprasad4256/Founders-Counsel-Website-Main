import React from 'react';

export default function MeetingScheduler() {
  // Extracting the URL from your snippet:
  // Note: I used 'sathwik-putta' as you requested previously. 
  // If that link is not active yet, change it back to 'kaliq-media-blr'.
  const meetingUrl = "https://meet.brevo.com/kaliq-media-blr/borderless?l=30-minute-meeting";

  return (
    <section className="w-full min-h-[90dvh] flex flex-col items-center justify-center bg-black font-poppins py-12 px-6 selection:bg-[#D4AF37]/30">
      
      {/* Optional Header to match your site's aesthetic */}
      <div className="text-center mb-10 shrink-0">
        <span className="text-[10px] uppercase tracking-[0.4em] text-[#D4AF37] font-semibold mb-3 block">
          Founders Counsel
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          Secure your <span className="text-[#D4AF37] italic">time.</span>
        </h2>
      </div>

      <div className="w-full max-w-5xl relative group">
        {/* Glow Effect behind the scheduler */}
        <div className="absolute -inset-1 bg-gradient-to-r from-gray-500 to-gray-300 rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
        
        {/* The Scheduler Iframe */}
        <iframe 
          src={meetingUrl} 
          width="100%"
          height="650px" 
          // Your requested Grey Gradient styling
          className="relative w-full bg-gradient-to-br from-slate-50 via-zinc-100 to-gray-300 rounded-xl shadow-2xl border border-white/20 overflow-hidden" 
          style={{ 
            border: 'none', 
          }}
          title="Meeting Scheduler"
        />
      </div>

      {/* Subtle footer note */}
      <p className="mt-8 text-gray-500 text-xs tracking-widest uppercase opacity-50">
        Secure Encryption • Instant Confirmation
      </p>
    </section>
  );
}