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
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.747 0-3.332.477-4.5 1.253"
        ></path>
      </svg>
    ),
    title: "Education Services",
    description:
      "Enlighten Academy offers structured courses to help learners achieve excellence in English for academic, professional, and daily use.",
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
          d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.5 16.086v-1.5c0-.91.72-1.643 1.6-1.643h.9c.88 0 1.6.733 1.6 1.643v1.5a18.022 18.022 0 01-4.548 1.414zM12 10.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm6.5-3A1.5 1.5 0 1115.5 6a1.5 1.5 0 013 0zm-1.5 6a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
        ></path>
      </svg>
    ),
    title: "International Hubs",
    description:
      "With a growing network of students globally, Enlighten Academy connects learners across borders and backgrounds.",
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
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        ></path>
      </svg>
    ),
    title: "Certified Programs",
    description:
      "Our Bachelor's and Master's equivalent certifications are tailored to meet global standards and real-world needs.",
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
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m-1 4h1m8-10h1m-1 4h1m-1 4h1m-1 4h1m0 0h2m-2 0h-5m-9 0H3m2 0h5"
        ></path>
      </svg>
    ),
    title: "Campus Life",
    description:
      "Beyond academics, Enlighten Academy fosters a vibrant student life through clubs, events, and leadership opportunities.",
    link: "#",
  },
];

function OurAdvantages() {
  return (
    <section className="bg-[#1f1f1f] py-8 md:py-16 lg:py-20 xl:py-24 px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-start p-6 text-white  transition duration-300"
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
            <a
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
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurAdvantages;
