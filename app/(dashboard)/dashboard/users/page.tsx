import Users from "@/components/dashboard/users/Users";
import React from "react";

function page() {
  return (
    <div className="p-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-green-600 text-center">
        👤 User Profile
      </h2>
      <Users />
    </div>
  );
}

export default page;
