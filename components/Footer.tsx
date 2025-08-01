import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[var(--bg-color)] text-gray-300 p-6 md:p-8 lg:p-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Column 1: Logo & About */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <Image
              src="/logo/logo.jpg"
              alt="Enlighten Academy"
              className="w-10 h-10"
              width={10}
              height={10}
            />
            <span className="text-xl font-bold text-white">
              Enlighten Academy
            </span>
          </div>
          <p className="text-sm leading-relaxed">
            “ইংরেজি শেখা শুরু হোক সাহস নিয়ে, শিখুন বলার মাধ্যমে—not শুধু পড়ে।”
            <br />– Enlighten Academy
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-white">
                🏠 Home
              </Link>
            </li>
            <li>
              <Link href="/aboutUs" className="hover:text-white">
                ℹ️ About Us
              </Link>
            </li>
            <li>
              <Link href="/courses" className="hover:text-white">
                📚 Courses
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                📞 Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
          <p className="text-sm leading-relaxed">
            House #12, Road #3, Block A<br />
            Mirpur, Dhaka 1216, Bangladesh
            <br />
            Phone: +880 1234-567890
            <br />
            Email: info@enlightenacademy.com
          </p>
        </div>

        {/* Column 4: Follow Us */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Follow Us</h4>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              <FaTwitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      {/* Footer Bottom Line */}
      {/* <div className="mt-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Enlighten Academy. All rights reserved.
      </div> */}
    </footer>
  );
}

export default Footer;
