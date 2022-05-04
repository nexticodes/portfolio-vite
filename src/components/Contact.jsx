import React from "react";
import '../assets/styles/Contact.css';
import twitterLogo from "../assets/skills/twitter.svg";
import githubLogo from "../assets/skills/github-octocat.svg";
import linkedinLogo from "../assets/skills/linkedin-icon.svg";

const Contact = ({ scrollRef }) => {
    const icons = [
        {
            link: "https://github.com/nexticodes",
            img: githubLogo,
        },
        {
            link: "https://www.linkedin.com/in/ernest-bruno",
            img: linkedinLogo,
        },
        {
            link: "https://twitter.com/nexticus",
            img: twitterLogo,
        },
    ];
    return (
        <div
            className="container contact"
            ref={(el) =>
                (scrollRef.current = { ...scrollRef.current, contact: el })
            }
        >
            Connect with me!
            <div className="contact-content-container">
                {icons.map((icon, i) => (
                    <div key={i} className="contact-content">
                      <a href={icon.link} target="_blank"><img src={icon.img}/></a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Contact;
