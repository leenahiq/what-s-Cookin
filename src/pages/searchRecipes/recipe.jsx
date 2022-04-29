import { useState } from "react";
import "./recipe.css";

const Recipe = () => {
  const [query, setQuery] = useState();
  const [recipe, setRecipe] = useState([]);
  const fetchRecipe = async () => {
    let res = await fetch(`${process.env.REACT_APP_RECIPE}${query}`);
    let data = await res.json();
    console.log(data);
    setRecipe(data.results);
  };

  const changeHandler = (e) => {
    e.preventDefault();
    fetchRecipe();
  };

  return (
    <div className="container">
      <form onSubmit={changeHandler}>
        <input
          type="text"
          placeholder="enter name of dish"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {recipe.map((recipe) => (
        <div
        key={recipe.id}>
          <p>{recipe.title}</p>
          <img src={recipe.image} alt="images" />
        </div>
      ))}
    </div>
  );
};

export default Recipe;
