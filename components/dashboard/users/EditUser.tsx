"use client";
import { AuthContext } from "@/context/AuthContext";
import { apiFetch } from "@/utils/api";
import { useParams, useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

function EditUser() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    batch: "",
    district: "",
    comment: "",
    gender: "",
    address: "",
    role: "",
  });
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { user } = useContext(AuthContext);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!id) return;

    try {
      const res = await apiFetch(`/users/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success(" User updated successfully!");
        router.push("/dashboard/users");
      } else {
        const err = await res.json();
        toast.error(` ${err.message || "Something went wrong!"}`);
      }
    } catch {
      toast.error("Something went wrong!");
    }
  };

  useEffect(() => {
    if (!id) return;

    async function fetchUser() {
      try {
        const res = await apiFetch(`/users/${id}`);

        if (res.ok) {
          setFormData({
            name: res.user.name || "",
            email: res.user.email || "",
            phone: res.user.phone || "",
            batch: res.user.batch || "",
            district: res.user.district || "",
            comment: res.user.comment || "",
            gender: res.user.gender || "",
            address: res.user.address || "",
            role: res.user.role || "",
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
  }, [id]);

  if (loading) return <p>Loading user data...</p>;

  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Edit person</h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="border px-4 py-2 rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="border px-4 py-2 rounded"
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="border px-4 py-2 rounded"
          required
        />
        {/* Batch field: hide if user/student */}
        {user?.role !== "user" && user?.role !== "student" && (
          <select
            name="batch"
            value={formData.batch}
            onChange={handleChange}
            className="border px-4 py-2 rounded cursor-pointer"
          >
            <option value="">Select Batch</option>
            <option value="Batch 1">Batch 1</option>
            <option value="Batch 2">Batch 2</option>
            <option value="Batch 3">Batch 3</option>
            <option value="Batch 4">Batch 4</option>
            <option value="Batch 5">Batch 5</option>
          </select>
        )}
        <input
          type="text"
          name="district"
          placeholder="District"
          value={formData.district}
          onChange={handleChange}
          className="border px-4 py-2 rounded"
        />
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className={`border px-4 py-2 rounded cursor-pointer ${
            user?.role === "user" || user?.role === "student"
              ? "md:col-span-2"
              : ""
          }`}
          required
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        {/* Role select: hide if user/student */}
        {user?.role !== "user" && user?.role !== "student" && (
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="border px-4 py-2 rounded cursor-pointer md:col-span-2"
            required
          >
            <option value="">Select Role</option>
            <option value="student">Student</option>
            {user?.role === "admin" && <option value="teacher">Teacher</option>}
          </select>
        )}
        {/* Comment textarea: hide if user/student */}
        {user?.role !== "user" && user?.role !== "student" && (
          <textarea
            name="comment"
            placeholder="Your Comment"
            value={formData.comment}
            onChange={handleChange}
            className="border px-4 py-2 rounded md:col-span-2"
            rows={3}
          />
        )}

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition md:col-span-2 cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default EditUser;
