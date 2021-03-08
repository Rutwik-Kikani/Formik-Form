import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
//styles..
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
//components..
import App from "./App";
const app = (
  <Router>
    <App />
  </Router>
);
ReactDOM.render(app, document.getElementById("root"));
