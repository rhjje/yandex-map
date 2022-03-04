import React from "react";
import ReactDOM from "react-dom";
import { YandexMap } from "./components/Map/Map";
import "./App.css";

ReactDOM.render(
  <React.StrictMode>
    <div style={{ width: "100%", height: "100vh" }}>
      <YandexMap />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
