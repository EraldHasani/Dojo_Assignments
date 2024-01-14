import { useState } from 'react'
import { BrowserRouter ,Routes,  Route,  } from 'react-router-dom';
import axios from 'axios';
import Form from './components/form';
import Display from './components/Display';
import DisplayOne from './components/DisplayOne';
import Update from './components/Update';
import './App.css'

function App() {

  return (
    <>
       
    <BrowserRouter>
    <Routes>
    
    <Route path="/" element={<Display/>}/>

    <Route path="/api/authors/new" element={<Form/>}/>
    <Route path="/api/authors" element={<Display/>}/>
    <Route path="/api/author/:id" element={<DisplayOne/>}/>
    <Route path="/api/author/edit/:id" element={<Update/>}/>

    </Routes>
    
    
    </BrowserRouter>


    </>
  )
}

export default App
