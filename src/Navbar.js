import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar=()=> {
  return (

    <div>
        NAVBAR
        <Link to="/">Home</Link>
        <Link to="/Menu">Menu</Link>
        <Link to="/Contact">Contact</Link>
    </div>

  )
}

export default Navbar
