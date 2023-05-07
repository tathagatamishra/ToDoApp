import React, { useEffect, useState } from "react";
import "./Home.scss";
import { IonIcon } from "@ionic/react";
import { close, logoGithub } from "ionicons/icons";
import { NavLink } from "react-router-dom";

export default function Todo() {
  const [id, setId] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [task, setTask] = useState([
    { title: "What u need to do", content: "Just keep calm & eat 🍕" },
    {
      title: "And then ?",
      content: "After that just create another new task 😘",
    },
  ]);

  function profileOnClick() {
    document.querySelector("title").innerHTML = "Profile";
  }

  setInterval(() => {
    setId(localStorage.getItem("user-id"));
  }, 1000);

  function addTask(event) {
    event.preventDefault();
    let newTask = task;
    newTask.push({ title: title, content: content });
    setTask(newTask);
  }

  function deleteTask(key) {
    setTask(task.splice(1, key));
  }

  return (
    <div className="homeBody">
      <div className="hero">
        <h1>
          WELCOME 2 TO DO{" "}
          <NavLink
            to="https://github.com/tathagatamishra/ToDoApp"
            className="git"
          >
            <IonIcon icon={logoGithub} />
          </NavLink>
        </h1>
        <p>
          With a stroke of your keyboard or a gentle tap of your finger,
          effortlessly manifest your dreams into tasks. Immerse yourself in the
          magical realm of organization, where tasks are gracefully arranged,
          waiting to be conquered. Whether you need to complete assignments,
          plan events, or simply remember the small joys of life, our intuitive
          interface ensures that every task finds its rightful place
        </p>
      </div>

      <div className="heroBody">
        <div className="start">
          <p>Click here to transform your dreams into accomplishments</p>
          {id == null ? (
            <div className="startBtn">
              <NavLink to="/account" onClick={profileOnClick} className="add">
                <div className="a"></div>
                <div className="b"></div>
              </NavLink>
            </div>
          ) : (
            <div className="startBtn">
              <NavLink to="/todo" onClick={profileOnClick} className="add">
                <div className="a"></div>
                <div className="b"></div>
              </NavLink>
            </div>
          )}
          <p>
            Take a deep breath and imagine the possibilities. With our
            extraordinary Todo application website by your side, you hold the
            key to unlocking your full potential. Embrace the power of
            organization, and watch as your dreams gracefully manifest into
            reality
          </p>
        </div>

        <div className="demo">
          <div className="demoTaskCard demoTaskCard__secondary">
            <h1>Demo Task</h1>

            {/* Add Task Button */}
            <div className="addDemoTask addDemoTask__secondary">
              <form>
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
                <button onClick={addTask}>+</button>
              </form>
            </div>

            {/* Tasks */}
            {task.map((element, i) => {
              return (
                <div key={i} className="taskItem taskItem__secondary">
                  <div className="cross">
                    <div className="crossButton" onClick={() => deleteTask(i)}>
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
      </div>
    </div>
  );
}
