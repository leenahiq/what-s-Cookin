import React, { useState, useEffect } from "react";
import "./Meal.css";

export default function Meal({ meal }) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=107127df5d2f4f389dcb4721842a7c77&includeNutrition=false`
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
      <article>
        <h2>{meal.title}</h2>
        <img src={imageUrl} alt="recipe" />
        <ul className="instructions">
          <li>Preparation time: {meal.readyInMinutes} minutes</li>
          <li>Number of servings: {meal.servings}</li>
        </ul>

        <a href={meal.sourceUrl} target="_blank" rel="noopener noreferrer">
          Go to Recipe
        </a>
      </article>
    </div>
  );
}
