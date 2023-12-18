import React, { useState } from "react";
import Nav from "./Nav";

export default function Login() {
  const [state, setState] = useState({
    username: "",
    password: "",
  });
  const { username, password } = state;

  function inputValue(name) {
    return (e) => {
      setState({ ...state, [name]: e.target.value });
    };
  }

  function submitForm(e) {
    e.preventDefault();
    axios
      .post(`${apiUrl}/create`, { title, content, author })
      .then((res) => {
        Swal.fire({
          title: "Alert!",
          text: "Send data complete!",
          icon: "success",
        });
        setState({ ...state, title: "", author: "" });
        setContent("");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response.data.error,
        });
      });
  }

  return (
    <div className="container p-5">
      <Nav />
      <div className="fs-1 my-5">Write Article</div>
      <form onSubmit={submitForm}>
        <div className="form-group mb-3">
          <label>UserName</label>
          <input
            type="text"
            className="form-control"
            onChange={inputValue("username")}
            value={state.username}
          />
        </div>
        <div className="form-group mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            onChange={inputValue("password")}
            value={state.password}
          />
        </div>
        <input type="submit" value="Login" className="btn btn-primary mt-5" />
      </form>
    </div>
  );
}
