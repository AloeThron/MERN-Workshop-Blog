import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import App from "./App";
import Form from "./components/Form";

export default function PRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/create" element={<Form />}/>
      </Routes>
    </BrowserRouter>
  );
}
