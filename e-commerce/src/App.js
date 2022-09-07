import React from 'react'
import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from './routes/navbar/NavBar.jsx'
import Home from "../src/routes/home/Home.jsx";
import Login from './routes/Login/Login.jsx';

const Shop = () => {
  return (
    <div>Shop</div>
  )
}


function App() {
  return (
    <Routes>
      <Route path='/' element={<NavBar />} >
        <Route index element={<Home />} />
        <Route path='login' element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
