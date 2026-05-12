import MeetingScheduler from "../components/sections/SathwikMeetingCalendar";
import Header from "../components/sections/Header";

const SathwikMeetingCalendar = () => {
  return (
    <div className="w-full min-h-screen bg-black">
      <Header />
      <MeetingScheduler />
      
    </div>
  );
};

export default SathwikMeetingCalendar;