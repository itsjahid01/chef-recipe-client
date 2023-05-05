import React from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import ChefCard from "./ChefCard";
import Ingredients from "./Ingredients";
import Seasons from "./Seasons";

const Home = () => {
  const chefData = useLoaderData();
  // console.log(chefData);
  return (
    <div className="container mx-auto">
      <Banner></Banner>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 p-8">
        {chefData.map((chef) => (
          <ChefCard key={chef.id} chef={chef}></ChefCard>
        ))}
      </div>
      <Ingredients></Ingredients>
      <Seasons></Seasons>
    </div>
  );
};

export default Home;
