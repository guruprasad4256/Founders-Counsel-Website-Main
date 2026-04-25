import React from 'react';
import logo from '../assets/logo.png';

const BlogHeader = () => {
  return (
    <header className="w-full border-b border-[#1C1052] py-4 px-6 bg-[#0A0520] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center">
        <a href="/" className="block">
          <img 
            src={logo} 
            alt="Logo" 
            className="h-8 md:h-10 w-auto object-contain transition-transform hover:scale-105" 
          />
        </a>
      </div>
    </header>
  );
};

export default BlogHeader;