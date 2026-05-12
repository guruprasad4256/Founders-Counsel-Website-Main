import React, { JSX, useState } from 'react';
import logoUrl from '../../assets/FCCLogo.png';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar(): JSX.Element {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const location = useLocation();

  const isActive = (path: string): string => location.pathname === path ? 'text-[#0B3B4A] after:scale-x-100' : 'text-[#5c5c5c] after:scale-x-0';
  const closeMenu = (): void => setMenuOpen(false);

  const navLinkStyle = "relative text-[11.5px] tracking-[.09em] uppercase py-2 px-4 font-medium transition-colors hover:text-[#0B3B4A] after:content-[''] after:absolute after:-bottom-px after:left-4 after:right-4 after:h-[2px] after:bg-[#C4912A] after:origin-left after:transition-transform hover:after:scale-x-100";

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-white border-b border-[#DDD8D0] h-[72px] flex items-center justify-between px-5 md:px-12 font-['Inter',sans-serif]">
        <Link to="/" className="flex items-center gap-2.5 cursor-pointer" onClick={closeMenu}>
          <img src={logoUrl} alt="Founder's Counsel & Co" className="h-[46px] w-auto shrink-0 block" />
          <div className="font-['Cormorant_Garamond',serif] text-[14.5px] font-semibold text-[#0B3B4A] tracking-[.03em] leading-[1.1]">
            Founder's Counsel &amp; Co
            <span className="text-[#C4912A] text-[9.5px] font-semibold block tracking-[.18em] uppercase mt-[2px] font-['Inter',sans-serif]">Advocates &amp; Legal Advisors</span>
          </div>
        </Link>
        
        <div className="hidden md:flex items-center">
          <Link to="/" className={`${navLinkStyle} ${isActive('/')}`}>Home</Link>
          <Link to="/about" className={`${navLinkStyle} ${isActive('/about')}`}>About</Link>
          
          <div className="relative group flex items-center">
            <Link to="/services" className={`${navLinkStyle} ${isActive('/services')}`}>Services &#9660;</Link>
            <div className="absolute hidden group-hover:block top-full left-0 bg-white border border-[#DDD8D0] border-t-[2px] border-t-[#C4912A] min-w-[272px] z-[200] shadow-[0_8px_28px_rgba(0,0,0,.1)]">
              {[
                { title: 'Corporate Advisory & Structuring', sub: 'Entity setup, governance, restructuring' },
                { title: 'Contracts & Commercial Agreements', sub: 'Drafting, review, negotiation' },
                { title: 'Transactions & Deals', sub: 'Fundraising, acquisitions, JVs' },
                { title: 'Real Estate & Premises', sub: 'Leases, property documentation' },
                { title: 'Fractional GC', sub: 'Embedded legal leadership' }
              ].map((svc, i) => (
                <Link key={i} to="/services" className="flex flex-col py-3 px-5 text-[12px] text-[#5c5c5c] border-l-[3px] border-transparent border-b border-[#DDD8D0] hover:text-[#0B3B4A] hover:border-l-[#C4912A] hover:bg-[#FAF8F4] transition-all">
                  {svc.title}<small className="text-[11px] text-[#999] mt-[2px]">{svc.sub}</small>
                </Link>
              ))}
            </div>
          </div>
          
          <Link to="/work" className={`${navLinkStyle} ${isActive('/work')}`}>Work</Link>
          <Link to="/insights" className={`${navLinkStyle} ${isActive('/insights')}`}>Insights</Link>
          <Link to="/careers" className={`${navLinkStyle} ${isActive('/careers')}`}>Careers</Link>
          <Link to="/contact" className="bg-[#0B3B4A] hover:bg-[#082e3a] text-white py-2 px-[22px] ml-3.5 tracking-[.09em] text-[11.5px] font-medium uppercase transition-colors after:hidden">Get in Touch</Link>
        </div>

        <div className="md:hidden flex flex-col gap-[5px] cursor-pointer p-2" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="w-[22px] h-[1.5px] bg-[#0B3B4A] block"></span>
          <span className="w-[22px] h-[1.5px] bg-[#0B3B4A] block"></span>
          <span className="w-[22px] h-[1.5px] bg-[#0B3B4A] block"></span>
        </div>
      </nav>
      
      {menuOpen && (
        <div className="md:hidden fixed top-[72px] left-0 right-0 bg-white border-b border-[#DDD8D0] z-[99] py-2 shadow-[0_6px_20px_rgba(0,0,0,.08)]">
          {['Home', 'About', 'Services', 'Work', 'Insights', 'Careers', 'Contact'].map((item) => (
            <Link key={item} to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/ /g, '')}`} className="block py-3 px-6 text-[12.5px] tracking-[.07em] uppercase text-[#5c5c5c] font-medium border-b border-[#DDD8D0] hover:text-[#0B3B4A] hover:bg-[#FAF8F4]" onClick={closeMenu}>
              {item}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}