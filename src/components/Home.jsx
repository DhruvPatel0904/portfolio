import React from "react";

const Home = () => {
  return (
    <div className="home-container">

      {/* Left Side */}
      <div className="home-content">
        <h3>Hello, I'm</h3>

        <h1>Dhruv</h1>

        <h2>Frontend React Developer</h2>

        <p>
          I am a passionate frontend developer who loves creating
          modern, responsive and user-friendly websites using React.
        </p>

        <a href="#projects" className="btn">
          View My Work
        </a>

        <a
          href="#contact"
          className="btn"
          style={{ marginLeft: "15px" }}
        >
          Contact Me
        </a>
      </div>

      {/* Right Side Profile Image */}
      <div className="home-image">
        <img src="/profile.jpeg" alt="Dhruv Profile" />
      </div>

    </div>
  );
};

export default Home;