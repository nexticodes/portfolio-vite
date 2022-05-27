import React from 'react';
import '../assets/styles/Projects.css';
import useProjectData from '../hooks/useProjectData';
import useRenderIcons from '../hooks/useRenderIcons';

const Projects = ({ scrollRef }) => {
	const projects = useProjectData();

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
