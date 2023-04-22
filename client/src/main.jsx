import React from "react";
import ReactDOM from "react-dom/client";
import "./main.scss";
import Navbar from "./navbar/Navbar";
import Todo from "./todolist/Todo.jsx";
import Home from "./home/Home.jsx"
import Profile from "./profile/Profile";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div className="container">
    <Navbar />
    <Todo />
    {/* <Home /> */}
    {/* <Profile /> */}
    {/* <Credential /> */}
  </ div>
);
