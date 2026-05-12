import { Routes, Route } from "react-router-dom";
import BlogArchive from "./pages/BlogArchive";
import BlogSingle from "./pages/BlogSingle";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import SathwikMeeting from "./pages/SathwikMeetingCalendar";

// New Page Imports
import About from "./pages/About";
import Services from "./pages/ServicesPage";
import Work from "./pages/Work";
import Insights from "./pages/Insights";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/book-a-meeting" element={<SathwikMeeting />} />
      <Route path="/blogs" element={<BlogArchive />} />
      <Route path="/blogs/:slug" element={<BlogSingle />} />

      {/* New Updated Routes */}
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/work" element={<Work />} />
      <Route path="/insights" element={<Insights />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/contact" element={<Contact />} />

      {/* Fallback Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}