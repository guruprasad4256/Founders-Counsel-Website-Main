import React from 'react';
import logo from '@/assets/FounderCounselLogo.png';

const BlogHeader = () => {
  return (
    <header className="w-full py-4 px-6 sticky top-0 z-50 bg-black border-b border-white/5 shadow-2xl">
      <div className="max-w-7xl mx-auto flex items-center">
        <a href="/" className="block">
          <img 
            src={logo} 
            alt="Founder's Counsel Logo" 
            // We removed drop-shadow to keep edges sharp
            // added transform-gpu to force high-quality rendering
            className="h-20 md:h-24 lg:h-24 w-auto transition-transform duration-300 hover:scale-[1.02] transform-gpu will-change-transform" 
            style={{ 
              imageRendering: 'auto', // Ensures standard high-quality interpolation
              WebkitFontSmoothing: 'antialiased' 
            }}
          />
        </a>
      </div>
    </header>
  );
};

export default BlogHeader;