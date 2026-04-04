import {Banner, Card, DetailCard} from "../components/Card";


// const bangal = [
//     {title:"Result", desc:"Unlock Your Result"}
// ]

// const galCard = [
//     {title: "Our Photo Gallery", desc:"Explore the vibrant life at Greenfield School through our photo gallery. From academic achievements to sports victories and cultural celebrations, witness the moments that make us proud."}
// ]


import React from "react";
import { useNavigate } from "react-router-dom";

const Result = () =>{
  const navigate = useNavigate();

    return( 
    <div className="min-h-screen bg-gray-50">

      {/* 🔷 Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow">
        <h1 className="text-xl font-bold text-blue-600">
          Result Portal
        </h1>
        <button
          onClick={() => navigate("/")}
          className="text-sm text-gray-600 hover:text-blue-500"
        >
          Back to Home
        </button>
      </nav>


      {/* 🔥 Hero Section */}
      <section className="text-center py-16 px-6 bg-gradient-to-r from-blue-500 to-cyan-400 text-white">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Result Viewer
        </h1>
        <p className="max-w-xl mx-auto text-lg">
          Access your academic results quickly and securely. 
          Choose your role to continue.
        </p>

        <div className="mt-8 flex justify-center gap-6 flex-wrap">
          <button
            onClick={() => navigate("/results/student-login")}
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Student Login
          </button>

          <button
            onClick={() => navigate("/results/admin-login")}
            className="bg-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            Admin Login
          </button>
        </div>
      </section>


      {/* ⚡ Features Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Why Use This Portal?</h2>

        <div className="flex flex-wrap justify-center gap-8">
          <div className="w-72 p-6 bg-white rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">Instant Results</h3>
            <p>Get your results in seconds without waiting.</p>
          </div>

          <div className="w-72 p-6 bg-white rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">Secure Access</h3>
            <p>Your academic data is safe and protected.</p>
          </div>

          <div className="w-72 p-6 bg-white rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
            <p>Simple interface for students and admins.</p>
          </div>
        </div>
      </section>


      {/* 🚀 Action Section */}
      <section className="bg-blue-600 text-white text-center py-12 px-6">
        <h2 className="text-2xl font-bold mb-4">
          Ready to Check Your Result?
        </h2>
        <p>Select your role and get started now.</p>
      </section>
    </div>
  );
}



export default Result;