"use client";

import React, { useEffect, useState, useCallback } from "react";
import Student from "@/types/student.interface";
import { apiFetch } from "@/utils/api";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import Link from "next/link";

// Debounce function
function debounce<T extends (...args: any[]) => void>(func: T, delay: number) {
  let timeoutId: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

function AllStudent() {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchName, setSearchName] = useState<string>("");
  const [searchBatch, setSearchBatch] = useState<string>("");

  // Fetch students from API
  const fetchStudents = async (name = "", batch = "") => {
    try {
      setLoading(true);
      let url = "/students";

      const params = new URLSearchParams();
      if (name) params.append("name", name);
      if (batch) params.append("batch", batch);

      if (params.toString()) {
        url += `?${params.toString()}`;
      }

      const res = await apiFetch(url);
      setStudents(res.data);
    } catch {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  // Debounced fetch
  const debouncedFetch = useCallback(
    debounce((name: string, batch: string) => {
      fetchStudents(name, batch);
    }, 500),
    []
  );

  // Search effect
  useEffect(() => {
    debouncedFetch(searchName, searchBatch);
  }, [searchName, searchBatch, debouncedFetch]);

  // Initial fetch
  useEffect(() => {
    fetchStudents();
  }, []);

  // Delete student
  const handleDelete = async (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#16a34a", // Tailwind green-600
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await apiFetch(`/students/${id}`, {
            method: "DELETE",
          });

          if (res.ok) {
            Swal.fire("Deleted!", "Student has been deleted.", "success");
            setStudents((prev) => prev.filter((stu) => stu._id !== id));
          } else {
            const errorData = await res.json();
            Swal.fire(
              "Error!",
              errorData.message || "Failed to delete student",
              "error"
            );
          }
        } catch {
          Swal.fire("Error!", "Something went wrong!", "error");
        }
      }
    });
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-green-600 text-center">
        All Students
      </h2>

      {/* Search Inputs */}
      <div className="mb-6 flex flex-wrap gap-4">
        <input
          type="text"
          placeholder="Search by name"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          className="border p-2 rounded w-48"
        />
        <input
          type="text"
          placeholder="Search by batch"
          value={searchBatch}
          onChange={(e) => setSearchBatch(e.target.value)}
          className="border p-2 rounded w-48"
        />
      </div>

      {/* Loading */}
      {loading && <p>Loading students...</p>}

      {/* No data */}
      {!loading && students.length === 0 && <p>No students found.</p>}

      {/* Student List */}
      {!loading && students.length > 0 && (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-1">
          {students.map((student) => (
            <div
              key={student._id}
              className="relative p-5 bg-white rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              {/* Edit Icon */}
              <Link
                href={`/dashboard/users/${student?._id}`}
                className="absolute top-3 right-10 text-blue-500 hover:text-blue-700 transition-colors cursor-pointer"
                title="Edit User"
              >
                ✏️
              </Link>

              {/* Delete Icon */}
              <button
                onClick={() => handleDelete(student._id)}
                className="absolute top-3 right-3 text-red-500 hover:text-red-700 transition-colors cursor-pointer"
                title="Delete User"
              >
                🗑️
              </button>

              <h3 className="text-lg font-bold text-green-600 mb-2">
                {student.name}
              </h3>

              <ul className="space-y-2 text-sm text-gray-700">
                <InfoRow label="Email" value={student.email} />
                <InfoRow label="Phone" value={student.phone} />
                <InfoRow label="Gender" value={student.gender} />
                <InfoRow label="District" value={student.district} />
                <InfoRow label="Batch" value={student.batch} />
                <InfoRow label="Comment" value={student.comment} />
                <InfoRow
                  label="Joined At"
                  value={new Date(student.createdAt).toLocaleString()}
                />
              </ul>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between border-b pb-2">
      <span className="font-semibold text-gray-700">{label}:</span>
      <span className="text-gray-900">{value}</span>
    </div>
  );
}

export default AllStudent;
