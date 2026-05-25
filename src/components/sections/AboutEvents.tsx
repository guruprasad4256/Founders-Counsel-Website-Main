import React, { useState, JSX } from 'react';

import event1_img1 from '../../assets/DSH-EChai1.jpeg';
import event1_img2 from '../../assets/DSH-EChai2.jpeg';
import event1_img3 from '../../assets/DSH-EChai3.jpeg';

// Only 1 image for Founder's Guild as requested
import event2_img1 from '../../assets/FoundersGuild.jpeg';

// 2. USE THE IMPORTED VARIABLES IN YOUR DATA
const eventsData = [
  {
    id: 1,
    role: 'PANELIST',
    images: [
      event1_img1,
      event1_img2,
      event1_img3
    ],
    context: 'EChai · Draper Startup House',
    title: 'Navigating Legal Milestones as a Founder',
    meta: 'Bengaluru',
    description: 'A panel discussion on the fundamentals every founder must get right — covering cash flow discipline, cap tables, ESOPs, and legal documentation. Organised by The Startup Zone as a free legal and compliance clinic for early-stage founders.',
    footer: 'With: Sharath Shyamasunder · Sandeep Kumar'
  },
  {
    id: 2,
    role: 'PARTICIPANT',
    images: [
      event2_img1
    ],
    context: 'The Startup Zone (TSZ)',
    title: "Founder's Guild 2026",
    meta: 'Bengaluru',
    description: 'A gathering of founders, operators, and advisors — focused on collaboration, connections, and building with intention. Organised by The Startup Zone as part of their 10-year milestone in the Bengaluru startup ecosystem.',
    footer: null
  }
];

export default function SpeakingEvents(): JSX.Element {
  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentGallery, setCurrentGallery] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Lightbox Controls
  const openLightbox = (images: string[], startIndex: number = 0) => {
    setCurrentGallery(images);
    setCurrentIndex(startIndex);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === currentGallery.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? currentGallery.length - 1 : prev - 1));
  };

  return (
    <div className="bg-white py-16 px-6 md:px-[52px] font-['Inter',sans-serif] w-full">
      
      {/* HEADER */}
      <div className="mb-12">
        <span className="text-[11px] tracking-[.18em] uppercase text-[#C4912A] font-bold block mb-4">
          Speaking & Events
        </span>
        <h2 className="font-['Cormorant_Garamond',serif] text-[clamp(32px,4vw,46px)] text-[#0E0B42] font-bold leading-[1.1]">
          On stage & in conversation.
        </h2>
      </div>

      {/* EVENT CARDS */}
      <div className="space-y-8">
        {eventsData.map((event) => (
          <div key={event.id} className="flex flex-col md:flex-row border border-[#0E0B42]/10 bg-white">
            
            {/* LEFT: Image Container with Gallery Options Below */}
            <div className="w-full md:w-[340px] shrink-0 bg-[#F5F4F0] flex flex-col border-b md:border-b-0 md:border-r border-[#0E0B42]/10">
              
              {/* Main Image Trigger */}
              <div 
                className="relative flex-grow min-h-[260px] cursor-pointer group"
                onClick={() => openLightbox(event.images, 0)}
              >
                {/* Role Badge */}
                <div className="absolute top-4 left-0 bg-[#C4912A] text-white text-[10px] font-bold tracking-[.15em] px-3 py-1.5 uppercase z-10 shadow-sm">
                  {event.role}
                </div>
                
                {/* Main Thumbnail Image (Covering full area, no gaps) */}
                <img 
                  src={event.images[0]} 
                  alt={event.title} 
                  className="w-full h-full absolute inset-0 object-cover transition-opacity duration-300 group-hover:opacity-80"
                />
              </div>

              {/* Sleek Gallery Image Options Below Main Image (If multiple exist) */}
              {/* REDUCED GAP (gap-1.5) AND PADDING (p-2) HERE */}
              {event.images.length > 1 && (
                <div className="flex gap-1.5 p-2 bg-[#F5F4F0] border-t border-[#0E0B42]/5 overflow-x-auto scrollbar-hide relative z-10">
                  {event.images.map((img, idx) => (
                    <div 
                      key={idx}
                      className="w-14 h-14 shrink-0 cursor-pointer rounded overflow-hidden relative group bg-[#EBEAE5] shadow-sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        openLightbox(event.images, idx);
                      }}
                    >
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-[#0E0B42]/0 group-hover:bg-[#0E0B42]/10 transition-colors duration-300 z-10" />
                      
                      {/* Small Thumbnail (Covered for neat square appearance) */}
                      <img 
                        src={img} 
                        alt={`Gallery option ${idx + 1}`} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* RIGHT: Content */}
            <div className="p-6 md:p-8 flex flex-col justify-center flex-grow">
              <div className="text-[10px] tracking-[.15em] uppercase text-[#C4912A] font-bold mb-3">
                {event.context}
              </div>
              
              <h3 className="font-['Cormorant_Garamond',serif] text-[26px] text-[#0E0B42] font-bold leading-[1.2] mb-2">
                {event.title}
              </h3>
              
              <div className="text-[13px] text-[#0E0B42]/50 mb-5">
                {event.meta}
              </div>
              
              <p className="text-[14.5px] leading-[1.7] text-[#0E0B42]/75 mb-6 max-w-[800px]">
                {event.description}
              </p>
              
              {event.footer && (
                <div className="mt-auto pt-5 border-t border-[#0E0B42]/10 text-[13px] text-[#0E0B42]/60">
                  <span className="font-semibold text-[#0E0B42]">With:</span> {event.footer.replace('With: ', '')}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* LIGHTBOX MODAL */}
      {lightboxOpen && currentGallery.length > 0 && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50"
            onClick={closeLightbox}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          {/* Previous Button - Only show if more than 1 image */}
          {currentGallery.length > 1 && (
            <button 
              className="absolute left-4 md:left-12 p-3 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all z-50"
              onClick={prevImage}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
          )}

          {/* Current Image (Contained in Lightbox) */}
          <div className="max-w-6xl max-h-[75vh] relative flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img 
              src={currentGallery[currentIndex]} 
              alt="Gallery Preview" 
              className="w-auto h-auto max-w-full max-h-[75vh] object-contain select-none"
            />
          </div>

          {/* Next Button - Only show if more than 1 image */}
          {currentGallery.length > 1 && (
            <button 
              className="absolute right-4 md:right-12 p-3 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all z-50"
              onClick={nextImage}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          )}

          {/* Lightbox Gallery Thumbnail Strip Below */}
          {/* REDUCED GAP HERE TOO */}
          {currentGallery.length > 1 && (
            <div 
              className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 px-4 z-50"
              onClick={(e) => e.stopPropagation()}
            >
              {currentGallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-14 h-14 rounded overflow-hidden border-2 transition-all duration-200 ${
                    currentIndex === idx ? 'border-white opacity-100 scale-110' : 'border-transparent opacity-50 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover bg-black" />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
      
    </div>
  );
}