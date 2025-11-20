import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="space-y-16 p-6 max-w-6xl mx-auto">

      <motion.section
        className="text-center py-20 bg-gradient-to-b from-blue-50 to-white rounded-2xl shadow"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-5xl font-extrabold text-blue-700 leading-tight"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Secure Your <span className="text-blue-500">World</span> <br />
          With Osto
        </motion.h1>

        <motion.p
          className="mt-6 text-lg text-black-600 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Unified Endpoint, Network, and Cloud Security in one platform.  
          Simplify cybersecurity for your startup.
        </motion.p>

        <motion.div
          className="mt-8 flex justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Link
            to="/demo"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-teal-500 transition transform hover:scale-105"
          >
            Get a Free Demo
          </Link>
          <Link
            to="/about"
            className="px-6 py-3 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition transform hover:scale-105"
          >
            Learn More
          </Link>
        </motion.div>
      </motion.section>

   
      <section className="grid md:grid-cols-3 gap-8 mt-12">
        {[
          { title: "🔒 Endpoint Security", desc: "Protect devices with antimalware, DLP, and app control." },
          { title: "🌐 Network Security", desc: "Secure traffic with ZTNA, filtering, and intrusion detection." },
          { title: "☁️ Cloud Security", desc: "Monitor posture, scan apps, and prevent misconfigurations." },
        ].map((feature, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white rounded-2xl shadow hover:shadow-xl transition transform hover:-translate-y-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index, duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-blue-500">{feature.title}</h3>
            <p className="mt-2 text-gray-600">{feature.desc}</p>
          </motion.div>
        ))}
      </section>

      
      <motion.section
        className="text-center py-16 bg-blue-500 text-white rounded-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        <h2 className="text-3xl font-bold">Ready to Secure Your Startup?</h2>
        <p className="mt-4 text-lg text-black/80">
          Join forward-thinking teams already using Osto.
        </p>
        <motion.div whileHover={{ scale: 1.05 }} className="mt-6 inline-block">
          <Link
            to="/demo"
            className="px-8 py-4 bg-white text-blue-500 font-semibold rounded-lg shadow hover:bg-gray-100 transition"
          >
            Request a Demo
          </Link>
        </motion.div>
      </motion.section>

    </div>
  );
}
