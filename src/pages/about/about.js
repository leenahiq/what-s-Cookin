import React from "react";
import "../../App.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="header">
        <h1 className="text-center" style={{ paddingTop: "20px" }}>
          This project is made by desk 4 of Code Nation. Contributors are Holy,
          Leenah, Ryan, Michael and Farzad.
        </h1>
      </div>
      <h2>Meet the Team</h2>
      <div className="team-card">
        <h2>Holly</h2>
        <h2>CSS Developer</h2>
        <a
          href="https://www.linkedin.com/in/holly-christopher-315023a9/"
          target="_blank"
          rel="noreferrer"
        >
          Linkedin
        </a>
        <a href="https://github.com/holguac" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
      <div className="team-card">
        <h2>Leenah</h2>
        <h2>MERN Stack Developer</h2>
        <a
          href="https://www.linkedin.com/in/leenah-iqbal/"
          target="_blank"
          rel="noreferrer"
        >
          Linkedin
        </a>
        <a href="https://github.com/leenahiq" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
      <div className="team-card">
        <h2>Ryan</h2>
        <h2>CSS Developer</h2>
        <a href="/">Linkedin</a>
        <a
          href="https://github.com/numb9rnine"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
      <div className="team-card">
        <h2>Michael</h2>
        <h2>MERN Stack Developer</h2>
        <a
          href="https://www.linkedin.com/in/michael-clemson/"
          target="_blank"
          rel="noreferrer"
        >
          Linkedin
        </a>
        <a href="https://github.com/MikkDC" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
      <div className="team-card">
        <h2>Farzad</h2>
        <h2>React Developer</h2>
        <a href="/">Linkedin</a>
        <a href="https://github.com/farghd" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </div>
  );
};

export default About;
