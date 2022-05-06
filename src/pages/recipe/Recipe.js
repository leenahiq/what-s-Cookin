import React, { useState } from "react";
import RecipeDetails from "./RecipeDetails";
import "../../App.css";

const Recipe = ({ recipe }) => {
  const [show, setShow] = useState(false);
  const { label, image, url, ingredients } = recipe.recipe;

  return (
    <div className="recipe">
      <div className="recipe-card">
        <h2>{label}</h2>
        <div className="recipe-image">
          <img src={image} alt={label} />
        </div>
        <a
          className="go-to-recipe-button"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to Recipe
        </a>
        <button
          type="Submit"
          className="recipe-button"
          onClick={() => setShow(!show)}
        >
          Ingredients
        </button>
        {show && <RecipeDetails ingredients={ingredients} />}
      </div>
    </div>
  );
};

export default Recipe;
