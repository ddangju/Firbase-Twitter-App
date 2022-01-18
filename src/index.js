import React from "react";
import ReactDOM from "react-dom";
import App from "components/App";
import { auth } from "myBase";
// import { firebaseApp } from "./myBase";
// console.log(auth);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
