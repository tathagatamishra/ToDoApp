import React, { useEffect, useState } from "react";
import "./Todo.scss";
import { IonIcon } from "@ionic/react";
import { close } from "ionicons/icons";
import axios from "axios";

export default function Todo() {
  const [data, setData] = useState(null);
  const [id, setId] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // const BASE_URL = "http://localhost:5000"
  const BASE_URL = "https://what-to-do-bro.vercel.app"

  // Fetching Data
  useEffect(() => {
    let id = localStorage.getItem("user-id");
    setId(id)

    axios
      .get(`${BASE_URL}/read/${id}`)
      .then((response) => {
        let allTask = response.data.data;
        setData(allTask);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [data]);

  // Creating Data
  function addPendingTask(event) {
    event.preventDefault();

    let newTask = {
      category: "pending",
      title: title,
      content: content,
      userid: id,
    };

    axios
      .post(`${BASE_URL}/create`, newTask)
      .then((res) => {
        console.log(res.data);
        event.target.reset();
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
      title: title,
      content: content,
      userid: id,
    };

    axios
      .post(`${BASE_URL}/create`, newTask)
      .then((res) => {
        console.log(res.data);
        event.target.reset();
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
      title: title,
      content: content,
      userid: id,
    };

    axios
      .post(`${BASE_URL}/create`, newTask)
      .then((res) => {
        console.log(res.data);
        event.target.reset();
      })
      .catch((err) => {
        alert(err.message);
        console.log(err);
      });
  }

  function deletePending(key) {
    let removeTask = {
      category: "pending",
      key: key,
      userid: id,
    };

    axios
      .delete(
        `${BASE_URL}/delete/${removeTask.category}/${removeTask.key}/${removeTask.userid}`
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function deleteProgress(key) {
    console.log(key);

    let removeTask = {
      category: "progress",
      key: key,
      userid: id,
    };

    axios
      .delete(
        `${BASE_URL}/delete/${removeTask.category}/${removeTask.key}/${removeTask.userid}`
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        alert(err.message);
        console.log(err);
      });
  }
  function deleteCompleted(key) {
    console.log(key);

    let removeTask = {
      category: "completed",
      key: key,
      userid: id,
    };

    axios
      .delete(
        `${BASE_URL}/delete/${removeTask.category}/${removeTask.key}/${removeTask.userid}`
      )
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
        <div className="taskCard taskCard__secondary">
          <h1>Pending</h1>

          {/* Add Task Button */}
          <div className="addTask addTask__secondary">
            <form method="post" onSubmit={addPendingTask}>
              <div id="pending">
                <textarea
                  rows="2"
                  type="textarea"
                  className="inputs1"
                  placeholder=" Title"
                  required
                  onChange={(event) => setTitle(event.target.value)}
                ></textarea>
                <textarea
                  rows="3"
                  type="textarea"
                  className="inputs2"
                  placeholder=" Description"
                  required
                  onChange={(event) => setContent(event.target.value)}
                ></textarea>
              </div>
              <button type="submit">+</button>
            </form>
          </div>

          {/* Tasks */}
          {data[0].map((element, i) => {
            return (
              <div key={i} className="taskItem taskItem__secondary">
                <div className="cross">
                  <div className="crossButton" onClick={() => deletePending(i)}>
                    <IonIcon icon={close} />
                  </div>
                </div>
                <div className="text">
                  <h2>{element.title}</h2>
                  <p>{element.content}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="taskCard taskCard__secondary">
          <h1>Progress</h1>

          {/* Tasks */}
          <div className="addTask addTask__secondary">
            <form method="post" onSubmit={addProgressTask}>
              <div id="progress">
                <textarea
                  rows="2"
                  type="submit"
                  className="inputs1"
                  placeholder=" Title"
                  required
                  onChange={(event) => setTitle(event.target.value)}
                ></textarea>
                <textarea
                  rows="3"
                  type="submit"
                  className="inputs2"
                  placeholder=" Description"
                  required
                  onChange={(event) => setContent(event.target.value)}
                ></textarea>
              </div>
              <button type="submit">+</button>
            </form>
          </div>

          {/* Tasks */}
          {data[1].map((element, i) => {
            return (
              <div key={i} className="taskItem taskItem__secondary">
                <div className="cross">
                  <div
                    className="crossButton"
                    onClick={() => deleteProgress(i)}
                  >
                    <IonIcon icon={close} />
                  </div>
                </div>
                <div className="text">
                  <h2>{element.title}</h2>
                  <p>{element.content}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="taskCard taskCard__secondary">
          <h1>Completed</h1>

          {/* Add Task */}
          <div className="addTask addTask__secondary">
            <form method="post" onSubmit={addCompletedTask}>
              <div id="completed">
                <textarea
                  rows="2"
                  type="submit"
                  className="inputs1"
                  placeholder=" Title"
                  required
                  onChange={(event) => setTitle(event.target.value)}
                ></textarea>
                <textarea
                  rows="3"
                  type="submit"
                  className="inputs2"
                  placeholder=" Description"
                  required
                  onChange={(event) => setContent(event.target.value)}
                ></textarea>
              </div>
              <button type="submit">+</button>
            </form>
          </div>

          {/* Tasks */}
          {data[2].map((element, i) => {
            return (
              <div key={i} className="taskItem taskItem__secondary">
                <div className="cross">
                  <div
                    className="crossButton"
                    onClick={() => deleteCompleted(i)}
                  >
                    <IonIcon icon={close} />
                  </div>
                </div>
                <div className="text">
                  <h2>{element.title}</h2>
                  <p>{element.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
