import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import MyPhone from "./components/Myphone";
import EditPhone from "./components/EditPhone";
import Add from "./components/Add";

import { BrowserRouter, Route,Routes } from "react-router-dom";
import './App.css'

export default function App() {
  return (
    <div className="app">
    <BrowserRouter>
      <Navbar />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/add" element={<Add/>}/>
      <Route path="/myphones" element={<MyPhone/>}/>
      <Route path="/:id" element={<EditPhone/>}/>
    </Routes>
    </BrowserRouter>

    </div>
  );
}
