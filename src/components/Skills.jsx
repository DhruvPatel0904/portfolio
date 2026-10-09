import React from "react";

const Skills = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Bootstrap",
    "Git & GitHub", 
    "Responsive Design",
  ];

  return (
    <div className="container">
      <h2 className="section-title">
        My <span>Skills</span>
      </h2>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <h3>{skill}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;