import React from "react"
import { Link, NavLink } from "react-router-dom"

export default function Header() {
  const navLinkClasses = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition ${
      isActive ? "bg-osto-blue text-white" : "text-gray-700 hover:text-osto-blue"
    }`

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
      
        <Link to="/" className="text-2xl font-bold text-osto-blue">
          Osto
        </Link>

        <nav className="space-x-2">
          <NavLink to="/" className={navLinkClasses} end>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClasses}>
            About
          </NavLink>
          <NavLink to="/demo" className={navLinkClasses}>
            Demo
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
