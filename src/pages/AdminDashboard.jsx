import { useState } from "react";
import axios from "axios";

function AdminDashboard() {

  const [student, setStudent] = useState({
    name: "",
    rollNumber: "",
    standard: "",
    fatherName: "",
    gender: "",
    marks: [
      {
        subjectName: "",
        marks: "",
        maxMarks: "",
        grade: "",
        feedback: ""
      }
    ]
  });

  // 🔹 handle student fields
  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  // 🔹 handle marks fields
  const handleMarksChange = (index, field, value) => {
    const newMarks = [...student.marks];
    newMarks[index][field] = value;
    setStudent({ ...student, marks: newMarks });
  };

  // 🔹 add subject row
  const addSubject = () => {
    setStudent({
      ...student,
      marks: [
        ...student.marks,
        { subjectName: "", marks: "", maxMarks: "", grade: "", feedback: "" }
      ]
    });
  };

  // 🔥 SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:8080/api/admin/add-student-result",
        student
      );

      alert("Student + Result added successfully ✅");

    } catch (error) {
      console.log(error);
      alert("Error saving data ❌");
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">

      <h1 className="text-2xl font-bold mb-4">Add Student Result</h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Student Info */}
        <input name="name" placeholder="Name" onChange={handleChange} className="border p-2 w-full" />
        <input name="rollNumber" placeholder="Roll Number" onChange={handleChange} className="border p-2 w-full" />
        <input name="standard" placeholder="Class" onChange={handleChange} className="border p-2 w-full" />
        <input name="fatherName" placeholder="Father Name" onChange={handleChange} className="border p-2 w-full" />
        <input name="gender" placeholder="Gender" onChange={handleChange} className="border p-2 w-full" />

        {/* Marks Section */}
        <h2 className="text-xl font-semibold mt-4">Marks</h2>

        {student.marks.map((m, index) => (
          <div key={index} className="grid grid-cols-2 gap-2 border p-3">

            <input
              placeholder="Subject"
              onChange={(e) => handleMarksChange(index, "subjectName", e.target.value)}
              className="border p-2"
            />

            <input
              placeholder="Marks"
              onChange={(e) => handleMarksChange(index, "marks", e.target.value)}
              className="border p-2"
            />

            <input
              placeholder="Max Marks"
              onChange={(e) => handleMarksChange(index, "maxMarks", e.target.value)}
              className="border p-2"
            />

            <input
              placeholder="Grade"
              onChange={(e) => handleMarksChange(index, "grade", e.target.value)}
              className="border p-2"
            />

            <input
              placeholder="Feedback"
              onChange={(e) => handleMarksChange(index, "feedback", e.target.value)}
              className="border p-2 col-span-2"
            />

          </div>
        ))}

        <button type="button" onClick={addSubject} className="text-blue-500">
          + Add Subject
        </button>

        <button className="bg-blue-600 text-white px-4 py-2 mt-4">
          Submit
        </button>

      </form>
    </div>
  );
}

export default AdminDashboard;