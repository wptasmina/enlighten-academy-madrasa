import React from "react";
import Image from "next/image";

function Admission() {
  return (
    <div className="flex flex-col lg:flex-row  bg-gray-900 text-white font-inter">
      {/* Left Section: Image */}
      <div className="lg:w-1/2 w-full h-[450px] relative">
        <Image
          src="https://cdn.pixabay.com/photo/2016/03/05/08/27/success-1237378_640.jpg"
          alt="Group of smiling graduates"
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
      </div>

      {/* Right Section: Content */}
      <div className="lg:w-1/2 w-full  flex flex-col justify-center relative overflow-hidden">
        {/* Background Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://cdn.pixabay.com/photo/2016/03/05/08/27/success-1237378_640.jpg')`,
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div className="relative z-10 px-4 md:px-8 lg:px-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Apply for Admission
          </h2>
          <p className="text-[var(--secondary-color)] text-xl mb-8">
            Fall 2019 applications are now open
          </p>
          <p className="text-lg leading-relaxed mb-10">
            We don't just give students an education and experiences that set
            them up for success in a career. We help them succeed in their
            career—to discover a field they're passionate about and dare to lead
            it.
          </p>
          <button className="bg-[var(--secondary-color)] hover:bg-[var(--button-hover-color)] text-white font-bold py-4 px-8 rounded shadow-lg transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Admission;
