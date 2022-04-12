import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

// Find all widget divs
const WidgetDivs = document.querySelectorAll(".liftedwp-widget");

// Render our React App into each
WidgetDivs.forEach((Div) => {
  ReactDOM.render(
    <React.StrictMode>
      <App domElement={Div} />
    </React.StrictMode>,
    Div
  );
});
