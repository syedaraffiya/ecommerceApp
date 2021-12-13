import React from "react";
import { BrowserRouter as Router, Route,  Routes } from "react-router-dom";
import {  Login ,Home, Checkout } from ".";


export default function AppRouter() {
  return (
    <Router>
      <div>
        <Routes>
          <Route index path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Checkout" element={<Checkout/>} />
         
        </Routes>
      </div>
    </Router>
  );
}