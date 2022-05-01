import React from "react";
import reactLogo from "../assets/skills/react.svg";
import htmlLogo from "../assets/skills/html-5.svg";
import cssLogo from "../assets/skills/css-3.svg";
import jsLogo from "../assets/skills/javascript.svg";
import vueLogo from "../assets/skills/vue.svg";
import tailwindLogo from "../assets/skills/tailwindcss-icon.svg";
import nodeLogo from "../assets/skills/nodejs-icon.svg";
import expressLogo from "../assets/skills/express.svg";
import mongodbLogo from "../assets/skills/mongodb.svg";
import solidityLogo from "../assets/skills/solidity.svg";
import ethersLogo from "../assets/skills/ethers.svg";
import pythonLogo from "../assets/skills/python.svg";
import "../assets/styles/Skills.css";

const Skills = ({scrollRef}) => {
    const skills = [
        {
            skill: "React.js",
            proficiency: "Advanced",
            icon: reactLogo,
        },
        {
            skill: "HTML",
            proficiency: "Advanced",
            icon: htmlLogo,
        },
        {
            skill: "CSS",
            proficiency: "Intermediate",
            icon: cssLogo,
        },
        {
            skill: "JavaScript",
            proficiency: "Advanced",
            icon: jsLogo,
        },
        {
            skill: "Vue.js",
            proficiency: "Novice",
            icon: vueLogo,
        },
        {
            skill: "Tailwind CSS",
            proficiency: "Intermediate",
            icon: tailwindLogo,
        },
        {
            skill: "Node.js",
            proficiency: "Intermediate",
            icon: nodeLogo,
        },
        {
            skill: "Express.js",
            proficiency: "Intermediate",
            icon: expressLogo,
        },
        {
            skill: "MongoDB",
            proficiency: "Intermediate",
            icon: mongodbLogo,
        },
        {
            skill: "Solidity",
            proficiency: "Novice",
            icon: solidityLogo,
        },
        {
            skill: "Ethers.js",
            proficiency: "Novice",
            icon: ethersLogo,
        },
        {
            skill: "Python",
            proficiency: "Novice",
            icon: pythonLogo,
        },
    ];
    return (
        <div ref={el => scrollRef.current = { ...scrollRef.current, skills: el}} className="container skills">
            <div className="content">
                <div className="box skills-box">
                    {skills.map((s, i) => (
                        <div key={i} className="skill">
                            <p>{s.skill}</p>
                            <img src={s.icon} alt={`${s.skill} Icon`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
