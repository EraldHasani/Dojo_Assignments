import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import axios from 'axios'
import Form from './components/Form'
import Display from './components/Display'
import DisplayOne from './components/DisplayOne'
import Update from './components/Update'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      

      <BrowserRouter>
    <Routes>

    <Route path="/api/polls/new" element={<Form/>}/>
    <Route path="/" element={<Display/>}/>
    <Route path="/api/polls/:id" element={<DisplayOne/>}/>
    <Route path="/api/polls/edit/:id" element={<Update/>}/>

    </Routes>
    
    
    </BrowserRouter>

    </>
  )
}

export default App
