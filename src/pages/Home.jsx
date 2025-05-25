
import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-text">
        <h1>
          Hi, I'm <span>Your Name</span>
        </h1>
        <h2>Frontend Developer</h2>
        <p>
          I build responsive websites and love working with modern web
          technologies.
        </p>
        <div className="home-buttons">
          <a href="#contact" className="btn">
            Contact Me
          </a>
          <a href="/resume.pdf" className="btn" download>
            Download Resume
          </a>
        </div>
      </div>
      <div className="home-image">
        <img src="/profile.png" alt="Profile" />
      </div>
    </section>
  );
};

export default Home;
