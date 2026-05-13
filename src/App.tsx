import { Routes, Route } from "react-router-dom";
// Page Imports
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/ServicesPage";
import Work from "./pages/Work";
import Insights from "./pages/Insights";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import BlogArchive from "./pages/BlogArchive";
import BlogSingle from "./pages/BlogSingle";
import SathwikMeeting from "./pages/SathwikMeetingCalendar";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0E0B42]">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/work" element={<Work />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<BlogArchive />} />
          <Route path="/blogs/:slug" element={<BlogSingle />} />
          <Route path="/book-a-meeting" element={<SathwikMeeting />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      
    </div>
  );
}