import BlogArchiveComponent from "../components/sections/BlogArchive";
import Navbar from "../components/sections/Navbar";
import Footer from "../components/sections/Footer";


const BlogArchivePage = () => {
  return (
    <div className="w-full min-h-screen bg-black">
      <Navbar />
      <BlogArchiveComponent />
      <Footer />
    </div>
  );
};

export default BlogArchivePage;