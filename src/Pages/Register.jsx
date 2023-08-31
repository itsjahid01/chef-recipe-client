import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { registerUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [passError, setPassError] = useState("");

  const navigate = useNavigate();

  const handleCreateUser = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photo.value;
    console.log(name, email, password, photoURL);
    form.reset();

    if ((name, email, password)) {
      registerUser(email, password)
        .then((result) => {
          console.log(result.user);
          setPassError("");
          updateUserData(result.user, name, photoURL);
          navigate("/");
        })
        .catch((err) => {
          console.log(err.message);
          setError("");
        });
    } else {
      setError("Please fill the form.");
    }

    if (password && password.length < 6) {
      setPassError("Password must be at least 6 characters long");
      return;
    }
  };

  const updateUserData = (user, name, photoURL) => {
    updateProfile(user, {
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
        console.log("profile updated");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="bg-gray-100">
      <div className="w-[60%] mx-auto p-5 text-center">
        <p className="text-2xl font-semibold mb-5 ">Sign Up</p>
        {<p className="text-red-500">{error}</p>}
        <form onSubmit={handleCreateUser}>
          <label htmlFor="name">Name </label>
          <br />
          <input
            className="p-2 w-1/2 rounded mt-3 mb-3"
            type="text"
            name="text"
            id="name"
            placeholder="Your Name "
          />
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input
            className="p-2 w-1/2 rounded mt-3 mb-5"
            type="email"
            name="email"
            id="email"
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
          {<p className="text-red-500">{passError}</p>}

          <label htmlFor="password">Photo URL</label>
          <br />
          <input
            className="p-2 w-1/2 rounded mt-3 mb-5"
            type="text"
            name="photo"
            id="url"
            placeholder="Your Photo Url"
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
