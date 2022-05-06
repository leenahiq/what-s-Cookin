import React, { useState } from "react";
import MealList from "./MealList";

import "./final.css";

function Calories() {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);

  function getMealData() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=0e9cdeae827d40e59e3797a3c6d727ca&timeFrame=day&targetCalories=${calories}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
      })
      .catch(() => {
        console.log("error");
      });
  }

  function handleChange(e) {
    setCalories(e.target.value);
  }

  return (
    <div className="Getapi">
      <div className="mealWrap">
        <div>
          <input
            type="number"
            placeholder="Calories (e.g. 2000)"
            onChange={handleChange}
          />

          <div className="btn">
            <button onClick={getMealData}>Get Daily Meal Plan</button>
          </div>
        </div>
        <div className="mealCard">
          <div>{mealData && <MealList mealData={mealData} />}</div>
        </div>
      </div>
    </div>
  );
}

export default Calories;
