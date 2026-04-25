import React from 'react';
import logo from '@/assets/logo.png';

const BlogHeader = () => {
  return (
    <header className="w-full py-4 px-6 sticky top-0 z-50 shadow-md bg-gradient-to-r from-[#D4AF37] via-[#F2D472] to-[#AA8839]">
      <div className="max-w-7xl mx-auto flex items-center">
        <a href="/" className="block">
          <img 
            src={logo} 
            alt="Logo" 
            className="h-12 md:h-16 lg:h-20 w-auto object-contain transition-transform hover:scale-105 drop-shadow-sm" 
          />
        </a>
      </div>
    </header>
  );
};

export default BlogHeader;