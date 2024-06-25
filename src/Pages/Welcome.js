// src/Pages/Welcome.js
import React from "react";
import { Link } from "react-router-dom";
import "./Welcome.css";

function Welcome() {
  return (
    <div className="Welcome-Container">
      <header className="Welcome-title">FitAnalyzer</header>
      <input
        className="Welcome-username"
        type="text"
        placeholder="Username"
      ></input>
      <input
        className="Welcome-password"
        type="password"
        placeholder="Password"
      ></input>
      <div className="Welcome-buttons">
        <Link to="/main">
          <button className="Welcome-login">Login</button>
        </Link>
        <Link to="/signup">
          <button className="Welcome-signup">Sign Up</button>
        </Link>
      </div>
    </div>
  );
}

export default Welcome;
