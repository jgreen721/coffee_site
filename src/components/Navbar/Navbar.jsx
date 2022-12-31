import React from 'react'
import {Link} from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
        <img className="nav-logo" src="./assets/shared/desktop/logo.svg" alt="logo" />
        <div className="links-burger-div">
            <ul className="nav-links">
                <li className="nav-item">
                    <Link className="nav-link" to="/home">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">About Us</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/subscription">Create Your Plan</Link>
                </li>
            </ul>
            <div className="mobile-menu-div">
                <img src="./assets/shared/mobile/icon-hamburger.svg" alt="" />
            </div>
        </div>
    </nav>
  )
}

export default Navbar