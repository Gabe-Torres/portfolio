import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = (props) => {
	const { logo, title, description, linkText, link, techStack, images, githubRepo } = props;
	const [modalOpen, setModalOpen] = useState(false);
	const [selectedImage, setSelectedImage] = useState(null);

	const openModal = (image, event) => {
    event.stopPropagation();
    setSelectedImage(image);
    setModalOpen(true);
};


	const closeModal = () => {
			setModalOpen(false);
			setSelectedImage(null);
	};

	const [isExpanded, setIsExpanded] = useState(false);

	const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
		};

	return (
			<React.Fragment>
<div className="project" onClick={toggleExpansion} style={{ maxHeight: isExpanded ? '1000px' : '350px' }}>
							<div className="project-container">
									<div className="project-logo">
											<img src={logo} alt="logo" />
									</div>
									<div className="project-title">
											<Link to={link}>{title}</Link>
									</div>
									<div className="project-description">{description}</div>
									<div className="project-tech-stack">{techStack}</div>
									<div className="project-images">
											{images.map((image, index) => (
							<div className="project-image" key={index} onClick={(event) => openModal(image, event)}>
							<img src={image} alt={`Project ${title} - ${index + 1}`} />
													</div>
											))}
									</div>
									<div className="project-link">
											<div className="project-link-icon">
													<FontAwesomeIcon icon={faLink} />
											</div>
											<div className="project-link-text">
													<Link to={link}>{linkText}</Link>
											</div>
											<div className="project-github-link">
												<div className="project-link-icon">
														<FontAwesomeIcon icon={faGithub} />
												</div>
												<div className="project-link-text">
														<a href={githubRepo} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
												</div>
										</div>
									</div>
									<div className="expand-indicator">
										<div className="arrow" style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}></div>
										{isExpanded ? 'Show Less' : 'Show More'}
									</div>
							</div>
					</div>
					{modalOpen && (
						<div className={`modal ${modalOpen ? 'show' : ''}`} onClick={closeModal}>
							<div className="modal-content">
								<img src={selectedImage} alt="Selected" />
							</div>
						</div>
						)}
			</React.Fragment>
	);
};

export default Project;

