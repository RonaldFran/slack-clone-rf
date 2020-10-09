import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";

function Login() {
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://static.dezeen.com/uploads/2019/01/slack-rebrand-pentagram-michael-bierut_dezeen_426-sq-300x300.gif"
          alt=""
        />
        <h1>Sign in to Slack clone </h1>
        <p>created by Ronald Francois</p>
        <Button>Sign in with Google</Button>
      </div>
    </div>
  );
}

export default Login;
