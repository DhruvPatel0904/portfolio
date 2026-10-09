import React from "react";

const Education = () => {
  return (
    <div className="education-container">
      <h2 className="section-title">
        My <span>Education</span>
      </h2>

      <div className="education-card">
        <h3>Diploma in Computer Engineering</h3>
        <p>Computer Engineering</p>
        <p>Curently studying</p>
        <p>2023 - 2026</p>
      </div>

      <div className="education-card">
        <h3>Web Development</h3>
        <p>
          Learning HTML, CSS, JavaScript, React, Bootstrap and
          modern frontend development.
        </p>
      </div>

      <div className="education-card">
        <h3>React Development</h3>
        <p>
          Learning React components, props, state, hooks,
          routing and API integration.
        </p>
      </div>
    </div>
  );
};

export default Education;