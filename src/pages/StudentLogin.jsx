import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function StudentLogin() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    rollNumber: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // 👉 later connect backend here
    console.log(form);

    // demo redirect
    navigate("/results/student");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">

        <h2 className="text-2xl font-bold text-center mb-6">
          Student Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">

          <input
            type="text"
            name="rollNumber"
            placeholder="Enter Roll Number"
            value={form.rollNumber}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={form.password}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          <Link to="/results" className="text-blue-500 hover:underline">
            ← Back to Result Home
          </Link>
        </p>

      </div>
    </div>
  );
}

export default StudentLogin;