import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Age from './assets/components/Age'
function App() {

  return (
    <>
      
    <Age firstName={"Doe"}  lastName={"Jane"} hairColor={"Black"} initialAge={45}  />
    <Age firstName={"Smith"}  lastName={"John"} hairColor={"Brown"}  initialAge={88} />
 </>
  );
}

export default App
