import React from "react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

import "../../App.css";
import "../about/about.css";
import holly from "../../Images/holly.jpg";
import leenah from "../../Images/leenah.jpeg";
import ryan from "../../Images/ryan.jpeg";
import michael from "../../Images/michael.jpeg";
import farzad from "../../Images/farzad.jpeg";

const About = () => {
  return (
    <div className="about-container">
      <div className="header">
        <h1 className="text-center">
          <b>
            {" "}
            Meet the passionate team of Master35 Holly, Leenah, Ryan, Michael
            and Farzad who worked immensely through out in final weeks and we
            are proud to present our MERN Stack Recipe App as our final project.
          </b>
        </h1>
      </div>

      {/* end of header container */}
      <div className="team-card-container">
        <div className="team-card">
          <h2>
            <b>Holly</b>
          </h2>
          <div className="team-img">
            <img src={holly} alt="holly" />
          </div>
          <h2 className="job-title">CSS Developer</h2>
          <div>
            <a
              className="linkedin"
              href="https://www.linkedin.com/in/holly-christopher-315023a9/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin style={{ color: "#f49f9f", fontSize: "40px" }} />
            </a>
            <a
              className="github"
              href="https://github.com/holguac"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub style={{ color: "#f49f9f", fontSize: "40px" }} />
            </a>
          </div>
        </div>
        <div className="team-card">
          <h2>
            <b>Leenah</b>
          </h2>
          <div className="team-img">
            <img src={leenah} alt="leenah" />
          </div>
          <h2 className="job-title">MERN Stack UX/UI Developer</h2>
          <div>
            <a
              className="linkedin"
              href="https://www.linkedin.com/in/leenah-iqbal/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin style={{ color: "#f49f9f", fontSize: "40px" }} />
            </a>
            <a
              className="github"
              href="https://github.com/leenahiq"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub style={{ color: "#f49f9f", fontSize: "40px" }} />
            </a>
          </div>
        </div>
        <div className="team-card">
          <h2>
            <b>Ryan</b>
          </h2>
          <div className="team-img">
            <img src={ryan} alt="ryan" />
          </div>
          <h2 className="job-title">CSS Developer</h2>
          <div>
            <FaLinkedin style={{ color: "#f49f9f", fontSize: "40px" }} />
            <a
              className="github"
              href="https://github.com/numb9rnine"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub style={{ color: "#f49f9f", fontSize: "40px" }} />
            </a>
          </div>
        </div>
        <div className="team-card">
          <h2>
            <b>Michael</b>
          </h2>
          <img src={michael} alt="michael" />
          <h2 className="job-title">MERN Stack Developer</h2>
          <div>
            <a
              className="linkedin"
              href="https://www.linkedin.com/in/michael-clemson/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin style={{ color: "#f49f9f", fontSize: "40px" }} />
            </a>
            <a
              className="github"
              href="https://github.com/MikkDC"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub style={{ color: "#f49f9f", fontSize: "40px" }} />
            </a>
          </div>
        </div>
        <div className="team-card">
          <h2>
            <b>Farzad</b>
          </h2>
          <img src={farzad} alt="farzad" />
          <h2 className="job-title">React Developer</h2>
          <div>
            <FaLinkedin style={{ color: "#f49f9f", fontSize: "40px" }} />
            <a
              className="github"
              href="https://github.com/farghd"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub style={{ color: "#f49f9f", fontSize: "40px" }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
