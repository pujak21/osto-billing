import React from "react";

export default function About() {
  return (
    <div className="p-6 max-w-6xl mx-auto space-y-12">
      <h1 className="text-4xl font-bold text-blue-500 text-center">About Us</h1>
      <p className="text-center text-gray-600">
        Empowering startups with enterprise-grade security.
      </p>

      <section className="grid md:grid-cols-3 gap-6 text-center">
        {[
          { title: "Team", desc: "Expert cybersecurity professionals." },
          { title: "Customers", desc: "Startups protected." },
          { title: "Threats Blocked", desc: "Millions of threats mitigated." },
        ].map((item, i) => (
          <div key={i} className="p-6 bg-white rounded-xl shadow">
            <h3 className="text-xl font-semibold text-blue-500">{item.title}</h3>
            <p className="mt-2 text-gray-600">{item.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
