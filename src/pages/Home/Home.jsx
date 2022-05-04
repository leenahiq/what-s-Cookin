import React from "react";
import imgA from "../../Images/chinese.png";
import imgB from "../../Images/fish.png";
import imgC from "../../Images/indian.png";
import imgD from "../../Images/steak.png";
import "../Home/home.css";
const Home = () => {
  return (
    <div className="home">
      <div>
        {" "}
        <h1>main lines</h1>
      </div>
      <div className="images">
        <div className="card">
          <h3>chinese</h3>
          <img className="imgA" src={imgA} alt="img" />
        </div>
        <div className="card">
          <h3>English</h3>
          <img className="imgB" src={imgB} alt="img" />
        </div>
        <div className="card">
          <h3>South Indian</h3>
          <img className="imgC" src={imgC} alt="img" />
        </div>
        <div className="card">
          <h3>American</h3>
          <img className="imgD" src={imgD} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Home;
