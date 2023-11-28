import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/Form'
import Display from './components/Display'


function App() {
  const [box, setBox] = useState([ ])

  return (
    <>
      <Form box={box} setBox={setBox} />
      <Display box={box} />
    </>
  )
}

export default App
