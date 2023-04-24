import { useState } from "react";
import "./Credential.scss";
import axios from "axios";

export default function Credential(props) {
  console.log(props.value);

  const [showLog, setShowLog] = useState(true);
  const [showSign, setShowSign] = useState(false);

  const [isLogIn, setIsLogIn] = useState(props.value);

  const BASE_URL = "http://localhost:5000";
  // const BASE_URL = "https://what-to-do-bro.vercel.app"

  function showOnClick(show) {
    if (show == 1) {
      document.querySelector("title").innerHTML = "Log in";
      setShowSign(false);
      setShowLog(true);
    } else {
      document.querySelector("title").innerHTML = "Sign up";
      setShowLog(false);
      setShowSign(true);
    }
  }

  function logIn(event) {
    event.preventDefault();

    let credential = {
      email: event.target[0].value,
      password: event.target[1].value,
    };

    console.log(credential);

    axios
      .post(`${BASE_URL}/login`, credential)
      .then((res) => {
        console.log(res.data);
        setIsLogIn(false)
      })
      .catch((err) => {
        alert(err.message);
        console.log(err);
      });
  }
  function signUp(event) {
    event.preventDefault();

    axios
      .post(`${BASE_URL}/signup`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        alert(err.message);
        console.log(err);
      });
  }

  return (
        <div className="main">
          <div className="form">
            {showLog && (
              <form className="logIn" onSubmit={logIn}>
                <h1>Log In</h1>

                <label htmlFor="">Email</label>
                <input type="mail" required />
                <label htmlFor="">Password</label>
                <input type="password" />

                <button className="submitBtn" type="submit">
                  Log in
                </button>

                <button className="chooseBtn" onClick={() => showOnClick(0)}>
                  Don't have an account? Sign up
                </button>
              </form>
            )}

            {showSign && (
              <form className="signUp" onSubmit={signUp}>
                <h1>Sign Up</h1>
                <label htmlFor="">Name</label>
                <input type="text" />
                <label htmlFor="">Email</label>
                <input type="text" />
                <label htmlFor="">Password</label>
                <input type="text" />
                <button className="submitBtn">Sign up</button>
                <button className="chooseBtn" onClick={() => showOnClick(1)}>
                  Have an account? Log in
                </button>
              </form>
            )}
          </div>
        </div>
  );
}
