"use client";

import { User } from "@/types/user.interface";
import { apiFetch } from "@/utils/api";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

function Users() {
  const [users, setUsers] = useState<User[] | null>(null);
  const [loading, setLoading] = useState(true);

  const handleDelete = async (id: string) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (!result.isConfirmed) return;

    try {
      await apiFetch(`/users/${id}`, {
        method: "DELETE",
      });

      toast.success("User deleted successfully");

      // Remove from UI
      setUsers((prev) => prev?.filter((user) => user._id !== id) || []);

      // Optional: SweetAlert success after deletion
      await Swal.fire("Deleted!", "The user has been deleted.", "success");
    } catch {
      toast.error("Error deleting user");
      Swal.fire("Error!", "Something went wrong while deleting.", "error");
    }
  };

  useEffect(() => {
    async function fetchUser() {
      try {
        const data: User[] = await apiFetch("/users");
        setUsers(data);
      } catch {
        toast.error("Something went wrong");
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, []);

  if (loading) return <p>Loading user data...</p>;
  if (!users) return <p>No user data found.</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
      {users.map((user) => (
        <div
          key={user._id}
          className="relative p-5 bg-white rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300"
        >
          {/* Edit Icon */}
          <Link
            href={`/dashboard/users/${user?._id}`}
            className="absolute top-3 right-10 text-blue-500 hover:text-blue-700 transition-colors cursor-pointer"
            title="Edit User"
          >
            ✏️
          </Link>

          {/* Delete Icon */}
          <button
            onClick={() => handleDelete(user._id)}
            className="absolute top-3 right-3 text-red-500 hover:text-red-700 transition-colors cursor-pointer"
            title="Delete User"
          >
            🗑️
          </button>

          <h3 className="text-lg font-bold text-green-600 mb-2">{user.name}</h3>

          <ul className="space-y-2 text-sm text-gray-700">
            <InfoRow label="Email" value={user.email} />
            <InfoRow label="Phone" value={user.phone} />
            <InfoRow label="Gender" value={user.gender} />
            <InfoRow
              label="Joined At"
              value={new Date(user.createdAt).toLocaleString()}
            />
          </ul>
        </div>
      ))}
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

export default Users;
