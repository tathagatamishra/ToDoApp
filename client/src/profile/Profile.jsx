import React, { useEffect, useState } from "react";
import "./Profile.scss";
import axios from "axios";

export default function Profile() {
  const [data, setData] = useState(null);

  // const BASE_URL = "http://localhost:5000";
  const BASE_URL = "https://what-to-do-bro.vercel.app"

  useEffect(() => {
    axios
      .get(`${BASE_URL}/profile/64427a46a6576ffdd726b6c1`)
      .then((res) => {
        setData(res.data.data)
      })
      .catch((err) => {
        alert(err.message);
        console.log(err);
      });
      
    }, [data]);
    
    
    if (data) {
    console.log(data);
    return (
      <div className="components">
        <div className="card card__secondary">
          <h1>Profile</h1>
          <div className="item item__secondary">
            <h2>{data.name}</h2>
            <p>{data.email}</p>
          </div>
        </div>
      </div>
    );
  }
}
