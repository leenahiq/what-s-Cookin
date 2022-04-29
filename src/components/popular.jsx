import React, { useEffect, useState } from "react";
import "./popular.css";

const Popular = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=107127df5d2f4f389dcb4721842a7c77&number=9`
    );
    const data = await api.json();
    setPopular(data.recipes);
  };

  return (
    <div>
      {popular.map((recipe) => {
        return (
          <div className="container">
            <div 
            className="wrapper" 
            key={recipe.id}
            >
              <p>{recipe.title}</p>
              <img 
              src={recipe.image} 
              alt="images" 
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Popular;
