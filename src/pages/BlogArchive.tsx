import BlogArchiveComponent from "../components/sections/BlogArchive";
import Header from "../components/sections/Header";

const BlogArchivePage = () => {
  return (
    <div className="w-full min-h-screen bg-black">
      <Header />
      <BlogArchiveComponent />
      
    </div>
  );
};

export default BlogArchivePage;