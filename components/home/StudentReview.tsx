"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type { Settings } from "react-slick";

// Dynamically import react-slick
const Slider = dynamic(() => import("react-slick"), { ssr: false });

const data = [
  {
    id: 1,
    name: "Rafiul Islam",
    batch: "Batch 5",
    district: "Dhaka",
    image:
      "https://cdn.pixabay.com/photo/2024/08/12/15/21/ai-generated-8963819_640.jpg",
    rating: 5,
    review:
      "আমি Enlighten Academy-তে ভর্তি হওয়ার পর ইংরেজিতে কথা বলার ভয় অনেকটাই কেটে গেছে। প্র‍্যাকটিক্যাল ক্লাসগুলো খুবই হেল্পফুল।",
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
      "শুধু থিওরি না, এখানে স্পিকিং এবং রিয়েল টাইম একটিভিটি থাকে। আমার প্রেজেন্টেশন স্কিল অনেক উন্নতি করেছে।",
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
      "Enlighten Academy-এর Friday Batch আমার লাইফের টার্নিং পয়েন্ট। এখন অনেক আত্মবিশ্বাস নিয়ে ইংরেজি বলতে পারি।",
  },
  {
    id: 4,
    name: "Nusrat Jahan",
    batch: "Batch 2",
    district: "Sylhet",
    image:
      "https://cdn.pixabay.com/photo/2024/07/30/16/44/ai-generated-8957220_640.jpg",
    rating: 5,
    review:
      "শিশুদের মতো সহজ ভাষায় শেখানো হয়। আমি আগে ইংরেজিতে ভয় পেতাম, এখন কথা বলা অনেক সহজ লাগে।",
  },
  {
    id: 5,
    name: "Sajib Chowdhury",
    batch: "Batch 6",
    district: "Barisal",
    image:
      "https://cdn.pixabay.com/photo/2024/08/21/12/17/ai-generated-8985101_640.jpg",
    rating: 4,
    review:
      "সাপোর্ট টিম খুব হেল্পফুল। হোমওয়ার্ক ও এক্টিভিটি গুলো নিয়মিত চেক করা হয়। ভালো অভিজ্ঞতা।",
  },
  {
    id: 6,
    name: "Farzana Haque",
    batch: "Kids Batch A",
    district: "Comilla",
    image:
      "https://cdn.pixabay.com/photo/2024/07/28/09/14/ai-generated-8954157_640.jpg",
    rating: 5,
    review:
      "আমার মেয়ে এখন নিজে নিজে ইংরেজিতে পরিচয় দিতে পারে। কিডস কোর্সটি সত্যিই কার্যকরী।",
  },
  {
    id: 7,
    name: "Hasib Mahmud",
    batch: "Online Batch 7",
    district: "Khulna",
    image:
      "https://cdn.pixabay.com/photo/2024/08/18/10/05/ai-generated-8979847_640.jpg",
    rating: 5,
    review:
      "লাইভ ক্লাস, রেকর্ডেড সেশন, এবং ছোট ছোট কুইজ খুব উপকারী ছিল। খুব পছন্দ হয়েছে। Highly recommended!",
  },
];

const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  lazyLoad: "ondemand",
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
    <section id="reviews" className="p-4 md:p-8 lg:p-16 bg-white">
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
          {data.map((student) => (
            <div key={student.id} className="">
              <div className="bg-gray-50 p-6 rounded-xl shadow-md text-center h-full border">
                <div className="flex justify-center mb-3">
                  {renderStars(student.rating)}
                </div>
                <p className="italic text-gray-700 mb-4">{student.review}</p>
                <div className="w-40 h-40 relative mx-auto mb-2">
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
