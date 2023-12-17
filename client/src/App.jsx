import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import "./App.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function App() {
  const apiUrl = "http://localhost:8000/api";
  const [blogs, setBlogs] = useState([]);

  async function fetchData() {
    try {
      const blogs = await axios.get(`${apiUrl}/blogs`);
      setBlogs(blogs.data);
    } catch (error) {
      (err) => alert(err);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  function confirmDelete(slug) {
    Swal.fire({
      title: "Confirm Delete",
      icon: "warning",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        deleteBlog(slug);
      }
    });
  }

  function deleteBlog(slug) {
    axios
      .delete(`${apiUrl}/blog/${slug}`)
      .then((res) => {
        Swal.fire("Deleted!", res.data.message, "Success");
        fetchData();
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <div className="container p-5">
        <Nav />
        <h1 className="my-5">Article</h1>
        {blogs.map((blog, index) => (
          <div key={index} className="row">
            <div className="col pt-3 pb-2">
              <Link to={`/blog/${blog.slug}`}>
                <h2>{blog.title}</h2>
              </Link>
              <p>{blog.content.substring(0, 150)}</p>
              <p className="text-muted">
                Author: {blog.author}, Publish:{" "}
                {new Date(blog.createdAt).toLocaleString()}
              </p>
              <Link to={`/blog/edit/${blog.slug}`} className="btn btn-outline-success">
                Edit Article
              </Link>{" "}
              <button
                className="btn btn-outline-danger"
                onClick={() => confirmDelete(blog.slug)}
              >
                Delete Article
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
