import { useEffect,useState } from 'react'
import axios from 'axios'

import './App.css'

function App() {
  const [pokemons, setPokemons] = useState([])

  useEffect(()=> {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
    .then((response) => {
      setPokemons(response.data.results);
    })
.catch((err)=>console.log(err));

  },[])

  return (
    <>
    <div className="app">

      <ol>
        {pokemons.map((pokemon,index) =>(
          <li key={index}> {pokemon.name}</li>
        ))}
      </ol>
    </div>
      
    </>
  )
}

export default App
