import React from "react";
import Home from "./pages/Home/Home";
import { Details } from "./pages/Details/Details";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id?" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
