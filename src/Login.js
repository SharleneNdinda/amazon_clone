import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));

    //firebase
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //successful registration

        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
    //firebase
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://www.marketplace.org/wp-content/uploads/2019/07/modernupdate.png"
          alt="logo"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>Email</h5>
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
            className="login__signInButton"
            onClick={signIn}
            type="submit"
          >
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to Clone Amazon's Conditions of Use and
          Privacy Notice.
        </p>

        <button className="login__registerButton" onClick={register}>
          Create Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
