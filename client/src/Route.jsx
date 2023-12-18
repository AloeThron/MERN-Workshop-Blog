import React, { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import App from "./App";
import Form from "./components/Form";
import SinglePost from "./components/SinglePost";
import Edit from "./components/Edit";
import Login from "./components/Login";
import AdminRoute from "./AdminRoute";

export default function PRoute() {

  const [slug, setSlug] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <AdminRoute path="/create" element={<Form />}/>
        <Route path="/blog/:slug" element={<SinglePost />} />
        <AdminRoute path="/blog/edit/:slug" element={<Edit />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
