import React, { useEffect, useState } from "react";
import "./Profile.scss";

export default function Profile() {
  const [data, setData] = useState(null);
  const [taskArr, setTaskArr] = useState([]);
  useEffect(() => {
    setTaskArr({
      name: "Tathagata",
      email: "tathagata@gmail.com",
      password: "String",
    });
    const fetchData = async () => {
      const response = await fetch("https://blogity-blog.vercel.app/all");
      const jsonData = await response.json();
      setData(jsonData.data);
    };

    fetchData();
  }, []);

  function addTask(event) {
    event.preventDefault();
  }

  if (taskArr) {
    return (
      <div className="components">
        <div className="card card__secondary">
          <h1>Profile</h1>
          <div className="item item__secondary">
            <h2>{taskArr.name}</h2>
            <p>{taskArr.email}</p>
          </div>
        </div>
      </div>
    );
  }
}
