import React from "react";
import { AiFillLike } from "react-icons/ai";
import { Link } from "react-router-dom";

const ChefCard = (props) => {
  //   console.log(props.chef);
  const { id, likes, numRecipes, yearsExperience, chefName, chefImage } =
    props.chef;
  return (
    <div>
      <div className="card bg-[#bec9d4] shadow-2xl">
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
            <Link to={`/chefRecipes/${id}`}>
              <button className="btn">View Recipes</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
