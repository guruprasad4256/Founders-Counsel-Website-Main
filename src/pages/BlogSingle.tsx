import BlogSingleComponent from "../components/sections/BlogSingle";
import Navbar from "../components/sections/Navbar";
import Footer from "../components/sections/Footer";

const BlogSinglePage = () => {
  return (
    <div className="w-full min-h-screen bg-black">
      <Navbar />
      <BlogSingleComponent />
      <Footer />
    </div>
  );
};

export default BlogSinglePage;