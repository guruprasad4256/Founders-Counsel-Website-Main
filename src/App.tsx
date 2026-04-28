import { Routes, Route } from "react-router-dom";
import BlogArchive from "./pages/BlogArchive";
import BlogSingle from "./pages/BlogSingle";
import NotFound from "./pages/NotFound";
import ComingSoon from "./pages/ComingSoon";
import SathwikMeeting from "./pages/SathwikMeetingCalendar";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ComingSoon />} />
      <Route path="/book-meeting-with-sathwik-putta" element={<SathwikMeeting />} />
      <Route path="/blogs" element={<BlogArchive />} />
      <Route path="/blogs/:slug" element={<BlogSingle />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}


