"use client";
import { AuthContext } from "@/context/AuthContext";
import { apiFetch } from "@/utils/api";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

function Profile() {
  const [formData, setFormData] = useState({
    _id: "",
    name: "",
    email: "",
    phone: "",
    batch: "",
    district: "",
    comment: "",
    gender: "",
    address: "",
    role: "",
    createdAt: "",
    updatedAt: "",
  });
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!user?._id) return;

    async function fetchUser() {
      try {
        const res = await apiFetch(`/users/${user?._id}`);

        console.log(res);

        if (res.ok) {
          setFormData({
            _id: res.user._id || "",
            name: res.user.name || "",
            email: res.user.email || "",
            phone: res.user.phone || "",
            batch: res.user.batch || "",
            district: res.user.district || "",
            comment: res.user.comment || "",
            gender: res.user.gender || "",
            address: res.user.address || "",
            role: res.user.role || "",
            createdAt: res.user.createdAt || "",
            updatedAt: res.user.updatedAt || "",
          });
        } else {
          toast.error(res.message || "Failed to fetch user data");
        }
      } catch {
        toast.error("Something went wrong");
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, [user?._id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Loading profile...</p>
        </div>
      </div>
    );
  }

  const profileFields = [
    { label: "Full Name", value: formData.name, icon: "👤" },
    { label: "Email", value: formData.email, icon: "📧" },
    { label: "Phone", value: formData.phone, icon: "📱" },
    { label: "Gender", value: formData.gender, icon: "⚤" },
    { label: "District", value: formData.district, icon: "📍" },
    { label: "Batch", value: formData.batch || "Not Assigned", icon: "🎓" },
    { label: "Comment", value: formData.comment || "No Comments", icon: "💬" },
  ];

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="py-8">
      <div className="">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="relative inline-block">
            <div className="w-24 h-24 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg mb-4">
              {formData.name ? formData.name.charAt(0).toUpperCase() : "U"}
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2 flex items-center justify-center gap-2">
            {formData.name || "User Profile"}
            {formData.role && (
              <span className="text-gray-600 font-medium text-lg">
                ({formData.role})
              </span>
            )}
          </h1>
        </div>

        {/* Main Profile Card */}
        <div className="bg-white shadow-xl overflow-hidden rounded-md">
          {/* Profile Info Grid */}
          <div className="p-4 md:p-4 lg:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 flex items-center">
                <span className="mr-3">ℹ️</span>
                Personal Information
              </h2>

              <Link href={`/dashboard/users/${user?._id}`}>
                <button className="mt-4 md:mt-0 px-6 py-2 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold rounded-lg shadow-md hover:from-emerald-600 hover:to-green-700 transform hover:scale-105 transition-all duration-200 cursor-pointer">
                  ✏️ Edit Profile
                </button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {profileFields.map((field, index) => (
                <div
                  key={index}
                  className={`group ${
                    field.label === "Comment" ? "md:col-span-2" : ""
                  }`}
                >
                  <div className="flex items-start space-x-4 p-2 md:p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                    <div className="text-2xl mt-1 group-hover:scale-110 transition-transform duration-200">
                      {field.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">
                        {field.label}
                      </p>
                      <p className="text-gray-900 font-medium text-lg break-words">
                        {field.value}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Account Information */}
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 md:p-4 lg:p-8 border-t">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="mr-3">📅</span>
              Account Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-4 p-4 rounded-xl bg-white shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-xl">📝</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                    Account Created
                  </p>
                  <p className="text-gray-900 font-medium">
                    {formatDate(formData.createdAt)}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 rounded-xl bg-white shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-xl">🔄</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                    Last Updated
                  </p>
                  <p className="text-gray-900 font-medium">
                    {formatDate(formData.updatedAt)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
