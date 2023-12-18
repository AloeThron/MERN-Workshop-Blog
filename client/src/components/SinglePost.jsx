import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import parse from "html-react-parser";


export default function SinglePost() {
  const apiUrl = "http://localhost:8000/api";
  const [blog, setBlog] = useState([]);
  const { slug } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const blog = await axios.get(`${apiUrl}/blog/${slug}`);
        setBlog(blog.data);
      } catch (error) {
        (err) => alert(err);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="container p-5">
      <Nav />
      {blog && (
        <div>
          <h1 className="my-5">{blog.title}</h1>
          <p className="my-5">{parse(`${blog.content}`)}</p>
          <p className="text-muted">Author: {blog.author}</p>
          <p className="text-muted">
            Publish: {new Date(blog.createdAt).toLocaleString()}
          </p>
          <Link
            to={`/blog/edit/${blog.slug}`}
            className="btn btn-outline-success"
          >
            Edit Article
          </Link>{" "}
          <button
            className="btn btn-outline-danger"
            onClick={() => confirmDelete(blog.slug)}
          >
            Delete Article
          </button>
        </div>
      )}
    </div>
  );
}
