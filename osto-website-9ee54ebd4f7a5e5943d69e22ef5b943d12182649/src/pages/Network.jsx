import React from "react";

export default function Network() {
  return (
    <div className="p-6 max-w-6xl mx-auto space-y-12">
      <h1 className="text-4xl font-bold text-blue-500 text-center">Network Security</h1>
      <p className="text-center text-gray-600">Secure traffic with ZTNA, Web Filtering, and real-time monitoring.</p>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          { title: "ZTNA", desc: "Zero Trust Network Access." },
          { title: "Web Filtering", desc: "Control web access and block threats." },
          { title: "Traffic Analysis", desc: "Monitor network in real-time." },
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
