"use client";

import React, { useEffect, useState, useCallback, useContext } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import Link from "next/link";
import { apiFetch } from "@/utils/api";
import { AuthContext } from "@/context/AuthContext";

interface Teacher {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  gender?: string;
  district?: string;
  comment?: string;
  createdAt: string;
}

function debounce<T extends (...args: any[]) => void>(func: T, delay: number) {
  let timeoutId: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

function AllTeacher() {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchName, setSearchName] = useState<string>("");
  const { user } = useContext(AuthContext);

  // Fetch teachers from API
  const fetchTeachers = async (name = "") => {
    try {
      setLoading(true);
      let url = "/users/teachers";

      if (name) {
        url += `?name=${encodeURIComponent(name)}`;
      }

      const res = await apiFetch(url);

      setTeachers(res.data);
    } catch {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  // Debounced fetch
  const debouncedFetch = useCallback(
    debounce((name: string) => {
      fetchTeachers(name);
    }, 500),
    []
  );

  useEffect(() => {
    debouncedFetch(searchName);
  }, [searchName, debouncedFetch]);

  useEffect(() => {
    fetchTeachers();
  }, []);

  // Delete teacher
  const handleDelete = async (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This teacher will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#16a34a",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await apiFetch(`/users/${id}`, {
            method: "DELETE",
          });

          Swal.fire(
            "Deleted!",
            res.message || "Teacher has been deleted.",
            "success"
          );
          setTeachers((prev) => prev.filter((t) => t._id !== id));
        } catch {
          Swal.fire("Error!", "Something went wrong!", "error");
        }
      }
    });
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-green-600 text-center">
        All Teachers
      </h2>

      {/* Search */}
      <div className="mb-6 flex flex-wrap gap-4">
        <input
          type="text"
          placeholder="Search by name"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          className="border p-2 rounded w-48"
        />
      </div>

      {/* Loading */}
      {loading && <p>Loading teachers...</p>}

      {/* No data */}
      {!loading && teachers.length === 0 && <p>No teachers found.</p>}

      {/* Teacher list */}
      {!loading && teachers.length > 0 && (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-1">
          {teachers.map((teacher) => (
            <div
              key={teacher._id}
              className="relative p-5 bg-white rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              {user?.role === "admin" && (
                <>
                  {/* Edit Icon */}
                  <Link
                    href={`/dashboard/users/${teacher?._id}`}
                    className="absolute top-3 right-10 text-blue-500 hover:text-blue-700 transition-colors cursor-pointer"
                    title="Edit User"
                  >
                    ✏️
                  </Link>

                  {/* Delete Icon */}
                  <button
                    onClick={() => handleDelete(teacher._id)}
                    className="absolute top-3 right-3 text-red-500 hover:text-red-700 transition-colors cursor-pointer"
                    title="Delete User"
                  >
                    🗑️
                  </button>
                </>
              )}

              <h3 className="text-lg font-bold text-green-600 mb-2">
                {teacher.name}
              </h3>

              <ul className="space-y-2 text-sm text-gray-700">
                <InfoRow label="Email" value={teacher.email} />
                <InfoRow label="Phone" value={teacher.phone} />
                <InfoRow label="Gender" value={teacher.gender} />
                <InfoRow label="District" value={teacher.district} />
                <InfoRow label="Comment" value={teacher.comment} />
                <InfoRow
                  label="Joined At"
                  value={new Date(teacher.createdAt).toLocaleString()}
                />
              </ul>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value?: string }) {
  return (
    <div className="flex justify-between border-b pb-2">
      <span className="font-semibold text-gray-700">{label}:</span>
      <span className="text-gray-900">{value || "N/A"}</span>
    </div>
  );
}

export default AllTeacher;
