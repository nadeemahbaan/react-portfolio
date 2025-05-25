// src/components/About.js
import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-image">
          <img src="/profile.png" alt="About Me" />
        </div>
        <div className="about-text">
          <p>
            Hi! I'm <strong>Your Name</strong>, a passionate frontend developer
            with a love for building responsive and user-friendly interfaces.
          </p>
          <p>
            I specialize in HTML, CSS, JavaScript, and React. I'm always
            learning and exploring new technologies to improve my craft.
          </p>
          <h3>Skills:</h3>
          <ul className="skills-list">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript (ES6+)</li>
            <li>React.js</li>
            <li>Git & GitHub</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
