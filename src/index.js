import React from "react";
import ReactDOM from "react-dom";

import App1 from "./components/App1";
import App2 from "./functionalComponents/App2";

const rootElement = document.getElementById("root1");
ReactDOM.render(
  <React.StrictMode>
    {/* <div style={display: flex; justifyContent: space-between;}> */}
    <App1 />
    <App2 />
    {/* </div> */}
  </React.StrictMode>,
  rootElement
);
