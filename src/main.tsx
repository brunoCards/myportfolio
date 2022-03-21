import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyle } from "./ui/styles/GlobalStyle";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
