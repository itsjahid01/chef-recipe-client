import React from "react";
import { AiFillLike } from "react-icons/ai";

const ChefCard = (props) => {
  //   console.log(props.chef);
  const { id, likes, numRecipes, yearsExperience, chefName, chefImage } =
    props.chef;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="w-full h-80">
          <img src={chefImage} alt="Shoes" />
        </figure>
        <div className="card-body">
          <p className="text-lg font-semibold">Chef Name: {chefName}</p>
          <p>Years of experience: {yearsExperience} years</p>
          <p>Numbers of recipes: {numRecipes}</p>
          <p className="flex items-center gap-2">
            <span className="">
              <AiFillLike />
            </span>
            {likes}
          </p>
          <div className="card-actions">
            <button className="btn">View Recipes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
