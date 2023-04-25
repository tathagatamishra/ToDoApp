import { useState } from "react";
import "./Credential.scss";
import axios from "axios";
import { IonIcon } from "@ionic/react";
import { eyeOutline, eyeOffOutline } from "ionicons/icons";

export default function Credential() {
  const [showLog, setShowLog] = useState(true);
  const [showSign, setShowSign] = useState(false);
  const [type, setType] = useState("password");
  const [warning, setWarning] = useState({
    marginTop: "10px",
    display: "none",
    userSelect: "none",
  });
  const [style1, setStyle1] = useState({
    position: "absolute",
    marginRight: "10px",
    marginTop: "5px",
    display: "none",
    userSelect: "none",
  });
  const [style2, setStyle2] = useState({
    position: "absolute",
    marginRight: "10px",
    marginTop: "5px",
    userSelect: "none",
  });

  const BASE_URL = "http://localhost:5000";
  // const BASE_URL = "https://what-to-do-bro.vercel.app";

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

    // console.log(credential);

    axios
      .post(`${BASE_URL}/login`, credential)
      .then((res) => {
        console.log(res.data);
        if (res.data.status) {
          setWarning({
            marginTop: "10px",
            display: "none",
            userSelect: "none",
          });
        } else {
          setWarning({
            marginTop: "10px",
            userSelect: "none",
            color: "red",
          });
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  function signUp(event) {
    event.preventDefault();

    let credential = {
      name: event.target[0].value,
      email: event.target[1].value,
      password: event.target[2].value,
    };

    console.log(credential);

    axios
      .post(`${BASE_URL}/signup`, credential)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Show or hide password using inline css
  function showPassword() {
    if (type == "password") {
      setStyle1({
        position: "absolute",
        marginRight: "10px",
        marginTop: "5px",
        userSelect: "none",
      });
      setStyle2({
        position: "absolute",
        marginRight: "10px",
        marginTop: "5px",
        display: "none",
        userSelect: "none",
      });
      setType("text");
    } else {
      setStyle1({
        position: "absolute",
        marginRight: "10px",
        marginTop: "5px",
        display: "none",
        userSelect: "none",
      });
      setStyle2({
        position: "absolute",
        marginRight: "10px",
        marginTop: "5px",
        userSelect: "none",
      });
      setType("password");
    }
  }

  return (
    <div className="main">
      <div className="form">
        {showLog && (
          <form className="logIn" onSubmit={logIn}>
            <h1>Log In</h1>

            <label htmlFor="">Email</label>
            <input className="normalInput" type="email" required />
            <label htmlFor="">Password</label>
            <div className="password__eye">
              <input className="passInput" type={type} required />
              <IonIcon
                style={style1}
                icon={eyeOutline}
                onClick={showPassword}
              />
              <IonIcon
                style={style2}
                icon={eyeOffOutline}
                onClick={showPassword}
              />
            </div>
            <p style={warning}>⦿ Invalid email or password</p>

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
            <input className="normalInput" type="text" required />
            <label htmlFor="">Email</label>
            <input className="normalInput" type="email" required />
            <label htmlFor="">Password</label>

            <div className="password__eye">
              <input className="passInput" type={type} required />
              <IonIcon
                style={style1}
                icon={eyeOutline}
                onClick={showPassword}
              />
              <IonIcon
                style={style2}
                icon={eyeOffOutline}
                onClick={showPassword}
              />
            </div>

            <button className="submitBtn" type="submit">
              Sign up
            </button>

            <button className="chooseBtn" onClick={() => showOnClick(1)}>
              Have an account? Log in
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
