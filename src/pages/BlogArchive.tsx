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
      // UPDATED: site parameter changed to Founders Counsel
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
      <div className="flex justify-center items-center min-h-[50vh] w-full font-poppins text-white">
        <div className="text-xl font-semibold animate-pulse bg-[#110835]/50 backdrop-blur-md px-6 py-3 rounded-full border border-[#1C1052]/40 shadow-sm">
          Loading Founders Counsel insights...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[50vh] w-full font-poppins text-red-500">
        <div className="bg-red-500/10 border border-red-500/20 px-6 py-4 rounded-2xl backdrop-blur-md text-center">
          <p className="font-bold">Access Denied</p>
          <p className="text-sm opacity-80">{error}</p>
          <p className="text-xs mt-2 text-gray-400">Make sure your backend GET route is public.</p>
        </div>
      </div>
    );
  }

  return (
    <section className="relative w-full bg-transparent font-poppins pt-[100px] pb-16">
      <style>
        {`
          .hide-scrollbar::-webkit-scrollbar { display: none; }
          .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}
      </style>

      <div className="max-w-7xl mt-4 mx-auto px-6">
        <header className="mb-12 text-center flex flex-col items-center">
          <span className="inline-block py-1 px-3 rounded-full bg-[#D8A623]/10 text-xs md:text-sm font-semibold uppercase tracking-widest text-[#D8A623] mb-5 border border-[#D8A623]/20">
            Founders Counsel Resources & News
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white tracking-tight leading-tight">
            Discover Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D8A623] to-[#727272]">Latest Insights.</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            Expert perspectives on productivity, industry trends, and the stories behind the products we build at Founders Counsel.
          </p>
        </header>
        
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory hide-scrollbar pb-8 justify-center">
          {blogs.length > 0 ? (
            blogs.map((blog) => (
              <Link 
                to={`/blogs/${blog.slug || blog._id}`} 
                key={blog._id} 
                className="flex-shrink-0 w-[75vw] sm:w-[280px] md:w-full md:max-w-[330px] snap-center group bg-[#110835]/70 backdrop-blur-md border border-[#1C1052] rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:shadow-[0_8px_30px_rgba(216,166,35,0.15)] transition-all duration-500 flex flex-col"
              >
                <div className="relative aspect-square w-full flex items-center justify-center bg-[#0A0520] border-b border-[#1C1052]/50 overflow-hidden">
                  {blog.featuredImage ? (
                    <img 
                      src={blog.featuredImage} 
                      alt={blog.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-500 italic p-6">
                      No preview available
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>

                <div className="p-4 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-[10px] text-[#D8A623] font-semibold tracking-wider uppercase">
                      {new Date(blog.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric', month: 'short', day: 'numeric'
                      })}
                    </p>
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-white line-clamp-2 group-hover:text-[#D8A623] transition-colors duration-300 leading-snug">
                    {blog.title}
                  </h3>
                </div>
              </Link>
            ))
          ) : (
            <div className="text-center col-span-full py-20 w-full flex justify-center">
              <p className="text-gray-400 text-lg bg-[#110835]/50 backdrop-blur-md px-8 py-4 rounded-2xl border border-[#1C1052]/40 shadow-sm inline-block">
                No insights found for Founders Counsel. Check back soon!
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogArchive;