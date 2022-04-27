import { useState } from "react";

const Ingredient = () => {
  const [query, setQuery] = useState();
  const [recipeByIng, setRecipeByIng] = useState([]);
  const fetchRecipe = async () => {
    let res = await fetch(`${process.env.REACT_APP_INGREDIENT}${query}`);
    let data = await res.json();
    console.log(data);
    setRecipeByIng(data);
  };

  const changeHandler = (e) => {
    e.preventDefault();
    fetchRecipe();
  };

  return (
    <div>
      <form onSubmit={changeHandler}>
        <input
          type="text"
          placeholder="enter name of dish"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {recipeByIng.map((recipe) => (
        <div key={recipe.id}>
          <p>{recipe.title}</p>
          <img src={recipe.image} alt="images" />
          <p>{recipe.missedIngredient}</p>
        </div>
      ))}
    </div>
  );
};

export default Ingredient;
