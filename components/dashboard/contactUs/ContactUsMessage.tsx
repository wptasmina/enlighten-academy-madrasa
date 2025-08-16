"use client";

import ContactMessage from "@/types/contactUs.interface";
import { apiFetch } from "@/utils/api";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

function ContactUsMessage() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);

  const handleDelete = async (id: string) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      cancelButtonColor: "#10b981",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
      background: "#ffffff",
      customClass: {
        popup: "rounded-2xl shadow-2xl",
        confirmButton: "rounded-lg px-6 py-3 font-semibold",
        cancelButton: "rounded-lg px-6 py-3 font-semibold",
      },
    });

    if (result.isConfirmed) {
      try {
        const res = await apiFetch(`/contactUs/${id}`, {
          method: "DELETE",
        });

        if (res.ok) {
          await Swal.fire({
            title: "Deleted!",
            text: "The message has been deleted.",
            icon: "success",
            confirmButtonColor: "#10b981",
            customClass: {
              popup: "rounded-2xl shadow-2xl",
              confirmButton: "rounded-lg px-6 py-3 font-semibold",
            },
          });
          setMessages((prev) => prev.filter((msg) => msg._id !== id));
        }
      } catch {
        Swal.fire({
          title: "Error!",
          text: "Something went wrong!",
          icon: "error",
          confirmButtonColor: "#ef4444",
          customClass: {
            popup: "rounded-2xl shadow-2xl",
            confirmButton: "rounded-lg px-6 py-3 font-semibold",
          },
        });
      }
    }
  };

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await apiFetch("/contactUs");
        setMessages(res?.data || []);
      } catch (error) {
        console.error("Failed to fetch contact messages", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-green-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-emerald-600 mx-auto mb-6"></div>
          <p className="text-gray-600 font-medium text-lg">
            Loading messages...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full shadow-lg mb-6">
            <span className="text-3xl text-white">📩</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Contact Messages
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {messages.map((msg, index) => (
            <div
              key={msg._id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden"
            >
              {/* Message Header */}
              <div className="bg-gradient-to-r from-emerald-500 to-green-600 p-6 relative">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white text-xl font-bold border-2 border-white/30">
                      {msg.name ? msg.name.charAt(0).toUpperCase() : "?"}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {msg.name}
                      </h3>
                      <p className="text-emerald-100 text-sm">
                        Message #{index + 1}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleDelete(msg._id)}
                    className="w-10 h-10 bg-red-500/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-red-500/40 transition-all duration-200 group/delete"
                    title="Delete Message"
                  >
                    <span className="text-lg group-hover/delete:scale-110 transition-transform">
                      🗑️
                    </span>
                  </button>
                </div>
              </div>

              {/* Message Content */}
              <div className="p-6 space-y-5">
                <div className="flex items-center space-x-3 rounded-xl bg-gray-50">
                  <div className="text-xl">📧</div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">
                      Email Address
                    </p>
                    <p className="text-gray-900 font-medium break-words">
                      {msg.email}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl">💬</span>
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                      Message Content
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 border-l-4 border-emerald-500">
                    <p className="text-gray-800 leading-relaxed">
                      {msg.message}
                    </p>
                  </div>
                </div>

                {/* Message Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <span>📅</span>
                    <span>
                      {msg.createdAt
                        ? new Date(msg.createdAt).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                          })
                        : "Date not available"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContactUsMessage;
