"use client";

import {
  LayoutDashboard,
  Users,
  GraduationCap,
  MessageCircle,
  List,
  UserIcon,
} from "lucide-react";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AuthContext } from "@/context/AuthContext";

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
    children: [
      {
        name: "All Students",
        href: "/dashboard/students",
        icon: List,
      },
      // {
      //   name: "Create Student",
      //   href: "/dashboard/students/create",
      //   icon: UserPlus,
      // },
    ],
  },
  // {
  //   name: "Gallery",
  //   href: "/dashboard/gallery",
  //   icon: ImageIcon,
  // },
  {
    name: "Message",
    href: "/dashboard/contactUs",
    icon: MessageCircle,
  },
  {
    name: "Profile",
    href: "/dashboard/profile",
    icon: Users,
  },
  // {
  //   name: "Testimonials",
  //   href: "/dashboard/testimonials",
  //   icon: MessageCircle,
  // },
];

const Sidebar = ({ isOpen, setIsOpen }: Props) => {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [setIsOpen]);

  const toggleMenu = (name: string) => {
    setOpenMenu((prev) => (prev === name ? null : name));
  };

  return (
    <div
      className={`fixed top-0 left-0 z-40 w-56 h-full bg-[var(--primary-color)] text-white p-6 transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0 lg:static lg:block`}
    >
      <h2 className="pl-3 text-2xl font-bold mb-4 flex items-center gap-2">
        {user?.role && user.role.charAt(0).toUpperCase() + user.role.slice(1)}
        <span>Panel</span>
      </h2>
      <nav className="space-y-1">
        {sidebarItems.map((item) => {
          const isSubMenuOpen = openMenu === item.name;

          if (item.children) {
            return (
              <div key={item.name}>
                <button
                  type="button"
                  onClick={() => toggleMenu(item.name)}
                  className={`flex items-center w-full gap-3 px-3 py-2 rounded-md font-semibold transition ${
                    isSubMenuOpen ? "bg-white/20" : "hover:bg-white/10"
                  }`}
                >
                  <item.icon size={20} />
                  <span className="flex-grow text-left">{item.name}</span>
                  {/* Arrow Icon */}
                  <svg
                    className={`w-4 h-4 transform transition-transform duration-200 ${
                      isSubMenuOpen ? "rotate-90" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>

                {/* Sub-menu */}
                {isSubMenuOpen && (
                  <div className="ml-6 mt-1 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center gap-2 px-3 py-1 rounded-md text-sm transition ${
                          pathname === child.href
                            ? "bg-white/20 text-white"
                            : "hover:bg-white/10 text-white/80"
                        }`}
                      >
                        {child.icon && <child.icon size={16} />}
                        <span>{child.name}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          }

          return (
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
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
