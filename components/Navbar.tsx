"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

import { DialogTitle } from "@/components/ui/dialog"; 

import { Badge } from "@/components/ui/badge";
import {
  Menu,
  BookOpen,
  Users,
  GraduationCap,
  Phone,
  User,
  LogIn,
  ChevronDown,
  Home,
  Info,
  MessageSquare,
} from "lucide-react";
import Image from "next/image";

interface NavbarProps {
  user?: {
    name: string;
    email: string;
    role: "student" | "teacher" | "admin" | "parent";
  } | null;
  onLoginClick: () => void;
  onLogout: () => void;
}

type NavigationItem = {
  name: string;
  href: string;
  icon: React.ElementType;
  badge?: string;
  submenu?: {
    name: string;
    href: string;
  }[];
};

export default function Navbar({ user, onLoginClick, onLogout }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems: NavigationItem[] = [
    { name: "Home", href: "/", icon: Home },
    { name: "About Us", href: "/about", icon: Info },
    {
      name: "Courses",
      href: "/courses",
      icon: BookOpen,
      submenu: [
        { name: "Noorani Course", href: "/courses#noorani" },
        { name: "Nazera Course", href: "/courses#najera" },
        { name: "Hifzul Quran", href: "/courses#hifz" },
        { name: "Alim Course", href: "/courses#alim" },
        { name: "Fazil Course", href: "/courses#fazil" },
        { name: "Kamil Course", href: "/courses#kamil" },
      ],
    },
    { name: "Teachers", href: "/teachers", icon: Users },
    { name: "Admission", href: "/admission", icon: GraduationCap, badge: "New" },
    { name: "Testimonials", href: "/testimonials", icon: MessageSquare },
    { name: "Contact", href: "/contact", icon: Phone },
  ];

  const getRoleColor = (role: string) => {
    const colors = {
      student: "bg-blue-100 text-blue-800",
      teacher: "bg-green-100 text-green-800",
      admin: "bg-purple-100 text-purple-800",
      parent: "bg-orange-100 text-orange-800",
    };
    return colors[role as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  const getRoleText = (role: string) => {
    const roles = {
      student: "Student",
      teacher: "Teacher",
      admin: "Admin",
      parent: "Parent",
    };
    return roles[role as keyof typeof roles] || role;
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/logo.png"
              alt="madrasha logo"
              width={100}
              height={40}
              className="object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item, index) => (
              <div key={index} className="relative">
                {item.submenu ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="flex items-center space-x-1">
                        <item.icon className="w-4 h-4" />
                        <span>{item.name}</span>
                        <ChevronDown className="w-3 h-3" />
                        {item.badge && (
                          <Badge className="ml-1 text-xs bg-red-500 text-white">
                            {item.badge}
                          </Badge>
                        )}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-48">
                      {item.submenu.map((subItem, subIndex) => (
                        <DropdownMenuItem key={subIndex} asChild>
                          <Link href={subItem.href} className="w-full">
                            {subItem.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Button variant="ghost" asChild className="flex items-center space-x-1">
                    <Link href={item.href}>
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                      {item.badge && (
                        <Badge className="ml-1 text-xs bg-red-500 text-white">
                          {item.badge}
                        </Badge>
                      )}
                    </Link>
                  </Button>
                )}
              </div>
            ))}
          </div>

          {/* User Menu / Login Button */}
          <div className="hidden lg:flex items-center space-x-4">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
                    <div className="bg-green-100 p-1 rounded-full">
                      <User className="w-4 h-4 text-green-600" />
                    </div>
                    <div className="text-left">
                      <div className="text-sm font-medium">{user.name}</div>
                      <Badge className={`text-xs ${getRoleColor(user.role)}`}>
                        {getRoleText(user.role)}
                      </Badge>
                    </div>
                    <ChevronDown className="w-3 h-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end">
                  <div className="px-3 py-2">
                    <p className="text-sm font-medium">{user.name}</p>
                    <p className="text-xs text-gray-500">{user.email}</p>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard">Dashboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/profile">Profile</Link>
                  </DropdownMenuItem>
                  {user.role === "student" && (
                    <>
                      <DropdownMenuItem asChild>
                        <Link href="/results">Results</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/attendance">Attendance</Link>
                      </DropdownMenuItem>
                    </>
                  )}
                  {user.role === "teacher" && (
                    <>
                      <DropdownMenuItem asChild>
                        <Link href="/classes">Classes</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/students">Students</Link>
                      </DropdownMenuItem>
                    </>
                  )}
                  {user.role === "admin" && (
                    <>
                      <DropdownMenuItem asChild>
                        <Link href="/admin">Administration</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/reports">Reports</Link>
                      </DropdownMenuItem>
                    </>
                  )}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/settings">Settings</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={onLogout} className="text-red-600">
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button onClick={onLoginClick} className="bg-green-600 hover:bg-green-700">
                <LogIn className="w-4 h-4 mr-2" />
                Login
              </Button>
            )}
          </div>

            {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <DialogTitle className="text-lg font-semibold">Menu</DialogTitle>
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-center pb-4 border-b">
                    <Image src="/logo.png" alt="logo" width={100} height={40} />
                  </div>
                  <div className="space-y-2 py-4">
                    {navigationItems.map((item, i) => (
                      <div key={i}>
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                          <item.icon className="w-5 h-5 text-gray-600" />
                          <span>{item.name}</span>
                          {item.badge && (
                            <Badge className="ml-auto text-xs bg-red-500 text-white">{item.badge}</Badge>
                          )}
                        </Link>
                        {item.submenu && (
                          <div className="ml-8 mt-2 space-y-1">
                            {item.submenu.map((sub, j) => (
                              <Link
                                key={j}
                                href={sub.href}
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-1 text-sm text-gray-600 hover:text-green-600"
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="mt-auto pt-4 border-t">
                    {user ? (
                      <Button
                        onClick={() => {
                          onLogout();
                          setIsOpen(false);
                        }}
                        className="w-full border border-red-200 text-red-600"
                        variant="outline"
                      >
                        Logout
                      </Button>
                    ) : (
                      <Button
                        onClick={() => {
                          onLoginClick();
                          setIsOpen(false);
                        }}
                        className="w-full bg-green-600 hover:bg-green-700"
                      >
                        <LogIn className="w-4 h-4 mr-2" />
                        Login
                      </Button>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </div>
    </nav>
  );
}
