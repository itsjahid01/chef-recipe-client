import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Recipes = (props) => {
  //   console.log(props.recipe);
  const { recipePic, recipeName, rating, ingredients, cookingMethod } =
    props?.recipe;

  const handleFavorite = (event) => {
    toast("The Recipe is my Favorite");
    event.currentTarget.disabled = true;
  };
  return (
    <div className="card bg-base-100 shadow-2xl">
      <figure className="h-64">
        <img src={recipePic} alt="Shoes" />
      </figure>
      <div className="card-body">
        <p>
          <span className="text-lg font-semibold">Recipe Name: </span>
          {recipeName}
        </p>
        <p>
          <span className="text-lg font-semibold">Ingredients: </span>
          {ingredients?.map((item, index) => (
            <li key={index}>{item}</li>
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
        <button onClick={handleFavorite} className="btn" disabled={false}>
          Favorite Recipe
        </button>
      </div>
    </div>
  );
};

export default Recipes;
