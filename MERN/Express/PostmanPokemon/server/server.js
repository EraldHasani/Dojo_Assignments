const express = require("express");
const app= express();
const port=8002;
const axios = require('axios');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.listen(port, () => console.log(`Listening on port : ${port}`));


app.get("/api", (req,res) =>{
    res.json({message: "Hello Pokemons"})
})

app.get("/api/pokemon/:id", (req,res) => {
    const {id}=req.params;
    axios.get (`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((response )=> {
        res.json(response.data);
    })
    .catch((error)=> {
        res.status(404).json({error: "Pokemon not found"});
    })
})




