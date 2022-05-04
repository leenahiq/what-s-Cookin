import React from "react";
import "../../App.css";
import holly from "../../Images/holly.jpg";
import leenah from "../../Images/leenah.jpeg";
import ryan from "../../Images/ryan.jpeg";
import michael from "../../Images/michael.jpeg";
import farzad from "../../Images/farzad.jpeg";


const About = () => {
  return (
    <div className="about-container">
      <div className="header-container">
      <div className="header">
        <h1 className="text-center" style={{ paddingTop: "20px" }}>
          This project is made by desk 4 of Code Nation. Contributors are Holy,
          Leenah, Ryan, Michael and Farzad.
        </h1>
      </div>
      </div>
      {/* end of header container */}
      <div className="team-card-container">
      <div className="team-card">
      <h2>
        Holly
      </h2>
      <div className="team-img">
      <img src={holly} alt="holly" />
      </div>
      <h2 className="job-title">
        CSS Developer
      </h2>
      <a className="linkedin" href="https://www.linkedin.com/in/holly-christopher-315023a9/" target="_blank" rel="noreferrer">Linkedin</a>
      <a className="github" href="https://github.com/holguac" target="_blank" rel="noreferrer">GitHub</a>
      </div>
      <div className="team-card">
      <h2>
        Leenah
      </h2>
      <div className="team-img">
      <img src={leenah} alt="leenah" />
      </div>
      <h2 className="job-title">
        MERN Stack Developer
      </h2>
      <a className="linkedin" href="https://www.linkedin.com/in/leenah-iqbal/" target="_blank" rel="noreferrer">Linkedin</a>
      <a className="github" href="https://github.com/leenahiq" target="_blank" rel="noreferrer">GitHub</a>
      </div>
      <div className="team-card">
      <h2>
        Ryan
      </h2>
      <div className="team-img">
      <img src={ryan} alt="ryan" />
      </div>
      <h2 className="job-title">
        CSS Developer
        </h2>
      {/* <a className="linkedin">Linkedin</a> */}
      <a className="github" href="https://github.com/numb9rnine" target="_blank" rel="noreferrer">GitHub</a>
      </div>
      <div className="team-card">
      <h2>
        Michael
      </h2>
      <img src={michael} alt="michael" />
      <h2 className="job-title">
        MERN Stack Developer
      </h2>
      <a className="linkedin" href="https://www.linkedin.com/in/michael-clemson/" target="_blank" rel="noreferrer">Linkedin</a>
      <a className="github" href="https://github.com/MikkDC" target="_blank" rel="noreferrer">GitHub</a>
      </div>
      <div className="team-card">
      <h2>
        Farzad
      </h2>
      <img src={farzad} alt="farzad" />
      <h2 className="job-title">
        React Developer
      </h2>
      {/* <a className="linkedin">Linkedin</a> */}
      <a className="github" href="https://github.com/farghd" target="_blank" rel="noreferrer">GitHub</a>
      </div>

      </div>
    </div>
  );
};

export default About;
