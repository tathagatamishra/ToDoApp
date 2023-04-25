import React, { useEffect, useState } from "react";
import "./Home.scss";
import { NavLink } from "react-router-dom";
import Credential from "../credential/Credential";

export default function Todo() {
  const [data, setData] = useState(null);

  useEffect(() => {

  }, []);

  // if (data) {
    return (
      <div className="homeBody">
        <div className="start">
          <NavLink to="/todo">
        <div className="start__add">
          <div className="a"></div>
          <div className="b"></div>
        </div>
        </NavLink>
      </div>
      </div>
    );
  // }
}
