import React from 'react';
import projectData from './projectData'; // Adjust the import path as needed
import './project.css';

const Projects = () => {
    return (
        <div className="projects-page">
            <h1 className="projects-header">My Projects</h1>
            <div className="projects-container">
                {projectData.map((project, index) => (
                    <div key={index} className="project-card">
                        <img src={project.media} alt={project.title} />
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <div className="project-links">
                            <a href={project.demo} className="project-link" target="_blank" rel="noopener noreferrer">View Demo</a>
                            <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                        </div>
                    </div>
                ))}
            </div>
            <p className="rendering-warning">* Please note: It may take a moment to load as it's running on a free tier.</p>
            
        </div>
    );
};


export default Projects;
