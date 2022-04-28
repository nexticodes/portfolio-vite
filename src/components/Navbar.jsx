import React from 'react';

const Navbar = () => {
    
  return (
    <div className="navbar-container">
        <ul className="navbar-list">
            <li className={`navbar-item `}>About</li>
            <li className={`navbar-item `}>Projects</li>
            <li className={`navbar-item `}>Skills</li>
            <li className={`navbar-item `}>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar;