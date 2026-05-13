import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export interface Blog {
  _id: string;
  title: string;
  slug: string; 
  content: string;
  featuredImage: string;
  createdAt: string;
  categories?: string[]; 
  tags?: string[]; 
}

const RAW_URL = import.meta.env.VITE_API_URL || 'https://api.manhoursonhire.com';
const SERVER_URL = RAW_URL.replace(/\/+$/, '');
const endpoint = SERVER_URL.endsWith('/api') ? '/blogs' : '/api/blogs';

const BlogArchive = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      const fullUrl = `${SERVER_URL}${endpoint}?site=Founders Counsel`;
      
      try {
        setLoading(true);
        const res = await axios.get<Blog[]>(fullUrl);
        if (Array.isArray(res.data)) {
          setBlogs(res.data);
        }
        setError(null);
      } catch (err: any) {
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
    return (
      <div className="flex justify-center items-center min-h-[60vh] w-full font-['Inter',sans-serif] text-white bg-[#0E0B42]">
        <div className="text-sm tracking-[0.3em] uppercase animate-pulse border border-[#C4912A]/30 px-8 py-3 rounded-full bg-[#C4912A]/5 text-[#C4912A]">
          Accessing Founder's Counsel Archives...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[60vh] w-full bg-[#0E0B42] font-['Inter',sans-serif]">
        <div className="bg-[#C4912A]/5 border border-[#C4912A]/20 px-8 py-6 rounded-2xl text-center">
          <p className="text-[#C4912A] text-sm font-bold uppercase tracking-widest mb-2">Connection Error</p>
          <p className="text-white/40 text-xs">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <section className="relative w-full bg-[#0E0B42] font-['Inter',sans-serif] pt-24 pb-20 selection:bg-[#C4912A]/30">
      <style>
        {`
          .hide-scrollbar::-webkit-scrollbar { display: none; }
          .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}
      </style>

      {/* Decorative Glow */}
      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-[#C4912A]/10 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <header className="mb-20 text-center flex flex-col items-center">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-[#C4912A] font-semibold mb-6 block">
             Founder's Counsel
          </span>
          <h1 className="font-['Cormorant_Garamond',serif] text-5xl md:text-7xl font-bold leading-[1.1] text-white tracking-tight mb-8">
            Notes for the <span className="bg-gradient-to-r from-[#C4912A] via-[#E5C173] to-[#C4912A] bg-clip-text text-transparent italic">long game.</span>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-light">
            Essays and frameworks from operators who ship. No engagement bait. Just the architecture of building.
          </p>
        </header>
        
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-10 overflow-x-auto md:overflow-visible snap-x snap-mandatory hide-scrollbar pb-10">
          {blogs.length > 0 ? (
            blogs.map((blog) => (
              <Link 
                to={`/blogs/${blog.slug || blog._id}`} 
                key={blog._id} 
                className="flex-shrink-0 w-[85vw] sm:w-[340px] md:w-full snap-center group bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:border-[#C4912A]/40 hover:bg-white/[0.08] shadow-2xl flex flex-col"
              >
                <div className="relative aspect-[16/10] w-full bg-[#0E0B42] overflow-hidden">
                  {blog.featuredImage ? (
                    <img 
                      src={blog.featuredImage} 
                      alt={blog.title} 
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-in-out"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-white/10 italic text-xs">
                      No Visual Record
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E0B42] via-transparent to-transparent opacity-60" />
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-5">
                    <p className="text-[10px] text-[#C4912A] font-bold tracking-[0.3em] uppercase">
                      {new Date(blog.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric', month: 'long', day: 'numeric'
                      })}
                    </p>
                  </div>
                  <h3 className="font-['Cormorant_Garamond',serif] text-xl md:text-2xl font-bold text-white group-hover:text-[#C4912A] transition-colors duration-300 leading-tight mb-8">
                    {blog.title}
                  </h3>
                  
                  <div className="mt-auto flex items-center">
                     <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#C4912A] uppercase tracking-[0.2em] group-hover:gap-4 transition-all">
                      Read Essay
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="text-center col-span-full py-24 w-full flex justify-center">
              <p className="text-white/30 italic tracking-widest border border-dashed border-white/10 px-10 py-5 rounded-full">
                The archives are currently quiet.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const ArrowRight = ({ className }: { className?: string }) => (
  <svg 
    className={className} 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

export default BlogArchive;