"use client";

import React, { useContext, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/context/AuthContext";

type NavigationItem = {
  label: string;
  href: string;
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { user, logout } = useContext(AuthContext);

  const navLinks: NavigationItem[] = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Courses",
      href: "/#courses",
    },
    {
      label: "Reviews",
      href: "/#reviews",
    },
    {
      label: "Contact",
      href: "/#contact",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    // {
    //   label: "Login",
    //   href: "/login",
    // },
    // {
    //   label: "Sign Up",
    //   href: "/sign-up",
    // },
  ];

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 px-6 md:px-8 lg:px-16">
      <div className="py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold ">
          <Image
            className="rounded"
            alt="Enlighten Academy"
            src="/logo/logo.jpg"
            width={45}
            height={45}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {navLinks?.map((item, index) => (
            <Link
              key={index}
              href={item?.href}
              className="text-gray-700 hover:text-[var(--primary-color)]"
            >
              {item?.label}
            </Link>
          ))}
          {user ? (
            <button onClick={handleLogout} className="cursor-pointer">
              Logout
            </button>
          ) : (
            <>
              <Link href="/login">Login</Link>
              <Link href="/sign-up">Sign Up</Link>
            </>
          )}
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
          {navLinks?.map((item, index) => (
            <Link
              key={index}
              href={item?.href}
              className="block text-gray-700 hover:text-indigo-600"
            >
              {item?.label}
            </Link>
          ))}
          {user ? (
            <button onClick={handleLogout} className="cursor-pointer">
              Logout
            </button>
          ) : (
            <>
              <Link href="/login">Login</Link>
              <Link href="/sign-up">Sign Up</Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
