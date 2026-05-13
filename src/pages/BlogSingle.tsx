import BlogSingleComponent from "../components/sections/BlogSingle";
import Navbar from "../components/sections/Navbar";
const BlogSinglePage = () => {
  return (
    <div className="w-full min-h-screen bg-black">
      <Navbar />
      <BlogSingleComponent />
    </div>
  );
};

export default BlogSinglePage;