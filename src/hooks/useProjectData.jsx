import react from 'react';
import ABEventPage from '../assets/projects/ab-eventpage.png';
import ABEvents from '../assets/projects/ab-events.png';
import ABIntro from '../assets/projects/ab-intro.png';
import GGLogin from '../assets/projects/gg-login.png';
import GGMatch from '../assets/projects/gg-match.png';
import GGMatches from '../assets/projects/gg-matches.png';
import RLGLGo from '../assets/projects/rlgl-go.png';
import RLGLGame from '../assets/projects/rlgl-game.png';
import RLGLIntro from '../assets/projects/rlgl-intro.png';


const useProjectData = () => {
  return [
		{
			title: 'Stop&Go Typeracer Clone',
			name: 'RLGLTyperacer',
			description:
				'This is browser-based typing game that is similar to the Typeracer game, but with the Red Light Green Light functionality and health point system. The user is given a passage and the user will have to type every character in every word correctly within 60 seconds in order to win the game.',
			tech: ['HTML', 'CSS', 'JavaScript', 'DOM Manipulation'],
			images: [
        RLGLIntro, RLGLGo, RLGLGame
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
        GGLogin, GGMatch, GGMatches
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
        ABIntro, ABEvents, ABEventPage
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
}

export default useProjectData