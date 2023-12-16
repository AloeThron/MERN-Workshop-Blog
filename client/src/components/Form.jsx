import React, { useState } from "react";
import Nav from "./Nav";
import axios from "axios";
import Swal from "sweetalert2";

export default function Form() {
  const apiUrl = "http://localhost:8000/api";

  const [state, setState] = useState({
    title: "",
    content: "",
    author: "",
  });
  const { title, content, author } = state;

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
        setState({...state, title:"", content: "", author: ""})
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
          <label>Article Name</label>
          <input
            type="text"
            className="form-control"
            onChange={inputValue("title")}
            value={state.title}
          />
        </div>
        <div className="form-group mb-3">
          <label>Content Detail</label>
          <textarea
            type="text"
            className="form-control"
            onChange={inputValue("content")}
            value={state.content}
          />
        </div>
        <div className="form-group mb-3">
          <label>Author</label>
          <input
            type="text"
            className="form-control"
            onChange={inputValue("author")}
            value={state.author}
          />
        </div>
        <input type="submit" value="Submit" className="btn btn-primary mt-5" />
      </form>
    </div>
  );
}
