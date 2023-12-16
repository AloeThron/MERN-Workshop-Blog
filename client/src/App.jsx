import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import "./App.css";
import axios from "axios";

function App() {
  const apiUrl = "http://localhost:8000/api";
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const blogs = await axios.get(`${apiUrl}/blogs`);
        setBlogs(blogs.data);
      } catch (error) {
        (err) => alert(err);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="container p-5">
        <Nav />
        <h1 className="my-5">Article</h1>
        {blogs.map((blog, index) => (
          <div key={index} className="row">
            <div className="col pt-3 pb-2">
              <h2>{blog.title}</h2>
              <p>{blog.content.substring(0, 150)}</p>
              <p className="text-muted">Author: {blog.author}, Publish: {new Date(blog.createdAt).toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
