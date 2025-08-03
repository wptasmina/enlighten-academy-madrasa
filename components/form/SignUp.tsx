"use client";

import signUp from "@/types/signUp.interface";
import React, { useState } from "react";
import { toast } from "react-toastify";

function SignUp() {
  const [formData, setFormData] = useState<signUp>({
    name: "",
    email: "",
    phone: "",
    gender: "",
    password: "",
    confirmPassword: "",
  });
  const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, phone, gender, password, confirmPassword } = formData;

    if (!name || !email || !phone || !gender || !password || !confirmPassword) {
      toast.error("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      toast.warning("Passwords do not match!");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.warning("Passwords do not match!");
      return;
    }

    const res = await fetch(`${BASE_URL}/auth/sign-up`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        gender,
        password,
      }),
    });
    console.log(res);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col md:flex-row gap-4 w-full">
        {/* Left Column */}
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Right Column */}
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <select
        name="gender"
        value={formData.gender}
        onChange={handleChange}
        required
        className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={handleChange}
        required
        className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition cursor-pointer"
      >
        Sign Up
      </button>
    </form>
  );
}

export default SignUp;
