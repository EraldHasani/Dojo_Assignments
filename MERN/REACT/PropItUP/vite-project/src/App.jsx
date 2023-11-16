import { useState } from 'react'
import './App.css'
import Person from './assets/components/person'
function App() {

  return (
    <>
     <Person firstName={'Doe,'} lastName={"Jane"}  age= {"45"} hairColor={"black"}/>
     <Person firstName={'Smith,'} lastName={"John"}  age= {"88"} hairColor={"brown"}/>
     <Person firstName={'Fillmore,'} lastName={"Millard"}  age= {"50"} hairColor={"brown"}/>
     <Person firstName={'Smith,'} lastName={"Maria"}  age= {"62"} hairColor={"brown"}/>
    </>
  )
}

export default App
