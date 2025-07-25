import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="bg-[#171717] text-gray-300 py-4  md:p-8 lg:p-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Column 1: Contact Information */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            {/* Replace with your actual logo component or image */}
            <Image
              src="/path/to/your/kingster-logo.png"
              alt="Kingster University Logo"
              className="h-8 w-8"
              width={8}
              height={8}
            />
            <span className="text-xl font-semibold text-white">
              Kingster University
            </span>
          </div>
          <p>Box 35300</p>
          <p>1810 Campus Way NE</p>
          <p>Bothell, WA 98011-8246</p>
          <p>+1-2534-4456-345</p>
          <Link
            href="mailto:admin@kingsteruni.edu"
            className="text-green-400 hover:underline"
          >
            admin@kingsteruni.edu
          </Link>
        </div>

        {/* Column 2: Our Campus */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 relative pb-2">
            Our Campus
            <span className="absolute bottom-0 left-0 w-1/4 h-0.5 bg-green-400"></span>
          </h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-white">
                Acedemic
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Planning & Administration
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Campus Safety
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Office of the Chancellor
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Facility Services
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Human Resources
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Campus Life */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 relative pb-2">
            Campus Life
            <span className="absolute bottom-0 left-0 w-1/4 h-0.5 bg-green-400"></span>
          </h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-white">
                Accessibility
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Financial Aid
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Food Services
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Housing
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Information Technologies
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Student Life
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Academics */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 relative pb-2">
            Academics
            <span className="absolute bottom-0 left-0 w-1/4 h-0.5 bg-green-400"></span>
          </h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-white">
                Canvas
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Catalyst
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Library
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Time Schedule
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Apply For Admissions
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Pay My Tuition
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
