import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const savedTheme = localStorage.getItem("portfolio-theme") === "light" ? "light" : "dark";
document.documentElement.dataset.theme = savedTheme;

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
