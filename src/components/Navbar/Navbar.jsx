import React, {useState} from 'react'
import {Link} from "react-router-dom"
import MobileMenu from "../MobileMenu/MobileMenu"
import "./Navbar.css"

const Navbar = () => {
    const [showMobile, setShowMobile] = useState(false)

  return (
    <nav className="navbar">
        <img className="nav-logo" src="./assets/shared/desktop/logo.svg" alt="logo" />
        <div className="links-burger-div">
            <ul className="nav-links">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">About Us</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/subscription">Create Your Plan</Link>
                </li>
            </ul>
            <div className="mobile-menu-div">
                <img onClick={()=>setShowMobile(!showMobile)} className="burger" src="./assets/shared/mobile/icon-hamburger.svg" alt="" />
                <MobileMenu showMobile={showMobile}/>
            </div>

        </div>
    </nav>
  )
}

export default Navbar