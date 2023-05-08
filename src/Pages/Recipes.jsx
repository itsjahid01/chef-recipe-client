import React from "react";
import Item from "./Item";

const Recipes = (props) => {
  //   console.log(props.recipe);
  const { recipeName, rating, ingredients, cookingMethod } = props.recipe;

  const handleFavorite = () => {};
  return (
    <div className="card bg-base-100 shadow-2xl">
      <div className="card-body">
        <p>
          <span className="text-lg font-semibold">Recipe Name: </span>
          {recipeName}
        </p>
        <p>
          <span className="text-lg font-semibold">Ingredients: </span>
          {ingredients?.map((item) => (
            <li>{item}</li>
          ))}
        </p>
        <p>
          <span className="text-lg font-semibold">Cooking Method: </span>
          {cookingMethod}
        </p>
        <p>
          <span className="text-lg font-semibold">Rating: </span>
          {rating}
        </p>
        <button onClick={handleFavorite} className="btn">
          {" "}
          Favorite Recipe
        </button>
      </div>
    </div>
  );
};

export default Recipes;
