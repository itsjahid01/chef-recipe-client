import React from "react";
import { Link, useRouteError } from "react-router-dom";
import errorImg from "../assets/error.jpg";

const ErrorPage = () => {
  const error = useRouteError();
  //   console.log(error.data);
  return (
    <div className="container">
      <div className=" w-10/12 mx-auto text-center ">
        <img className="w-1/3  mx-auto" src={errorImg} alt="" />
        <p className="mt-5 text-xl text-red-500">{error.data}</p>
        <Link to="/">
          <button className="  btn btn-primary mt-5 ">Go to HomePage</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
