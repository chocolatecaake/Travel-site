import { Navbar } from "../pageComponents/Navbar";
import { HeroSection } from "../pageComponents/HeroSection";
import { Destinations } from "../pageComponents/Destinations";
import { TravelTips } from "../pageComponents/TravelTips";
import { ExploreWildlife } from "../pageComponents/ExploreWildlife";
import { CTASection } from "../pageComponents/CTASection";
import { Footer } from "../pageComponents/Footer";

export const Home = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/*Navbar*/}
      <Navbar />
      {/*Main Content*/}
      <main className="flex flex-col gap-6">
        <HeroSection />
        <Destinations />
        <TravelTips />
        <ExploreWildlife />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};
