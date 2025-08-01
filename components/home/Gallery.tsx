import Image from "next/image";
import Link from "next/link";
import React from "react";

const events = [
  {
    id: 1,
    image: "/gallery/g1.jpg",
    title: "Fintech & Key Investment Conference",
  },
  {
    id: 2,
    image: "/gallery/g2.jpg",
    title: "Sport Management Information Webinar",
  },
  {
    id: 3,
    image: "/gallery/g3.jpg",
    title: "Planning and Facilitating Effective Meetings",
  },
  {
    id: 4,
    image: "/gallery/g4.jpg",
    title: "Planning and Facilitating Effective Meetings",
  },
  {
    id: 5,
    image: "/gallery/g5.jpg",
    title: "Planning and Facilitating Effective Meetings",
  },
];

function Gallery() {
  return (
    <section className="p-6 md:p-8 lg:p-16 bg-white">
      <div className="">
        {/* Header */}
        <div className="mb-6">
          <div className="relative flex items-center">
            <h2 className="text-3xl font-semibold text-[#163169] mb-2 mr-6">
              Gallery
            </h2>
            <span className="block h-[1px] w-full bg-gray-400" />
          </div>

          {/* <Link
            href="/gallery"
            className="text-lg text-green-600 hover:text-green-700 font-medium"
          >
            View All Gallery
          </Link> */}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative w-full h-60">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>
              {/* <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 leading-snug">
                  {event.title}
                </h3>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
