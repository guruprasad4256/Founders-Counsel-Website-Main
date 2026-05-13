import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { Facebook, Linkedin, Send, Eye } from 'lucide-react'; 
import { FiChevronDown } from "react-icons/fi";

// Extending the imported Blog type to include the properties from the Editor
import type { Blog as BaseBlog } from './BlogArchive';
import 'react-quill-new/dist/quill.snow.css'; 

interface Blog extends BaseBlog {
  slug: string; 
  faqs?: { question: string; answer: string }[];
  styling?: {
    fontFamily: string;
    fontSize: string;
    lineHeight: string;
    letterSpacing: string;
  };
  views?: number;
}

const RAW_URL = import.meta.env.VITE_API_URL || 'https://api.manhoursonhire.com';
const SERVER_URL = RAW_URL.replace(/\/+$/, '');

const BlogSingle = () => {
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [viewCount, setViewCount] = useState<number>(0);

  useEffect(() => {
    const fetchBlogAndIncrementViews = async () => {
      if (!slug) return;
      try {
        setLoading(true);
        const baseEndpoint = SERVER_URL.endsWith('/api') 
          ? `/blogs/slug/${slug}` 
          : `/api/blogs/slug/${slug}`;
        const fetchUrl = `${SERVER_URL}${baseEndpoint}`;

        const res = await axios.get<Blog>(fetchUrl);
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

  if (loading) return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-[#0E0B42]">
      <div className="w-10 h-10 border-4 border-[#C4912A]/20 border-t-[#C4912A] rounded-full animate-spin" />
    </div>
  );

  if (!blog) return (
    <div className="text-center py-20 font-bold font-['Inter',sans-serif] text-white bg-[#0E0B42] min-h-[50vh]">
      <h2 className="text-2xl mb-4">Article not found.</h2>
      <a href="/blogs" className="text-[#C4912A] underline hover:text-[#C4912A]/80 transition-colors">Back to Archive</a>
    </div>
  );

  const {
    fontFamily = "'Inter', sans-serif",
    fontSize = "18px",
    lineHeight = "1.8",
    letterSpacing = "-0.01em"
  } = blog.styling || {};

  const processContent = (html: string) => {
    return html.replace(/-/g, '&#8209;');
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-[#0E0B42] text-white py-16 px-6 relative z-10 font-['Inter',sans-serif] w-full"
    >
      <style>{`
        .single-blog-content .ql-editor { 
          padding: 0 !important; 
          font-family: ${fontFamily} !important; 
          line-height: ${lineHeight}; 
          letter-spacing: ${letterSpacing}; 
          color: rgba(255, 255, 255, 0.9) !important; 
          overflow-y: visible;
          white-space: pre-wrap !important; 
          word-break: break-word !important; 
          overflow-wrap: break-word !important;
          hyphens: none !important;
        }
        .single-blog-content .ql-editor p, 
        .single-blog-content .ql-editor li, 
        .single-blog-content .ql-editor span, 
        .single-blog-content .ql-editor div { color: rgba(255, 255, 255, 0.8) !important; }
        
        .single-blog-content .ql-editor h1, 
        .single-blog-content .ql-editor h2, 
        .single-blog-content .ql-editor h3, 
        .single-blog-content .ql-editor h4, 
        .single-blog-content .ql-editor h5, 
        .single-blog-content .ql-editor h6 { 
          color: #C4912A !important; 
          font-family: 'Cormorant Garamond', serif !important;
        }

        .single-blog-content .ql-editor a { color: #C4912A !important; text-decoration: underline; }
        .single-blog-content .ql-editor strong { color: #ffffff !important; font-weight: 700; }
        .single-blog-content .ql-editor ul, .single-blog-content .ql-editor ol { padding-left: 2rem !important; margin-bottom: 1.2em !important; }
        .single-blog-content .ql-editor ul li { list-style-type: disc !important; display: list-item !important; list-style-position: outside !important; padding-left: 0 !important; margin-bottom: 0.5em !important; }
        .single-blog-content .ql-editor ol li { list-style-type: decimal !important; display: list-item !important; list-style-position: outside !important; padding-left: 0 !important; margin-bottom: 0.5em !important; }
        .single-blog-content .ql-editor li::before { display: none !important; }
        
        .single-blog-content .ql-editor h1 { font-size: 2.8rem !important; font-weight: 700; margin-bottom: 0.6em; margin-top: 1.6em; }
        .single-blog-content .ql-editor h2 { font-size: 2.2rem !important; font-weight: 700; margin-top: 1.6em; margin-bottom: 0.6em; }
        .single-blog-content .ql-editor h3 { font-size: 1.7rem !important; font-weight: 600; margin-top: 1.4em; margin-bottom: 0.6em; }
        
        .single-blog-content .ql-editor p { font-size: ${fontSize} !important; margin-bottom: 1.5em; }
        .single-blog-content .ql-editor img { border-radius: 4px; margin: 2rem 0; box-shadow: 0 10px 30px rgba(0,0,0,0.3); max-width: 100%; display: block; border: 1px solid rgba(196, 145, 42, 0.2); }
        
        .single-blog-content .ql-editor blockquote { 
          border-left: 3px solid #C4912A; 
          padding: 1.5rem 2rem; 
          font-style: italic; 
          margin: 2rem 0; 
          color: rgba(255, 255, 255, 0.9) !important; 
          background: rgba(196, 145, 42, 0.05); 
          border-radius: 0 4px 4px 0; 
        }

        .single-blog-content .ql-editor table { border-collapse: collapse; width: 100%; border: 1px solid rgba(196, 145, 42, 0.2); margin: 32px 0; border-radius: 4px; overflow: hidden; }
        .single-blog-content .ql-editor td, .single-blog-content .ql-editor th { border: 1px solid rgba(196, 145, 42, 0.1); padding: 16px; background: rgba(255, 255, 255, 0.02); min-width: 100px; color: rgba(255, 255, 255, 0.8) !important; }
        .single-blog-content .ql-editor tr:first-child td { background-color: rgba(196, 145, 42, 0.1); font-weight: 700; color: #ffffff !important; }
      `}</style>

      <div className="max-w-7xl mx-auto flex flex-col xl:flex-row gap-12 items-start relative">
        <div className="flex-1 min-w-0 w-full py-8 pr-0 sm:py-12 md:py-20 xl:pr-20">
          <h1 className="font-['Cormorant_Garamond',serif] text-4xl md:text-5xl lg:text-6xl font-bold mb-12 leading-[1.15] text-[#C4912A] tracking-tight">
            {blog.title}
          </h1>

          <div className="single-blog-content w-full max-w-none">
            <div className="ql-editor" dangerouslySetInnerHTML={{ __html: processContent(blog.content) }} />
          </div>

          {blog.faqs && blog.faqs.length > 0 && (
            <div className=" pt-16 border-t border-white/10 mt-20">
               <div className="mb-12">
                <h2 className="font-['Cormorant_Garamond',serif] text-[32px] md:text-[48px] font-bold text-[#C4912A] leading-[1.2] tracking-tight">
                  Frequently Asked Questions
                </h2>
              </div>
              <div className="flex flex-col gap-4">
                {blog.faqs.map((faq, i) => (
                    <AccordionItem 
                        key={i} 
                        question={faq.question} 
                        answer={faq.answer} 
                        isOpen={openFaqIndex === i} 
                        onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)} 
                    />
                ))}
              </div>
            </div>
          )}
        </div>

        <aside className="w-full xl:w-[320px] shrink-0 sticky top-24 space-y-8 pb-10 z-10 xl:pt-20">
          <div className="flex items-center justify-start gap-3 px-4 mb-2">
             <Eye className="w-5 h-5 text-[#C4912A]" />
             <span className="text-[#C4912A] font-semibold text-lg tracking-tight">Post Views: {viewCount}</span>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-2xl relative group border border-[#C4912A]/20 bg-white/5 p-1">
            <img src={blog.featuredImage} alt={blog.title} className="w-full h-auto object-cover rounded-xl" />
          </div>

          <div className="flex items-center justify-center gap-4">
             <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#3b5998] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-all">
               <Facebook size={22} fill="white" />
             </a>
             <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg hover:scale-110 transition-all">
               X
             </a>
             <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#0077b5] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-all">
               <Linkedin size={22} fill="white" />
             </a>
             <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#25d366] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-all">
               <Send size={22} fill="white" className="rotate-[-20deg]" />
             </a>
          </div>
        </aside>
      </div>
    </motion.section>
  );
};

const AccordionItem = ({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) => {
  return (
    <motion.div 
      layout
      className={`group w-full bg-white/[0.03] border rounded-2xl overflow-hidden transition-all duration-500 ${
        isOpen 
        ? "border-[#C4912A]/40 shadow-[0_20px_40px_-15px_rgba(196,145,42,0.1)]" 
        : "border-white/5 hover:border-[#C4912A]/20 shadow-sm"
      }`}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 md:p-7 text-left focus:outline-none"
      >
        <span className={`text-base md:text-lg font-medium transition-colors duration-300 ${isOpen ? "text-[#C4912A]" : "text-white/80"}`}>
          {question}
        </span>
        <div className={`shrink-0 ml-4 w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-500 ${
          isOpen ? "bg-[#C4912A] text-[#0E0B42] rotate-180" : "bg-white/5 border border-white/10 text-[#C4912A]"
        }`}>
          <FiChevronDown size={18} />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="px-6 md:px-7 pb-6 md:pb-7">
              <div className="pt-5 border-t border-white/5 text-white/60 text-sm md:text-base leading-relaxed">
                {answer}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default BlogSingle;