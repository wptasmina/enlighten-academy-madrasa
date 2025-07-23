import Copyright from "@/components/Copyright";
import Footer from "@/components/Footer";
import About from "@/components/home/About";
import Admission from "@/components/home/Admission";
import Courses from "@/components/home/Courses";
import Gallery from "@/components/home/Gallery";
import { HeroSection } from "@/components/home/hero-section";
import Milestones from "@/components/home/Milestones";
import OurAdvantages from "@/components/home/OurAdvantages";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("../components/home/Map"), { ssr: false });

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <Milestones />
      <About />
      <Courses />
      <Admission />
      <OurAdvantages />
      <Gallery />
      <Map />
      <Footer />
      <Copyright />
    </div>
  );
}

// [var(--primary-color)]
// [var(--secondary-color)]
// [var(--button-hover-color)]
