import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "./Nav";
import axios from "axios";
import Swal from "sweetalert2";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../services/authorize";

export default function Edit() {
  const apiUrl = "http://localhost:8000/api";
  const slugb = useParams().slug;
  const [state, setState] = useState({
    title: "",
    author: "",
    slug: "",
  });
  const { title, author, slug } = state;
  const [content, setContent] = useState("");

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const blog = await axios.get(`${apiUrl}/blog/${slugb}`);
        const { title, content, author, slug } = blog.data;
        setState({ ...state, title, author, slug });
        setContent(content)
      } catch (error) {
        (err) => alert(err);
      }
    }
    !getUser() && handleClick()
    fetchData();
  }, []);

  function inputValue(name) {
    return (e) => {
      setState({ ...state, [name]: e.target.value });
    };
  }

  function submitForm(e) {
    e.preventDefault();
    axios
      .put(`${apiUrl}/blog/${slug}`, { title, content, author })
      .then((res) => {
        Swal.fire({
          title: "Alert!",
          text: "Update data complete!",
          icon: "success",
        });
        const { title, content, author, slug } = res.data;
        setState({ ...state, title, author, slug });
        setContent(content);
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
      <div className="fs-1 my-5">Edit Article</div>
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
          <ReactQuill
            onChange={(e) => setContent(e)}
            value={content}
            theme="snow"
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
        <input type="submit" value="Update" className="btn btn-primary mt-5" />
      </form>
    </div>
  );
}
