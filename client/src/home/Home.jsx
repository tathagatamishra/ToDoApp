import React, { useEffect, useState } from "react";
import "./Home.scss";

export default function Todo() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://blogity-blog.vercel.app/all");
      const jsonData = await response.json();
      setData(jsonData.data);
    };

    fetchData();
  }, []);

  if (data) {
    return (
      <div className="homeBody">
        <div className="start">
        <div className="start__add">
          <div className="a"></div>
          <div className="b"></div>
        </div>
      </div>
      </div>
    );
  }
}
