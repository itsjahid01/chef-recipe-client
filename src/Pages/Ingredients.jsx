import React from "react";
import beef from "../assets/ingredients/beef.jpg";
import rice from "../assets/ingredients/rice.jpeg";
import egg from "../assets/ingredients/egg.jpeg";
import fish from "../assets/ingredients/fish.jpeg";

const Ingredients = () => {
  return (
    <div className=" m-5">
      <p className=" text-center text-2xl mb-3">Recipes by Ingredients</p>
      <p className="text-center">
        Recipes organized by primary and important ingredients like oils,flours
        and herbs.
      </p>
      <hr className="w-32 mx-auto mt-3" />
      <div className="grid md:grid-cols-4  lg:grid-cols-4 gap-10 p-5">
        <div className=" p-5 ">
          <img className="w-24 h-24 mx-auto" src={beef} alt="" />
          <p className="text-center">Beef</p>
          <p className="text-center">(6 recipes)</p>
        </div>
        <div className=" p-5 ">
          <img className="w-24 h-24 mx-auto" src={egg} alt="" />
          <p className="text-center">Egg</p>
          <p className="text-center">(8 recipes)</p>
        </div>
        <div className=" p-5 ">
          <img className="w-24 h-24 mx-auto" src={rice} alt="" />
          <p className="text-center">Rice</p>
          <p className="text-center">(5 recipes)</p>
        </div>
        <div className=" p-5 ">
          <img className="w-24 h-24 mx-auto" src={fish} alt="" />
          <p className="text-center">Fish</p>
          <p className="text-center">(7 recipes)</p>
        </div>
      </div>
    </div>
  );
};

export default Ingredients;
