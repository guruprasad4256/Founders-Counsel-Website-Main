import React, { JSX, useState } from "react";
import logoUrl from "../../assets/FCCLogo.png";
import { Link, useLocation } from "react-router-dom";

export default function Navbar(): JSX.Element {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const location = useLocation();

  const closeMenu = (): void => setMenuOpen(false);

  // LOGO COLORS: 
  // Navy: #0E0B42
  // Gold: #C4912A

  const isActive = (path: string): string =>
    location.pathname === path
      ? "text-[#0E0B42] after:scale-x-100"
      : "text-[#0E0B42]/70 after:scale-x-0";

  const navLinkStyle =
    "relative text-[11px] lg:text-[11.5px] tracking-[.08em] lg:tracking-[.09em] uppercase py-2 px-2.5 lg:px-4 font-medium transition-colors hover:text-[#0E0B42] after:content-[''] after:absolute after:-bottom-px after:left-2.5 lg:after:left-4 after:right-2.5 lg:after:right-4 after:h-[2px] after:bg-[#C4912A] after:origin-left after:transition-transform hover:after:scale-x-100";

  const mobileLinkStyle =
    "block py-3.5 px-6 text-[12.5px] tracking-[.08em] uppercase text-[#0E0B42]/80 font-medium border-b border-[#C4912A]/20 hover:text-[#0E0B42] hover:bg-[#C4912A]/5 transition-colors";

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Work", path: "/work" },
    { label: "Insights", path: "/insights" },
    { label: "Blogs", path: "/blogs" },
    { label: "Careers", path: "/careers" },
  ];

  const services = [
    {
      title: "Corporate Advisory & Structuring",
      sub: "Entity setup, governance, restructuring",
    },
    {
      title: "Contracts & Commercial Agreements",
      sub: "Drafting, review, negotiation",
    },
    {
      title: "Transactions & Deals",
      sub: "Fundraising, acquisitions, JVs",
    },
    {
      title: "Real Estate & Premises",
      sub: "Leases, property documentation",
    },
    {
      title: "Fractional GC",
      sub: "Embedded legal leadership",
    },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-white border-b border-[#C4912A]/30 h-[72px] flex items-center justify-between px-4 sm:px-5 md:px-8 lg:px-12 font-['Inter',sans-serif]">
        <Link
          to="/"
          className="flex items-center gap-2 sm:gap-2.5 cursor-pointer min-w-0"
          onClick={closeMenu}
        >
          <img
            src={logoUrl}
            alt="Founder's Counsel & Co"
            className="h-[40px] sm:h-[46px] w-auto shrink-0 block"
          />

          <div className="font-['Cormorant_Garamond',serif] text-[13px] sm:text-[14.5px] font-semibold text-[#0E0B42] tracking-[.03em] leading-[1.1] truncate">
            Founder's Counsel &amp; Co
            <span className="text-[#C4912A] text-[8.5px] sm:text-[9.5px] font-semibold block tracking-[.14em] sm:tracking-[.18em] uppercase mt-[2px] font-['Inter',sans-serif] truncate">
              Advocates &amp; Legal Advisors
            </span>
          </div>
        </Link>

        {/* Desktop / Tablet Navigation */}
        <div className="hidden xl:flex items-center">
          <Link to="/" className={`${navLinkStyle} ${isActive("/")}`}>
            Home
          </Link>

          <Link to="/about" className={`${navLinkStyle} ${isActive("/about")}`}>
            About
          </Link>

          <div className="relative group flex items-center">
            <Link
              to="/services"
              className={`${navLinkStyle} ${isActive("/services")}`}
            >
              Services <span className="text-[10px] ml-1">▼</span>
            </Link>

            <div className="absolute hidden group-hover:block top-full left-0 bg-white border border-[#C4912A]/20 border-t-[2px] border-t-[#C4912A] min-w-[272px] z-[200] shadow-[0_8px_28px_rgba(14,11,66,0.15)]">
              {services.map((svc, i) => (
                <Link
                  key={i}
                  to="/services"
                  className="flex flex-col py-3 px-5 text-[12px] text-[#0E0B42]/80 border-l-[3px] border-transparent border-b border-[#C4912A]/10 last:border-b-0 hover:text-[#0E0B42] hover:border-l-[#C4912A] hover:bg-[#C4912A]/5 transition-all"
                >
                  <span className="font-medium">{svc.title}</span>
                  <small className="text-[11px] text-[#0E0B42]/50 mt-[2px]">
                    {svc.sub}
                  </small>
                </Link>
              ))}
            </div>
          </div>

          <Link to="/work" className={`${navLinkStyle} ${isActive("/work")}`}>
            Work
          </Link>

          <Link
            to="/insights"
            className={`${navLinkStyle} ${isActive("/insights")}`}
          >
            Insights
          </Link>

          <Link to="/blogs" className={`${navLinkStyle} ${isActive("/blogs")}`}>
            Blogs
          </Link>

          <Link
            to="/careers"
            className={`${navLinkStyle} ${isActive("/careers")}`}
          >
            Careers
          </Link>

          <Link
            to="/contact"
            className="bg-[#0E0B42] hover:bg-[#0E0B42]/90 text-white py-2 px-[18px] lg:px-[22px] ml-2 lg:ml-3.5 tracking-[.09em] text-[11px] lg:text-[11.5px] font-medium uppercase transition-colors whitespace-nowrap border border-[#C4912A]/30"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile / Medium Menu Button */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="xl:hidden flex flex-col gap-[5px] cursor-pointer p-2"
        >
          <span
            className={`w-[22px] h-[1.5px] bg-[#0E0B42] block transition-transform ${
              menuOpen ? "translate-y-[6.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`w-[22px] h-[1.5px] bg-[#0E0B42] block transition-opacity ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`w-[22px] h-[1.5px] bg-[#0E0B42] block transition-transform ${
              menuOpen ? "-translate-y-[6.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile / Tablet Dropdown */}
      {menuOpen && (
        <div className="xl:hidden fixed top-[72px] left-0 right-0 bg-white border-b border-[#C4912A]/30 z-[99] shadow-[0_6px_20px_rgba(14,11,66,0.1)] max-h-[calc(100vh-72px)] overflow-y-auto">
          <div className="py-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`${mobileLinkStyle} ${
                  location.pathname === item.path
                    ? "text-[#0E0B42] bg-[#C4912A]/5"
                    : ""
                }`}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}

            <Link
              to="/contact"
              className="block mx-5 my-4 text-center bg-[#0E0B42] hover:bg-[#0E0B42]/90 text-white py-3 px-5 tracking-[.09em] text-[12px] font-medium uppercase transition-colors border border-[#C4912A]/30"
              onClick={closeMenu}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </>
  );
}