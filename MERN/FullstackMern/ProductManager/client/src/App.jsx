import { useState ,useEffect} from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Product from './components/Product';
import DisplayProduct from './components/DisplayProduct';
import DisplayOneProduct from './components/DisplayOneProduct';
import  Update from './components/Update';
import Navbar from './components/Navbar';
import Home from './views/Home';

import './App.css'
import Details from './views/Details';


function App() {
const [count,setCount]=useState("")
  return (
    <>

      <BrowserRouter>
       <Routes>

        <Route path="/create/product" element={<Product />} />
        <Route path="/products" element={<Home />} />
        <Route path="/product/:id" element={<Details />} />
        <Route path="/product/edit/:id" element={<Update />}/>
      
      
       </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
