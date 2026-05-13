import React, { JSX } from 'react';

export default function Contact(): JSX.Element {
  // Brand Colors: 
  // Navy: #0E0B42
  // Gold: #C4912A

  return (
    <div className="pt-[72px] font-['Inter',sans-serif]">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[calc(100vh-72px)]">
        
        {/* Left Side: Info */}
        <div className="bg-[#0E0B42] py-16 px-6 md:py-[80px] md:px-[56px] flex flex-col justify-between">
          <div>
            <p className="text-[11px] tracking-[.22em] uppercase text-[#C4912A] font-bold mb-6">
              Get in Touch
            </p>
            <h1 className="font-['Cormorant_Garamond',serif] text-[clamp(32px,4vw,54px)] text-white font-bold leading-[1.15] mb-5">
              Let's talk about<br />
              <em className="text-[#C4912A] italic font-normal">your matter.</em>
            </h1>
            <p className="text-[14px] text-white/60 leading-[1.8] max-w-[360px] font-light">
              No commitment required. A short conversation is usually enough to understand whether FCC can help and how.
            </p>
            
            <div className="mt-[52px] flex flex-col gap-6">
              <div>
                <div className="text-[10px] tracking-[.2em] uppercase text-[#C4912A] font-bold mb-1.5">Email</div>
                <div className="text-[14px] text-white/80 font-medium">sathwik@founderscounsel.co</div>
              </div>
              <div>
                <div className="text-[10px] tracking-[.2em] uppercase text-[#C4912A] font-bold mb-1.5">Phone</div>
                <div className="text-[14px] text-white/80 font-medium">+91 98450 00000</div>
              </div>
              <div>
                <div className="text-[10px] tracking-[.2em] uppercase text-[#C4912A] font-bold mb-1.5">Office</div>
                <div className="text-[14px] text-white/80 font-medium">Bengaluru, Karnataka, India</div>
              </div>
            </div>
          </div>
          
          <p className="text-[11px] text-white/30 leading-[1.7] border-t border-white/10 pt-5 mt-[52px] md:mt-auto">
            The Bar Council of India does not permit advocates to advertise or solicit. By submitting this form, you confirm you are reaching out of your own accord.
          </p>
        </div>
        
        {/* Right Side: Form */}
        <div className="bg-[#FAF8F4] py-16 px-6 md:py-[80px] md:px-[56px]">
          <p className="text-[11px] tracking-[.2em] uppercase text-[#C4912A] font-bold mb-9">
            Send a Message
          </p>
          <form className="flex flex-col gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="text-[11px] tracking-[.1em] uppercase text-[#0E0B42]/60 font-bold block mb-2">Your Name</label>
                <input 
                  type="text" 
                  className="w-full p-3 md:py-3 md:px-4 bg-white border border-[#0E0B42]/10 text-[13.5px] text-[#0E0B42] font-['Inter',sans-serif] outline-none transition-colors duration-200 focus:border-[#0E0B42] appearance-none" 
                  placeholder="Full name" 
                />
              </div>
              <div>
                <label className="text-[11px] tracking-[.1em] uppercase text-[#0E0B42]/60 font-bold block mb-2">Company / Organisation</label>
                <input 
                  type="text" 
                  className="w-full p-3 md:py-3 md:px-4 bg-white border border-[#0E0B42]/10 text-[13.5px] text-[#0E0B42] font-['Inter',sans-serif] outline-none transition-colors duration-200 focus:border-[#0E0B42] appearance-none" 
                  placeholder="Optional" 
                />
              </div>
            </div>
            
            <div>
              <label className="text-[11px] tracking-[.1em] uppercase text-[#0E0B42]/60 font-bold block mb-2">Email Address</label>
              <input 
                type="email" 
                className="w-full p-3 md:py-3 md:px-4 bg-white border border-[#0E0B42]/10 text-[13.5px] text-[#0E0B42] font-['Inter',sans-serif] outline-none transition-colors duration-200 focus:border-[#0E0B42] appearance-none" 
                placeholder="your@email.com" 
              />
            </div>
            
            <div>
              <label className="text-[11px] tracking-[.1em] uppercase text-[#0E0B42]/60 font-bold block mb-2">Nature of Matter</label>
              <select className="w-full p-3 md:py-3 md:px-4 bg-white border border-[#0E0B42]/10 text-[13.5px] text-[#0E0B42] font-['Inter',sans-serif] outline-none transition-colors duration-200 focus:border-[#0E0B42] appearance-none cursor-pointer">
                <option value="">Select an area</option>
                <option>Corporate Advisory &amp; Structuring</option>
                <option>Contracts &amp; Commercial Agreements</option>
                <option>Transactions &amp; Deals</option>
                <option>Real Estate &amp; Premises</option>
                <option>Fractional GC</option>
                <option>Other / Not Sure</option>
              </select>
            </div>
            
            <div>
              <label className="text-[11px] tracking-[.1em] uppercase text-[#0E0B42]/60 font-bold block mb-2">Brief Description</label>
              <textarea 
                className="w-full p-3 md:py-3 md:px-4 bg-white border border-[#0E0B42]/10 text-[13.5px] text-[#0E0B42] font-['Inter',sans-serif] min-h-[120px] resize-y outline-none transition-colors duration-200 focus:border-[#0E0B42] appearance-none" 
                placeholder="Tell us briefly what you are dealing with. Plain English works fine."
              ></textarea>
            </div>
            
            <button 
              className="bg-[#C4912A] hover:bg-[#C4912A]/90 text-white border-none py-[15px] text-[12px] font-bold tracking-[.12em] uppercase cursor-pointer w-full transition-all mt-2 shadow-lg shadow-[#C4912A]/10" 
              type="button"
            >
              Send Message
            </button>
            
            <p className="text-[11.5px] text-[#0E0B42]/40 leading-[1.6] italic">
              By submitting, you confirm you are contacting us voluntarily and without solicitation, in accordance with Bar Council of India Rules.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}