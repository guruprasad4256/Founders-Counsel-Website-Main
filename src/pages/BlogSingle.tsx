import BlogSingleComponent from "../components/sections/BlogSingle";
import Header from "../components/sections/Header";
const BlogSinglePage = () => {
  return (
    <div className="w-full min-h-screen bg-black">
      <Header />
      <BlogSingleComponent />
    </div>
  );
};

export default BlogSinglePage;