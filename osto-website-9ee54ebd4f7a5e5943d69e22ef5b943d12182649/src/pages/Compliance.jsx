import React, { useState } from "react";

export default function Compliance() {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    alert(`Submitted: ${formData.name} (${formData.email})`);
    setFormData({ name: "", email: "" });
  };

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      <h1 className="text-4xl font-bold text-blue-500 text-center">Compliance & VAPT</h1>
      <p className="text-center text-gray-600">Automated security questionnaires, VAPT services, and compliance support.</p>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-teal-500 transition">Submit</button>
      </form>
    </div>
  );
}
