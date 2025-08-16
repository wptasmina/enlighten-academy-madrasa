"use client";
import { apiFetch } from "@/utils/api";
import React, { useEffect, useState } from "react";

function Dashboard() {
  const [stats, setStats] = useState({
    totalStudents: 0,
    totalUsers: 0,
    totalMessages: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await apiFetch("/dashboard");
        setStats(res?.data);
      } catch (error) {
        console.error("Failed to fetch dashboard stats:", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
      {/* Total Students */}
      <div className="bg-blue-500 text-white p-6 rounded-xl shadow-lg">
        <h3 className="text-lg font-semibold">Total Students</h3>
        <p className="text-2xl font-bold">{stats?.totalStudents}</p>
      </div>

      {/* Total Users */}
      <div className="bg-green-500 text-white p-6 rounded-xl shadow-lg">
        <h3 className="text-lg font-semibold">Total Users</h3>
        <p className="text-2xl font-bold">{stats?.totalUsers}</p>
      </div>

      {/* Total Messages */}
      <div className="bg-purple-500 text-white p-6 rounded-xl shadow-lg">
        <h3 className="text-lg font-semibold">Total Messages</h3>
        <p className="text-2xl font-bold">{stats?.totalMessages}</p>
      </div>
    </div>
  );
}

export default Dashboard;
