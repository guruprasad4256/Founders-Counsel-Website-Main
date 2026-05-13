import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import React, { useState, useEffect } from "react";
import { ViteReactSSG } from "vite-react-ssg";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link, useParams, useLocation, Outlet } from "react-router-dom";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Facebook, Linkedin, Send } from "lucide-react";
import { FiChevronDown } from "react-icons/fi";
const RAW_URL$1 = "https://api.manhoursonhire.com";
const SERVER_URL$1 = RAW_URL$1.replace(/\/+$/, "");
const endpoint = SERVER_URL$1.endsWith("/api") ? "/blogs" : "/api/blogs";
const BlogArchive = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchBlogs = async () => {
      const fullUrl = `${SERVER_URL$1}${endpoint}?site=Founders Counsel`;
      try {
        setLoading(true);
        const res = await axios.get(fullUrl);
        if (Array.isArray(res.data)) {
          setBlogs(res.data);
        }
        setError(null);
      } catch (err) {
        console.error("Fetch Error:", err);
        const message = err.response?.data?.message || "Check your backend connection.";
        setError(message);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);
  if (loading) {
    return /* @__PURE__ */ jsx("div", { className: "flex justify-center items-center min-h-[60vh] w-full font-poppins text-white bg-[#050505]", children: /* @__PURE__ */ jsx("div", { className: "text-sm tracking-[0.3em] uppercase animate-pulse border border-[#D4AF37]/30 px-8 py-3 rounded-full bg-[#D4AF37]/5 text-[#D4AF37]", children: "Accessing Founders Counsel Archives..." }) });
  }
  if (error) {
    return /* @__PURE__ */ jsx("div", { className: "flex justify-center items-center min-h-[60vh] w-full bg-[#050505] font-poppins", children: /* @__PURE__ */ jsxs("div", { className: "bg-[#D4AF37]/5 border border-[#D4AF37]/20 px-8 py-6 rounded-2xl text-center", children: [
      /* @__PURE__ */ jsx("p", { className: "text-[#D4AF37] text-sm font-bold uppercase tracking-widest mb-2", children: "Connection Error" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-xs", children: error })
    ] }) });
  }
  return /* @__PURE__ */ jsxs("section", { className: "relative w-full bg-[#050505] font-poppins pt-24 pb-20 selection:bg-[#D4AF37]/30", children: [
    /* @__PURE__ */ jsx("style", { children: `
          .hide-scrollbar::-webkit-scrollbar { display: none; }
          .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        ` }),
    /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-[#D4AF37]/5 blur-[120px]" }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 relative z-10", children: [
      /* @__PURE__ */ jsxs("header", { className: "mb-20 text-center flex flex-col items-center", children: [
        /* @__PURE__ */ jsx("span", { className: "text-[10px] md:text-xs uppercase tracking-[0.4em] text-[#D4AF37] font-semibold mb-6 block", children: "Founders Counsel" }),
        /* @__PURE__ */ jsxs("h1", { className: "text-5xl md:text-7xl font-bold leading-[1.1] text-white tracking-tight mb-8", children: [
          "Notes for the ",
          /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-[#D4AF37] via-[#F2D472] to-[#AA8839] bg-clip-text text-transparent italic", children: "long game." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-light", children: "Essays and frameworks from operators who ship. No engagement bait. Just the architecture of building." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-10 overflow-x-auto md:overflow-visible snap-x snap-mandatory hide-scrollbar pb-10", children: blogs.length > 0 ? blogs.map((blog) => /* @__PURE__ */ jsxs(
        Link,
        {
          to: `/blogs/${blog.slug || blog._id}`,
          className: "flex-shrink-0 w-[85vw] sm:w-[340px] md:w-full snap-center group bg-[#0A0A0A] border border-white/5 rounded-2xl overflow-hidden transition-all duration-500 hover:border-[#D4AF37]/40 hover:bg-[#111111] shadow-2xl flex flex-col",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "relative aspect-[16/10] w-full bg-neutral-900 overflow-hidden", children: [
              blog.featuredImage ? /* @__PURE__ */ jsx(
                "img",
                {
                  src: blog.featuredImage,
                  alt: blog.title,
                  className: "w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-in-out"
                }
              ) : /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center h-full text-white/10 italic text-xs", children: "No Visual Record" }),
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-8 flex flex-col flex-grow", children: [
              /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between mb-5", children: /* @__PURE__ */ jsx("p", { className: "text-[10px] text-[#D4AF37] font-bold tracking-[0.3em] uppercase", children: new Date(blog.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric"
              }) }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl md:text-2xl font-bold text-white group-hover:text-[#D4AF37] transition-colors duration-300 leading-tight mb-8", children: blog.title }),
              /* @__PURE__ */ jsx("div", { className: "mt-auto flex items-center", children: /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 text-xs font-semibold text-[#D4AF37] uppercase tracking-[0.2em] group-hover:gap-4 transition-all", children: [
                "Read Essay",
                /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
              ] }) })
            ] })
          ]
        },
        blog._id
      )) : /* @__PURE__ */ jsx("div", { className: "text-center col-span-full py-24 w-full flex justify-center", children: /* @__PURE__ */ jsx("p", { className: "text-gray-500 italic tracking-widest border border-dashed border-white/10 px-10 py-5 rounded-full", children: "The archives are currently quiet." }) }) })
    ] })
  ] });
};
const ArrowRight = ({ className }) => /* @__PURE__ */ jsx(
  "svg",
  {
    className,
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M17 8l4 4m0 0l-4 4m4-4H3" })
  }
);
const logo = "/assets/FounderCounselLogo-CSbJBHW1.png";
const BlogHeader = () => {
  return /* @__PURE__ */ jsx("header", { className: "w-full py-4 px-6 sticky top-0 z-50 bg-black border-b border-white/5 shadow-2xl", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto flex items-center", children: /* @__PURE__ */ jsx("a", { href: "/", className: "block", children: /* @__PURE__ */ jsx(
    "img",
    {
      src: logo,
      alt: "Founder's Counsel Logo",
      className: "h-20 md:h-24 lg:h-24 w-auto transition-transform duration-300 hover:scale-[1.02] transform-gpu will-change-transform",
      style: {
        imageRendering: "auto",
        // Ensures standard high-quality interpolation
        WebkitFontSmoothing: "antialiased"
      }
    }
  ) }) }) });
};
const BlogArchivePage = () => {
  return /* @__PURE__ */ jsxs("div", { className: "w-full min-h-screen bg-black", children: [
    /* @__PURE__ */ jsx(BlogHeader, {}),
    /* @__PURE__ */ jsx(BlogArchive, {})
  ] });
};
const RAW_URL = "https://api.manhoursonhire.com";
const SERVER_URL = RAW_URL.replace(/\/+$/, "");
const BlogSingle = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [viewCount, setViewCount] = useState(0);
  useEffect(() => {
    const fetchBlogAndIncrementViews = async () => {
      if (!slug) return;
      try {
        setLoading(true);
        const baseEndpoint = SERVER_URL.endsWith("/api") ? `/blogs/slug/${slug}` : `/api/blogs/slug/${slug}`;
        const fetchUrl = `${SERVER_URL}${baseEndpoint}`;
        const res = await axios.get(fetchUrl);
        setBlog(res.data);
        const viewRes = await axios.patch(`${fetchUrl}/view`);
        setViewCount(viewRes.data.views);
      } catch (error) {
        console.error("Error fetching blog", error);
        setBlog(null);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogAndIncrementViews();
  }, [slug]);
  const shareUrl = encodeURIComponent(window.location.href);
  const shareTitle = blog ? encodeURIComponent(blog.title) : "";
  const socialLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`,
    whatsapp: `https://api.whatsapp.com/send?text=${shareTitle}%20${shareUrl}`
  };
  if (loading) return /* @__PURE__ */ jsx("div", { className: "min-h-[70vh] flex flex-col items-center justify-center bg-[#0A0520]", children: /* @__PURE__ */ jsx("div", { className: "w-10 h-10 border-4 border-[#D8A623]/20 border-t-[#D8A623] rounded-full animate-spin" }) });
  if (!blog) return /* @__PURE__ */ jsxs("div", { className: "text-center py-20 font-bold font-poppins text-white bg-[#0A0520] min-h-[50vh]", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-2xl mb-4", children: "Article not found." }),
    /* @__PURE__ */ jsx("a", { href: "/blogs", className: "text-[#D8A623] underline hover:text-[#D8A623]/80 transition-colors", children: "Back to Archive" })
  ] });
  const {
    fontFamily = "'Poppins', sans-serif",
    fontSize = "18px",
    lineHeight = "1.7",
    letterSpacing = "-0.01em"
  } = blog.styling || {};
  const processContent = (html) => {
    return html.replace(/-/g, "&#8209;");
  };
  return /* @__PURE__ */ jsxs(
    motion.section,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      className: "bg-[#0A0520] text-white py-16 px-6 relative z-10 font-poppins w-full",
      children: [
        /* @__PURE__ */ jsx("style", { children: `
        .single-blog-content .ql-editor { 
          padding: 0 !important; 
          font-family: ${fontFamily} !important; 
          line-height: ${lineHeight}; 
          letter-spacing: ${letterSpacing}; 
          color: #ffffff !important; 
          overflow-y: visible;
          white-space: pre-wrap !important; 
          word-break: break-word !important; 
          overflow-wrap: break-word !important;
          hyphens: none !important;
        }
        .single-blog-content .ql-editor p, 
        .single-blog-content .ql-editor li, 
        .single-blog-content .ql-editor span, 
        .single-blog-content .ql-editor div { color: #ffffff !important; }
        .single-blog-content .ql-editor h1, 
        .single-blog-content .ql-editor h2, 
        .single-blog-content .ql-editor h3, 
        .single-blog-content .ql-editor h4, 
        .single-blog-content .ql-editor h5, 
        .single-blog-content .ql-editor h6 { color: #D8A623 !important; }
        .single-blog-content .ql-editor a { color: #D8A623 !important; text-decoration: underline; }
        .single-blog-content .ql-editor strong { color: #ffffff !important; font-weight: 700; }
        .single-blog-content .ql-editor ul, .single-blog-content .ql-editor ol { padding-left: 2rem !important; margin-bottom: 1.2em !important; }
        .single-blog-content .ql-editor ul li { list-style-type: disc !important; display: list-item !important; list-style-position: outside !important; padding-left: 0 !important; margin-bottom: 0.5em !important; }
        .single-blog-content .ql-editor ol li { list-style-type: decimal !important; display: list-item !important; list-style-position: outside !important; padding-left: 0 !important; margin-bottom: 0.5em !important; }
        .single-blog-content .ql-editor li::before { display: none !important; }
        .single-blog-content .ql-editor h1 { font-size: 2.5rem !important; font-weight: 900; margin-bottom: 0.5em; margin-top: 1.5em; }
        .single-blog-content .ql-editor h2 { font-size: 2rem !important; font-weight: 800; margin-top: 1.5em; margin-bottom: 0.5em; }
        .single-blog-content .ql-editor h3 { font-size: 1.5rem !important; font-weight: 700; margin-top: 1.2em; margin-bottom: 0.5em; }
        .single-blog-content .ql-editor p { font-size: ${fontSize} !important; margin-bottom: 1.2em; }
        .single-blog-content .ql-editor img { border-radius: 12px; margin: 1.5rem 0; box-shadow: 0 4px 20px rgba(0,0,0,0.5); max-width: 100%; display: block; border: 1px solid #1C1052; }
        .single-blog-content .ql-editor blockquote { border-left: 4px solid #D8A623; padding-left: 1.5rem; font-style: italic; margin: 1.5rem 0; color: #ffffff !important; background: #110835; padding: 1rem 1.5rem; border-radius: 0 8px 8px 0; border: 1px solid #1C1052; border-left-width: 4px; }
        .single-blog-content .ql-editor table { border-collapse: collapse; width: 100%; border: 1px solid #2D1C70; margin: 24px 0; border-radius: 8px; overflow: hidden; }
        .single-blog-content .ql-editor td, .single-blog-content .ql-editor th { border: 1px solid #2D1C70; padding: 16px; background: #110835; min-width: 100px; color: #ffffff !important; }
        .single-blog-content .ql-editor tr:first-child td { background-color: #150A3D; font-weight: 700; color: #ffffff !important; }
      ` }),
        /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto flex flex-col xl:flex-row gap-12 items-start relative", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0 w-full py-8 pr-8 pl-0 sm:py-12 sm:pr-12 sm:pl-0 md:py-20 md:pr-20 md:pl-0", children: [
            /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-black mb-12 leading-[1.1] text-[#D8A623] tracking-tight", children: blog.title }),
            /* @__PURE__ */ jsx("div", { className: "single-blog-content w-full max-w-none", children: /* @__PURE__ */ jsx("div", { className: "ql-editor", dangerouslySetInnerHTML: { __html: processContent(blog.content) } }) }),
            blog.faqs && blog.faqs.length > 0 && /* @__PURE__ */ jsxs("div", { className: " pt-16 border-t border-[#1C1052]", children: [
              /* @__PURE__ */ jsx("div", { className: "mb-12", children: /* @__PURE__ */ jsx("h2", { className: "text-[32px] md:text-[52px] font-semibold text-[#D8A623] leading-[1.3] tracking-tight", children: "Frequently Asked Questions" }) }),
              /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-4", children: blog.faqs.map((faq, i) => /* @__PURE__ */ jsx(
                AccordionItem,
                {
                  question: faq.question,
                  answer: faq.answer,
                  isOpen: openFaqIndex === i,
                  onClick: () => setOpenFaqIndex(openFaqIndex === i ? null : i)
                },
                i
              )) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("aside", { className: "w-full xl:w-[320px] shrink-0 sticky top-24 space-y-8 pb-10 z-10 md:pt-[50px]", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-start gap-2 px-4 mb-2", children: [
              /* @__PURE__ */ jsx(Eye, { className: "w-6 h-6 text-[#D8A623]" }),
              /* @__PURE__ */ jsxs("span", { className: "text-[#D8A623] font-bold text-xl tracking-tight", children: [
                "Post Views : ",
                viewCount
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "rounded-[2.5rem] overflow-hidden shadow-2xl relative group border border-[#1C1052]", children: /* @__PURE__ */ jsx("img", { src: blog.featuredImage, alt: blog.title, className: "w-full h-auto object-cover" }) }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-5", children: [
              /* @__PURE__ */ jsx("a", { href: socialLinks.facebook, target: "_blank", rel: "noopener noreferrer", className: "w-14 h-14 bg-[#3b5998] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-all", children: /* @__PURE__ */ jsx(Facebook, { size: 26, fill: "white" }) }),
              /* @__PURE__ */ jsx("a", { href: socialLinks.twitter, target: "_blank", rel: "noopener noreferrer", className: "w-14 h-14 bg-[#0A0520] border border-[#2D1C70] rounded-full flex items-center justify-center text-white font-black text-xl shadow-lg hover:scale-110 transition-all", children: "X" }),
              /* @__PURE__ */ jsx("a", { href: socialLinks.linkedin, target: "_blank", rel: "noopener noreferrer", className: "w-14 h-14 bg-[#0077b5] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-all", children: /* @__PURE__ */ jsx(Linkedin, { size: 26, fill: "white" }) }),
              /* @__PURE__ */ jsx("a", { href: socialLinks.whatsapp, target: "_blank", rel: "noopener noreferrer", className: "w-14 h-14 bg-[#25d366] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-all", children: /* @__PURE__ */ jsx(Send, { size: 26, fill: "white", className: "rotate-[-20deg]" }) })
            ] })
          ] })
        ] })
      ]
    }
  );
};
const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      layout: true,
      className: `group w-full bg-[#110835] border rounded-[1.8rem] overflow-hidden transition-all duration-500 ${isOpen ? "border-[#D8A623]/50 shadow-[0_20px_40px_-15px_rgba(216,166,35,0.15)]" : "border-[#1C1052] hover:border-[#D8A623]/30 shadow-sm"}`,
      children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick,
            className: "w-full flex items-center justify-between p-7 text-left focus:outline-none",
            children: [
              /* @__PURE__ */ jsx("span", { className: `text-base md:text-lg font-semibold transition-colors duration-300 ${isOpen ? "text-[#D8A623]" : "text-white"}`, children: question }),
              /* @__PURE__ */ jsx("div", { className: `shrink-0 ml-4 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 ${isOpen ? "bg-[#D8A623] text-black rotate-180 shadow-lg shadow-[#D8A623]/20" : "bg-[#150A3D] border border-[#2D1C70] text-[#D8A623]"}`, children: /* @__PURE__ */ jsx(FiChevronDown, { size: 20 }) })
            ]
          }
        ),
        /* @__PURE__ */ jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { height: 0, opacity: 0 },
            animate: { height: "auto", opacity: 1 },
            exit: { height: 0, opacity: 0 },
            transition: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] },
            children: /* @__PURE__ */ jsx("div", { className: "px-7 pb-7", children: /* @__PURE__ */ jsx("div", { className: "pt-5 border-t border-[#1C1052] text-white text-sm md:text-base leading-relaxed", children: answer }) })
          }
        ) })
      ]
    }
  );
};
const BlogSinglePage = () => {
  return /* @__PURE__ */ jsxs("div", { className: "w-full min-h-screen bg-black", children: [
    /* @__PURE__ */ jsx(BlogHeader, {}),
    /* @__PURE__ */ jsx(BlogSingle, {})
  ] });
};
function NotFound() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "404 — Page Not Found | Founder's Counsel & Co." }),
      /* @__PURE__ */ jsx("meta", { name: "robots", content: "noindex" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
      /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
        Link,
        {
          to: "/",
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Go home"
        }
      ) })
    ] }) })
  ] });
}
function Home() {
  const marqueeItems = [
    "Corporate Advisory",
    "Contracts & Commercial",
    "Transactions & Deals",
    "Real Estate",
    "Fractional GC",
    "Bengaluru &middot; Serving founders across India"
  ];
  return /* @__PURE__ */ jsxs("div", { className: "pt-[72px] font-['Inter',sans-serif] bg-white overflow-hidden", children: [
    /* @__PURE__ */ jsx("style", { children: `
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            width: max-content;
            animation: marquee 30s linear infinite;
          }
        ` }),
    /* @__PURE__ */ jsx("section", { className: "bg-[#0B3B4A]", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[1160px] mx-auto pt-[72px] px-6 md:px-12 pb-16", children: [
      /* @__PURE__ */ jsx("p", { className: "text-[10.5px] tracking-[.24em] uppercase text-white/50 font-semibold mb-6 flex items-center gap-3 before:content-[''] before:block before:w-7 before:h-px before:bg-white/30", children: "Advocates & Legal Advisors  ·  Bengaluru" }),
      /* @__PURE__ */ jsxs("h1", { className: "font-['Cormorant_Garamond',serif] text-[clamp(44px,5.8vw,84px)] text-white leading-[1.02] font-normal tracking-[-.01em] mb-6 max-w-[820px]", children: [
        "Legal strategy for founders",
        /* @__PURE__ */ jsx("br", {}),
        "who want to ",
        /* @__PURE__ */ jsx("em", { className: "text-[#C4912A] italic", children: "move fast." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-[15px] text-white/65 leading-[1.8] max-w-[560px] mb-9 font-light", children: "12+ years of in-house and private practice experience · now available to the founders and businesses that need it most." }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-5 flex-wrap mb-12", children: [
        /* @__PURE__ */ jsx(Link, { to: "/services", className: "bg-[#C4912A] hover:bg-[#a87822] text-white py-[13px] px-[30px] text-[11.5px] font-semibold tracking-[.1em] uppercase transition-colors inline-block", children: "Our Practice Areas" }),
        /* @__PURE__ */ jsxs(Link, { to: "/about", className: "text-[12px] tracking-[.1em] uppercase text-white/70 font-medium flex items-center gap-2 cursor-pointer border-b border-white/20 pb-px hover:text-[#C4912A] transition-colors", children: [
          "Meet Sathwik ",
          /* @__PURE__ */ jsx("span", { className: "text-[15px]", children: "→" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-row border-t border-white/10 w-full overflow-x-auto md:overflow-x-visible no-scrollbar", children: [
        /* @__PURE__ */ jsxs("div", { className: "py-5 pr-6 md:pr-12 mr-6 md:mr-12 border-r border-white/10 flex gap-3.5 items-baseline whitespace-nowrap", children: [
          /* @__PURE__ */ jsx("div", { className: "font-['Cormorant_Garamond',serif] text-[28px] md:text-[36px] text-white font-normal leading-none", children: "12+" }),
          /* @__PURE__ */ jsx("div", { className: "text-[10px] md:text-[11.5px] text-white/50 leading-[1.4] font-normal font-sans", children: "Years in-house · private practice" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "py-5 pr-6 md:pr-12 mr-6 md:mr-12 border-r border-white/10 flex gap-3.5 items-baseline whitespace-nowrap", children: [
          /* @__PURE__ */ jsx("div", { className: "font-['Cormorant_Garamond',serif] text-[28px] md:text-[36px] text-white font-normal leading-none", children: "5" }),
          /* @__PURE__ */ jsx("div", { className: "text-[10px] md:text-[11.5px] text-white/50 leading-[1.4] font-normal font-sans", children: "Core practice areas" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "py-5 flex gap-3.5 items-baseline whitespace-nowrap", children: [
          /* @__PURE__ */ jsx("div", { className: "font-['Cormorant_Garamond',serif] text-[28px] md:text-[36px] text-white font-normal leading-none", children: "Est. 2024" }),
          /* @__PURE__ */ jsx("div", { className: "text-[10px] md:text-[11.5px] text-white/50 leading-[1.4] font-normal font-sans", children: "Bengaluru · serving founders across India" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "bg-[#0B3B4A] py-[18px] border-t border-white/5 relative overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "animate-marquee", children: [...marqueeItems, ...marqueeItems].map((item, i) => /* @__PURE__ */ jsxs(React.Fragment, { children: [
      /* @__PURE__ */ jsx("span", { className: "text-[11.5px] tracking-[.12em] uppercase text-white/55 font-medium whitespace-nowrap mx-6", dangerouslySetInnerHTML: { __html: item } }),
      /* @__PURE__ */ jsx("span", { className: "text-[#C4912A] text-[18px]", children: "·" })
    ] }, i)) }) }),
    /* @__PURE__ */ jsxs("div", { className: "bg-[#FAF8F4]", children: [
      /* @__PURE__ */ jsxs("div", { className: "py-12 md:pt-[52px] md:pb-9 px-6 md:px-[52px] grid grid-cols-1 md:grid-cols-[200px_1fr] gap-3 md:gap-10 items-baseline border-b border-[#0B3B4A]/10", children: [
        /* @__PURE__ */ jsx("span", { className: "text-[11px] tracking-[.22em] uppercase text-[#C4912A] font-semibold", children: "Why FCC" }),
        /* @__PURE__ */ jsxs("h2", { className: "font-['Cormorant_Garamond',serif] text-[clamp(28px,3vw,40px)] text-[#0B3B4A] font-normal leading-[1.2]", children: [
          "Built for businesses that move fast",
          /* @__PURE__ */ jsx("br", {}),
          "and need legal support that keeps up."
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "px-6 md:px-[52px]", children: [
        {
          n: "01",
          t: "Built from the inside out",
          b: "Most law firms have never worked inside a business. FCC is led by a lawyer who has &middot; which means advice accounts for how decisions actually get made, not just how contracts are supposed to work.",
          d: "In-house experience at growth-stage companies means Sathwik understands the operational and commercial context behind every legal question &middot; including the ones you haven't asked yet."
        },
        {
          n: "02",
          t: "Accessible without the overhead",
          b: "Serious legal help should not require a retainer with a large firm. FCC brings the same depth of counsel &middot; available when you need it, without the billing structures that make quality advice feel out of reach.",
          d: "Founders get direct access to senior counsel, not a junior associate. Every matter is handled by Sathwik personally, from first brief to resolution."
        },
        {
          n: "03",
          t: "Sector-specific pattern recognition",
          b: "Twelve years across SaaS, MedTech, manufacturing, and financial services means FCC recognises the legal patterns that repeat within industries and brings that understanding to your specific situation.",
          d: "You spend less time explaining your business and more time getting advice that actually fits it. Domain familiarity is not a bonus &middot; it is built into every engagement."
        },
        {
          n: "04",
          t: "Founder-first mindset",
          b: "The goal is not to be the most cautious voice in the room. It is to help you move forward &middot; with a clear picture of the risk, a clear recommendation, and the support to act on it.",
          d: "Legal counsel that helps you close the deal, make the hire, or resolve the dispute &middot; not one that finds reasons why you shouldn't."
        }
      ].map((w, i) => /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-[44px_1fr] md:grid-cols-[56px_1fr_1fr] border-b border-[#0B3B4A]/10 py-7 last:border-none", children: [
        /* @__PURE__ */ jsx("div", { className: "font-['Cormorant_Garamond',serif] text-[42px] text-[#0B3B4A]/10 font-bold leading-none pt-1", children: w.n }),
        /* @__PURE__ */ jsxs("div", { className: "md:pr-12 md:border-r border-[#0B3B4A]/10", children: [
          /* @__PURE__ */ jsx("div", { className: "font-['Cormorant_Garamond',serif] text-[20px] text-[#0B3B4A] font-medium mb-2.5 leading-[1.2]", children: w.t }),
          /* @__PURE__ */ jsx("p", { className: "text-[13.5px] text-[#5c5c5c] leading-[1.8]", children: w.b })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "hidden md:block pl-12", children: /* @__PURE__ */ jsx("p", { className: "text-[13.5px] text-[#5c5c5c] leading-[1.8]", children: w.d }) })
      ] }, i)) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-[#0B3B4A] py-14 px-6 md:px-[52px] flex items-center justify-between gap-10 flex-wrap", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "font-['Cormorant_Garamond',serif] text-[clamp(26px,3vw,42px)] text-white font-normal leading-[1.25] mb-4", children: [
          "Have a matter in mind?",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("em", { className: "text-[#C4912A] italic", children: "Let's talk." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-[13.5px] text-white/55 leading-[1.7] max-w-[480px]", children: "No obligation. A short conversation is usually enough to understand whether FCC can help and how." })
      ] }),
      /* @__PURE__ */ jsx(Link, { to: "/contact", className: "bg-[#C4912A] hover:bg-[#a87822] text-white py-3.5 px-8 text-[12px] font-semibold tracking-[.1em] uppercase inline-block transition-colors", children: "Get in Touch" })
    ] })
  ] });
}
const logoUrl$1 = "/assets/FCCLogo-CZevM82d.png";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname === path ? "text-[#0B3B4A] after:scale-x-100" : "text-[#5c5c5c] after:scale-x-0";
  const closeMenu = () => setMenuOpen(false);
  const navLinkStyle = "relative text-[11.5px] tracking-[.09em] uppercase py-2 px-4 font-medium transition-colors hover:text-[#0B3B4A] after:content-[''] after:absolute after:-bottom-px after:left-4 after:right-4 after:h-[2px] after:bg-[#C4912A] after:origin-left after:transition-transform hover:after:scale-x-100";
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("nav", { className: "fixed top-0 left-0 right-0 z-[100] bg-white border-b border-[#DDD8D0] h-[72px] flex items-center justify-between px-5 md:px-12 font-['Inter',sans-serif]", children: [
      /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2.5 cursor-pointer", onClick: closeMenu, children: [
        /* @__PURE__ */ jsx("img", { src: logoUrl$1, alt: "Founder's Counsel & Co", className: "h-[46px] w-auto shrink-0 block" }),
        /* @__PURE__ */ jsxs("div", { className: "font-['Cormorant_Garamond',serif] text-[14.5px] font-semibold text-[#0B3B4A] tracking-[.03em] leading-[1.1]", children: [
          "Founder's Counsel & Co",
          /* @__PURE__ */ jsx("span", { className: "text-[#C4912A] text-[9.5px] font-semibold block tracking-[.18em] uppercase mt-[2px] font-['Inter',sans-serif]", children: "Advocates & Legal Advisors" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "hidden md:flex items-center", children: [
        /* @__PURE__ */ jsx(Link, { to: "/", className: `${navLinkStyle} ${isActive("/")}`, children: "Home" }),
        /* @__PURE__ */ jsx(Link, { to: "/about", className: `${navLinkStyle} ${isActive("/about")}`, children: "About" }),
        /* @__PURE__ */ jsxs("div", { className: "relative group flex items-center", children: [
          /* @__PURE__ */ jsx(Link, { to: "/services", className: `${navLinkStyle} ${isActive("/services")}`, children: "Services ▼" }),
          /* @__PURE__ */ jsx("div", { className: "absolute hidden group-hover:block top-full left-0 bg-white border border-[#DDD8D0] border-t-[2px] border-t-[#C4912A] min-w-[272px] z-[200] shadow-[0_8px_28px_rgba(0,0,0,.1)]", children: [
            { title: "Corporate Advisory & Structuring", sub: "Entity setup, governance, restructuring" },
            { title: "Contracts & Commercial Agreements", sub: "Drafting, review, negotiation" },
            { title: "Transactions & Deals", sub: "Fundraising, acquisitions, JVs" },
            { title: "Real Estate & Premises", sub: "Leases, property documentation" },
            { title: "Fractional GC", sub: "Embedded legal leadership" }
          ].map((svc, i) => /* @__PURE__ */ jsxs(Link, { to: "/services", className: "flex flex-col py-3 px-5 text-[12px] text-[#5c5c5c] border-l-[3px] border-transparent border-b border-[#DDD8D0] hover:text-[#0B3B4A] hover:border-l-[#C4912A] hover:bg-[#FAF8F4] transition-all", children: [
            svc.title,
            /* @__PURE__ */ jsx("small", { className: "text-[11px] text-[#999] mt-[2px]", children: svc.sub })
          ] }, i)) })
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/work", className: `${navLinkStyle} ${isActive("/work")}`, children: "Work" }),
        /* @__PURE__ */ jsx(Link, { to: "/insights", className: `${navLinkStyle} ${isActive("/insights")}`, children: "Insights" }),
        /* @__PURE__ */ jsx(Link, { to: "/careers", className: `${navLinkStyle} ${isActive("/careers")}`, children: "Careers" }),
        /* @__PURE__ */ jsx(Link, { to: "/contact", className: "bg-[#0B3B4A] hover:bg-[#082e3a] text-white py-2 px-[22px] ml-3.5 tracking-[.09em] text-[11.5px] font-medium uppercase transition-colors after:hidden", children: "Get in Touch" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "md:hidden flex flex-col gap-[5px] cursor-pointer p-2", onClick: () => setMenuOpen(!menuOpen), children: [
        /* @__PURE__ */ jsx("span", { className: "w-[22px] h-[1.5px] bg-[#0B3B4A] block" }),
        /* @__PURE__ */ jsx("span", { className: "w-[22px] h-[1.5px] bg-[#0B3B4A] block" }),
        /* @__PURE__ */ jsx("span", { className: "w-[22px] h-[1.5px] bg-[#0B3B4A] block" })
      ] })
    ] }),
    menuOpen && /* @__PURE__ */ jsx("div", { className: "md:hidden fixed top-[72px] left-0 right-0 bg-white border-b border-[#DDD8D0] z-[99] py-2 shadow-[0_6px_20px_rgba(0,0,0,.08)]", children: ["Home", "About", "Services", "Work", "Insights", "Careers", "Contact"].map((item) => /* @__PURE__ */ jsx(Link, { to: item === "Home" ? "/" : `/${item.toLowerCase().replace(/ /g, "")}`, className: "block py-3 px-6 text-[12.5px] tracking-[.07em] uppercase text-[#5c5c5c] font-medium border-b border-[#DDD8D0] hover:text-[#0B3B4A] hover:bg-[#FAF8F4]", onClick: closeMenu, children: item }, item)) })
  ] });
}
function Disclaimer() {
  const [show, setShow] = useState(true);
  const [checked, setChecked] = useState(false);
  if (!show) return null;
  return /* @__PURE__ */ jsx("div", { className: "fixed inset-0 bg-[#05161c]/95 z-[9999] flex items-center justify-center p-6", children: /* @__PURE__ */ jsxs("div", { className: "bg-white max-w-[560px] w-full p-6 md:p-12 border-t-[3px] border-[#0B3B4A]", children: [
    /* @__PURE__ */ jsxs("div", { className: "font-['Cormorant_Garamond',serif] text-[18px] font-semibold text-[#0B3B4A] tracking-[.04em] mb-8 flex items-center gap-3", children: [
      /* @__PURE__ */ jsx("img", { src: logoUrl$1, alt: "FCC", className: "h-[44px] w-auto" }),
      /* @__PURE__ */ jsxs("div", { children: [
        "Founder's Counsel ",
        /* @__PURE__ */ jsx("span", { className: "text-[#C4912A]", children: "& Co" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("h3", { className: "font-['Cormorant_Garamond',serif] text-[22px] text-[#0B3B4A] mb-4", children: "Disclaimer" }),
    /* @__PURE__ */ jsx("p", { className: "text-[12.5px] leading-[1.9] text-[#5c5c5c] mb-4", children: "The Bar Council of India does not permit advertisement or solicitation by advocates in any form or manner. By accessing this website, you acknowledge and confirm that you are seeking information relating to Founder's Counsel & Co of your own accord and that there has been no form of solicitation, advertisement or inducement." }),
    /* @__PURE__ */ jsx("p", { className: "text-[12.5px] leading-[1.9] text-[#5c5c5c] mb-5", children: "The content of this website is for informational purposes only and should not be interpreted as soliciting or advertisement. No material or information provided on this website should be construed as legal advice." }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-3 items-start mb-7", children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "checkbox",
          id: "dc",
          className: "mt-1 accent-[#0B3B4A] shrink-0",
          checked,
          onChange: (e) => setChecked(e.target.checked)
        }
      ),
      /* @__PURE__ */ jsx("label", { htmlFor: "dc", className: "text-[12px] text-[#5c5c5c] leading-[1.7]", children: "I have read and understood the above. I am seeking information voluntarily and without solicitation." })
    ] }),
    /* @__PURE__ */ jsx(
      "button",
      {
        className: "bg-[#0B3B4A] hover:bg-[#082e3a] text-white border-none py-[14px] px-8 text-[11.5px] font-semibold tracking-[.12em] uppercase cursor-pointer w-full transition-colors font-['Inter',sans-serif]",
        onClick: () => {
          if (!checked) alert("Please tick the checkbox to proceed.");
          else setShow(false);
        },
        children: "Proceed to Website"
      }
    )
  ] }) });
}
const logoUrl = "/assets/logo-3fwvA41y.png";
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { className: "bg-[#052028] pt-11 px-6 md:px-12 pb-7 font-['Inter',sans-serif]", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 pb-10 border-b border-white/10", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "font-['Cormorant_Garamond',serif] text-[17px] font-semibold text-white/70 tracking-[.04em] mb-3.5 flex items-center gap-2.5", children: [
          /* @__PURE__ */ jsx("img", { src: logoUrl, alt: "FCC", className: "h-[36px] w-auto opacity-75" }),
          /* @__PURE__ */ jsxs("div", { children: [
            "Founder's Counsel ",
            /* @__PURE__ */ jsx("span", { className: "text-[#C4912A]", children: "&" }),
            " Co"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-[12.5px] text-white/40 leading-[1.7]", children: [
          "Corporate legal advisory for founders",
          /* @__PURE__ */ jsx("br", {}),
          "and growing businesses. Bengaluru."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ jsx("div", { className: "text-[10px] tracking-[.2em] uppercase text-[#C4912A] font-semibold mb-4.5", children: "Firm" }),
        /* @__PURE__ */ jsx(Link, { to: "/about", className: "text-[13px] text-white/45 mb-2.5 hover:text-white/80 transition-colors", children: "About" }),
        /* @__PURE__ */ jsx(Link, { to: "/services", className: "text-[13px] text-white/45 mb-2.5 hover:text-white/80 transition-colors", children: "Services" }),
        /* @__PURE__ */ jsx(Link, { to: "/work", className: "text-[13px] text-white/45 mb-2.5 hover:text-white/80 transition-colors", children: "Work" }),
        /* @__PURE__ */ jsx(Link, { to: "/careers", className: "text-[13px] text-white/45 mb-2.5 hover:text-white/80 transition-colors", children: "Careers" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ jsx("div", { className: "text-[10px] tracking-[.2em] uppercase text-[#C4912A] font-semibold mb-4.5", children: "Practice Areas" }),
        ["Corporate Advisory", "Contracts & Commercial", "Transactions", "Real Estate", "Fractional GC"].map((svc) => /* @__PURE__ */ jsx(Link, { to: "/services", className: "text-[13px] text-white/45 mb-2.5 hover:text-white/80 transition-colors", children: svc }, svc))
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ jsx("div", { className: "text-[10px] tracking-[.2em] uppercase text-[#C4912A] font-semibold mb-4.5", children: "Contact" }),
        /* @__PURE__ */ jsx("p", { className: "text-[13px] text-white/45 leading-[1.7]", children: "sathwik@founderscounsel.in" }),
        /* @__PURE__ */ jsx("p", { className: "text-[13px] text-white/45 leading-[1.7] mt-2", children: "+91 98450 00000" }),
        /* @__PURE__ */ jsx("p", { className: "text-[13px] text-white/45 leading-[1.7] mt-2", children: "Bengaluru, Karnataka" }),
        /* @__PURE__ */ jsx("a", { href: "https://in.linkedin.com/in/sathwikputta", className: "text-[13px] text-white/45 mt-3 hover:text-white/80 transition-colors", children: "LinkedIn" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "pt-7 flex items-center justify-between gap-5 flex-wrap", children: [
      /* @__PURE__ */ jsx("span", { className: "text-[12px] text-white/30", children: "© 2026 Founder's Counsel & Co. All rights reserved." }),
      /* @__PURE__ */ jsx("p", { className: "text-[11px] text-white/30 max-w-[620px] leading-[1.6]", children: "The Bar Council of India does not permit advertisement or solicitation by advocates. This website is for informational purposes only and does not constitute legal advice." })
    ] })
  ] });
}
const HomePage = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Founders Counsel",
    "url": "https://founderscounsel.co/",
    "description": "Expert legal, strategic, and advisory services for startup founders, entrepreneurs, and growing businesses."
  };
  return /* @__PURE__ */ jsxs("div", { className: "w-full min-h-screen bg-transparent", children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Founders Counsel | Legal & Advisory Services for Startups" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Founders Counsel provides expert legal, strategic, and advisory services for startup founders, entrepreneurs, and growing businesses." }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: "founders counsel, startup lawyer, legal advisory for founders, corporate law for startups, entrepreneur counsel, legal services" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Founders Counsel | Legal & Advisory Services for Startups" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "Expert legal, strategic, and advisory services for startup founders and growing businesses." }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://founderscounsel.co/" }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsx("meta", { property: "og:site_name", content: "Founders Counsel" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: "Founders Counsel | Legal & Advisory Services for Startups" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: "Expert legal, strategic, and advisory services for startup founders and growing businesses." }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://founderscounsel.co/" }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(schemaData) })
    ] }),
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx(Disclaimer, {}),
    /* @__PURE__ */ jsx(Home, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
function MeetingScheduler() {
  const meetingUrl = "https://meet.brevo.com/kaliq-media-blr/borderless?l=30-minute-meeting";
  return /* @__PURE__ */ jsxs("section", { className: "w-full min-h-[90dvh] flex flex-col items-center justify-center bg-black font-poppins py-12 px-6 selection:bg-[#D4AF37]/30", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-10 shrink-0", children: [
      /* @__PURE__ */ jsx("span", { className: "text-[10px] uppercase tracking-[0.4em] text-[#D4AF37] font-semibold mb-3 block", children: "Founders Counsel" }),
      /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-5xl font-bold text-white tracking-tight", children: [
        "Secure your ",
        /* @__PURE__ */ jsx("span", { className: "text-[#D4AF37] italic", children: "time." })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "w-full max-w-5xl relative group", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute -inset-1 bg-gradient-to-r from-gray-500 to-gray-300 rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-1000" }),
      /* @__PURE__ */ jsx(
        "iframe",
        {
          src: meetingUrl,
          width: "100%",
          height: "650px",
          className: "relative w-full bg-gradient-to-br from-slate-50 via-zinc-100 to-gray-300 rounded-xl shadow-2xl border border-white/20 overflow-hidden",
          style: {
            border: "none"
          },
          title: "Meeting Scheduler"
        }
      )
    ] }),
    /* @__PURE__ */ jsx("p", { className: "mt-8 text-gray-500 text-xs tracking-widest uppercase opacity-50", children: "Secure Encryption • Instant Confirmation" })
  ] });
}
const SathwikMeetingCalendar = () => {
  return /* @__PURE__ */ jsxs("div", { className: "w-full min-h-screen bg-black", children: [
    /* @__PURE__ */ jsx(BlogHeader, {}),
    /* @__PURE__ */ jsx(MeetingScheduler, {})
  ] });
};
const testimonials = [
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
function TestimonialCarousel() {
  const [cur, setCur] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setCur((prev) => (prev + 1) % testimonials.length);
    }, 6e3);
    return () => clearInterval(timer);
  }, [paused]);
  const goTo = (i) => setCur(i);
  return /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden mt-11", onMouseEnter: () => setPaused(true), onMouseLeave: () => setPaused(false), children: [
    /* @__PURE__ */ jsx("div", { className: "flex transition-transform duration-600 ease-[cubic-bezier(.4,0,.2,1)]", style: { transform: `translateX(-${cur * 100}%)` }, children: testimonials.map((t, idx) => /* @__PURE__ */ jsxs("div", { className: "min-w-full px-1 box-border", children: [
      /* @__PURE__ */ jsx("p", { className: "font-['Cormorant_Garamond',serif] text-[22px] text-white/90 leading-[1.7] italic mb-7 relative pt-8 before:content-['\\201C'] before:font-['Cormorant_Garamond',serif] before:text-[80px] before:text-[#C4912A] before:opacity-40 before:absolute before:-top-4 before:-left-2 before:leading-none", children: t.quote }),
      /* @__PURE__ */ jsx("div", { className: "text-[13px] text-[#C4912A] font-semibold tracking-[.06em]", children: t.who }),
      /* @__PURE__ */ jsx("div", { className: "text-[12px] text-white/40 mt-1 tracking-[.02em]", children: t.co }),
      /* @__PURE__ */ jsx("div", { className: "text-[10.5px] text-white/30 mt-1.5 tracking-[.08em] uppercase", children: t.li })
    ] }, idx)) }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-5 mt-10", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "bg-transparent border border-white/20 text-white/60 w-9 h-9 rounded-full cursor-pointer text-[16px] flex items-center justify-center transition-all hover:border-[#C4912A] hover:text-[#C4912A]",
          onClick: () => goTo((cur - 1 + testimonials.length) % testimonials.length),
          children: "←"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "flex gap-2 items-center", children: testimonials.map((_, idx) => /* @__PURE__ */ jsx(
        "button",
        {
          className: `border-none p-0 cursor-pointer transition-all duration-300 ${idx === cur ? "bg-[#C4912A] w-[22px] h-1.5 rounded-[3px]" : "bg-white/25 w-1.5 h-1.5 rounded-full"}`,
          onClick: () => goTo(idx)
        },
        idx
      )) }),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "bg-transparent border border-white/20 text-white/60 w-9 h-9 rounded-full cursor-pointer text-[16px] flex items-center justify-center transition-all hover:border-[#C4912A] hover:text-[#C4912A]",
          onClick: () => goTo((cur + 1) % testimonials.length),
          children: "→"
        }
      )
    ] })
  ] });
}
const profileUrl = "/assets/SathwikFcc-CbTW3jJr.png";
function About() {
  return /* @__PURE__ */ jsxs("div", { className: "pt-[72px] font-['Inter',sans-serif]", children: [
    /* @__PURE__ */ jsx("div", { className: "bg-[#052028] py-14 px-6 md:px-[52px]", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-[260px_1fr] gap-12 items-start max-w-[1100px]", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-[200px] md:max-w-full", children: [
        /* @__PURE__ */ jsx("img", { src: profileUrl, alt: "Sathwik Putta", className: "w-full block" }),
        /* @__PURE__ */ jsx("p", { className: "text-[10.5px] tracking-[.15em] uppercase text-white/35 mt-2.5", children: "Sathwik Putta" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h1", { className: "font-['Cormorant_Garamond',serif] text-[46px] text-white font-normal leading-none mb-1.5", children: "Sathwik Putta" }),
        /* @__PURE__ */ jsx("p", { className: "text-[11px] tracking-[.18em] uppercase text-[#C4912A] font-semibold mb-7", children: "Founder & Chief Counsel" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4 text-[14.5px] leading-[1.9] text-white/70 font-light", children: [
          /* @__PURE__ */ jsx("p", { children: "Sathwik Putta founded Founder's Counsel & Co after over 12 years working across in-house legal roles and private practice. His experience spans growth-stage startups, mid-market businesses, and transactions across sectors - giving him a ground-level understanding of how legal decisions play out inside real businesses." }),
          /* @__PURE__ */ jsx("p", { children: "FCC is built on a single conviction: that founders and growing businesses deserve the same quality of legal thinking that large corporates take for granted, without the overhead, the distance, or the billing structures that make good counsel feel inaccessible." }),
          /* @__PURE__ */ jsx("p", { children: "Sathwik is an advocate enrolled with the Bar Council of Karnataka and practices primarily in Bengaluru, advising clients across India." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "about-body bg-white", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 border-b border-[#0B3B4A]/10", children: [
        /* @__PURE__ */ jsxs("div", { className: "p-6 md:p-12 md:border-r border-[#0B3B4A]/10 border-b md:border-b-0", children: [
          /* @__PURE__ */ jsx("div", { className: "text-[11px] tracking-[.2em] uppercase text-[#C4912A] font-semibold mb-5", children: "The Problem He Saw" }),
          /* @__PURE__ */ jsx("h3", { className: "font-['Cormorant_Garamond',serif] text-[24px] text-[#0B3B4A] mb-4.5 font-medium leading-[1.2]", children: "Founders build through key legal moments without counsel that has seen them from the inside." }),
          /* @__PURE__ */ jsx("p", { className: "text-[14px] leading-[1.85] text-[#5c5c5c]", children: "Structuring, fundraising, first hires, vendor crises - these are legal inflection points. Most businesses handle them with generic templates, overpriced retainers, or no counsel at all. The cost only becomes visible later - in a poorly drafted shareholder agreement, an unenforceable contract, or an avoidable dispute. FCC exists to close that gap." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-6 md:p-12", children: [
          /* @__PURE__ */ jsx("div", { className: "text-[11px] tracking-[.2em] uppercase text-[#C4912A] font-semibold mb-5", children: "Career at a Glance" }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-[110px_1fr] gap-5 py-4.5 border-b border-[#0B3B4A]/10", children: [
              /* @__PURE__ */ jsx("div", { className: "text-[12px] text-[#C4912A] font-semibold tracking-[.04em] pt-0.5", children: "2024 - Now" }),
              /* @__PURE__ */ jsxs("div", { className: "text-[13.5px] text-[#5c5c5c] leading-[1.65]", children: [
                /* @__PURE__ */ jsx("strong", { className: "text-[#0B3B4A] font-semibold", children: "Founder & Chief Counsel" }),
                ", Founder's Counsel & Co, Bengaluru"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-[110px_1fr] gap-5 py-4.5 border-b border-[#0B3B4A]/10", children: [
              /* @__PURE__ */ jsx("div", { className: "text-[12px] text-[#C4912A] font-semibold tracking-[.04em] pt-0.5", children: "2018 - 2024" }),
              /* @__PURE__ */ jsxs("div", { className: "text-[13.5px] text-[#5c5c5c] leading-[1.65]", children: [
                /* @__PURE__ */ jsx("strong", { className: "text-[#0B3B4A] font-semibold", children: "Senior In-House Counsel" }),
                ", growth-stage & mid-market companies - technology, healthcare, manufacturing"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-[110px_1fr] gap-5 py-4.5 border-b border-[#0B3B4A]/10", children: [
              /* @__PURE__ */ jsx("div", { className: "text-[12px] text-[#C4912A] font-semibold tracking-[.04em] pt-0.5", children: "2014 - 2018" }),
              /* @__PURE__ */ jsxs("div", { className: "text-[13.5px] text-[#5c5c5c] leading-[1.65]", children: [
                /* @__PURE__ */ jsx("strong", { className: "text-[#0B3B4A] font-semibold", children: "Associate" }),
                ", corporate law firm - M&A, commercial contracts, regulatory"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-[110px_1fr] gap-5 py-4.5", children: [
              /* @__PURE__ */ jsx("div", { className: "text-[12px] text-[#C4912A] font-semibold tracking-[.04em] pt-0.5", children: "2012 - 2014" }),
              /* @__PURE__ */ jsxs("div", { className: "text-[13.5px] text-[#5c5c5c] leading-[1.65]", children: [
                /* @__PURE__ */ jsx("strong", { className: "text-[#0B3B4A] font-semibold", children: "LL.B." }),
                " - enrolled with Bar Council of Karnataka"
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-[#FAF8F4] py-12 px-6 md:px-[52px]", children: [
        /* @__PURE__ */ jsxs("div", { className: "pb-9", children: [
          /* @__PURE__ */ jsx("span", { className: "text-[11px] tracking-[.22em] uppercase text-[#C4912A] font-semibold block mb-2", children: "Industries" }),
          /* @__PURE__ */ jsx("h2", { className: "font-['Cormorant_Garamond',serif] text-[clamp(28px,3vw,40px)] text-[#0B3B4A] font-normal leading-[1.2]", children: "Domain familiarity that shapes the counsel." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-px bg-[#DDD8D0] mt-9", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-[#FAF8F4] p-7 md:px-8", children: [
            /* @__PURE__ */ jsx("div", { className: "font-['Cormorant_Garamond',serif] text-[17px] text-[#0B3B4A] font-medium mb-1.5", children: "Technology & SaaS" }),
            /* @__PURE__ */ jsx("p", { className: "text-[12.5px] text-[#5c5c5c] leading-[1.6]", children: "Product companies, B2B SaaS, and tech-enabled services" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-[#FAF8F4] p-7 md:px-8", children: [
            /* @__PURE__ */ jsx("div", { className: "font-['Cormorant_Garamond',serif] text-[17px] text-[#0B3B4A] font-medium mb-1.5", children: "Healthcare & MedTech" }),
            /* @__PURE__ */ jsx("p", { className: "text-[12.5px] text-[#5c5c5c] leading-[1.6]", children: "Regulated sector with compliance-heavy commercial decisions" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-[#FAF8F4] p-7 md:px-8", children: [
            /* @__PURE__ */ jsx("div", { className: "font-['Cormorant_Garamond',serif] text-[17px] text-[#0B3B4A] font-medium mb-1.5", children: "Manufacturing" }),
            /* @__PURE__ */ jsx("p", { className: "text-[12.5px] text-[#5c5c5c] leading-[1.6]", children: "Vendor contracts, supply chain documentation, premises" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-[#FAF8F4] p-7 md:px-8", children: [
            /* @__PURE__ */ jsx("div", { className: "font-['Cormorant_Garamond',serif] text-[17px] text-[#0B3B4A] font-medium mb-1.5", children: "Real Estate" }),
            /* @__PURE__ */ jsx("p", { className: "text-[12.5px] text-[#5c5c5c] leading-[1.6]", children: "Developers, operators, and businesses with property needs" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-[#FAF8F4] p-7 md:px-8", children: [
            /* @__PURE__ */ jsx("div", { className: "font-['Cormorant_Garamond',serif] text-[17px] text-[#0B3B4A] font-medium mb-1.5", children: "Financial Services" }),
            /* @__PURE__ */ jsx("p", { className: "text-[12.5px] text-[#5c5c5c] leading-[1.6]", children: "Fintech, NBFCs, and investment-linked businesses" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-[#FAF8F4] p-7 md:px-8", children: [
            /* @__PURE__ */ jsx("div", { className: "font-['Cormorant_Garamond',serif] text-[17px] text-[#0B3B4A] font-medium mb-1.5", children: "Professional Services" }),
            /* @__PURE__ */ jsx("p", { className: "text-[12.5px] text-[#5c5c5c] leading-[1.6]", children: "Consulting firms, agencies, and service businesses" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "bg-[#0B3B4A] py-16", children: /* @__PURE__ */ jsxs("div", { className: "max-w-[820px] mx-auto px-6 md:px-12", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "text-[11px] tracking-[.22em] uppercase text-[#C4912A] font-semibold block mb-2", children: "What Clients Say" }),
          /* @__PURE__ */ jsx("h2", { className: "font-['Cormorant_Garamond',serif] text-[clamp(28px,3vw,40px)] text-white font-normal leading-[1.2]", children: "Trusted by founders, MSMEs and growing businesses." })
        ] }),
        /* @__PURE__ */ jsx(TestimonialCarousel, {})
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-[#0B3B4A] py-14 px-6 md:px-[52px] flex items-center justify-between gap-10 flex-wrap", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "font-['Cormorant_Garamond',serif] text-[clamp(26px,3vw,42px)] text-white font-normal leading-[1.25] mb-4", children: [
          "Ready for legal support that",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("em", { className: "text-[#C4912A] italic", children: "thinks like you do?" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-[13.5px] text-white/55 leading-[1.7] max-w-[480px]", children: "Direct access to senior counsel. No associates, no overhead, no runaround." })
      ] }),
      /* @__PURE__ */ jsx(Link, { to: "/contact", className: "bg-[#C4912A] hover:bg-[#a87822] text-white py-3.5 px-8 text-[12px] font-semibold tracking-[.1em] uppercase inline-block transition-colors", children: "Get in Touch" })
    ] })
  ] });
}
const AboutPage = () => {
  return /* @__PURE__ */ jsxs("div", { className: "w-full min-h-screen bg-transparent", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx(About, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
function ServiceCard({ num, title, sub, desc1, desc2, tags, isOpen, onToggle }) {
  return /* @__PURE__ */ jsxs("div", { className: "border-b border-[#DDD8D0] first:border-t overflow-hidden", children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: "flex items-center justify-between py-7 cursor-pointer gap-6 transition-colors group",
        onClick: onToggle,
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsx("div", { className: "text-[10.5px] tracking-[.2em] uppercase text-[#C4912A] font-semibold mb-2", children: num }),
            /* @__PURE__ */ jsx("div", { className: `font-['Cormorant_Garamond',serif] text-[clamp(20px,2.2vw,28px)] font-medium leading-[1.2] transition-colors ${isOpen ? "text-[#0B3B4A]" : "text-[#1A1A1A] group-hover:text-[#0B3B4A]"}`, children: title }),
            /* @__PURE__ */ jsx("div", { className: "text-[12.5px] text-[#5c5c5c] mt-1.5 tracking-[.01em]", children: sub })
          ] }),
          /* @__PURE__ */ jsx("div", { className: `w-9 h-9 border rounded-full flex items-center justify-center shrink-0 transition-all duration-300 text-[18px] font-light leading-none ${isOpen ? "bg-[#0B3B4A] border-[#0B3B4A] text-white rotate-45" : "border-[#DDD8D0] text-[#5c5c5c]"}`, children: "+" })
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: `transition-all duration-500 overflow-hidden ${isOpen ? "max-h-[600px]" : "max-h-0"}`, children: /* @__PURE__ */ jsxs("div", { className: "pb-9", children: [
      /* @__PURE__ */ jsx("p", { className: "text-[14px] leading-[1.9] text-[#5c5c5c] max-w-[720px] mb-3.5", children: desc1 }),
      /* @__PURE__ */ jsx("p", { className: "text-[14px] leading-[1.9] text-[#5c5c5c] max-w-[720px] mb-3.5", children: desc2 }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 mt-5", children: tags.map((tag, idx) => /* @__PURE__ */ jsx("span", { className: "text-[11px] tracking-[.06em] uppercase text-[#0B3B4A] bg-[#F2EDE5] py-1.5 px-3.5 font-medium rounded-[2px]", children: tag }, idx)) })
    ] }) })
  ] });
}
const servicesData = [
  {
    num: "01 — Corporate Advisory & Structuring",
    title: "Getting the foundation right.",
    sub: "Entity setup · Shareholder agreements · Governance · Restructuring",
    desc1: "The structure of your company shapes everything downstream from how investors come in to how founders exit. FCC advises on entity setup, shareholder agreements, governance, and restructuring with the goal of building something that holds up as the business grows.",
    desc2: "Whether you are setting up for the first time or untangling structures that no longer serve the business, the foundation matters more than most founders realise until something breaks.",
    tags: ["Private Limited Companies", "LLPs", "Shareholder Agreements", "ESOP Structuring", "Board Governance"]
  },
  {
    num: "02 — Contracts & Commercial Agreements",
    title: "Agreements that reflect what you actually agreed.",
    sub: "Drafting · Review · Negotiation · Dispute prevention",
    desc1: "Contracts are the operating layer of any business. FCC drafts, reviews, and negotiates commercial agreements with a focus on clarity, enforceability, and protecting your interests  without making it impossible to do business.",
    desc2: "A well-drafted contract is the cheapest form of dispute resolution. Most problems that end up in litigation started with a contract that didn't say what both sides thought it did.",
    tags: ["Vendor Agreements", "Client MSAs", "SaaS Contracts", "Employment Agreements", "NDAs"]
  },
  {
    num: "03 — Transactions & Deals",
    title: "Deals done right.",
    sub: "Fundraising · Acquisitions · JVs · Term sheets",
    desc1: "Whether you are raising a round, acquiring a business, or entering a joint venture, the legal work around the deal determines how clean and durable the outcome is. FCC supports founders through the full transaction lifecycle from term sheet review to closing documentation.",
    desc2: "Deals have momentum. FCC is built to move with that momentum, not against it while making sure the protections are actually in place.",
    tags: ["Seed & Pre-Series A", "Term Sheet Review", "SHA / SSA Drafting", "Due Diligence Support", "Asset Acquisitions"]
  },
  {
    num: "04 — Real Estate & Premises",
    title: "Premises without the problems.",
    sub: "Leases · Warehouse agreements · Property documentation",
    desc1: "Office leases, warehouse agreements, and property acquisitions involve more legal risk than most businesses expect. FCC reviews, drafts, and negotiates real estate documentation with a focus on protecting your operational and financial interests.",
    desc2: "The fine print in a commercial lease often comes back in the form of locked-in costs, unclear exit clauses, or liability for fixtures. FCC catches it before you sign.",
    tags: ["Commercial Leases", "Leave & Licence", "Warehouse & Logistics", "Property Due Diligence"]
  },
  {
    num: "05 — Fractional General Counsel",
    title: "Senior legal leadership, without the full-time hire.",
    sub: "Embedded counsel · Strategic advisory · Ongoing support",
    desc1: "For businesses that need more than occasional advice but are not ready for a full-time in-house counsel, FCC's Fractional GC model provides embedded legal leadership. Sathwik works alongside your team, understands your business in depth, and gives you the kind of counsel that used to require a full-time hire.",
    desc2: "This is not a retainer for quick queries. It is a model for businesses that want legal thinking embedded in how they operate available at the table, not just when something goes wrong.",
    tags: ["Monthly Engagement", "Strategic Legal Review", "Contract Calendar", "HR Legal Support"]
  }
];
function ServicesPage$1() {
  const [openCardIndex, setOpenCardIndex] = useState(null);
  const toggleCard = (index) => {
    setOpenCardIndex(openCardIndex === index ? null : index);
  };
  return /* @__PURE__ */ jsxs("div", { className: "pt-[72px] font-['Inter',sans-serif]", children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-[#052028] py-12 md:py-[52px] px-6 md:px-[52px]", children: [
      /* @__PURE__ */ jsx("p", { className: "text-[11px] tracking-[.22em] uppercase text-[#C4912A] font-semibold mb-5", children: "Practice Areas" }),
      /* @__PURE__ */ jsxs("h1", { className: "font-['Cormorant_Garamond',serif] text-[clamp(38px,5.5vw,70px)] text-white font-normal leading-none tracking-[-.01em]", children: [
        "Five practice areas.",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("em", { className: "text-[#C4912A] italic", children: "One standard of work." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-[14px] text-white/60 mt-5 max-w-[540px] leading-[1.8]", children: "Each service reflects the real legal needs of businesses at the stage FCC is built to serve." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "bg-white max-w-[1160px] mx-auto py-12 px-6 md:px-12", children: servicesData.map((svc, idx) => /* @__PURE__ */ jsx(
      ServiceCard,
      {
        ...svc,
        isOpen: openCardIndex === idx,
        onToggle: () => toggleCard(idx)
      },
      idx
    )) }),
    /* @__PURE__ */ jsxs("div", { className: "bg-[#FAF8F4] py-12 px-6 md:px-[52px]", children: [
      /* @__PURE__ */ jsxs("div", { className: "pb-9", children: [
        /* @__PURE__ */ jsx("span", { className: "text-[11px] tracking-[.22em] uppercase text-[#C4912A] font-semibold block mb-2", children: "Engagement" }),
        /* @__PURE__ */ jsx("h2", { className: "font-['Cormorant_Garamond',serif] text-[clamp(28px,3vw,40px)] text-[#0B3B4A] font-normal leading-[1.2]", children: "Four models. One standard of work." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-px bg-[#DDD8D0] mt-10", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-[#FAF8F4] p-7", children: [
          /* @__PURE__ */ jsx("div", { className: "font-['Cormorant_Garamond',serif] text-[36px] text-[#0B3B4A]/10 font-bold mb-2.5", children: "01" }),
          /* @__PURE__ */ jsx("div", { className: "font-['Cormorant_Garamond',serif] text-[21px] text-[#0B3B4A] font-medium mb-2.5", children: "Matter-Specific Engagement" }),
          /* @__PURE__ */ jsx("p", { className: "text-[13.5px] text-[#5c5c5c] leading-[1.75]", children: "A specific matter a contract to review, a dispute to resolve, a deal to close. Scoped, priced, and delivered start to finish." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-[#FAF8F4] p-7", children: [
          /* @__PURE__ */ jsx("div", { className: "font-['Cormorant_Garamond',serif] text-[36px] text-[#0B3B4A]/10 font-bold mb-2.5", children: "02" }),
          /* @__PURE__ */ jsx("div", { className: "font-['Cormorant_Garamond',serif] text-[21px] text-[#0B3B4A] font-medium mb-2.5", children: "Fractional GC" }),
          /* @__PURE__ */ jsx("p", { className: "text-[13.5px] text-[#5c5c5c] leading-[1.75]", children: "An ongoing engagement where Sathwik functions as your embedded general counsel available for day-to-day queries, reviews, and strategic decisions. Billed monthly." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-[#FAF8F4] p-7", children: [
          /* @__PURE__ */ jsx("div", { className: "font-['Cormorant_Garamond',serif] text-[36px] text-[#0B3B4A]/10 font-bold mb-2.5", children: "03" }),
          /* @__PURE__ */ jsx("div", { className: "font-['Cormorant_Garamond',serif] text-[21px] text-[#0B3B4A] font-medium mb-2.5", children: "Transaction Support" }),
          /* @__PURE__ */ jsx("p", { className: "text-[13.5px] text-[#5c5c5c] leading-[1.75]", children: "Full-cycle support for a fundraise, acquisition, or significant commercial deal from term sheet to closing." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-[#FAF8F4] p-7", children: [
          /* @__PURE__ */ jsx("div", { className: "font-['Cormorant_Garamond',serif] text-[36px] text-[#0B3B4A]/10 font-bold mb-2.5", children: "04" }),
          /* @__PURE__ */ jsx("div", { className: "font-['Cormorant_Garamond',serif] text-[21px] text-[#0B3B4A] font-medium mb-2.5", children: "Legal Audit & Review" }),
          /* @__PURE__ */ jsx("p", { className: "text-[13.5px] text-[#5c5c5c] leading-[1.75]", children: "A structured review of your contracts and legal position identifying risk before it surfaces. Useful before a fundraise or significant new engagement." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-[#0B3B4A] py-14 px-6 md:px-[52px] flex items-center justify-between gap-10 flex-wrap", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "font-['Cormorant_Garamond',serif] text-[clamp(26px,3vw,42px)] text-white font-normal leading-[1.25] mb-4", children: [
          "Not sure which model fits?",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("em", { className: "text-[#C4912A] italic", children: "Let's find out." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-[13.5px] text-white/55 leading-[1.7] max-w-[480px]", children: "A short conversation is usually enough to identify the right starting point." })
      ] }),
      /* @__PURE__ */ jsx(Link, { to: "/contact", className: "bg-[#C4912A] hover:bg-[#a87822] text-white py-3.5 px-8 text-[12px] font-semibold tracking-[.1em] uppercase inline-block transition-colors", children: "Get in Touch" })
    ] })
  ] });
}
const ServicesPage = () => {
  return /* @__PURE__ */ jsxs("div", { className: "w-full min-h-screen bg-white", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx(ServicesPage$1, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
function WorkRow({ tag, title, situation, action, outcome }) {
  const [isOpen, setIsOpen] = useState(false);
  return /* @__PURE__ */ jsxs("div", { className: "border-b border-[#DDD8D0]", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between py-6 px-6 md:px-[52px] cursor-pointer transition-colors hover:bg-[#FAF8F4] gap-6 group", onClick: () => setIsOpen(!isOpen), children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-[11px] tracking-[.16em] uppercase text-[#C4912A] font-semibold mb-2", children: tag }),
        /* @__PURE__ */ jsx("div", { className: "font-['Cormorant_Garamond',serif] text-[22px] text-[#0B3B4A] font-medium", children: title })
      ] }),
      /* @__PURE__ */ jsx("div", { className: `text-[24px] font-light transition-colors shrink-0 ${isOpen ? "text-[#C4912A]" : "text-[#DDD8D0] group-hover:text-[#C4912A]"}`, children: isOpen ? "-" : "+" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: `${isOpen ? "block" : "hidden"} px-6 md:px-[52px] pb-10`, children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-10 mt-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-[10.5px] tracking-[.18em] uppercase text-[#999] font-semibold mb-3", children: "Situation" }),
          /* @__PURE__ */ jsx("p", { className: "text-[13.5px] text-[#5c5c5c] leading-[1.8]", children: situation })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-[10.5px] tracking-[.18em] uppercase text-[#999] font-semibold mb-3", children: "What FCC Did" }),
          /* @__PURE__ */ jsx("p", { className: "text-[13.5px] text-[#5c5c5c] leading-[1.8]", children: action })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-[#F2EDE5] border-l-[3px] border-[#C4912A] py-4.5 px-6 mt-6", children: [
        /* @__PURE__ */ jsx("div", { className: "text-[10px] tracking-[.18em] uppercase text-[#C4912A] font-semibold mb-1.5", children: "Outcome" }),
        /* @__PURE__ */ jsx("div", { className: "text-[13.5px] text-[#0B3B4A] font-medium leading-[1.65]", children: outcome })
      ] })
    ] })
  ] });
}
function Work() {
  return /* @__PURE__ */ jsxs("div", { className: "pt-[72px] font-['Inter',sans-serif]", children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-[#052028] pt-12 pb-11 px-6 md:px-[52px]", children: [
      /* @__PURE__ */ jsx("p", { className: "text-[11px] tracking-[.16em] md:tracking-[.22em] uppercase text-[#C4912A] font-semibold mb-5", children: "Selected Matters" }),
      /* @__PURE__ */ jsxs("h1", { className: "font-['Cormorant_Garamond',serif] text-[clamp(38px,5.5vw,70px)] text-white font-normal leading-none tracking-[-.01em]", children: [
        "Real matters.",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("em", { className: "text-[#C4912A] italic", children: "Real outcomes." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-[14px] text-white/60 mt-5 max-w-[500px] leading-[1.8]", children: "Details anonymised to protect client confidentiality." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-white", children: [
      /* @__PURE__ */ jsx(
        WorkRow,
        {
          tag: "Commercial Dispute — MedTech",
          title: "Vendor walkout mid-delivery, operations at risk",
          situation: "A MedTech startup's key vendor threatened to walk out mid-delivery, citing payment disputes and unclear contract terms. Operations were at risk of shutting down.",
          action: "Reviewed the existing vendor agreement, identified enforceable obligations on both sides, and led a structured renegotiation. Drafted a revised agreement with clear payment milestones and dispute resolution terms.",
          outcome: "Operations continued without interruption. Revised agreement in place within two weeks."
        }
      ),
      /* @__PURE__ */ jsx(
        WorkRow,
        {
          tag: "Payment Dispute — B2B SaaS",
          title: "Large client refusing to pay, citing alleged service failures",
          situation: "A B2B SaaS company had a large client refuse to pay a substantial invoice, citing alleged service failures with no prior written notice.",
          action: "Analysed the service agreement, usage logs, and correspondence history. Built a documented position establishing service levels had been met, and issued a formal demand supported by contract clauses.",
          outcome: "Invoice paid in full. Matter resolved without litigation."
        }
      ),
      /* @__PURE__ */ jsx(
        WorkRow,
        {
          tag: "Employment — Sensitive Exit",
          title: "Senior exit with IP and client relationship risk",
          situation: "A startup needed to exit a senior employee who had access to critical IP and client relationships. The exit had to be handled carefully to protect the business.",
          action: "Advised on the separation process, drafted a comprehensive settlement and release agreement, and ensured IP assignment and non-solicitation obligations were properly documented.",
          outcome: "Clean exit. IP protected. No post-exit disputes."
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-[#0B3B4A] py-14 px-6 md:px-[52px] flex items-center justify-between gap-10 flex-wrap", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "font-['Cormorant_Garamond',serif] text-[clamp(26px,3vw,42px)] text-white font-normal leading-[1.25] mb-4", children: [
          "Have a matter that needs ",
          /* @__PURE__ */ jsx("em", { className: "text-[#C4912A] italic", children: "careful handling?" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-[13.5px] text-white/55 leading-[1.7] max-w-[480px]", children: "Every engagement starts with a conversation, not a commitment." })
      ] }),
      /* @__PURE__ */ jsx(
        Link,
        {
          to: "/contact",
          className: "bg-[#C4912A] hover:bg-[#a87822] text-white py-3.5 px-8 text-[12px] font-semibold tracking-[.1em] uppercase inline-block transition-colors",
          children: "Get in Touch"
        }
      )
    ] })
  ] });
}
const WorkPage = () => {
  return /* @__PURE__ */ jsxs("div", { className: "w-full min-h-screen bg-transparent", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx(Work, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
function Insights() {
  return /* @__PURE__ */ jsxs("div", { className: "pt-[72px] font-['Inter',sans-serif]", children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-[#052028] pt-16 pb-14 md:pt-[80px] md:pb-[64px] px-6 md:px-[52px]", children: [
      /* @__PURE__ */ jsx("p", { className: "text-[11px] tracking-[.22em] uppercase text-[#C4912A] font-semibold mb-5", children: "Insights" }),
      /* @__PURE__ */ jsxs("h1", { className: "font-['Cormorant_Garamond',serif] text-[clamp(38px,5.5vw,70px)] text-white font-normal leading-none", children: [
        "Thinking on law,",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("em", { className: "text-[#C4912A] italic", children: "business & practice." })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-white py-14 md:py-[72px] px-6 md:px-[52px]", children: [
      /* @__PURE__ */ jsx("p", { className: "text-[11px] tracking-[.22em] uppercase text-[#C4912A] font-semibold mb-6", children: "Coming Soon" }),
      /* @__PURE__ */ jsx("p", { className: "text-[14px] text-[#5c5c5c] leading-[1.9] max-w-[580px] mb-4", children: "Sathwik writes on the legal questions founders actually face — structuring decisions, contract red flags, what to look out for when raising, and how to handle common disputes." }),
      /* @__PURE__ */ jsxs("p", { className: "text-[14px] text-[#5c5c5c] leading-[1.9] max-w-[580px]", children: [
        "Articles and notes will be published here. In the meantime, follow updates on ",
        /* @__PURE__ */ jsx(Link, { to: "/contact", className: "text-[#0B3B4A] font-medium underline hover:text-[#C4912A] transition-colors", children: "LinkedIn" }),
        "."
      ] })
    ] })
  ] });
}
const InsightsPage = () => {
  return /* @__PURE__ */ jsxs("div", { className: "w-full min-h-screen bg-transparent", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx(Insights, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
function Careers() {
  return /* @__PURE__ */ jsxs("div", { className: "pt-[72px] font-['Inter',sans-serif]", children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-[#052028] pt-16 pb-14 md:pt-[80px] md:pb-[64px] px-6 md:px-[52px]", children: [
      /* @__PURE__ */ jsx("p", { className: "text-[11px] tracking-[.22em] uppercase text-[#C4912A] font-semibold mb-5", children: "Careers" }),
      /* @__PURE__ */ jsxs("h1", { className: "font-['Cormorant_Garamond',serif] text-[clamp(38px,5.5vw,70px)] text-white font-normal leading-none", children: [
        "Work with ",
        /* @__PURE__ */ jsx("em", { className: "text-[#C4912A] italic", children: "Founder's Counsel." })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-white py-14 md:py-[72px] px-6 md:px-[52px]", children: [
      /* @__PURE__ */ jsx("p", { className: "text-[11px] tracking-[.22em] uppercase text-[#C4912A] font-semibold mb-6", children: "Current Openings" }),
      /* @__PURE__ */ jsx("p", { className: "text-[14.5px] text-[#5c5c5c] leading-[1.9] max-w-[620px] mb-4.5", children: "FCC is a boutique practice and we hire selectively. We look for lawyers who think clearly, write well, and are genuinely interested in the commercial context behind legal questions." }),
      /* @__PURE__ */ jsxs("p", { className: "text-[14.5px] text-[#5c5c5c] leading-[1.9] max-w-[620px] mb-4.5", children: [
        "If you are a law graduate or junior associate interested in corporate and commercial work write to us at ",
        /* @__PURE__ */ jsx("strong", { className: "text-[#0B3B4A] font-semibold", children: "sathwik@founderscounsel.in" }),
        " with a brief note about yourself."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-[14.5px] text-[#5c5c5c] leading-[1.9] max-w-[620px] mb-4.5", children: "We do not have open positions listed at all times. If there is a fit, we will find a way to make it work." }),
      /* @__PURE__ */ jsx("div", { className: "mt-9", children: /* @__PURE__ */ jsx(
        Link,
        {
          to: "/contact",
          className: "bg-[#C4912A] hover:bg-[#a87822] text-white py-[13px] px-[30px] text-[11.5px] font-semibold tracking-[.1em] uppercase inline-block transition-colors border-none",
          children: "Write to Us"
        }
      ) })
    ] })
  ] });
}
const CareersPage = () => {
  return /* @__PURE__ */ jsxs("div", { className: "w-full min-h-screen bg-transparent", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx(Careers, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
function Contact() {
  return /* @__PURE__ */ jsx("div", { className: "pt-[72px] font-['Inter',sans-serif]", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 min-h-[calc(100vh-72px)]", children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-[#0B3B4A] py-16 px-6 md:py-[80px] md:px-[56px] flex flex-col justify-between", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-[11px] tracking-[.22em] uppercase text-[#C4912A] font-semibold mb-6", children: "Get in Touch" }),
        /* @__PURE__ */ jsxs("h1", { className: "font-['Cormorant_Garamond',serif] text-[clamp(32px,4vw,54px)] text-white font-normal leading-[1.15] mb-5", children: [
          "Let's talk about",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("em", { className: "text-[#C4912A] italic", children: "your matter." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-[14px] text-white/60 leading-[1.8] max-w-[360px]", children: "No commitment required. A short conversation is usually enough to understand whether FCC can help and how." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-[52px] flex flex-col gap-6", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "text-[10px] tracking-[.2em] uppercase text-[#C4912A] font-semibold mb-1.5", children: "Email" }),
            /* @__PURE__ */ jsx("div", { className: "text-[14px] text-white/80 leading-[1.5]", children: "sathwik@founderscounsel.in" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "text-[10px] tracking-[.2em] uppercase text-[#C4912A] font-semibold mb-1.5", children: "Phone" }),
            /* @__PURE__ */ jsx("div", { className: "text-[14px] text-white/80 leading-[1.5]", children: "+91 98450 00000" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "text-[10px] tracking-[.2em] uppercase text-[#C4912A] font-semibold mb-1.5", children: "Office" }),
            /* @__PURE__ */ jsx("div", { className: "text-[14px] text-white/80 leading-[1.5]", children: "Bengaluru, Karnataka, India" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-[11px] text-white/30 leading-[1.7] border-t border-white/10 pt-5 mt-[52px] md:mt-auto", children: "The Bar Council of India does not permit advocates to advertise or solicit. By submitting this form, you confirm you are reaching out of your own accord." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-[#FAF8F4] py-16 px-6 md:py-[80px] md:px-[56px]", children: [
      /* @__PURE__ */ jsx("p", { className: "text-[11px] tracking-[.2em] uppercase text-[#C4912A] font-semibold mb-9", children: "Send a Message" }),
      /* @__PURE__ */ jsxs("form", { className: "flex flex-col gap-5", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-5", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "text-[11px] tracking-[.1em] uppercase text-[#5c5c5c] font-medium block mb-2", children: "Your Name" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                className: "w-full p-3 md:py-3 md:px-4 bg-white border border-[#DDD8D0] text-[13.5px] text-[#1A1A1A] font-['Inter',sans-serif] outline-none transition-colors duration-200 focus:border-[#0B3B4A] appearance-none",
                placeholder: "Full name"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "text-[11px] tracking-[.1em] uppercase text-[#5c5c5c] font-medium block mb-2", children: "Company / Organisation" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                className: "w-full p-3 md:py-3 md:px-4 bg-white border border-[#DDD8D0] text-[13.5px] text-[#1A1A1A] font-['Inter',sans-serif] outline-none transition-colors duration-200 focus:border-[#0B3B4A] appearance-none",
                placeholder: "Optional"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "text-[11px] tracking-[.1em] uppercase text-[#5c5c5c] font-medium block mb-2", children: "Email Address" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "email",
              className: "w-full p-3 md:py-3 md:px-4 bg-white border border-[#DDD8D0] text-[13.5px] text-[#1A1A1A] font-['Inter',sans-serif] outline-none transition-colors duration-200 focus:border-[#0B3B4A] appearance-none",
              placeholder: "your@email.com"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "text-[11px] tracking-[.1em] uppercase text-[#5c5c5c] font-medium block mb-2", children: "Nature of Matter" }),
          /* @__PURE__ */ jsxs("select", { className: "w-full p-3 md:py-3 md:px-4 bg-white border border-[#DDD8D0] text-[13.5px] text-[#1A1A1A] font-['Inter',sans-serif] outline-none transition-colors duration-200 focus:border-[#0B3B4A] appearance-none cursor-pointer", children: [
            /* @__PURE__ */ jsx("option", { value: "", children: "Select an area" }),
            /* @__PURE__ */ jsx("option", { children: "Corporate Advisory & Structuring" }),
            /* @__PURE__ */ jsx("option", { children: "Contracts & Commercial Agreements" }),
            /* @__PURE__ */ jsx("option", { children: "Transactions & Deals" }),
            /* @__PURE__ */ jsx("option", { children: "Real Estate & Premises" }),
            /* @__PURE__ */ jsx("option", { children: "Fractional GC" }),
            /* @__PURE__ */ jsx("option", { children: "Other / Not Sure" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "text-[11px] tracking-[.1em] uppercase text-[#5c5c5c] font-medium block mb-2", children: "Brief Description" }),
          /* @__PURE__ */ jsx(
            "textarea",
            {
              className: "w-full p-3 md:py-3 md:px-4 bg-white border border-[#DDD8D0] text-[13.5px] text-[#1A1A1A] font-['Inter',sans-serif] min-h-[120px] resize-y outline-none transition-colors duration-200 focus:border-[#0B3B4A] appearance-none",
              placeholder: "Tell us briefly what you are dealing with. Plain English works fine."
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            className: "bg-[#C4912A] hover:bg-[#a87822] text-white border-none py-[15px] text-[12px] font-semibold tracking-[.1em] uppercase cursor-pointer w-full transition-colors mt-2",
            type: "button",
            children: "Send Message"
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "text-[11.5px] text-[#999] leading-[1.6]", children: "By submitting, you confirm you are contacting us voluntarily and without solicitation, in accordance with Bar Council of India Rules." })
      ] })
    ] })
  ] }) });
}
const ContactPage = () => {
  return /* @__PURE__ */ jsxs("div", { className: "w-full min-h-screen bg-transparent", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx(Contact, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const appRoutes = [
  { path: "/", element: /* @__PURE__ */ jsx(HomePage, {}) },
  { path: "/book-a-meeting", element: /* @__PURE__ */ jsx(SathwikMeetingCalendar, {}) },
  { path: "/blogs", element: /* @__PURE__ */ jsx(BlogArchivePage, {}) },
  { path: "/blogs/:slug", element: /* @__PURE__ */ jsx(BlogSinglePage, {}) },
  { path: "/about", element: /* @__PURE__ */ jsx(AboutPage, {}) },
  { path: "/services", element: /* @__PURE__ */ jsx(ServicesPage, {}) },
  { path: "/work", element: /* @__PURE__ */ jsx(WorkPage, {}) },
  { path: "/insights", element: /* @__PURE__ */ jsx(InsightsPage, {}) },
  { path: "/careers", element: /* @__PURE__ */ jsx(CareersPage, {}) },
  { path: "/contact", element: /* @__PURE__ */ jsx(ContactPage, {}) },
  { path: "*", element: /* @__PURE__ */ jsx(NotFound, {}) }
];
const routes = [
  {
    element: /* @__PURE__ */ jsx(React.StrictMode, { children: /* @__PURE__ */ jsxs(HelmetProvider, { children: [
      /* @__PURE__ */ jsx(Outlet, {}),
      " "
    ] }) }),
    // 2. Pass the array we created in App.tsx as the children
    children: appRoutes
  }
];
const createRoot = ViteReactSSG({ routes });
export {
  createRoot
};
