import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { IonIcon } from "@ionic/react";
import { home, person } from "ionicons/icons";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [id, setId] = useState(null);

  function homeOnClick() {
    document.querySelector("title").innerHTML = "All Blogs";
  }
  function profileOnClick() {
    document.querySelector("title").innerHTML = "Profile";
  }

  setInterval(() => {
    setId(localStorage.getItem("user-id"));
  }, 1000);

  return (
    <div className="navbar">
      <div className="icon">
        <NavLink to="/" onClick={homeOnClick}>
          <div className="icon__home">
            <IonIcon icon={home} />
          </div>
        </NavLink>
      </div>

      <div className="icon">
        <div className="icon__title">T O - D O</div>
      </div>

      {id == null ? (
        <NavLink to="/account" onClick={profileOnClick}>
          <div className="icon">
            <div className="icon__account">
              <IonIcon icon={person} />
            </div>
          </div>
        </NavLink>
      ) : (
        <NavLink to="/profile" onClick={profileOnClick}>
          <div className="icon">
            <div className="icon__account">
              <IonIcon icon={person} />
            </div>
          </div>
        </NavLink>
      )}
    </div>
  );
}
