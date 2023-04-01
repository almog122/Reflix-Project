import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <Link to="/"> Home </Link>
        <span>    |    </span>
        <Link to="/catalog"> Catalog </Link>
      </nav>
      <span className="logo">
        <span>Reflix</span>
      </span>
    </>
  )
}
