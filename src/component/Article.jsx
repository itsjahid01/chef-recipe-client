import React from "react";
import img from "../assets/ItacoaParis6.jpg";
import img1 from "../assets/gratinado.jpg";

const Article = () => {
  return (
    <div>
      <p className="text-orange-600 font-semibold mb-5 text-center">
        KEEP READING
      </p>
      <p className="text-5xl font-bold mb-6 text-center">
        Lates article & news
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 py-10 px-6">
        <div className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img src={img1} alt="image" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              How to Peel Hard Boiled Eggs Perfectly, Every Single Time
            </h2>
            <p className="text-orange-600">April 9, 2022 No Comments</p>
          </div>
        </div>
        <div className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img src={img} alt="image" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              How to Peel Hard Boiled Eggs Perfectly, Every Single Time
            </h2>
            <p className="text-orange-600">April 9, 2022 No Comments</p>
          </div>
        </div>
        <div className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img src={img1} alt="image" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              How to Peel Hard Boiled Eggs Perfectly, Every Single Time
            </h2>
            <p className="text-orange-600">April 9, 2022 No Comments</p>
          </div>
        </div>
        <div className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img src={img} alt="image" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              How to Peel Hard Boiled Eggs Perfectly, Every Single Time
            </h2>
            <p className="text-orange-600">April 9, 2022 No Comments</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
