import AboutSection from "@/components/Home/AboutSection";
import BrightFuture from "@/components/Home/BrightFuture";
import ContactSection from "@/components/Home/ContactSection";
import EducationSection from "@/components/Home/Educationsection";
import HeroSection from "@/components/Home/HeroSection";
import LatestGallery from "@/components/Home/LatestGallery";
import SmartProgram from "@/components/Home/SmartProgram";


function Home() {
  return (
    <div>
      <HeroSection />
      <EducationSection/>
      <SmartProgram />
      <BrightFuture />
      <AboutSection />
      <LatestGallery />
      <ContactSection />
    </div>
  );
}

export default Home;
