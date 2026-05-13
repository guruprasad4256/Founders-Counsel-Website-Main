import { useRoutes } from "react-router-dom";

import BlogArchive from "./pages/BlogArchive";
import BlogSingle from "./pages/BlogSingle";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import SathwikMeeting from "./pages/SathwikMeetingCalendar";

import About from "./pages/About";
import Services from "./pages/ServicesPage";
import Work from "./pages/Work";
import Insights from "./pages/Insights";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";

export const appRoutes = [
  { path: "/", element: <Home /> },
  { path: "/book-a-meeting", element: <SathwikMeeting /> },
  { path: "/blogs", element: <BlogArchive /> },
  { path: "/blogs/:slug", element: <BlogSingle /> },
  { path: "/about", element: <About /> },
  { path: "/services", element: <Services /> },
  { path: "/work", element: <Work /> },
  { path: "/insights", element: <Insights /> },
  { path: "/careers", element: <Careers /> },
  { path: "/contact", element: <Contact /> },
  { path: "*", element: <NotFound /> },
];

export default function App() {
  return useRoutes(appRoutes);
}