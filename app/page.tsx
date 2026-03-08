import Hero from "../components/hero/Hero";
import StatsStrip from "../components/stats/StatsStrip";
import WhyADSC from "../components/why/WhyADSC";
//import FlagshipProjects from "../components/projects/FlagshipProjects";
import EventsArchive from "../components/events/EventsArchive";
import FacultyMentors from "../components/faculty/FacultyMentors";
import TeamSection from "../components/team/TeamSection";


export default function Home() {
  return (
    <main>
      <Hero />
      <StatsStrip />
      <WhyADSC />
      {/* <FlagshipProjects /> */}
      <EventsArchive />
      <FacultyMentors />
      <TeamSection />
    </main>
  );
}
