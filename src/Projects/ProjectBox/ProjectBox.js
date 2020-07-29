import React from "react";
import "./ProjectBox.css";

const ProjectBox = ({ project }) => {
  return (
    <div className='project-box'>
      <div className='project-topline'>
        <div className='project-title'>{project.title}</div>
        <div className='deploy-links'>
          {project.github && (
            <a href={project.github}>
              <i class='fa fa-github' aria-hidden='true' />
            </a>
          )}
          {project.deploy && (
            <a href={project.deploy}>
              <i class='fa fa-link' aria-hidden='true' />
            </a>
          )}
        </div>
      </div>
      <div className='project-description'>
        <p>{project.description} </p>
      </div>
      <ul className='project-technologies'>
        {project.technologies.map((tech, i) => (
          <li key={i}>{tech}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectBox;
