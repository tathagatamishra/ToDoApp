import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./main.scss";
import Navbar from "./navbar/Navbar";
import Todo from "./todolist/Todo.jsx";
import Home from "./home/Home.jsx";
import Profile from "./profile/Profile.jsx";
import Credential from "./credential/Credential.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  <div className="container">
    <BrowserRouter>
        <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/account" element={<Credential />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  </div>
);
