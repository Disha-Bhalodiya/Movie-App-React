import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import SingleMovie from "./Components/Singlemovie";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="movie/:id" element={<SingleMovie />} />
    </Routes>
  );
};

export default App;