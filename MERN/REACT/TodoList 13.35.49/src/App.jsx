import  React, { useState } from 'react'
import Form from './components/Form'
import Display from './components/Display'
import './App.css'

function App() { 
  const [items, setItems ] = useState([])
  


  



  return (
    <>
      <Form items={items} setItems={setItems}/>
      <Display items={items} setItems={setItems}/>
    </>
  )
}

export default App
