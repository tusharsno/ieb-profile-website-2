import Hero from "./components/Hero";
import StatsStrip from "./components/StatsStrip";
import MainInfoSection from "./components/MainInfoSection";
import ExperienceCards from "./components/ExperienceCards";
// import StrategicCommitment from "./components/StrategicCommitment";
import BottomMediaRow from "./components/BottomMediaRow";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <MainInfoSection />
      <ExperienceCards />
      {/* <StrategicCommitment /> */}
      <BottomMediaRow />
      <Footer />
    </>
  );
}
