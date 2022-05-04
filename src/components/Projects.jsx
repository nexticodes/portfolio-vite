import React from "react";

const Projects = ({scrollRef}) => {
    const projects = [
        {
            title: "Stop&Go Typeracer Clone",
            name: "RLGLTyperacer",
            description:
                "This is browser-based typing game that is similar to the Typeracer game, but with the Red Light Green Light functionality and health point system. The user is given a passage and the user will have to type every character in every word correctly within 60 seconds in order to win the game",
            tech: ["HTML", "CSS", "JavaScript", "DOM Manipulation"],
            images: [],
            links: ["https://nexticodes.github.io/rlgl-typeracer/", "https://github.com/nexticodes/rlgl-typeracer"],
            current: true
        },
        {
            title: "Turn-based NFT Game",
            name: "SimpleRPG",
            description:
                "A very simple RPG game that allows the user to acquire an NFT and use that as their character in the game to attack spawned enemies. Its smart contract is deployed on the Rinkeby test network simulate its functions without spending expensive resources.",
            tech: ["React.JS", "Node.JS", "Ethers.JS", "Solidity", "IPFS"],
            images: [],
            links: ["COMING_SOON", "https://github.com/nexticodes/nft_game"],
        },
        {
            title: "Event Scheduling App",
            name: "AightBet",
            description:
                "It is a social event scheduling app that encourages people to commit to plans they made with their friends.",
            tech: ["React.JS", "Node.JS", "Ethers.JS", "Solidity", "IPFS"],
            images: [],
            links: ["https://aight-bet.herokuapp.com/", "https://github.com/nexticodes/event-scheduler-app"],
        },
    ];

    const renderIcons = () => (<></>);

    return (
        <div ref={el => scrollRef.current = { ...scrollRef.current, projects: el}} className="container projects">
            <div className="content">
                <div className="box">
                    {projects.map((p, i) => (
                        <div key={i}>
                            <div className="container-title">
                                <h1>{p.name}</h1>
                            </div>
                            <div className="container-content">
                                <p>{p.title}</p>
                                <p>{p.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
