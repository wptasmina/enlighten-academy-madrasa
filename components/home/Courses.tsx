import Link from "next/link";

const courses = [
  {
    id: 1,
    title: "আবাসিক স্পোকেন ইংলিশ",
    duration: "৪০ দিন",
    fee: "১৩,০০০ টাকা",
    features: [
      "১২ ঘণ্টা দৈনিক চর্চা",
      "বাংলা নিষিদ্ধ, শতভাগ ইংরেজি পরিবেশ",
      "শুদ্ধ উচ্চারণ, বাস্তব অনুশীলন",
      "থাকা-খাওয়া ও সার্টিফিকেট সহ",
    ],
    href: "residential",
  },
  {
    id: 2,
    title: "অনাবাসিক ব্যাচ",
    duration: "৩ মাস",
    fee: "৬,০০০ টাকা (৫০% স্কলারশিপ)",
    features: [
      "সপ্তাহে ৪ দিন ক্লাস",
      "১০৪+ প্র্যাকটিক্যাল সেশন",
      "বিকেলের ক্লাস সময়",
      "Speaking ও Vocabulary combo",
    ],
    href: "non-resident",
  },
  {
    id: 3,
    title: "শুক্রবার ব্যাচ",
    duration: "৪ মাস",
    fee: "২,৫০০ টাকা (৫০% স্কলারশিপ)",
    features: [
      "প্রতি শুক্রবার সকাল ৮:৩০ – ১২:৩০",
      "৫২টি ক্লাস",
      "চাকরিজীবী বা ব্যস্তদের জন্য উপযুক্ত",
      "Speaking Club ও Q/A সেশন",
    ],
    href: "friday",
  },
  {
    id: 4,
    title: "কিডস স্পোকেন ইংলিশ",
    duration: "সপ্তাহে ৪ দিন",
    fee: "ভর্তি ফি: ফ্রি, মাসিক: ২,০০০ টাকা",
    features: [
      "বাচ্চাদের জন্য খেলার ছলে শেখা",
      "রঙিন ম্যাটেরিয়াল ও স্টোরি-বেইজড শেখা",
      "শুদ্ধ উচ্চারণে ইংরেজি চর্চা",
      "আলাদা গ্রুপ ও শিক্ষক",
    ],
    href: "kids",
  },
  {
    id: 5,
    title: "অনলাইন স্পোকেন ইংলিশ",
    duration: "৪০টি লাইভ ক্লাস",
    fee: "সাশ্রয়ী ফি, আজীবন সাপোর্ট",
    features: [
      "Zoom/Meet-এ ক্লাস",
      "রিয়েল-লাইফ Conversation চর্চা",
      "পুরুষ/নারী/প্রবাসীদের আলাদা সাপোর্ট",
      "Live Q&A + Weekly Revision",
    ],
    href: "online",
  },
];

function Courses() {
  return (
    <section id="courses" className="bg-white p-6 md:p-8 lg:p-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--bg-color)] mb-10">
        আমাদের কোর্সসমূহ
      </h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {courses?.map((course) => (
          <div
            key={course?.id}
            className="flex flex-col justify-between rounded-md p-6 shadow-md hover:shadow-lg transition"
          >
            <div>
              <h3 className="text-xl font-semibold text-[var(--bg-color)] mb-2">
                {course.title}
              </h3>
              <p className="text-gray-700 mb-1">
                ⏳ <strong>সময়কাল:</strong> {course.duration}
              </p>
              <p className="text-gray-700 mb-3">
                💰 <strong>কোর্স ফি:</strong> {course.fee}
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {course.features.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Read More Link */}
            <Link
              href={`courses/${course?.href}`}
              className="mt-6 text-[var(--secondary-color)] text-lg font-semibold flex items-center"
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
        ))}
      </div>
    </section>
  );
}

export default Courses;
