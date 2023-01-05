import React from "react";
import { useState } from "react";
import { updateUser } from "../utils";

const UpdateUser = ({ user }) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const updateUsername = async (event) => {
    event.preventDefault();
    await updateUser(user, "username", username);
  };

  const updateEmail = async (event) => {
    event.preventDefault();
    await updateUser(user, "email", email);
  };

  const updatePassword = async (event) => {
    event.preventDefault();
    await updateUser(user, "password", password);
  };

  return (
    <>
      <div className="container">
        <form onSubmit={updateUsername}>
          <label>
            Update Your Username:
            <input onChange={(e) => setUsername(e.target.value)}></input>
          </label>
          <button type="submit">Update Username</button>
        </form>

        <form onSubmit={updateEmail}>
          <label>
            Update Your Email:
            <input onChange={(e) => setEmail(e.target.value)}></input>
          </label>
          <button type="submit">Update Email</button>
        </form>

        <form onSubmit={updatePassword}>
          <label>
            Update Your Password:
            <input onChange={(e) => setPassword(e.target.value)}></input>
          </label>
          <button type="submit">Update Password</button>
        </form>
      </div>
    </>
  );
};

export default UpdateUser;
