import React, { useEffect, useState } from "react";
import "./Todo.scss";
import axios from 'axios'

export default function Todo() {
  const [data, setData] = useState(null);

  useEffect(() => {

    // axios
    //   .post()
    //   .then((res) => {
    //     alert("Your Text is ready to Share");
    //     console.log(res.data.TextContent);
    //   })

    //   .catch((err) => {
    //     alert(err.message);
    //     console.log(err);
    //   });
    axios
      .get('http://localhost:5000/read/64426dd2ec247b64ed058aaa')
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
    }, []);
    
    function addTask(event) {
      event.preventDefault();
    }
    
    // console.log(data.data);
    if (data) {
      if(data[0].category == 'completed') {

        console.log(data[0]);
      }
    return (
      <div className="components">
        <div className="card card__secondary">
          <h1>Pending</h1>

          {/* Add Task */}
          <div className="addTask addTask__secondary">
            <form onSubmit={addTask}>
              <textarea
                type="textarea"
                className="inputs"
                placeholder=" Add a task"
                required
              ></textarea>
              <button>+</button>
            </form>
          </div>

          {/* Tasks */}
          {data.map((element, i) => {
            return (
              <div key={i} className="item item__secondary">
                <h2>{element.title}</h2>
                <p>{element.content}</p>
              </div>
            );
          })}
        </div>

        <div className="card card__secondary">
          <h1>Progress</h1>
          {/* Add button */}
          <div className="addTask addTask__secondary">
            <form onSubmit={addTask}>
              <textarea
                type="textarea"
                className="inputs"
                placeholder=" Add a task"
                required
              ></textarea>
              <button>+</button>
            </form>
          </div>

          {/* Tasks */}
          {data.map((element, i) => {
            return (
              <div key={i} className="item item__secondary">
                <h2>{element.title}</h2>
                <p>{element.content}</p>
              </div>
            );
          })}
        </div>

        <div className="card card__secondary">
          <h1>Completed</h1>
          {/* Add button */}
          <div className="addTask addTask__secondary">
            <form onSubmit={addTask}>
              <textarea
                type="textarea"
                className="inputs"
                placeholder=" Add a task"
                required
              ></textarea>
              <button>+</button>
            </form>
          </div>

          {/* Tasks */}
          {data.map((element, i) => {
            return (
              <div key={i} className="item item__secondary">
                <h2>{element.title}</h2>
                <p>{element.content}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
