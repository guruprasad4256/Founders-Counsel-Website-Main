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
        const message = err.response?.data?.message || err.response?.statusText || "Unauthorized Access";
        setError(`Server Error (${err.response?.status}): ${message}`);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen w-full bg-[#110B38] font-poppins">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-[#DCA825]/20 border-t-[#DCA825] rounded-full animate-spin"></div>
          <p className="text-[#DCA825]/60 font-medium tracking-widest uppercase text-xs">Loading Founders Counsel Insights</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen w-full bg-[#110B38] font-poppins px-6">
        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl shadow-xl text-center max-w-md backdrop-blur-md">
          <p className="text-red-400 font-bold uppercase tracking-widest text-sm mb-2">Access Denied</p>
          <p className="text-white/60 text-sm mb-6">{error}</p>
          <button onClick={() => window.location.reload()} className="px-6 py-2 bg-[#DCA825] text-[#110B38] rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors">
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="relative w-full min-h-screen bg-[#110B38] font-poppins pt-32 pb-24 overflow-hidden">
      {/* Brand Background Radial Glow - Navy Base */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="w-[1200px] h-[1200px] bg-[radial-gradient(circle_at_center,_#1C1454_0%,_#110B38_70%)] rounded-full blur-[120px] opacity-80"></div>
      </div>

      <style>
        {`
          .hide-scrollbar::-webkit-scrollbar { display: none; }
          .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}
      </style>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <header className="mb-20 text-center flex flex-col items-center">
          <span className="inline-block py-1.5 px-4 rounded-full bg-[#DCA825]/10 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-[#DCA825] mb-6 border border-[#DCA825]/20 backdrop-blur-sm">
            Founders Counsel Resources & News
          </span>
          <h1 className="text-5xl md:text-7xl font-black mb-8 text-white tracking-tight leading-[1.1]">
            Our Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DCA825] to-[#F0CC70]">Insights.</span>
          </h1>
          
          <p className="text-white/50 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed italic">
            "Consider it done" expert perspectives on productivity and the stories behind Founders Counsel.
          </p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.length > 0 ? (
            blogs.map((blog) => (
              <Link 
                to={`/blogs/${blog.slug || blog._id}`} 
                key={blog._id} 
                className="group flex flex-col bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] overflow-hidden hover:shadow-2xl hover:shadow-[#DCA825]/10 transition-all duration-700 ease-out hover:-translate-y-2 hover:border-white/20"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden m-3 rounded-[1.5rem]">
                  {blog.featuredImage ? (
                    <img 
                      src={blog.featuredImage} 
                      alt={blog.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full bg-white/5 text-white/20 italic text-xs uppercase tracking-widest">
                      No Preview
                    </div>
                  )}
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-[#110B38]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="p-6 pt-2 flex flex-col flex-grow">
                  <p className="text-[10px] text-[#DCA825] font-bold tracking-widest uppercase mb-3 flex items-center gap-2">
                    <span className="w-1 h-1 bg-[#DCA825] rounded-full"></span>
                    {new Date(blog.createdAt).toLocaleDateString('en-US', {
                      month: 'long', day: 'numeric', year: 'numeric'
                    })}
                  </p>
                  <h3 className="text-xl font-bold text-white line-clamp-2 group-hover:text-[#DCA825] transition-colors duration-300 leading-[1.3] mb-4">
                    {blog.title}
                  </h3>
                  
                  <div className="mt-auto pt-4 flex items-center text-[10px] font-black uppercase tracking-[0.2em] text-[#DCA825]">
                    Read Article 
                    <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="text-center col-span-full py-20 flex justify-center">
              <div className="bg-white/5 backdrop-blur-md px-10 py-6 rounded-3xl border border-white/10 shadow-sm">
                <p className="text-white/30 text-sm font-bold uppercase tracking-widest">
                  No insights found for Founders Counsel yet.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogArchive;