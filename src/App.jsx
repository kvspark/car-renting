import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./screen/pages/Home";
import AboutUs from "./screen/pages/AboutUs";
import OurService from "./screen/pages/OurService";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import AdminRegister from "./authentication/AdminRegister";
import AdminLogin from "./authentication/AdminLogin";
import Dashboard from "./Dashboard/Dashboard";
import AddBrand from "./Dashboard/AddBrand";
import NotFound from "./screen/pages/NotFound";
import AllCars from "./Dashboard/Component/AllCars";
import AddCar from "./Dashboard/AddCar";
import OurFleets from "./screen/pages/OurFleets";
import RentedCar from "./Dashboard/RentedCar";
import LogOut from "./Dashboard/LogOut";

export default function App()
{
  return (
    <Routes>
      <Route path="*" element={ <NotFound /> }></Route>
      <Route path="/" element={ <Home /> }></Route>
      <Route path="/about" element={ <AboutUs /> }></Route>
      <Route path="/service" element={ <OurService /> }></Route>
      <Route path="/admin-register" element={ <AdminRegister /> }></Route>
      <Route path="/admin-login" element={ <AdminLogin /> }></Route>
      <Route path="/dashboard" element={ <Dashboard /> }></Route>
      <Route path="/add-brand" element={ <AddBrand /> }></Route>
      <Route path="/cars" element={ <AllCars /> }></Route>
      <Route path="/our-fleets" element={ <OurFleets /> }></Route>
      <Route path="/rent" element={ <RentedCar /> }></Route>
      <Route path="/add-car" element={ <AddCar /> }></Route>
      <Route path="/logout" element={ <LogOut /> }></Route>
    </Routes>
  );
}