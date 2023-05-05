import React from "react";
import spring from "../assets/seasons/spring.jpeg";
import fall from "../assets/seasons/fall.jpeg";
import easter from "../assets/seasons/summer.jpeg";
import summer from "../assets/seasons/summer.jpeg";

const Seasons = () => {
  return (
    <div className=" m-5">
      <p className=" text-center text-2xl mb-3">Recipes by Seasons</p>
      <p className="text-center">Looking for seasonal cooking recipes?</p>
      <hr className="w-32 mx-auto mt-3" />
      <div className="grid md:grid-cols-4  lg:grid-cols-4 gap-10 p-5">
        <div className=" p-5 ">
          <img className="w-24 h-24 mx-auto" src={spring} alt="" />
          <p className="text-center">Spring</p>
          <p className="text-center">(16 recipes)</p>
        </div>
        <div className=" p-5 ">
          <img className="w-24 h-24 mx-auto" src={fall} alt="" />
          <p className="text-center">Fall</p>
          <p className="text-center">(8 recipes)</p>
        </div>
        <div className=" p-5 ">
          <img className="w-24 h-24 mx-auto" src={summer} alt="" />
          <p className="text-center">Summer</p>
          <p className="text-center">(5 recipes)</p>
        </div>
        <div className=" p-5 ">
          <img className="w-24 h-24 mx-auto" src={easter} alt="" />
          <p className="text-center">Easter</p>
          <p className="text-center">(7 recipes)</p>
        </div>
      </div>
    </div>
  );
};

export default Seasons;
