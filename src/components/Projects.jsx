import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "cycle-shop",
      description:
        "A modern responsive e-commerce website created using React and CSS.",
      image: "project1.png",
      link: "https://cycle-shop-mocha.vercel.app/",
    },
    {
      title: "jungle safari",
      description:
        "Jungle Safari is a modern, premium wildlife discovery website designed to showcase the beauty of nature.",
      image: "project2.png",
      link: "https://vantara-zeta.vercel.app/",
    },
    {
      title: "E-Commerce",
      description:
        "A modern responsive e-commerce website created using React and CSS.",
      image: "project3.png",
      link: "https://cloath.vercel.app/",
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

              <a
                href={project.link}
                className="btn"
                target={
                  project.link.startsWith("http")
                    ? "_blank"
                    : undefined
                }
                rel={
                  project.link.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
              >
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
