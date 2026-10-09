import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "cycle-shop",
      description:
        "A modern responsive e-commerce website created using React and CSS.",
      image:
        "project1.png",
    },
    {
      title: "brooks psychology",
      description:
        "A modern psychology portfolio website designed to showcase professional services and expertise.",
      image:
        "project2.png",
    },
    {
      title: "Adventure",
      description:
        "Ride farther, ride faster, and experience freedom without limits.",
      image:
        "project3.png",
    },
  ];

  return (
    <div className="container">
      <h2 className="section-title">
        My <span>Projects</span>
      </h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />

            <div className="project-card-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <a href="#contact" className="btn">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;