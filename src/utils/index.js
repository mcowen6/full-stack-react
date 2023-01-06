import { writeCookie } from "../common";

export const createUser = async (username, email, password) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_REST_API_URL}createUser`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        }),
      }
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

//*Read users
export const readUsers = async () => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_REST_API_URL}readUsers`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    // console.log(data);
    const usernames = data.users.map((users) => users.username);
    console.log(data.users);
    return usernames;
  } catch (error) {
    console.log(error);
  }
};

//* Login user:
export const loginUser = async (username, email, password, setter) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API_URL}login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    });
    const data = await response.json();
    console.log(data);
    setter(data.username);
    writeCookie("jwt_token", data.token, 7);
  } catch (error) {
    console.log(error);
  }
};

export const authCheck = async (jwtToken) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_REST_API_URL}authCheck`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwtToken}`,
        },
      }
    );
    const data = await response.json();
    console.log(data);
    return data.username;
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (username, key, value, jwtToken) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_REST_API_URL}updateUser`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${jwtToken}`,
        },
        body: JSON.stringify({
          username: username,
          key: key,
          value: value,
        }),
      }
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (username) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_REST_API_URL}deleteUser`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${jwtToken}`,
        },
        body: JSON.stringify({
          username: username,
        }),
      }
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
