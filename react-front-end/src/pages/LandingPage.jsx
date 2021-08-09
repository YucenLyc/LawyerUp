import React, { useState, useContext } from "react";
// import { authContext } from '../providers/AuthProvider';
import Header from "./Header";
import "./LandingPage.scss";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function LandingPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const { login } = useContext(authContext);
  const [user, setUser] = useState("");
  const [selected, setSelected] = useState("");
  const history = useHistory();

  // const onPasswordChange = function (event) {
  //   setPassword(event.target.value);
  // };

  const onSubmit = function (event) {
    event.preventDefault();
    if (email === "Egg Eggerson") {
      history.push("/clientHomePage");
    }
  };

  const login = (email, password) => {
    const url = "http://localhost:8001/api/users";
    axios.get(url).then((res) => {
      console.log(res.data);
      res.data.forEach((user) => {
        if (user.email === email && user.password === password) {
          console.log("name", user.name);
          sessionStorage.setItem("token", user.id);
          sessionStorage.setItem("name", user.name);
          sessionStorage.setItem("email", user.email);
          if (selected === "Lawyer") {
            history.push("/lawyerhomepage");
          } else {
            history.push("/clienthomepage");
          }
        }
      });
    });
  };

  return (
    <>
      <Header value={user} />
      <div className="landing-body">
        <div className="user-options">
          <div className="user-type">
            <button
              type="lawyer-button"
              onClick={() => setSelected("Lawyer")}
              className={selected === "Lawyer" ? "selected" : ""}
            >
              Lawyer
            </button>
            <button
              type="client-button"
              onClick={() => setSelected("Client")}
              className={selected === "Client" ? "selected" : ""}
            >
              Client
            </button>
          </div>
        </div>
        <div className="form-body">
          <form className="login-form" onSubmit={onSubmit}>
            <div className="user-input">
              <div className="userpass">
                <div>Username:</div>
                <input
                  type="text"
                  name="login"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                />
              </div>
              <div className="userpass">
                <div>Password:</div>
                <input
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
            </div>
            <div className="buttons">
              <div className="submit">
                <input
                  onClick={() => login(email, password)}
                  type="submit"
                  name="commit"
                  value="Login"
                />
              </div>
              <div className="sign-up">
                <input
                  onClick={() => setUser(email)}
                  type="submit"
                  name="commit"
                  value="Sign Up"
                />
              </div>
            </div>
          </form>
          {/* {user === false? <section verifyClient={verifyClient} /> : <div> </div>} */}
        </div>
      </div>
    </>
  );
}
