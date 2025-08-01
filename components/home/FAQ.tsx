"use client";
import React from "react";

import { Card, CardContent } from "@/components/ui/card";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqData = [
  {
    id: "1",
    category: "ভর্তি",
    question: "নেক্সট ব্যাচ কবে থেকে শুরু হচ্ছে?",
    answer:
      "আমাদের পরবর্তী ব্যাচ শুরু হচ্ছে সেপ্টেম্বর ১, ২০২৫ থেকে ইনশাআল্লাহ। তবে আসন সংখ্যা সীমিত, তাই আগেই ভর্তি নিশ্চিত করার পরামর্শ দেওয়া হচ্ছে।",
  },
  {
    id: "2",
    category: "ভর্তি",
    question: "ভর্তি হওয়ার জন্য কী কী প্রয়োজন?",
    answer:
      "নাম, মোবাইল নম্বর ও একটি প্রোফাইল ছবি হলেই ভর্তি প্রক্রিয়া শুরু করা যাবে। ১৮ বছরের নিচের শিক্ষার্থীদের ক্ষেত্রে অভিভাবকের নাম্বার ও অনুমতি প্রয়োজন হতে পারে।",
  },
  {
    id: "3",
    category: "স্কলারশিপ",
    question: "স্কলারশিপের সুযোগ আছে কি?",
    answer:
      "হ্যাঁ, স্কলারশিপের সুযোগ রয়েছে বিশেষ করে মেধাবী, প্রবাসী পরিবারের সদস্য ও নারীদের জন্য। আপনি চাইলে স্কলারশিপের জন্য আবেদন করতে পারেন ভর্তি ফর্মেই।",
  },
  {
    id: "4",
    category: "কোর্স",
    question: "কোন কোন কোর্স অফার করা হয়?",
    answer:
      "আমরা ৪০ দিনের আবাসিক কোর্স, ৩ মাসের অনাবাসিক কোর্স, শুক্রবার ব্যাচ, কিডস স্পোকেন ইংলিশ এবং অনলাইন স্পোকেন ইংলিশ কোর্স অফার করি। প্রতিটি কোর্সে রয়েছে স্পিকিং, গ্রামার, প্রেজেন্টেশনসহ নানা প্র্যাকটিকাল অনুশীলন।",
  },
  {
    id: "5",
    category: "কোর্স",
    question: "কোন কোর্সটি আমার জন্য উপযুক্ত?",
    answer:
      "যদি আপনি পুরোপুরি ডেডিকেটেড হন, তবে ৪০ দিনের আবাসিক কোর্সই বেস্ট। সন্ধ্যায় সময় থাকলে অনাবাসিক কোর্স বা শুক্রবার ব্যাচ ভালো হবে। শিশুদের জন্য রয়েছে কিডস স্পোকেন ইংলিশ, আর দূরে থাকলে অনলাইন ব্যাচে যুক্ত হতে পারেন।",
  },
];

function FAQ() {
  return (
    <div className=" p-4 md:p-8 lg:p-16 ">
      {/* Hero Section */}
      <div className="">
        <div className="text-center">
          <HelpCircle className="w-16 h-16 mx-auto mb-4 text-[var(--secondary-color)]" />
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Frequently Asked Questions
          </h1>
          <p className="mb-8">
            Find answers to common questions about our madrasa
          </p>
        </div>
      </div>

      <div className="">
        {/* FAQ Content */}
        <div className="">
          <Card className="shadow-lg">
            <CardContent>
              <Accordion type="single" collapsible className="space-y-4">
                {faqData?.map((faq) => (
                  <AccordionItem
                    key={faq.id}
                    value={faq.id}
                    className="border rounded-lg px-4 hover:shadow-md transition-shadow"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-4">
                      <div className="flex items-start gap-3 w-full">
                        <span className="font-medium text-gray-800 text-base">
                          {faq.question}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pb-4 pl-16">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
