import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from "./pages/Dashboard";
import Menu from "./pages/Menu";
import Reminders from "./pages/Reminders";
import Customer from "./pages/Customer";
import OrderInfo from "./pages/OrderInfo";
import OrderHistory from "./pages/OrderHistory";
import Product from "./pages/Product";
import Settings from "./pages/Settings";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Dashboard/>} />
          <Route path='/menu' element={<Menu/>} />
          <Route path='/reminders'  element={<Reminders/>} />
          <Route path='/customer'  element={<Customer/>} />
          <Route path='/orderinfomation'  element={<OrderInfo/>} />
          <Route path="/orderhistory"  element={<OrderHistory/>} />
          <Route path="/product"  element={<Product/>} />
          <Route path="/settings"  element={<Settings/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
