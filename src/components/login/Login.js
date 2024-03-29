import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    // Hält die Seite vom Refresh ab, sollte die Regel sein
    e.preventDefault();
    // some fancy firebase login shittttt ....
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        console.log("test");
        // if it was successful
        navigate("/");
      })
      .catch((error) => alert.message);
  };

  const register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        // it successfully created a new user with email and password
        // console.log(auth);
        // if history is not empty
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
    // do some fancy firebase register shittttt ....
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="Amazon Logo"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-Mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>

          <p>
            By signin-in you agree to the AMAZON FAKE CLONE Conditions of Use &
            Sale. Please see our Privacy Notice, our Cookies Notice and our
            Interest-Based Ads Notice.
          </p>

          <button
            className="login__registerButton"
            type="submit"
            onClick={register}
          >
            Create your Amazon Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
