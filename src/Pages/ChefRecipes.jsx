import React from "react";
import { useLoaderData } from "react-router-dom";
import { AiFillLike } from "react-icons/ai";
import Recipes from "./Recipes";

const ChefRecipes = () => {
  const {
    bio,
    likes,
    numRecipes,
    yearsExperience,
    chefName,
    chefImage,
    recipes,
  } = useLoaderData();
  //   console.log(recipes);

  return (
    <div className="container mx-auto p-5">
      <div className="card card-side bg-base-100 shadow-xl">
        <figure className="w-3/5">
          <img className="w-full" src={chefImage} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="text-lg font-semibold">Chef Name: {chefName}</h2>
          <p>
            <span className="text-lg font-semibold">Bio:</span> {bio}
          </p>
          <p>
            <span className="text-lg font-semibold">Years of experience: </span>
            {yearsExperience}
          </p>
          <p>
            <span className="text-lg font-semibold"> Numbers of recipes: </span>
            {numRecipes}
          </p>
          <p className="flex items-center gap-2">
            <span className="">
              <AiFillLike />
            </span>
            {likes}
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-3 p-5">
        {recipes.map((recipe, index) => (
          <Recipes key={index} recipe={recipe}></Recipes>
        ))}
      </div>
    </div>
  );
};

export default ChefRecipes;
