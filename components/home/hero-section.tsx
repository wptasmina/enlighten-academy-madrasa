import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="relative w-full h-[500px] md:h-[500px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://cdn.pixabay.com/photo/2017/03/27/13/17/notebook-2178656_640.jpg" // Replace with actual image URL of graduates
          alt="Graduates"
          fill
          className="w-full h-full object-cover object-left-top md:object-center" // Adjust object-position as needed
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-70"></div>{" "}
        {/* Adjust opacity for desired darkness */}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-start lg:justify-end px-4 md:px-6 lg:px-8">
        <div className="w-full  text-white p-8 md:p-12 relative z-10">
          <p className="text-lg mb-4">Join the journey of excellence</p>
          <h1 className="bg-green-600 inline-block px-6 py-3 text-4xl sm:text-5xl font-bold mb-6">
            Enlighten Academy
          </h1>
          <p className="text-gray-300 text-base leading-relaxed mb-6">
            Enlighten Academy is dedicated to empowering learners with top-notch
            English language courses. Founded with a vision to enhance
            communication skills and confidence, we have helped thousands
            achieve their goals.
          </p>
          <div className="w-24 border-b-2 border-green-600"></div>{" "}
          {/* Green underline */}
        </div>
      </div>
    </section>
  );
};
