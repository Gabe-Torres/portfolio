import React from "react";

import Project from "./project";

import INFO from "../../data/user";

import "./styles/allProjects.css";

const AllProjects = () => {
	return (
		<div className="all-projects-container">
			{INFO.projects.map((project, index) => (
				<div className="all-projects-project" key={index}>
					<Project
						logo={project.logo}
						title={project.title}
						techStack={project.TechStack}
						description={project.description}
						linkText={project.linkText}
						link={project.link}
						images={project.images}
						githubRepo={project.githubRepo}
					/>
				</div>
			))}
		</div>
	);
};

export default AllProjects;
