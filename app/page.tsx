import Copyright from "@/components/Copyright";
import Footer from "@/components/Footer";
import About from "@/components/home/About";
import Admission from "@/components/home/Admission";
import { HeroSection } from "@/components/home/hero-section";
import Milestones from "@/components/home/Milestones";
import OurAdvantages from "@/components/home/OurAdvantages";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <Milestones />
      <About />
      <Admission />
      <OurAdvantages />
      <Footer />
      <Copyright />
    </div>
  );
}

// [var(--primary-color)]
// [var(--secondary-color)]
// [var(--button-hover-color)]
