import React from "react";

const Projects = () => {
    const projects = [
        {
            title: "Turn-based NFT Game",
            name: "SimpleRPG",
            description:
                "A very simple RPG game that allows the user to acquire an NFT and use that as their character in the game to attack spawned enemies. Its smart contract is deployed on the Rinkeby test network simulate its functions without spending expensive resources.",
            tech: ["React.JS", "Node.JS", "Ethers.JS", "Solidity", "IPFS"],
            images: [],
            links: ["deployed_link", "github_link"],
        },
        {
            title: "STOP, GO TYPE!",
            name: "RLGLTyperacer",
            description:
                "This is browser-based typing game that is similar to the Typeracer game, but with the Red Light Green Light functionality and health point system. The user is given a passage and the user will have to type every character in every word correctly within 60 seconds in order to win the game",
            tech: ["HTML", "CSS", "JavaScript", "DOM Manipulation"],
            images: [],
            links: ["deployed_link", "github_link"],
        },
        {
            title: "Personalized Match Tracker App",
            name: "GitGudGG",
            description:
                "This is browser-based Note taking tracking application that allows Users to post and keep track of their match history for a game they want to improve on – in this case, it's for the game Apex Legends.",
            tech: ["Node.JS", "Express", "MongoDB", "Mongoose", "EJS"],
            images: [],
            links: ["deployed_link", "github_link"],
        },
    ];

    return (
        <div className="container projects">
            <div className="content">
                <div className="box">
                    {projects.map((p, i) => (
                        <>
                            <div className="container-title">
                                <h1>{p.name}</h1>
                            </div>
                            <div className="container-content">
                                <p>{p.title}</p>
                                <p>{p.description}</p>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
