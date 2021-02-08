import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";
import React from "react";
import "../styles/Login.css";

function Login() {
  const signIN = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/9/98/Discord_logo.svg/800px-Discord_logo.svg.png"
          alt="discord_img"
        />
      </div>
      <Button onClick={signIN}>Sign In</Button>
    </div>
  );
}

export default Login;
