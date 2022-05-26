import React from 'react';
import '../assets/styles/Projects.css';
import githubLogo from '../assets/skills/github-octocat.svg';
import herokuLogo from '../assets/skills/heroku-icon.svg';
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
import useRenderIcons from '../hooks/useRenderIcons';

const Projects = ({ scrollRef }) => {
	const projects = [
		{
			title: 'Stop&Go Typeracer Clone',
			name: 'RLGLTyperacer',
			description:
				'This is browser-based typing game that is similar to the Typeracer game, but with the Red Light Green Light functionality and health point system. The user is given a passage and the user will have to type every character in every word correctly within 60 seconds in order to win the game.',
			tech: ['HTML', 'CSS', 'JavaScript', 'DOM Manipulation'],
			images: [
				'https://i.imgur.com/RnKCxQD.png',
				'https://i.imgur.com/1vnxLSx.png',
				'https://i.imgur.com/RgAhXCB.png',
			],
			links: [
				'https://nexticodes.github.io/rlgl-typeracer/',
				'https://github.com/nexticodes/rlgl-typeracer',
			],
			current: true,
		},
		{
			title: 'Apex Legends-based Gaming Journal',
			name: 'GitGud.gg',
			description:
				'This project is a browser-based Note taking tracking application that allows Users to post and keep track of their match history for a game they want to improve on – in this case, it’s for the game called Apex Legends. This simple CRUD Note-taking app utilizes Node.js (Express) and MongoDB as well as HTML/CSS/JS.',
			tech: ['EJS', 'HTML/CSS', 'Node.JS', 'Express', 'MongoDB'],
			images: [
				'https://i.imgur.com/qSWoLjm.png',
				'https://i.imgur.com/8LDwo2q.png',
				'https://i.imgur.com/UZp2AsY.png',
			],
			links: ['https://github.com/nexticodes/nft_game', 'COMING_SOON'],
		},
		{
			title: 'Event Scheduling App',
			name: 'AightBet',
			description:
				'It is a social event scheduling app that encourages people to commit to plans they made with their friends.',
			tech: ['React.JS', 'Node.JS', 'Ethers.JS', 'Solidity', 'IPFS'],
			images: [
				'https://i.imgur.com/rT2taoF.png',
				'https://i.imgur.com/riEryHc.png',
				'https://i.imgur.com/XsvhKPd.png',
			],
			links: [
				'https://github.com/nexticodes/event-scheduler-app',
				'https://aight-bet.herokuapp.com/',
			],
		},
		{
			title: 'Turn-based NFT Game',
			name: 'SimpleRPG',
			description:
				'A very simple RPG game that allows the user to acquire an NFT and use that as their character in the game to attack spawned enemies. Its smart contract is deployed on the Rinkeby test network simulate its functions without spending expensive resources.',
			tech: ['React.JS', 'Node.JS', 'Ethers.JS', 'Solidity', 'IPFS'],
			images: [
				'https://i.imgur.com/CByup22.png',
				'https://i.imgur.com/3i9JUfS.png',
				'https://i.imgur.com/jyYN5D9.png',
			],
			links: ['https://github.com/nexticodes/nft_game', 'COMING_SOON'],
		},
	];

  const [renderLinkIcon, renderTechIcon] = useRenderIcons();
	return (
		<div
			ref={el => (scrollRef.current = { ...scrollRef.current, projects: el })}
			className="container projects"
		>
			<div className="content">
				<div className="box">
					{projects.map((project, index) => (
						<div className="project" key={index}>
							<div className="container-title">
								<h1>{project.name}</h1>
                <div className="container-stack">
                  </div>
							</div>
							<div className="container-content">
								<p>{project.title}</p>
								<p>{project.description}</p>
								<div className="container-image">
									{project.images.length > 0 &&
										project.images.map((imageSrc, index) => (
											<img
												src={imageSrc}
												className="image"
												key={index}
												alt=""
											/>
										))}
								</div>
								<div className="container-links">
									{project.links.map(link => renderLinkIcon(link))}
								</div>
							</div>
              {index < projects.length - 1 && <hr className='project-divider'/>}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Projects;
