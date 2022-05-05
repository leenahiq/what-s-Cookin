import React from "react";
// import imgA from "../../Images/middleeastern.png";
// import imgB from "../../Images/korean.png";
// import imgC from "../../Images/indian.png";
// import imgD from "../../Images/steak.png";
import img1 from "../../Images/recipe01.jpg";
import img2 from "../../Images/recipe02.jpg";
import img3 from "../../Images/recipe03.jpg";
import img4 from "../../Images/recipe04.jpg";

import "../Home/home.css";
const Home = () => {
  return (
    <div className="home">
      <div>
        {" "}
        <h1>FOOD is fundamental to life Therefore MAKE IT GOOD.</h1>
        <h2>Explore world best recipies</h2>
      </div>
      {/* <div className="images">
        <div className="card">
          <h3>chinese</h3>
          <img className="imgA" src={imgA} alt="img" />
        </div>
        <div className="card1">
          <h3>korean</h3>
          <img className="imgB" src={imgB} alt="img" />
        </div>
        <div className="card">
          <h3>South Indian</h3>
          <img className="imgC" src={imgC} alt="img" />
        </div>
        <div className="card1">
          <h3>American</h3>
          <img className="imgD" src={imgD} alt="img" />
        </div>
        
      </div> */}
      <div className="slider-container">
        <div className="slider">
          <ul className="slider__content">
              <li><img src={img1} alt="food-1" /></li>
              <li><img src={img2} alt="food-2" /></li>
              <li><img src={img3} alt="food-3" /></li>
              <li><img src={img4} alt="food-4" /></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
