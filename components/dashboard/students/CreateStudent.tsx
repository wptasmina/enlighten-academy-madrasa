"use client";
import { apiFetch } from "@/utils/api";
import React, { useState } from "react";
import { toast } from "react-toastify";

function CreateStudent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    batch: "",
    district: "",
    comment: "",
    gender: "",
    address: "",
  });

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

    try {
      const res = await apiFetch("/students", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("✅ Student created successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          batch: "",
          district: "",
          comment: "",
          gender: "",
          address: "",
        });
      } else {
        toast.error(`❌Something went wrong!`);
      }
    } catch {
      toast.error(`❌Something went wrong!`);
    }
  };

  return (
    <div className=" p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Create Student</h2>
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

        <select
          name="batch"
          value={formData.batch}
          onChange={handleChange}
          className="border px-4 py-2 rounded cursor-pointer"
          required
        >
          <option value="">Select Batch</option>
          <option value="Batch 1">Batch 1</option>
          <option value="Batch 2">Batch 2</option>
          <option value="Batch 3">Batch 3</option>
          <option value="Batch 4">Batch 4</option>
          <option value="Batch 5">Batch 5</option>
        </select>

        <input
          type="text"
          name="district"
          placeholder="District"
          value={formData.district}
          onChange={handleChange}
          className="border px-4 py-2 rounded"
          required
        />

        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="border px-4 py-2 rounded cursor-pointer"
          required
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <input
          type="text"
          name="address"
          placeholder="Full Address"
          value={formData.address}
          onChange={handleChange}
          className="border px-4 py-2 rounded md:col-span-2"
          required
        />

        <textarea
          name="comment"
          placeholder="Your Comment"
          value={formData.comment}
          onChange={handleChange}
          className="border px-4 py-2 rounded md:col-span-2"
          rows={3}
        />

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

export default CreateStudent;
