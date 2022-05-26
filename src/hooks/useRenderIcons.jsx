import React from 'react';
import githubLogo from '../assets/skills/github-octocat.svg';
import herokuLogo from '../assets/skills/heroku-icon.svg';
import reactLogo from '../assets/skills/react.svg';
import htmlLogo from '../assets/skills/html-5.svg';
import cssLogo from '../assets/skills/css-3.svg';
import jsLogo from '../assets/skills/javascript.svg';
import vueLogo from '../assets/skills/vue.svg';
import tailwindLogo from '../assets/skills/tailwindcss-icon.svg';
import nodeLogo from '../assets/skills/nodejs-icon.svg';
import expressLogo from '../assets/skills/express.svg';
import mongodbLogo from '../assets/skills/mongodb.svg';
import solidityLogo from '../assets/skills/solidity.svg';
import ethersLogo from '../assets/skills/ethers.svg';
import pythonLogo from '../assets/skills/python.svg';
import repairLogo from '../assets/skills/repairing-wrench-svgrepo-com.svg';

const useRenderIcons = () => {
	const renderLinkIcon = link => (
		<a href={link}>
			<img
				className="project-icon"
				src={
					link.includes('github')
						? githubLogo
						: link.includes('heroku')
						? herokuLogo
						: repairLogo
				}
			/>
		</a>
  );

	const renderTechIcon = link => {
		<img></img>;
	};
	return [renderLinkIcon, renderTechIcon];
};

export default useRenderIcons;
