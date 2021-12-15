
import React from "react";
import { BrowserRouter as Router, Route,  Routes } from "react-router-dom";
import {  Login ,Home, SignUp } from ".";
import Booking from "../screens/booking";
import  Details from "../container/hoteldetail";


export default function AppRouter() {
  return (
    <Router>
      <div>
        <Routes>
        
          <Route index path="/" element={<SignUp />} />
          <Route index path="/login" element={<Login />} />
          <Route path="/Home" element={<Home />} />
         
          <Route path="/hoteldetail" element={<Details />} />
       

          <Route path="/booking" element={<Booking/>} />
         
        </Routes>
      </div>
    </Router>
  );
}