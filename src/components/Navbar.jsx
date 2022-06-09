import React, { useState, useMemo } from "react";
import "../assets/styles/Navbar.css";

const Navbar = ({ scrollRef, currSection, goingUp }) => {
    const scrollIntoView = (type) => {
        scrollRef.current[type].scrollIntoView({ behavior: "smooth" });
    };

    const listItems = ["about", "projects", "skills", "contact"];

    return (
        <div
            className={`navbar-container ${!goingUp ? "nav-show" : "nav-sneak"} ${
                currSection === "splash" ? "hidden" : ""
            } `}
        >
            <ul className="navbar-list">
                {listItems.map((l, i) => (
                    <li
                        key={i}
                        className={`navbar-item 
                        ${currSection === l ? "selected" : ""}
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
