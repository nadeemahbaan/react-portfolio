import React from "react";
import "./Project.css";

const projects = [
  {
    title: "Weather App",
    description: "A weather forecast app using OpenWeatherMap API.",
    tech: ["React", "API", "CSS"],
    image: "/weather.png",
    live: "https://your-weather-app.com",
    github: "https://github.com/yourname/weather-app",
  },
  {
    title: "Task Manager",
    description: "A task manager with CRUD operations and local storage.",
    tech: ["React", "JavaScript"],
    image: "/tasks.png",
    live: "https://your-task-manager.com",
    github: "https://github.com/yourname/task-manager",
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>
              <strong>Tech:</strong> {project.tech.join(", ")}
            </p>
            <div className="project-buttons">
              <a href={project.live} target="_blank" rel="noreferrer">
                🔗 Live
              </a>
              <a href={project.github} target="_blank" rel="noreferrer">
                💻 GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
