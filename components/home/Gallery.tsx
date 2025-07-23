import Image from "next/image";
import Link from "next/link";
import React from "react";

const events = [
  {
    id: 1,
    image:
      "https://cdn.pixabay.com/photo/2017/09/26/04/28/classroom-2787754_640.jpg",
    title: "Fintech & Key Investment Conference",
  },
  {
    id: 2,
    image:
      "https://cdn.pixabay.com/photo/2023/11/16/08/44/school-8391795_640.jpg",
    title: "Sport Management Information Webinar",
  },
  {
    id: 3,
    image:
      "https://cdn.pixabay.com/photo/2022/08/24/15/42/library-7408106_640.jpg",
    title: "Planning and Facilitating Effective Meetings",
  },
];

function Gallery() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6">
          <div className="relative flex items-center">
            <h2 className="text-3xl font-semibold text-[#163169] mb-2 mr-6">
              Gallery
            </h2>
            <span className="block h-[1px] w-full bg-gray-400" />
          </div>

          <Link
            href="/gallery"
            className="text-lg text-green-600 hover:text-green-700 font-medium"
          >
            View All Gallery
          </Link>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative w-full h-48">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 leading-snug">
                  {event.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
