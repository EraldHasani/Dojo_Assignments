import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import HelloColor from "./components/HelloColor";
import Hello from "./components/hello";
import Home from "./components/home";
import Kater from "./components/kater";
import Welcome from "./components/Welcome";
    
function App() {


  return (
    <BrowserRouter>
      <Routes>
      <Route  path="/" element={<Home />} />
        <Route  path="/home" element={<Welcome/>} />
        <Route  path="/4" element={<Kater />} />
        <Route  path="/hello" element={<Hello />} />
        <Route  path="/hello/blue/red" element={<HelloColor />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App

