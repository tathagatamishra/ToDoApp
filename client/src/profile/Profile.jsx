import React, { useEffect, useState } from "react";
import "./Profile.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { add, close, logOutOutline, createOutline } from "ionicons/icons";
import Todo from "../todolist/Todo";

export default function Profile() {
  const [data, setData] = useState(null);

  const [id, setId] = useState(null);

  const navigate = useNavigate();

  // const BASE_URL = "http://localhost:5000";
  const BASE_URL = "https://what-to-do-bro.vercel.app";

  useEffect(() => {
    let id = localStorage.getItem("user-id");
    setId(id);

    axios
      .get(`${BASE_URL}/profile/${id}`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function edit() {}

  function logOut() {
    localStorage.removeItem("user-id");

    navigate("/");
  }

  if(data) 
    return (
      <div className="proComponent">
        <div className="componentHeader">
          <h2 className="proHeading">Profile</h2>
          <div className="empty"></div>
          {/* <div className="edit" onClick={edit}>
            <IonIcon icon={createOutline} />
          </div> */}
          <div className="logOut" onClick={logOut}>
            <IonIcon icon={logOutOutline} />
          </div>
        </div>

        <div className="profile profile__secondary">
          <h2>
            <b>Name</b> {data.name}
          </h2>
          <h3>
            <b>Email</b> {data.email}
          </h3>
        </div>
          <Todo />
      </div>
    );
  
}
