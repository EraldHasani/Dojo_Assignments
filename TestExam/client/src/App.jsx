import React, { useState,useEffect } from "react";
import axios from "axios";
import {BrowserRouter,Routes,Route, Link} from "react-router-dom";
import FormAndDisplay from "./components/FormAndDisplay";
import DisplayOne from "./components/DisplayOne";
import Update from "./components/Update";
import "./App.css";

function App()  {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>

      <Routes>

      <Route  path="/" element={<FormAndDisplay/>}/>
      <Route path="/api/things" element={<FormAndDisplay/>}/>
      <Route path="/api/things/:id" element={<DisplayOne/>}/>
      <Route path="/api/things/edit/:id" element={<Update/>}/>


      </Routes>
    
    </BrowserRouter>


      
    </>
  )
}

export default App
