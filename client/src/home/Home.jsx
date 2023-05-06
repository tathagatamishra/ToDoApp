import React, { useState } from "react";
import "./Home.scss";
import { NavLink } from "react-router-dom";

export default function Todo() {
  const [id, setId] = useState(null);

  function profileOnClick() {
    document.querySelector("title").innerHTML = "Profile";
  }

  setInterval(() => {
    setId(localStorage.getItem("user-id"));
  }, 1000);

  // if (data) {
  return (
    <div className="homeBody">
      <div className="hero">
        <h1>Welcome to To-Do Application</h1>
      </div>

      {id == null ? (
        <NavLink to="/account" onClick={profileOnClick} className="start">
          <div className="start__add">
            <div className="a"></div>
            <div className="b"></div>
          </div>
        </NavLink>
      ) : (
        <NavLink to="/todo" onClick={profileOnClick} className="start">
          <div className="start__add">
            <div className="a"></div>
            <div className="b"></div>
          </div>
        </NavLink>
      )}
    </div>
  );
  // }
}
