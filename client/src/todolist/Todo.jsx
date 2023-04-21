import React, { useEffect, useState } from "react";
import "./Todo.scss";
import axios from "axios";

export default function Todo() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/read/64426dd2ec247b64ed058aaa")
      .then((response) => {
        let allTask = response.data.data;

        setData(allTask);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [data]);

  function addPendingTask(event) {
    event.preventDefault();

    let newTask = {
      category: "pending",
      title: "Todo project",
      content: "Trying to create",
      userid: "64426dd2ec247b64ed058aaa",
    };

    axios
      .post("http://localhost:5000/create", newTask)
      .then((res) => {
        console.log(res.data);
      })

      .catch((err) => {
        alert(err.message);
        console.log(err);
      });
  }
  function addProgressTask(event) {
    event.preventDefault();

    let newTask = {
      category: "progress",
      title: "Todo project",
      content: "Trying to create",
      userid: "64426dd2ec247b64ed058aaa",
    };

    axios
      .post("http://localhost:5000/create", newTask)
      .then((res) => {
        console.log(res.data);
      })

      .catch((err) => {
        alert(err.message);
        console.log(err);
      });
  }
  function addCompletedTask(event) {
    event.preventDefault();

    let newTask = {
      category: "completed",
      title: "Todo project",
      content: "Trying to create",
      userid: "64426dd2ec247b64ed058aaa",
    };

    axios
      .post("http://localhost:5000/create", newTask)
      .then((res) => {
        console.log(res.data);
      })

      .catch((err) => {
        alert(err.message);
        console.log(err);
      });
  }

  if (data) {
    return (
      <div className="task_components">
        <div className="taskCard taskCard__secondary" id="pending">
          <h1>Pending</h1>

          {/* Add Task */}
          <div className="addTask addTask__secondary">
            <form onSubmit={addPendingTask}>
              <div>
              <textarea
                  rows="2"
                  type="textarea"
                  className="inputs1"
                  placeholder=" Title"
                  required
                ></textarea>
                <textarea
                  rows="3"
                  type="textarea"
                  className="inputs2"
                  placeholder=" Description"
                  required
                ></textarea>
              </div>
              <button>+</button>
            </form>
          </div>

          {/* Tasks */}
          {data[0].map((element, i) => {
            return (
              <div key={i} className="taskItem taskItem__secondary">
                <h2>{element.title}</h2>
                <p>{element.content}</p>
              </div>
            );
          })}
        </div>

        <div className="taskCard taskCard__secondary" id="progress">
          <h1>Progress</h1>

          {/* Add Task */}
          <div className="addTask addTask__secondary">
            <form onSubmit={addProgressTask}>
              <div>
                <textarea
                  rows="2"
                  type="textarea"
                  className="inputs1"
                  placeholder=" Title"
                  required
                ></textarea>
                <textarea
                  rows="3"
                  type="textarea"
                  className="inputs2"
                  placeholder=" Description"
                  required
                ></textarea>
              </div>
              <button>+</button>
            </form>
          </div>

          {/* Tasks */}
          {data[1].map((element, i) => {
            return (
              <div key={i} className="taskItem taskItem__secondary">
                <h2>{element.title}</h2>
                <p>{element.content}</p>
              </div>
            );
          })}
        </div>

        <div className="taskCard taskCard__secondary" id="completed">
          <h1>Completed</h1>

          {/* Add Task */}
          <div className="addTask addTask__secondary">
            <form onSubmit={addCompletedTask}>
              <div>
              <textarea
                  rows="2"
                  type="textarea"
                  className="inputs1"
                  placeholder=" Title"
                  required
                ></textarea>
                <textarea
                  rows="3"
                  type="textarea"
                  className="inputs2"
                  placeholder=" Description"
                  required
                ></textarea>
              </div>
              <button>+</button>
            </form>
          </div>

          {/* Tasks */}
          {data[2].map((element, i) => {
            return (
              <div key={i} className="taskItem taskItem__secondary">
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
