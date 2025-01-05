import { useState } from 'react'
import './App.css'
import Home from "./Components/FunctionalComponent/Home"
import Signup from './Components/FunctionalComponent/Signup'
import Login from './Components/FunctionalComponent/Login'
import Navbar from './Components/FunctionalComponent/Navbar'
import "./assets/css/navbar.css";
import './assets/css/home.css';
import './assets/css/login.css';
import './assets/css/signup.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
function App() {


  return (
    <>
      <div>
        <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        </Routes>
        </BrowserRouter>
       </div>
    </>
  );
}

export default App
