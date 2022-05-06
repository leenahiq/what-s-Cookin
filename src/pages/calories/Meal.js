import React, { useState, useEffect } from "react";
import "./Meal.css";

export default function Meal({ meal }) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=0e9cdeae827d40e59e3797a3c6d727ca&includeNutrition=false`
    )
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.image);
      })
      .catch(() => {
        console.log("error");
      });
  }, [meal.id]);

  return (
    <div className="calorie-container">
      <div>
        <h2>{meal.title}</h2>
      </div>
      <div>
        {" "}
        <img src={imageUrl} alt="recipe" />
        <ul className="instructions">
          <li>Preparation time: {meal.readyInMinutes} minutes</li>
          <li>Number of servings: {meal.servings}</li>
        </ul>
      </div>
      <div>
        <a
          className="mealBtn"
          href={meal.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to Recipe
        </a>
      </div>
    </div>
  );
}
