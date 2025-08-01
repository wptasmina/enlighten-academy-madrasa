import Link from "next/link";
import React from "react";

function About() {
  return (
    <section className="bg-[var(--bg-color)] text-white p-6 md:p-8 lg:p-16 flex flex-col items-center lg:flex-row lg:items-start justify-center">
      {/* Left Section: Logo and Title */}
      <div className="lg:w-2/5 mb-8 lg:mb-0 lg:pr-12 text-center lg:text-left">
        {/* University Logo and Name */}
        <div className="flex items-center justify-center lg:justify-start mb-2">
          <svg
            className="w-10 h-10 mr-3 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.31L18.6 7.5 12 10.69 5.4 7.5 12 4.31zM4 9l8 4 8-4v6l-8 4-8-4V9z" />
          </svg>
          <h2 className="text-lg  md:text-xl lg:text-2xl font-medium md:font-semibold leading-normal md:leading-snug">
            এনলাইটেন একাডেমি
          </h2>
        </div>
        {/* Main Heading */}
        <h2 className=" text-[var(--secondary-color)] text-3xl md:text-4xl font-bold  leading-tight">
          আমাদের একাডেমি সম্পর্কে
        </h2>
      </div>

      {/* Right Section: Description */}
      <div className="lg:w-3/5 text-base md:text-lg lg:text-xl font-medium leading-relaxed">
        <p className="mb-6 text-[#c0d1be]">
          <strong>Enlighten Academy</strong> প্রতিষ্ঠিত হয়{" "}
          <strong>২৫ মে, ২০২৫</strong>, একটি স্বপ্ন ও দূরদর্শিতা নিয়ে। আমাদের
          লক্ষ্য একটাই — ইংরেজিকে মাতৃভাষার মতো করে শেখানো, যেন সাধারণ
          শিক্ষার্থীও আত্মবিশ্বাসের সাথে অনর্গল ইংরেজিতে কথা বলতে পারে।
        </p>
        <p className="mb-8">
          আমরা বিশ্বাস করি ইংরেজি শেখার সূচনা হওয়া উচিত “বলা” দিয়ে, তাই শেখার
          প্রথম দিন থেকেই শিক্ষার্থীরা বাধ্য হয় শতভাগ ইংরেজিতে কথা বলতে।
          বাস্তবভিত্তিক অনুশীলন, শুদ্ধ উচ্চারণ, ও প্রতিদিনের ধারাবাহিক চর্চাই
          আমাদের সাফল্যের মূল চাবিকাঠি। <br className="hidden md:block" />
          মাত্র <strong>৪০ দিনের</strong> আবাসিক অনুশীলনের মাধ্যমে একজন
          শিক্ষার্থী শূন্য থেকে ইংরেজিতে সাবলীল হতে পারে — ইনশাআল্লাহ। হাজারো
          শিক্ষার্থীর সফলতা তারই প্রমাণ।
        </p>
        {/* Read More Link */}
        <Link
          href="aboutUs"
          className="text-white hover:text-[var(--secondary-color)] text-lg font-semibold flex items-center"
        >
          আরো জানুন
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
        </Link>
      </div>
    </section>
  );
}

export default About;
