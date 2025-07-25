import React from "react";

function About() {
  return (
    <section className="bg-[var(--primary-color)] text-white p-4 md:p-8 lg:p-16 flex flex-col lg:flex-row items-start justify-center">
      {/* Left Section: Logo and Title */}
      <div className="lg:w-2/5 mb-8 lg:mb-0 lg:pr-12 text-center lg:text-left">
        {/* University Logo and Name */}
        <div className="flex items-center justify-center lg:justify-start mb-4">
          {/* Placeholder for a logo. In a real app, you'd use an SVG or image component */}
          <svg
            className="w-10 h-10 mr-3 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.31L18.6 7.5 12 10.69 5.4 7.5 12 4.31zM4 9l8 4 8-4v6l-8 4-8-4V9z" />
          </svg>
          <h2 className="text-lg md:text-xl lg:text-2xl font-medium md:font-semibold leading-normal md:leading-snug">
            Enlighten Academy
          </h2>
        </div>
        {/* Main Heading */}
        <h2 className=" text-[var(--secondary-color)] text-3xl md:text-4xl font-bold  leading-tight">
          About Our Academy
        </h2>
      </div>

      {/* Right Section: Description */}
      <div className="lg:w-3/5 text-base md:text-lg lg:text-xl font-medium leading-relaxed">
        <p className="mb-6 text-[#d7e2fa]">
          Welcome to Enlighten Academy — your trusted partner in mastering the
          English language. At Enlighten, we believe that language is the bridge
          to opportunity. Whether you're preparing for IELTS, improving your
          spoken English, or strengthening your academic writing, our
          expert-guided courses are designed to help you reach fluency with
          confidence.
        </p>
        <p className="mb-8">
          At Enlighten Academy, we are dedicated to empowering learners with
          exceptional English language skills. Whether you're preparing for
          exams like IELTS, aiming to improve your spoken English, or enhancing
          your academic writing, our expert instructors and comprehensive
          courses provide the perfect environment for growth.
        </p>
        {/* Read More Link */}
        {/* <a
          href="#"
          className="text-white hover:text-[var(--secondary-color)] text-lg font-semibold flex items-center"
        >
          Read More
          <svg
            className="w-5 h-5 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            ></path>
          </svg>
        </a> */}
      </div>
    </section>
  );
}

export default About;
