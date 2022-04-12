import React from "react";
import * as widgets from "./widgets";

function App({ domElement }) {
  // 1. Retrieve all the html data-* attributes passed down to the widget;
  const dataset = Object.assign({}, domElement.dataset);

  // 2. One of them is the name of the widget itself, needed to render the right widget.
  const Widget = widgets[dataset.widgetName];

  // 3. Call the selected widget and pass down all the data-* attributes.
  return <Widget dataset={dataset} />;
}

export default App;
