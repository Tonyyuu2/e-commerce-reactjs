import React from 'react'
import "./App.css";
import { Routes, Route, Link, Outlet } from "react-router-dom";

import Home from "../src/routes/home/Home.jsx";

const Shop = () => {
  return (
    <div>Shop</div>
  )
}


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} >
        <Route path='shop' element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
