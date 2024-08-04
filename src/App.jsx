import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import AddRecipe from "./components/AddRecipe";
import Saved from './components/Saved'
import Home from './components/Home'
import Profile from './components/Profile'
import FetchRecipeById from "./components/FetchRecipeById";
import Detail from "./components/Detail";
import Edit from "./components/edit";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/add" element={<AddRecipe />} />
          <Route path="/:id" element={<Detail />} />
          <Route path="/edit/:id" element={<Edit />} />
          
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
