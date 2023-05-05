import React from "react";
import { useLoaderData } from "react-router-dom";

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
  console.log(recipes);
  return (
    <div>
      <h2>chbdsjbfdsjbk</h2>
    </div>
  );
};

export default ChefRecipes;
