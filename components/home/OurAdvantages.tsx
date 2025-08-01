import React from "react";

const data = [
  {
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 16h-1v-4h-1m1-4h.01M12 20.5a8.5 8.5 0 100-17 8.5 8.5 0 000 17z"
        />
      </svg>
    ),
    title: "বিশেষায়িত মেন্টর",
    description:
      "প্রতিটি সেকশনের জন্য রয়েছে আলাদা প্রশিক্ষিত শিক্ষক, যারা আপনাকে হাতে ধরে শেখান।",
    link: "#",
  },
  {
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8 16l-4-4 4-4m8 8l4-4-4-4"
        />
      </svg>
    ),
    title: "ফ্লেক্সিবল ক্লাস টাইম",
    description:
      "শুক্রবার ব্যাচ, অনলাইন ক্লাস, কিডস ব্যাচ ও অনাবাসিক বিকেল ব্যাচ – আপনার সুবিধামতো সময় অনুযায়ী কোর্সের ব্যবস্থা।",
    link: "#",
  },
  {
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 8c1.657 0 3-1.343 3-3S13.657 2 12 2 9 3.343 9 5s1.343 3 3 3zm0 2c-2.21 0-4 1.79-4 4v2h8v-2c0-2.21-1.79-4-4-4z"
        />
      </svg>
    ),
    title: "জব ইন্টারভিউ প্রস্তুতি",
    description:
      "স্পিকিং টেস্ট, ইন্টারভিউ প্র্যাকটিস ও পাবলিক স্পিকিং-এর মাধ্যমে ক্যারিয়ার রেডিনেস গড়ে তোলা হয়।",
    link: "#",
  },
  {
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17 9V7a4 4 0 00-8 0v2a4 4 0 00-4 4v5h16v-5a4 4 0 00-4-4z"
        />
      </svg>
    ),
    title: "নিরাপদ ও মনোরম পরিবেশ",
    description:
      "আবাসিক কোর্সের জন্য রয়েছে সার্বক্ষণিক শিক্ষক তত্ত্বাবধান, মনোরম পরিবেশ ও শীতাতপ নিয়ন্ত্রিত ক্লাসরুম।",
    link: "#",
  },
];

function OurAdvantages() {
  return (
    <section className="bg-[var(--bg-color)] p-6 md:p-8 lg:p-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-start  text-white  transition duration-300"
          >
            {/* Icon */}
            <div className="mb-4 text-5xl text-[var(--secondary-color)]">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold mb-3">{item.title}</h3>

            {/* Description */}
            <p className="text-base leading-relaxed mb-4 text-gray-400">
              {item.description}
            </p>

            {/* Learn More Link */}
            {/* <a
              href={item.link}
              className="text-[var(--secondary-color)] hover:underline flex items-center text-sm font-semibold"
            >
              Learn More
              <svg
                className="w-4 h-4 ml-2"
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
        ))}
      </div>
    </section>
  );
}

export default OurAdvantages;
