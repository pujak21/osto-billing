import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Demo from "./pages/Demo";
import EndpointSecurity from "./pages/Endpoint";
import NetworkSecurity from "./pages/Network";
import CloudSecurity from "./pages/Cloud";
import ComplianceVAPT from "./pages/Compliance";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="demo" element={<Demo />} />
        <Route path="endpoint" element={<EndpointSecurity />} />
        <Route path="network" element={<NetworkSecurity />} />
        <Route path="cloud" element={<CloudSecurity />} />
        <Route path="compliance" element={<ComplianceVAPT />} />
      </Route>
    </Routes>
  );
}

