import { useState } from 'react'
import './App.css'
import Home from "./Components/FunctionalComponent/Home"
import Signup from './Components/FunctionalComponent/Signup'
import Login from './Components/FunctionalComponent/Login'
function App() {


  return (
    <>
      <div>
        <Home />
        <Signup />
        <Login />
       </div>
    </>
  )
}

export default App
