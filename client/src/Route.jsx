import React, { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import App from "./App";
import Form from "./components/Form";
import SinglePost from "./components/SinglePost";

export default function PRoute() {

  const [slug, setSlug] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/create" element={<Form />}/>
        <Route path="/blog/:slug" element={<SinglePost />} />
      </Routes>
    </BrowserRouter>
  );
}
