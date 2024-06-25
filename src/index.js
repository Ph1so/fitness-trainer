import React from "react";
import { createRoot } from "react-dom";
import App from "./App";
import Welcome from "./Pages/Welcome";
import Signup from "./Pages/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/main" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
