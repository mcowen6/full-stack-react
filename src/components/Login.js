import React from "react";
import { useState } from "react";
import { loginUser } from "../utils";

const Login = ({ setter }) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log(username);
    console.log(email);
    console.log(password);
    await loginUser(username, email, password, setter);
  };

  return (
    <form onSubmit={submitHandler}>
      <label>
        Username:
        <input onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
