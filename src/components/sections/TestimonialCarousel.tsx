import React, { useState, useEffect, JSX } from 'react';

interface Testimonial {
  quote: string;
  who: string;
  co: string;
  li: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Sathwik brought not only strong legal expertise but also a calm, solutions-oriented approach that made a real difference during critical negotiations. His ability to negotiate favourable terms for us - even without a business background - he quickly grasped the commercial context, aligned legal strategy with our goals, and consistently protected our interests with clarity and confidence.",
    who: "Muki Regunathan",
    co: "Legal Counsel, Pepper Square",
    li: "✓ Recommended on LinkedIn"
  },
  {
    quote: "Working with Sathwik was truly an outstanding experience. He treated our case as if it were his own, investing his time, energy, and expertise far beyond what I expected. His knowledge of corporate law is deep and his advice consistently struck the right balance between legal soundness and practical outcomes. A steadfast advocate who navigated every challenge confidently.",
    who: "Keya Shukla",
    co: "Growth Enabler, Finkraft",
    li: "✓ Recommended on LinkedIn"
  },
  {
    quote: "Sathwik is one of the most curious and pragmatic minds I've come across. His ability to dissect a problem statement and approach a solution from multiple directions has given us a leg up in many complicated situations. He has exemplary legal acumen that goes hand in hand with sound business and strategic inputs. His team is detail-oriented, deadline-driven and adheres strictly to their code of ethics.",
    who: "Nithin Muralidhar",
    co: "Director, PE Systems Pvt Ltd",
    li: "✓ Recommended on LinkedIn"
  },
  {
    quote: "We have utilised his services on multiple occasions, and he has consistently been prompt and solution-oriented in addressing our requirements. His support was instrumental in helping us recover unpaid dues from our client. Sathwik is prompt, diligent, and highly knowledgeable. I highly recommend him to anyone seeking reliable and professional legal support.",
    who: "Nitin Prabhakar",
    co: "Founder & CEO, Entrepreneur & HR Strategist",
    li: "✓ Recommended on LinkedIn"
  },
  {
    quote: "Sathwik played a very crucial role while we were scaling the new business. Every inch of detail was very precise and formulated for each case. He understood the requirements very well and tailor-made the legal process for us in a very smooth way. He made himself available for all-time support and is a good advisor for all our business legal matters.",
    who: "Tulika Nandy",
    co: "HR, Serko | ex-Cure.Fit",
    li: "✓ Recommended on LinkedIn"
  },
  {
    quote: "Sathwik has been a great support, offering clear, thorough, and timely legal guidance. His expertise and attention to detail made a real difference. He brings humility and a collaborative approach to discussions which allows you to share and express your thoughts candidly. I strongly recommend Sathwik for any legal matters.",
    who: "Umesh Ponnan",
    co: "HR Leader & Independent Consultant",
    li: "✓ Recommended on LinkedIn"
  }
];

export default function TestimonialCarousel(): JSX.Element {
  const [cur, setCur] = useState<number>(0);
  const [paused, setPaused] = useState<boolean>(false);

  // BRAND COLORS:
  // Navy: #0E0B42
  // Gold: #C4912A

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setCur((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [paused]);

  const goTo = (i: number): void => setCur(i);

  return (
    <div 
      className="relative overflow-hidden mt-11 font-['Inter',sans-serif]" 
      onMouseEnter={() => setPaused(true)} 
      onMouseLeave={() => setPaused(false)}
    >
      <div 
        className="flex transition-transform duration-600 ease-[cubic-bezier(.4,0,.2,1)]" 
        style={{ transform: `translateX(-${cur * 100}%)` }}
      >
        {testimonials.map((t, idx) => (
          <div className="min-w-full px-1 box-border" key={idx}>
            <p className="font-['Cormorant_Garamond',serif] text-[22px] text-white/90 leading-[1.7] italic mb-7 relative pt-8 before:content-['\201C'] before:font-['Cormorant_Garamond',serif] before:text-[80px] before:text-[#C4912A] before:opacity-40 before:absolute before:-top-4 before:-left-2 before:leading-none">
              {t.quote}
            </p>
            <div className="text-[13px] text-[#C4912A] font-bold tracking-[.06em] uppercase">{t.who}</div>
            <div className="text-[12px] text-white/50 mt-1 tracking-[.02em]">{t.co}</div>
            <div className="text-[10.5px] text-white/30 mt-1.5 tracking-[.08em] uppercase font-medium">{t.li}</div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-5 mt-10">
        <button 
          className="bg-transparent border border-white/20 text-white/60 w-9 h-9 rounded-full cursor-pointer text-[16px] flex items-center justify-center transition-all hover:border-[#C4912A] hover:text-[#C4912A]" 
          onClick={() => goTo((cur - 1 + testimonials.length) % testimonials.length)}
          aria-label="Previous testimonial"
        >
          &#8592;
        </button>
        
        <div className="flex gap-2 items-center">
          {testimonials.map((_, idx) => (
            <button 
              key={idx} 
              className={`border-none p-0 cursor-pointer transition-all duration-300 ${
                idx === cur ? 'bg-[#C4912A] w-[22px] h-1.5 rounded-[3px]' : 'bg-white/25 w-1.5 h-1.5 rounded-full'
              }`} 
              onClick={() => goTo(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            ></button>
          ))}
        </div>

        <button 
          className="bg-transparent border border-white/20 text-white/60 w-9 h-9 rounded-full cursor-pointer text-[16px] flex items-center justify-center transition-all hover:border-[#C4912A] hover:text-[#C4912A]" 
          onClick={() => goTo((cur + 1) % testimonials.length)}
          aria-label="Next testimonial"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
}