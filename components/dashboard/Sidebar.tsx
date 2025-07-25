"use client";

import {
  LayoutDashboard,
  Users,
  GraduationCap,
  BookOpen,
  Image as ImageIcon,
  MessageCircle,
  User as UserIcon,
} from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

interface Props {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}

const sidebarItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Users",
    href: "/dashboard/users",
    icon: Users,
  },
  {
    name: "Teacher",
    href: "/dashboard/teacher",
    icon: UserIcon,
  },
  {
    name: "Students",
    href: "/dashboard/students",
    icon: GraduationCap,
  },
  {
    name: "Courses",
    href: "/dashboard/courses",
    icon: BookOpen,
  },
  {
    name: "Gallery",
    href: "/dashboard/gallery",
    icon: ImageIcon,
  },
  {
    name: "Testimonials",
    href: "/dashboard/testimonials",
    icon: MessageCircle,
  },
];

const Sidebar = ({ isOpen, setIsOpen }: Props) => {
  const pathname = usePathname();

  // ESC key press এ sidebar বন্ধ হবে
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [setIsOpen]);

  return (
    <div
      className={`fixed top-0 left-0 z-40 w-64 h-full bg-[var(--primary-color)] text-white p-6 transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0 lg:static lg:block`}
    >
      <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
      <nav className="space-y-4">
        {sidebarItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setIsOpen(false)}
            className={`flex items-center gap-3 px-3 py-2 rounded-md transition ${
              pathname === item.href ? "bg-white/20" : "hover:bg-white/10"
            }`}
          >
            <item.icon size={20} />
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
