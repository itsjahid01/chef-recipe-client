import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import ChefCard from "./ChefCard";
import Ingredients from "./Ingredients";
import Seasons from "./Seasons";
import { AuthContext } from "../provider/AuthProvider";
import { ThreeDots } from "react-loader-spinner";
import Flavors from "../component/Flavors";
import Article from "../component/Article";
import Founder from "../component/Founder";

const Home = () => {
  // const { loading } = useContext(AuthContext);

  const chefData = useLoaderData();
  // console.log(chefData);
  return (
    <div>
      <Banner></Banner>
      <Flavors></Flavors>
      <Founder></Founder>
      <div className="container mx-auto  py-14">
        <p className="text-4xl font-bold text-center mb-5">Popular Chefs</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 p-8">
          {chefData.map((chef) => (
            <ChefCard key={chef.id} chef={chef}></ChefCard>
          ))}
        </div>
        <Ingredients></Ingredients>
        <Seasons></Seasons>
        <Article></Article>
      </div>
    </div>
  );
};

export default Home;
