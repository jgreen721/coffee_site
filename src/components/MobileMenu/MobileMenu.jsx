import React from 'react'
import {Link} from "react-router-dom"
import "./MobileMenu.css"

const MobileMenu = ({showMobile}) => {
  return (
    <div className={showMobile ? "show mobile-menu" : "mobile-menu hide"}>
        <ul className="mobile-links-list">
            <li className="mobile-link-item">
                <Link className="mobile-link" to="/">Home</Link>
            </li>
            <li className="mobile-link-item">
                <Link className="mobile-link" to="/about">About Us</Link>
            </li>
            <li className="mobile-link-item">
                <Link className="mobile-link" to="/create">Create Your Plan</Link>
            </li>
        </ul>
    </div>
  )
}

export default MobileMenu