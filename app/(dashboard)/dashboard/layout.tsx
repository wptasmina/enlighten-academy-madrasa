import React from "react";
import "../../globals.css";
import DashboardLayout from "@/components/dashboard/DashboardLayout";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <DashboardLayout>{children}</DashboardLayout>;
};

export default Layout;
