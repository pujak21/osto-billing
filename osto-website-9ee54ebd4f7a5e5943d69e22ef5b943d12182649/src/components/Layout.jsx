import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      
      <header className="bg-blue-500 text-white p-4 shadow flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Osto</Link>
        <nav className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/demo" className="hover:underline">Demo</Link>
          <Link to="/endpoint" className="hover:underline">Endpoint</Link>
          <Link to="/network" className="hover:underline">Network</Link>
          <Link to="/cloud" className="hover:underline">Cloud</Link>
          <Link to="/compliance" className="hover:underline">Compliance</Link>
        </nav>
      </header>

     
      <main className="flex-1">
        <Outlet />
      </main>

     
      <footer className="bg-gray-100 text-gray-700 p-4 text-center">
        &copy; {new Date().getFullYear()} Osto. All rights reserved.
      </footer>
    </div>
  );
}
