import React, {useState} from "react";
import "../assets/styles/Navbar.css";

const Navbar = ({ scrollRef, currSection, setCurrentSection }) => {
    const scrollIntoView = (type) => {
        setCurrentSection(type)
        scrollRef.current[type].scrollIntoView({ behavior: "smooth" });
    };

    const listItems = ["about", "projects", "skills", "contact"];

    return (
        <div className='navbar-container' style={currSection !== 'splash' ? {position: 'fixed', transition: 'ease'} : {display: 'none'}}>
            <ul className="navbar-list">
                {listItems.map((l, i) => (
                    <li
                        key={i}
                        className={`navbar-item 
                        ${ currSection === l ? 'selected': ''}
                        `}
                        onClick={() => scrollIntoView(l)}
                    >
                        {l.toUpperCase()}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navbar;
