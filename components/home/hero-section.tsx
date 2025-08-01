import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="relative w-full h-[450px] overflow-hidden">
      <Image
        src="/banner/banner.jpg"
        alt="banner image"
        fill
        className=" object-cover object-center hidden md:block"
      />
      <Image
        src="/banner/banner4.jpg"
        alt="banner image"
        fill
        className="object-center md:hidden"
      />
    </section>
  );
};
