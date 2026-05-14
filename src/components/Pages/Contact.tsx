import React, { useState, JSX } from 'react';
import axios from 'axios';

export default function Contact(): JSX.Element {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    query: '',      
    comments: ''    
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyO9AfzfGwVsrlmifvudkWxfoPAjdRZqWaQrp2UnDWB1TDeKyL4B68H00KP-2cszPvW/exec';
  const DATABASE_API_URL = 'https://api.manhoursonhire.com/api/leads';

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      setFormData({ ...formData, [name]: value.replace(/\D/g, '') });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); 
    setSubmitMessage('');

    if (!formData.name || !formData.email || !formData.phone) {
      setSubmitMessage("Please fill in all required fields (Name, Email, Phone).");
      return;
    }

    if (!validateEmail(formData.email)) {
      setSubmitMessage("Please enter a valid email address.");
      return;
    }

    if (formData.phone.length !== 10) {
      setSubmitMessage("Please enter a valid 10-digit phone number.");
      return;
    }

    setIsSubmitting(true);

    const currentPage = window.location.href;

    // 1. Google Sheets Payload: Keys explicitly capitalized to match your Sheet headers
    const googlePayload = {
      Name: formData.name,
      Company: formData.company,
      Email: formData.email,
      Phone: formData.phone,
      Query: formData.query,       // Matches "Query" column exactly
      Comments: formData.comments, // Matches "Comments" column exactly
      pageUrl: currentPage,
      timestamp: new Date().toLocaleString()
    };

    // 2. Database API Payload: Sending both lowercase and capitalized just to be 100% safe
    const databasePayload = {
      Name: formData.name,
      Phone: formData.phone,
      Email: formData.email,
      CompanyName: formData.company || "N/A",
      Query: formData.query,
      query: formData.query,       
      Comments: formData.comments, 
      comments: formData.comments, 
      Date: new Date().toLocaleDateString('en-GB'),
      url: currentPage, 
      Source: "Contact Page Form" 
    };

    try {
      await axios.post(GOOGLE_SCRIPT_URL, JSON.stringify(googlePayload), {
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
      });
      
      await axios.post(DATABASE_API_URL, databasePayload);

      setSubmitMessage("Request sent successfully! Our experts will contact you soon.");
      
      setFormData({ name: '', company: '', email: '', phone: '', query: '', comments: '' });
    } catch (error) {
      console.error("Submission error", error);
      setSubmitMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
                <a href="mailto:contact@founderscounsel.co" className="text-[14px] text-white/80 font-medium block hover:text-white transition-colors">contact@founderscounsel.co</a>
              </div>
              <div>
                <div className="text-[10px] tracking-[.2em] uppercase text-[#C4912A] font-bold mb-1.5">Phone</div>
                <a href="tel:+919480363788" className="text-[14px] text-white/80 font-medium block hover:text-white transition-colors">+91 94803 63788</a>
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
          
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="text-[11px] tracking-[.1em] uppercase text-[#0E0B42]/60 font-bold block mb-2">Your Name *</label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required
                  className="w-full p-3 md:py-3 md:px-4 bg-white border border-[#0E0B42]/10 text-[13.5px] text-[#0E0B42] font-['Inter',sans-serif] outline-none transition-colors duration-200 focus:border-[#0E0B42] appearance-none" 
                  placeholder="Full name" 
                />
              </div>
              <div>
                <label className="text-[11px] tracking-[.1em] uppercase text-[#0E0B42]/60 font-bold block mb-2">Company / Organisation</label>
                <input 
                  type="text" 
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full p-3 md:py-3 md:px-4 bg-white border border-[#0E0B42]/10 text-[13.5px] text-[#0E0B42] font-['Inter',sans-serif] outline-none transition-colors duration-200 focus:border-[#0E0B42] appearance-none" 
                  placeholder="Optional" 
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="text-[11px] tracking-[.1em] uppercase text-[#0E0B42]/60 font-bold block mb-2">Email Address *</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 md:py-3 md:px-4 bg-white border border-[#0E0B42]/10 text-[13.5px] text-[#0E0B42] font-['Inter',sans-serif] outline-none transition-colors duration-200 focus:border-[#0E0B42] appearance-none" 
                  placeholder="your@email.com" 
                />
              </div>
              <div>
                <label className="text-[11px] tracking-[.1em] uppercase text-[#0E0B42]/60 font-bold block mb-2">Phone Number *</label>
                <input 
                  type="tel" 
                  name="phone"
                  maxLength={10}
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full p-3 md:py-3 md:px-4 bg-white border border-[#0E0B42]/10 text-[13.5px] text-[#0E0B42] font-['Inter',sans-serif] outline-none transition-colors duration-200 focus:border-[#0E0B42] appearance-none" 
                  placeholder="10 digit number" 
                />
              </div>
            </div>
            
            <div>
              <label className="text-[11px] tracking-[.1em] uppercase text-[#0E0B42]/60 font-bold block mb-2">Nature of Matter</label>
              <select 
                name="query"
                value={formData.query}
                onChange={handleChange}
                className="w-full p-3 md:py-3 md:px-4 bg-white border border-[#0E0B42]/10 text-[13.5px] text-[#0E0B42] font-['Inter',sans-serif] outline-none transition-colors duration-200 focus:border-[#0E0B42] appearance-none cursor-pointer"
              >
                <option value="">Select an area (Optional)</option>
                <option value="Corporate Advisory & Structuring">Corporate Advisory & Structuring</option>
                <option value="Contracts & Commercial Agreements">Contracts & Commercial Agreements</option>
                <option value="Transactions & Deals">Transactions & Deals</option>
                <option value="Real Estate & Premises">Real Estate & Premises</option>
                <option value="Fractional GC">Fractional GC</option>
                <option value="Other / Not Sure">Other / Not Sure</option>
              </select>
            </div>
            
            <div>
              <label className="text-[11px] tracking-[.1em] uppercase text-[#0E0B42]/60 font-bold block mb-2">Brief Description</label>
              <textarea 
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                className="w-full p-3 md:py-3 md:px-4 bg-white border border-[#0E0B42]/10 text-[13.5px] text-[#0E0B42] font-['Inter',sans-serif] min-h-[120px] resize-y outline-none transition-colors duration-200 focus:border-[#0E0B42] appearance-none" 
                placeholder="Tell us briefly what you are dealing with. Plain English works fine."
              ></textarea>
            </div>
            
            {submitMessage && (
              <p className={`text-[13px] font-medium p-2 rounded ${submitMessage.includes('successfully') ? 'text-green-700 bg-green-50' : 'text-red-700 bg-red-50'}`}>
                {submitMessage}
              </p>
            )}

            <button 
              className="bg-[#C4912A] hover:bg-[#C4912A]/90 text-white border-none py-[15px] text-[12px] font-bold tracking-[.12em] uppercase cursor-pointer w-full transition-all mt-2 shadow-lg shadow-[#C4912A]/10 disabled:opacity-50 disabled:cursor-not-allowed" 
              type="submit" 
              disabled={isSubmitting} 
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
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