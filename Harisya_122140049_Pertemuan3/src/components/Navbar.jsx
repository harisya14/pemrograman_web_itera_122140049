import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 shadow">
      <div className="container mx-auto flex justify-between">
        <NavLink to="/" className="font-bold text-lg">
          MyBooks
        </NavLink>
        <div className="space-x-4">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'underline' : ''}>
            Home
          </NavLink>
          <NavLink to="/stats" className={({ isActive }) => isActive ? 'underline' : ''}>
            Stats
          </NavLink>
        </div>
      </div>
    </nav>
  )
}
