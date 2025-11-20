import React from "react";

export default function Cloud() {
  return (
    <div className="p-6 max-w-6xl mx-auto space-y-12">
      <h1 className="text-4xl font-bold text-blue-500 text-center">Cloud Security</h1>
      <p className="text-center text-gray-600">
        App layer protection, scanners, and cloud security posture management.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          { title: "App Layer", desc: "Web & API protection modules." },
          { title: "Scanners", desc: "Web, API, Mobile app scanning." },
          { title: "Posture Management", desc: "CSPM & AI-driven monitoring." },
        ].map((feature, i) => (
          <div key={i} className="p-6 bg-white shadow rounded-xl hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-500">{feature.title}</h3>
            <p className="mt-2 text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
