"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, LogIn } from "lucide-react";

type NavigationItem = {
  name: string;
  href: string;
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems: NavigationItem[] = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/aboutUs" },
    {
      name: "Courses",
      href: "/courses",
    },
    // { name: "Teachers", href: "/teachers" },
    {
      name: "Admission",
      href: "/admission",
    },
    // { name: "Testimonials", href: "/testimonials" },
    { name: "Contact us", href: "/contactUs" },
    { name: "Dashboard", href: "/dashboard" },
  ];

  // const navLinks = [
  //   { href: "/", label: "Home" },
  //   { href: "/courses", label: "Courses" },
  //   { href: "/reviews", label: "Reviews" },
  //   { href: "/contact", label: "Contact" },
  // ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 px-6 md:px-8 lg:px-16">
      <div className="py-3 md:py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold ">
          <Image
            className="rounded"
            alt="Enlighten Academy"
            src="/logo/EnlightenAcademy.jpg"
            width={45}
            height={45}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link
            href="/"
            className="text-gray-700 hover:text-[var(--primary-color)]"
          >
            Home
          </Link>
          <Link
            href="/#courses"
            className="text-gray-700 hover:text-indigo-600"
          >
            Courses
          </Link>
          <Link
            href="/#reviews"
            className="text-gray-700 hover:text-indigo-600"
          >
            Reviews
          </Link>
          <Link
            href="/#contact"
            className="text-gray-700 hover:text-indigo-600"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link href="/" className="block text-gray-700 hover:text-indigo-600">
            Home
          </Link>
          <Link
            href="/courses"
            className="block text-gray-700 hover:text-indigo-600"
          >
            Courses
          </Link>
          <Link
            href="/reviews"
            className="block text-gray-700 hover:text-indigo-600"
          >
            Reviews
          </Link>
          <Link
            href="/contact"
            className="block text-gray-700 hover:text-indigo-600"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
