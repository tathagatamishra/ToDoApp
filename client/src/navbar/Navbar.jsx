import React from "react";
import "./Navbar.scss";
import { IonIcon } from "@ionic/react";
import { home, person } from "ionicons/icons";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  function searchBlog() {
    let searchKey = document.querySelector(".search__input").value;
    console.log(searchKey);
  }

  function profileClick() {
    const fetchData = async () => {
      const response = await fetch(
        "https://blogity-blog.vercel.app/profile/64401a8cc494c7aeb0ebbe97"
      );
      const jsonData = await response.json();
      console.log(jsonData.data);
    };

    fetchData();
  }

  return (
    <div className="navbar">
      <div className="icon">
        <NavLink to="/">
          <div className="icon__home">
            <IonIcon icon={home} />
          </div>
        </NavLink>
      </div>

      <div className="icon">
        <div className="icon__title">T O - D O</div>
      </div>

      <div className="icon" onClick={profileClick}>
        <NavLink to="/profile">
          <div className="icon__account">
            <IonIcon icon={person} />
          </div>
        </NavLink>
      </div>
    </div>
  );
}
