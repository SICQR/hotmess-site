import React from "react";
import { createRoot } from "react-dom/client";
import App from "./src/App.jsx";
import "./src/styles/tokens.css";
import "./src/styles/site.css";
createRoot(document.getElementById("root")).render(<App />);