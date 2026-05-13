import BlogArchiveComponent from "../components/sections/BlogArchive";
import Navbar from "../components/sections/Navbar";

const BlogArchivePage = () => {
  return (
    <div className="w-full min-h-screen bg-black">
      <Navbar />
      <BlogArchiveComponent />
      
    </div>
  );
};

export default BlogArchivePage;