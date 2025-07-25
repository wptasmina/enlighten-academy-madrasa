"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Dynamically import react-slick
const Slider = dynamic(() => import("react-slick"), { ssr: false });

const testimonials = [
  {
    id: 1,
    name: "Rafiul Islam",
    batch: "Batch 5",
    district: "Dhaka",
    image:
      "https://cdn.pixabay.com/photo/2024/08/12/15/21/ai-generated-8963819_640.jpg",
    rating: 5,
    review:
      "Enlighten Academy এর কোর্সগুলো অনেক ভালোভাবে গাইড করে। কোর্স করে আমি অনেক স্কিলড হয়েছি।",
  },
  {
    id: 2,
    name: "Mim Akter",
    batch: "Batch 4",
    district: "Chattogram",
    image:
      "https://cdn.pixabay.com/photo/2024/08/12/15/21/ai-generated-8963817_640.jpg",
    rating: 4,
    review:
      "ভালো মানের ভিডিও ও সাপোর্ট সিস্টেম ছিল। আমার জার্নিটা অনেক সুন্দর ছিল।",
  },
  {
    id: 3,
    name: "Tariqul Hasan",
    batch: "Batch 3",
    district: "Rajshahi",
    image:
      "https://cdn.pixabay.com/photo/2024/08/20/14/24/ai-generated-8983480_640.jpg",
    rating: 5,
    review:
      "লাইভ ক্লাস, কুইজ, এবং প্রজেক্ট সবকিছুই দারুণ ছিল। Highly recommended!",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
};

const renderStars = (rating: number) => {
  return Array.from({ length: 5 }, (_, i) => (
    <span key={i} className={i < rating ? "text-yellow-500" : "text-gray-300"}>
      ★
    </span>
  ));
};

export default function StudentReview() {
  return (
    <section className="p-4 md:p-8 lg:p-16 bg-white">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-2">
          Student Reviews
        </h2>
        <p className="text-gray-600 mb-8">
          আমাদের শিক্ষার্থীরা Enlighten Academy থেকে কী শিখেছে তা জানুন।
        </p>
      </div>

      <div className="">
        <Slider {...settings}>
          {testimonials.map((student) => (
            <div key={student.id} className="">
              <div className="bg-gray-50 p-6 rounded-xl shadow-md text-center h-full border">
                <div className="flex justify-center mb-3">
                  {renderStars(student.rating)}
                </div>
                <p className="italic text-gray-700 mb-4">{student.review}</p>
                <div className="w-20 h-20 relative mx-auto mb-2">
                  <Image
                    src={student.image}
                    alt={student.name}
                    fill
                    className="rounded-full object-cover border-2 border-indigo-300"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {student.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {student.batch} • {student.district}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
