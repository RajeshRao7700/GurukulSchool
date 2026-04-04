import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function AdminLogin() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post(
      "http://localhost:8080/api/admin/Login",
      {
        username: form.username,
        password: form.password
      }
    );

    console.log(response.data);

    // ✅ success → go to admin dashboard
    navigate("/results/admin");

  } catch (error) {
    console.log(error);

    // ❌ show error
    alert("Invalid username or password");
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">

        <h2 className="text-2xl font-bold text-center mb-6">
          Admin Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">

          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            value={form.username}
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
            required
          />

          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition"
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

export default AdminLogin;