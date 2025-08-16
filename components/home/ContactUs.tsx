"use client";

import { apiFetch } from "@/utils/api";
import React, { useState } from "react";
import { toast } from "react-toastify";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await apiFetch("/contactUs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log(response);

      if (response.ok) {
        toast.success("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        toast.error("❌ Failed to send message");
      }
    } catch {
      toast.error("❌ Something went wrong!");
    }
  };

  return (
    <div
      id="contact"
      className="flex flex-col items-center justify-center bg-gray-50 p-4 md:p-8 lg:p-16"
    >
      <h1 className="text-3xl md:text-4xl font-bold mb-2">Contact Us</h1>
      <p className="mb-8 text-center">
        At
        <span className="font-semibold text-green-600">Enlighten Academy</span>,
        our mission is to empower students with quality education, modern
        learning techniques, and a supportive environment. Feel free to reach
        out — we are always here to guide you on your educational journey.
      </p>
      <div className="w-full bg-white rounded-lg shadow-lg flex flex-col md:flex-row overflow-hidden">
        {/* Left Side - Contact Form */}
        <div className="w-full md:w-1/2 p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 font-semibold">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 font-semibold">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Write your message here..."
              />
            </div>

            <button
              type="submit"
              className="bg-[var(--secondary-color)] text-white px-6 py-3 rounded-md transition cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Side - Contact Info */}
        <div className="w-full md:w-1/2 bg-green-50 p-8 flex flex-col justify-center space-y-6">
          <h2 className="text-2xl font-semibold mb-4">📍 আমাদের অফিস</h2>
          <p>
            <strong>🏠 ঠিকানা:</strong> মিলি সুপারমার্কেট, কচুক্ষেত, মিরপুর ১৪,
            ঢাকা
          </p>
          <p>
            <strong>📞 ফোন:</strong> 01914-045670 (হোয়াটসঅ্যাপ), 01840-996916
          </p>
          <p>
            <strong>✉️ ইমেইল:</strong> enlightenacademy930@gmail.com
          </p>
          <p>
            <strong>🕐 অফিস সময়:</strong> শনিবার - বৃহস্পতিবার, সকাল ৯টা –
            সন্ধ্যা ৬টা
          </p>
        </div>
      </div>
    </div>
  );
}
