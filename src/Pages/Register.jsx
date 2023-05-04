import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="bg-gray-200">
      <div className="w-1/2 mx-auto p-5 text-center">
        <p className="text-2xl font-semibold mb-5 ">Sign Up</p>
        <form>
          <label htmlFor="email">Name </label>
          <br />
          <input
            className="p-2 w-1/2 rounded mt-3 mb-3"
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your Name "
          />
          <br />
          <label htmlFor="password">Email</label>
          <br />
          <input
            className="p-2 w-1/2 rounded mt-3 mb-5"
            type="password"
            name="password"
            id="password"
            placeholder="Your Email"
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
          <label htmlFor="password">Photo URL</label>
          <br />
          <input
            className="p-2 w-1/2 rounded mt-3 mb-5"
            type="password"
            name="password"
            id="password"
            placeholder="Your Photo"
          />
          <br />
          <button className="btn w-48 mb-5" type="submit">
            Register
          </button>
        </form>
        <p className=" mb-3">
          Already have an account yet?
          <Link to="/login" className="link-primary">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
