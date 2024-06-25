// src/Pages/Welcome.js
import React from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

function Signup() {
  return (
    <div className="Signup-Container">
      <header className="Signup-title">FitAnalyzer</header>
      <input
        className="Signup-username"
        type="text"
        placeholder="Username"
      ></input>
      <input className="Signup-email" type="email" placeholder="Email"></input>
      <input
        className="Signup-password"
        type="password"
        placeholder="Password"
      ></input>
      <div className="Signup-buttons">
        <Link to="/">
          <button className="Signup-signup">Sign Up</button>
        </Link>
      </div>
    </div>
  );
}

export default Signup;
