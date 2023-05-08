import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    if ((email, password)) {
      loginUser(email, password)
        .then((result) => {
          console.log(result.user);
          // navigate("/");
        })
        .catch((error) => {
          setError(error);
        });
    }
  };
  return (
    <div className="bg-gray-200">
      <div className="w-1/2 mx-auto p-8 text-center">
        <p className="text-2xl font-semibold mb-8">Login</p>
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email Address</label>
          <br />
          <input
            className="p-2 w-1/2 rounded mt-3 mb-3"
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your Email"
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            className="p-2 w-1/2 rounded mt-3 mb-5"
            type="password"
            name="password"
            id="password"
            placeholder="Your Password"
          />
          <br />
          {<p className="text-red-500">{error}</p>}
          <button className="btn w-48 mb-5" type="submit">
            Login
          </button>
        </form>
        <p className=" mb-3">
          Don't have an account yet?
          <Link to="/register" className="link-primary">
            Sign Up
          </Link>
        </p>
        <p>or Login With</p>
        <button className="btn btn-outline mr-3 mt-3">
          <span className="mr-2">
            <FaGoogle />
          </span>
          Sign in with Google
        </button>
        <button className="btn btn-outline ">
          <span className="mr-2">
            <FaGithub />
          </span>
          Sign in with Github
        </button>
      </div>
    </div>
  );
};

export default Login;
