import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Hello from "./components/hello";
import Kater from "./components/kater";
import Welcome from "./components/Welcome";
    
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/home" element={<Welcome/>} />
        <Route  path="/:word/:color/:backgroundColor" element={<Kater />} />
        <Route  path="/:word" element={<Kater />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App

