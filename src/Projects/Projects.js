import React from "react";
import "./Projects.css";
import ProjectBox from "./ProjectBox/ProjectBox";

const projectsData = [
  {
    title: "Spotted",
    description:
      "Server rendered Social media application built with Node.js and Handlebars as my second project for IRONHACK Barcelona",
    technologies: ["Node.js", "Handlebars", "MongoDB", "Javascript"],
    github: "https://github.com/valentin-muller/spotted",
    deploy: "https://spotttttted.herokuapp.com/login",
  },
  {
    title: "House Party",
    description:
      "Full stack CRUD Application built with Node.js and React as my graduation project at IRONHACK Barcelona ",
    technologies: ["Node.js", "React", "MongoDB", "Javascript"],
    github: "https://github.com/federicogiorgino/house-party-client",
    deploy: "https://house-fiesta.herokuapp.com/signup",
  },
  {
    title: "Whispers",
    description: " Social Network Application built with React and GraphQL/Apollo Server. ",
    technologies: ["GraphQL", "MongoDB", "React"],
    github: "https://github.com/federicogiorgino/whispers",
    deploy: "https://github.com/federicogiorgino/whispers",
  },
  {
    title: "COVID-19 Infographics",
    description: " Infographics application about covid-19 with dynamic data display  ",
    technologies: ["Chart.js", "Material UI", "React"],
    github: "https://github.com/federicogiorgino/covid19-tracker",
    deploy: "https://covid19charts.netlify.app/",
  },
  {
    title: "Shorteet",
    description: "URL Shortener with Statistics page for each shortened URL and unique Hashing.",
    technologies: ["Chart.js", "Redis", "React", "Node.js"],
    github: "https://github.com/federicogiorgino/covid19-tracker",
    // deploy: "https://covid19charts.netlify.app/",
  },
];

const Projects = () => {
  return (
    <div className='projects-page' id='projects'>
      <div className='project-intro'>What I've been working on</div>
      <div className='projects-grid'>
        {projectsData.map((project, index) => (
          <ProjectBox key={index} project={project} />
        ))}
      </div>
      <div className='project-more'>See smaller projects on my github ...</div>
    </div>
  );
};

export default Projects;
