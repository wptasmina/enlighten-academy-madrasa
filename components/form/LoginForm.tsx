"use client";
import { AuthContext } from "@/context/AuthContext";
import login from "@/types/login.interface";
import { apiFetch } from "@/utils/api";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";

function LoginForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<login>({
    email: "",
    password: "",
  });
  // Context
  const { login } = useContext(AuthContext);

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

    const { email, password } = formData;

    if (!email || !password) {
      toast.error("All fields are required");
      return;
    }

    try {
      const res = await apiFetch(`/auth/login`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });

      if (res.ok) {
        toast.success("Login successful!");
        // Context
        login(res.user);
        router.push("/");
      } else {
        // Show server-provided message if available, or fallback
        toast.error(
          res?.message || "Login failed. Please check your credentials."
        );
      }
    } catch {
      toast.error("Something went wrong. Please try again later.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col gap-4 w-full">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
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
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition cursor-pointer"
        >
          Login
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
