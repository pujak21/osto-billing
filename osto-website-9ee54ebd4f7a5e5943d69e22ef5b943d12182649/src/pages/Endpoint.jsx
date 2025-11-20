import React from "react";

export default function Endpoint() {
  return (
    <div className="p-6 max-w-6xl mx-auto space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-blue-500">Endpoint Security</h1>
        <p className="mt-4 text-gray-600">
          Protect devices with next-gen antimalware, app control, DLP, and more.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        {[
          { title: "Antimalware Engine", desc: "Real-time malware detection." },
          { title: "Application Control", desc: "Control installed apps." },
          { title: "Data Loss Prevention", desc: "Protect sensitive data." },
        ].map((feature, i) => (
          <div key={i} className="p-6 bg-white shadow rounded-xl hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-500">{feature.title}</h3>
            <p className="mt-2 text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </section>

      <section className="text-center mt-12">
        <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-teal-500 transition">
          Request a Demo
        </button>
      </section>
    </div>
  );
}
