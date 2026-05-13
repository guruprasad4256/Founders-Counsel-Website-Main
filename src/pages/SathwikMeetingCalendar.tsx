import MeetingScheduler from "../components/sections/SathwikMeetingCalendar";
import Navbar from "../components/sections/Navbar";
import Footer from "../components/sections/Footer";

const SathwikMeetingCalendar = () => {
  return (
    <div className="w-full min-h-screen bg-black">
      <Navbar />
      <MeetingScheduler />
      <Footer />
    </div>
  );
};

export default SathwikMeetingCalendar;