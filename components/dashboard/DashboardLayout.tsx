"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Sidebar from "./Sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" grid grid-cols-12 bg-gray-100">
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 bg-white p-2 rounded-md shadow"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className="col-span-3 min-h-screen">
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      <div className="col-span-3 min-h-screen mt-10">{children}</div>
    </div>
  );
};

export default DashboardLayout;
