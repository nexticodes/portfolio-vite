import React from 'react';
import '../assets/styles/Navbar.css';

const Navbar = ({scrollRef}) => {    

  const scrollIntoView = (type) => {
    scrollRef.current[type].scrollIntoView({behavior: 'smooth'})
  }
  return (
    <div className="navbar-container">
        <ul className="navbar-list">
            <li className={`navbar-item `} onClick={() => scrollIntoView('about')}>About</li>
            <li className={`navbar-item `} onClick={() => scrollIntoView('projects')}>Projects</li>
            <li className={`navbar-item `} onClick={() => scrollIntoView('skills')}>Skills</li>
            <li className={`navbar-item `} onClick={() => scrollIntoView('contact')}>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar;