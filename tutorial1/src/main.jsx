import React from "react";
import {createRoot} from 'react-dom/client'
import App from "./App";
import "./index.css";

// Find all widget divs
const WidgetDivs = document.querySelectorAll(".liftedwp-widget");

// Render our React App into each
WidgetDivs.forEach((Div) => {
  const reactDiv = createRoot(Div)
  reactDiv.render(
    <React.StrictMode>
      <App domElement={Div} />
    </React.StrictMode>,
    Div
  );
});
