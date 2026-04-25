import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Calendar, ArrowRight, Clock } from 'lucide-react';

// Standard project imports
import Header from "@/components/sections/Header";

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

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString("en-US", { 
      year: "numeric", 
      month: "long", 
      day: "numeric" 
    });

  useEffect(() => {
    const fetchBlogs = async () => {
      // API TARGET: Founders Counsel
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
      <div className="flex justify-center items-center min-h-screen w-full bg-[#050505] font-sans text-white">
        <div className="text-sm tracking-[0.3em] uppercase animate-pulse border border-[#D4AF37]/30 px-8 py-3 rounded-full bg-[#D4AF37]/5 text-[#D4AF37]">
          Accessing The Journal...
        </div>
      </div>
    );
  }

  return (
    <HelmetProvider>
      <Helmet>
        <title>The Journal — Founder's Counsel & Co.</title>
        <meta name="description" content="Essays, frameworks, and quiet observations from operators building for the long game." />
      </Helmet>

      <div className="min-h-screen bg-[#050505] selection:bg-[#D4AF37]/30">
        <Header />

        {/* --- Hero Section --- */}
        <section className="relative overflow-hidden pt-32 pb-20 md:pt-48 md:pb-32">
          {/* Decorative Glow */}
          <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-[#D4AF37]/5 blur-[120px]" />
          
          <div className="relative mx-auto max-w-5xl px-6 text-center">
            <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-[#D4AF37] font-semibold mb-6 block">
              The Journal
            </span>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] text-white tracking-tight">
              Notes for the <em className="bg-gradient-to-r from-[#D4AF37] via-[#F2D472] to-[#AA8839] bg-clip-text text-transparent not-italic">long game.</em>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg md:text-xl text-gray-400 leading-relaxed font-light">
              Essays and frameworks from operators who ship. No engagement bait. Just the architecture of building.
            </p>
          </div>
        </section>

        {/* --- Archive Grid --- */}
        <section className="border-t border-white/5 py-20 md:py-32">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            
            {error ? (
              <div className="flex justify-center py-20">
                <div className="bg-red-500/5 border border-red-500/10 px-8 py-6 rounded-2xl text-center">
                  <p className="text-red-500 text-sm font-bold uppercase tracking-widest mb-2">Connection Error</p>
                  <p className="text-gray-500 text-xs">{error}</p>
                </div>
              </div>
            ) : blogs.length > 0 ? (
              <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {blogs.map((blog) => (
                  <Link
                    key={blog._id}
                    to={`/blogs/${blog.slug || blog._id}`}
                    className="group flex flex-col bg-[#0A0A0A] border border-white/5 rounded-2xl overflow-hidden transition-all duration-500 hover:border-[#D4AF37]/40 hover:bg-[#111111] shadow-2xl"
                  >
                    {/* Featured Image */}
                    <div className="aspect-[16/10] overflow-hidden bg-neutral-900">
                      {blog.featuredImage ? (
                        <img
                          src={blog.featuredImage}
                          alt={blog.title}
                          className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center text-white/10 italic text-xs">No Visual</div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col p-8">
                      <div className="flex items-center gap-4 mb-5">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-bold">
                          {blog.tags?.[0] || 'Perspective'}
                        </span>
                        <div className="flex items-center gap-1.5 text-[10px] text-gray-500 uppercase tracking-widest">
                          <Calendar className="h-3 w-3" />
                          {formatDate(blog.createdAt)}
                        </div>
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#D4AF37] transition-colors duration-300 leading-tight mb-6">
                        {blog.title}
                      </h3>
                      
                      <div className="mt-auto flex items-center justify-between">
                         <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#D4AF37] uppercase tracking-[0.1em] group-hover:gap-4 transition-all">
                          Read Essay
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-32 border border-dashed border-white/10 rounded-3xl">
                <p className="text-gray-600 italic tracking-wide">The archives are currently quiet. Check back soon.</p>
              </div>
            )}
          </div>
        </section>

        
      </div>
    </HelmetProvider>
  );
};

export default BlogArchive;