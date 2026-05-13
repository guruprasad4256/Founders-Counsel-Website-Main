import React, { JSX, useState } from 'react';
import logoUrl from '../../assets/FCCLogo.png';

export default function Disclaimer(): JSX.Element | null {
  const [show, setShow] = useState<boolean>(true);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-[#0E0B42]/95 z-[9999] flex items-center justify-center p-6">
      <div className="bg-white max-w-[560px] w-full p-6 md:p-12 border-t-[3px] border-[#0E0B42]">
        
        {/* Logo and Brand Section */}
        <div className="font-['Cormorant_Garamond',serif] text-[18px] font-semibold text-[#0E0B42] tracking-[.04em] mb-8 flex items-center gap-3">
          <img src={logoUrl} alt="FCC" className="h-[44px] w-auto" />
          <div>Founder's Counsel <span className="text-[#C4912A]">&amp; Co</span></div>
        </div>

        <h3 className="font-['Cormorant_Garamond',serif] text-[22px] text-[#0E0B42] mb-4">Disclaimer</h3>
        
        <p className="text-[12.5px] leading-[1.9] text-[#0E0B42]/80 mb-4">
          The Bar Council of India does not permit advertisement or solicitation by advocates in any form or manner. By accessing this website, you acknowledge and confirm that you are seeking information relating to Founder's Counsel &amp; Co of your own accord and that there has been no form of solicitation, advertisement or inducement.
        </p>
        
        <p className="text-[12.5px] leading-[1.9] text-[#0E0B42]/80 mb-5">
          The content of this website is for informational purposes only and should not be interpreted as soliciting or advertisement. No material or information provided on this website should be construed as legal advice.
        </p>

        {/* New Implied Consent Text */}
        <p className="text-[11px] italic text-[#0E0B42]/60 leading-[1.7] mb-7 text-center">
          By clicking the button below, you acknowledge that you have read and understood the above, and are seeking information voluntarily without solicitation.
        </p>

        <button 
          className="bg-[#0E0B42] hover:bg-[#0E0B42]/90 text-white border-none py-[14px] px-8 text-[11.5px] font-semibold tracking-[.12em] uppercase cursor-pointer w-full transition-colors font-['Inter',sans-serif]"
          onClick={() => setShow(false)}
        >
          I Agree & Proceed to Website
        </button>

      </div>
    </div>
  );
}