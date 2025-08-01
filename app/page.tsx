import About from "@/components/home/About";
import Admission from "@/components/home/Admission";
import ContactUs from "@/components/home/ContactUs";
import Courses from "@/components/home/Courses";
import FAQ from "@/components/home/FAQ";
import Gallery from "@/components/home/Gallery";
import { HeroSection } from "@/components/home/hero-section";
import MapWrapper from "@/components/home/MapWrapper";
import Milestones from "@/components/home/Milestones";
import Milestones2 from "@/components/home/Milestones2";
import OurAdvantages from "@/components/home/OurAdvantages";
import RecentNotice from "@/components/home/RecentNotice";
import StudentReview from "@/components/home/StudentReview";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      {/* <Milestones /> */}
      <Milestones2 />
      <About />
      <Courses />
      {/* <Admission /> */}
      <OurAdvantages />
      <Gallery />
      <FAQ />
      {/* <RecentNotice /> */}
      <StudentReview />
      <ContactUs />
      {/* <MapWrapper /> */}
    </div>
  );
}

// [var(--primary-color)]
// [var(--secondary-color)]
// [var(--button-hover-color)]
