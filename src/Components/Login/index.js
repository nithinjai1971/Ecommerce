import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../Redux/appSlice";
import "./Login.css";

function Login() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validatePassword = (e) => {
    e.preventDefault();
    if (email === "" && password === "") {
      dispatch(setUser({ email, password }));
      history.push("/");
    } else {
      alert("You have entered the Incorrect username or password");
    }
  };

  return (
    <div className="login">
      <form className="login_form" onSubmit={(e) => validatePassword(e)}>
        <input
          type="email"
          placeholder="Enter your email here"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Enter your password here"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <input type="submit" value="Login" className="login_button"></input>
      </form>
    </div>
  );
}
export default Login;
