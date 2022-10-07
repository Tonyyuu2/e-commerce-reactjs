import React from 'react'
import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from './routes/navbar/NavBar.jsx'
import Home from "../src/routes/home/Home.jsx";
import Auth from './routes/Auth/Auth.jsx';
import Shop from './routes/shop/Shop';
import Checkout from './routes/checkout/Checkout';

function App() {
  return (
    <Routes>
      <Route path='/' element={<NavBar />} >
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />}/>
        <Route path='auth' element={<Auth />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
