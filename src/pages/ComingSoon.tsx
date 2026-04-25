import React from 'react';
import { motion } from 'framer-motion';

// Ensure the path matches your actual file location
import logo from '@/assets/logo.png'; 

const ComingSoon: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#000000] text-white font-poppins flex flex-col items-center justify-center px-6 relative overflow-hidden">
      
      {/* Background Decorative Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Content */}
      <div className="text-center z-10">
        
        {/* Logo Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8 flex justify-center"
        >
          <div className="relative group">
             {/* Glowing backdrop for the logo */}
             <div className="absolute inset-0 bg-[#D4AF37] blur-3xl opacity-10 rounded-full"></div>
             
             {/* Logo Image */}
             <img 
                src={logo} 
                alt="Logo" 
                className="relative h-24 md:h-32 w-auto object-contain" 
             />
          </div>
        </motion.div>

        {/* Minimalist Heading */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h1 className="text-6xl md:text-8xl font-black tracking-[0.15em] uppercase">
            Coming <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#D4AF37] to-[#8c7324]">Soon</span>
          </h1>
          
          <div className="mt-4 flex items-center justify-center gap-4">
            <div className="h-[1px] w-12 bg-neutral-800"></div>
            <p className="text-[10px] uppercase tracking-[0.5em] text-gray-500 font-bold">
              Stay Tuned
            </p>
            <div className="h-[1px] w-12 bg-neutral-800"></div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Progress Line at Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-neutral-900">
        <motion.div 
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 3, ease: "easeInOut" }}
          className="h-full bg-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.5)]"
        />
      </div>
    </div>
  );
};

export default ComingSoon;