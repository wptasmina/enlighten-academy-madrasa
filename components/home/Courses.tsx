import React from "react";

function Courses() {
  return (
    <section className="p-4 md:p-8 lg:p-16 bg-gray-50">
      <div className="">
        {/* Section Heading */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl mb-4 font-bold text-gray-800">
            Courses at Enlighten Academy
          </h2>
          <p className="mt-2 text-gray-600 mb-8">
            Build your future with our expert English programs
          </p>
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Running Course Card */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold text-green-700 mb-3">
              Running Course
            </h3>
            <p className="text-gray-600 mb-4">
              Our flagship <strong>Spoken English Course</strong> is currently
              ongoing. Designed to improve your fluency, confidence, and
              communication skills in real-life situations.
            </p>
            <button className="mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
              Join Now
            </button>
          </div>

          {/* Future Course Card */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold text-blue-700 mb-3">
              Future Course
            </h3>
            <p className="text-gray-600 mb-4">
              Coming soon: <strong>IELTS Preparation Course</strong>. Learn
              tips, techniques, and strategies to achieve your target band score
              in Listening, Reading, Writing & Speaking.
            </p>
            <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Get Notified
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Courses;
