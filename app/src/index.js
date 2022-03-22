import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/index"
import Home from "./components/pages/Home/index";
import Login from "./components/pages/Login/index"
import Sample from "./components/pages/Sample/index";

import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Navbar></Navbar>
      <Routes>
        <Route exact path={"/"} element={<Home />} />
        <Route exact path={"/sample"} element={<Sample />} />
        <Route exact path={"/login"} element={<Login />} />
      </Routes>
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
