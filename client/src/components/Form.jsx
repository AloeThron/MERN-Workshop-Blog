import React, { useState } from "react";
import Nav from "./Nav";
import axios from "axios"

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
    console.log("API URL", apiUrl);
    axios.post(`${apiUrl}/create`)
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
          />
        </div>
        <div className="form-group mb-3">
          <label>Content Detail</label>
          <textarea
            type="text"
            className="form-control"
            onChange={inputValue("content")}
          />
        </div>
        <div className="form-group mb-3">
          <label>Author</label>
          <input
            type="text"
            className="form-control"
            onChange={inputValue("author")}
          />
        </div>
        <input type="submit" value="Submit" className="btn btn-primary mt-5" />
      </form>
    </div>
  );
}
