"use client";
import React, { useState } from "react";

function page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setSubmitted(true);

    // setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-50 p-4 md:p-8 lg:p-16">
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
          {submitted ? (
            <div
              className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
              role="alert"
            >
              <strong className="font-bold">Thank you!</strong>
              <span className="block sm:inline">
                {" "}
                Your message has been sent.
              </span>
            </div>
          ) : (
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
                className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition"
              >
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* Right Side - Contact Info */}
        <div className="w-full md:w-1/2 bg-green-50 p-8 flex flex-col justify-center space-y-6">
          <h2 className="text-2xl font-semibold mb-4">Our Office</h2>
          <p>
            <strong>Address:</strong> Mirpur 2, Dhaka 1216, Bangladesh
          </p>
          <p>
            <strong>Phone:</strong> +880 1234 567890
          </p>
          <p>
            <strong>Email:</strong> info@enlightenacademy.com
          </p>
          <p>
            <strong>Working Hours:</strong> Sat - Thu, 9:00 AM - 6:00 PM
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
