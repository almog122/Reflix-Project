import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <>
      <nav className="navBar">
        <Link to="/"> <div> Home </div> </Link>
        <Link to={`/catalog/${localStorage['currentUser']}`}> <div> Catalog </div></Link>

        <div className='logo'> Reflix </div>

      </nav>
    </>
  )
}
