import React, { useEffect, useState } from "react";
import "./Profile.scss";
import axios, { all } from "axios";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import {
  chevronUpOutline,
  chevronDownOutline,
  logOutOutline,
  createOutline,
} from "ionicons/icons";
import Todo from "../todolist/Todo";

export default function Profile() {
  const [data, setData] = useState(null);
  const [id, setId] = useState(null);
  const [task, setTask] = useState([]);
  const [isHidden, setIsHidden] = useState(false);
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);

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

  useEffect(() => {
    axios
      .get(`${BASE_URL}/read/${id}`)
      .then((response) => {
        let allTask = response.data.data;
        setTask(allTask);

        let n = allTask[0].length + allTask[1].length + allTask[2].length;

        if (allTask[0].length != 0) setA((allTask[0].length * 100) / n);
        if (allTask[1].length != 0) setB((allTask[1].length * 100) / n);
        if (allTask[2].length != 0) setC((allTask[2].length * 100) / n);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [task]);

  function edit() {}

  function logOut() {
    localStorage.removeItem("user-id");

    navigate("/");
  }

  function hide() {
    if (isHidden) setIsHidden(false);
    else setIsHidden(true);
  }

  const statStyle1 = {
    background: "#F1948A",
    width: `${a}%`,
  };
  const statStyle2 = {
    background: "#9286fd",
    width: `${b}%`,
  };
  const statStyle3 = {
    background: "#82E0AA",
    width: `${c}%`,
  };

  if (data)
    return (
      <div className="proComponent">
        <div className="componentHeader">
          <h2 className="proHeading">{isHidden ? "Task" : "Profile"}</h2>
          {/* <div className="empty"></div> */}
          {/* <div className="edit" onClick={edit}>
            <IonIcon icon={createOutline} />
          </div> */}
          <div className="logOut" onClick={logOut}>
            <IonIcon icon={logOutOutline} />
          </div>
        </div>
        {!isHidden && (
          <>
            <div className="profile">
              <div className="profileImage"></div>
              <div className="profileDetails">
                <p>{data.name}</p>
                <p>{data.email}</p>
              </div>
              <div className="profileDetails">
                <p>&nbsp;</p>
                <p>987654320</p>
              </div>
              <div className="profileDetails">
                <p>&nbsp;</p>
                <div className="taskStat">
                  <p>TaskStat</p>
                  <div style={statStyle1}>&nbsp;</div>
                  <div style={statStyle2}>&nbsp;</div>
                  <div style={statStyle3}>&nbsp;</div>
                </div>
              </div>
            </div>
          </>
        )}

        <div className="up_down" onClick={hide}>
          {isHidden ? (
            <IonIcon icon={chevronDownOutline} />
          ) : (
            <IonIcon icon={chevronUpOutline} />
          )}
        </div>
        <Todo />
      </div>
    );
}
