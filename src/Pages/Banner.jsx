import React from "react";
import banner from "../assets/ingredients/sam-moghadam-khamseh-ZxRHv6epgMQ-unsplash.jpg";

const Banner = () => {
  return (
    <div className="md:flex justify-center items-center p-5">
      <div className="w-1/2 p-5">
        <p className="text-3xl font-semibold ">WELCOME TO OUR FOOD WEBSITE</p>
        <p className="mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu
          purus purus. Donec commodo dui at ligula sagittis finibus.
        </p>
        <button className="btn mt-4 ">Learn More </button>
      </div>
      <div className="w-1/2">
        <img src={banner} alt="" />
      </div>
    </div>
  );
};

export default Banner;
