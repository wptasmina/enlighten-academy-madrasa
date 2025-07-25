"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Search, MessageCircle, Phone, Mail, HelpCircle } from "lucide-react";

const faqData = [
  {
    id: "1",
    category: "Admission",
    question: "What are the admission requirements for the madrasa?",
    answer:
      "Students must be at least 5 years old for primary admission. For higher classes, previous Islamic education certificates are required. We also conduct a basic assessment to determine the appropriate class level for each student.",
  },
  {
    id: "2",
    category: "Admission",
    question: "When does the admission process start?",
    answer:
      "Admission applications are accepted year-round, but the main intake is in January and July. We recommend applying at least one month before the desired start date to complete all formalities.",
  },
  {
    id: "3",
    category: "Admission",
    question: "Is there an entrance exam?",
    answer:
      "Yes, we conduct a basic assessment for students applying to intermediate and advanced levels. This helps us place students in the appropriate class according to their current knowledge level.",
  },
  {
    id: "4",
    category: "Courses",
    question: "What courses do you offer?",
    answer:
      "We offer comprehensive Islamic education including Noorani Course, Nazera Course, Hifzul Quran, Alim Course, Fazil Course, and Kamil Course. Each course is designed to build upon previous knowledge systematically.",
  },
  {
    id: "5",
    category: "Courses",
    question: "How long does each course take to complete?",
    answer:
      "Course duration varies: Noorani (6-12 months), Nazera (1-2 years), Hifzul Quran (2-4 years), Alim (5 years), Fazil (2 years), and Kamil (2 years). Duration may vary based on individual progress.",
  },
  {
    id: "6",
    category: "Courses",
    question: "Are the certificates recognized?",
    answer:
      "Yes, our certificates are recognized by the Bangladesh Madrasa Education Board and other Islamic educational institutions. Our Alim, Fazil, and Kamil degrees are equivalent to secondary and higher secondary education.",
  },
  {
    id: "7",
    category: "Fees",
    question: "What are the tuition fees?",
    answer:
      "Tuition fees vary by course level. Primary courses start from 1,000 BDT per month, while advanced courses range from 2,000-5,000 BDT per month. We also offer scholarships for deserving students.",
  },
  {
    id: "8",
    category: "Fees",
    question: "Do you offer scholarships?",
    answer:
      "Yes, we provide need-based and merit-based scholarships. Up to 20% of students receive partial or full scholarships. Applications are reviewed annually based on academic performance and financial need.",
  },
  {
    id: "9",
    category: "Fees",
    question: "What payment methods do you accept?",
    answer:
      "We accept cash payments, bank transfers, and mobile banking (bKash, Nagad, Rocket). Monthly, quarterly, and annual payment plans are available for your convenience.",
  },
  {
    id: "10",
    category: "General",
    question: "What are the class timings?",
    answer:
      "Regular classes run from 8:00 AM to 2:00 PM, Saturday to Thursday. Hifz classes have extended hours from 6:00 AM to 4:00 PM with breaks. Friday is a holiday.",
  },
  {
    id: "11",
    category: "General",
    question: "Do you provide accommodation?",
    answer:
      "Yes, we have separate hostel facilities for male and female students. The hostels provide meals, study rooms, and 24/7 supervision. Hostel fees are separate from tuition fees.",
  },
  {
    id: "12",
    category: "General",
    question: "What extracurricular activities are available?",
    answer:
      "We organize Quran recitation competitions, Islamic debates, sports activities, and cultural programs. Students also participate in community service and religious festivals throughout the year.",
  },
  {
    id: "13",
    category: "General",
    question: "How can parents track their child's progress?",
    answer:
      "We provide monthly progress reports and conduct parent-teacher meetings quarterly. Parents can also access our online portal to view attendance, grades, and communicate with teachers.",
  },
  {
    id: "14",
    category: "Admission",
    question: "Can international students apply?",
    answer:
      "Yes, we welcome international students. Additional documentation including visa status and previous education transcripts are required. We provide assistance with accommodation and local orientation.",
  },
  {
    id: "15",
    category: "Courses",
    question: "Do you offer online classes?",
    answer:
      "We offer hybrid learning options with some online components, especially for advanced courses. However, core Islamic studies and Quran memorization require in-person attendance for proper guidance.",
  },
];

const categories = ["All", "Admission", "Courses", "Fees", "General"];

const categoryColors = {
  Admission: "bg-blue-100 text-blue-800",
  Courses: "bg-green-100 text-green-800",
  Fees: "bg-yellow-100 text-yellow-800",
  General: "bg-purple-100 text-purple-800",
};

function FAQ() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredFAQs = faqData.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <HelpCircle className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Find answers to common questions about our madrasa
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-3 text-lg bg-white text-gray-800 border-0 rounded-full shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full ${
                selectedCategory === category
                  ? "bg-green-600 hover:bg-green-700"
                  : "hover:bg-green-50"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* FAQ Content */}
          <div className="lg:col-span-3">
            {filteredFAQs.length > 0 ? (
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-800">
                    {selectedCategory === "All"
                      ? "All Questions"
                      : `${selectedCategory} Questions`}
                  </CardTitle>
                  <CardDescription>
                    {filteredFAQs.length} question
                    {filteredFAQs.length !== 1 ? "s" : ""} found
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="space-y-4">
                    {filteredFAQs.map((faq) => (
                      <AccordionItem
                        key={faq.id}
                        value={faq.id}
                        className="border rounded-lg px-4 hover:shadow-md transition-shadow"
                      >
                        <AccordionTrigger className="text-left hover:no-underline py-4">
                          <div className="flex items-start gap-3 w-full">
                            <Badge
                              className={`${
                                categoryColors[
                                  faq.category as keyof typeof categoryColors
                                ]
                              } text-xs shrink-0 mt-1`}
                            >
                              {faq.category}
                            </Badge>
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
            ) : (
              <Card className="shadow-lg">
                <CardContent className="text-center py-12">
                  <HelpCircle className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">
                    No questions found
                  </h3>
                  <p className="text-gray-500">
                    Try adjusting your search terms or category filter
                  </p>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Contact Sidebar */}
          <div className="lg:col-span-1">
            <Card className="shadow-lg sticky top-4">
              <CardHeader>
                <CardTitle className="text-xl text-gray-800 flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Still have questions?
                </CardTitle>
                <CardDescription>
                  Can&apos;t find what you&apos;re looking for? Get in touch
                  with us.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  className="w-full bg-green-600 hover:bg-green-700"
                  asChild
                >
                  <a href="/contact" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Contact Us
                  </a>
                </Button>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Phone className="w-4 h-4" />
                    <span>+880 1234-567890</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Mail className="w-4 h-4" />
                    <span>info@jamiyaislamiya.edu.bd</span>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Quick Links
                  </h4>
                  <div className="space-y-2 text-sm">
                    <a
                      href="/admission"
                      className="block text-green-600 hover:text-green-700"
                    >
                      Apply for Admission
                    </a>
                    <a
                      href="/courses"
                      className="block text-green-600 hover:text-green-700"
                    >
                      View Courses
                    </a>
                    <a
                      href="/teachers"
                      className="block text-green-600 hover:text-green-700"
                    >
                      Meet Our Teachers
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
