const express = require("express");
const app = express();
const axios = require('axios'); 
const port = 8000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
 
app.listen(port, () => console.log(`Listening on port: ${port}`));



// we can hard code some users like this
// later on we will want to store users in a database
const users  = [
    { firstName: "Reimu",  lastName: "Hakurei"    },
    { firstName: "Marisa", lastName: "Kirisame"   },
    { firstName: "Sanae",  lastName: "Kochiya"    },
    { firstName: "Sakuya", lastName: "Izayoi"     },
    { firstName: "Momiji", lastName: "Inubashiri" }
];




app.get("/api", (req, res) => {
    res.json({ message: "Hello " });
});


app.get("/api/users", (req, res) => {
    res.json( {users:users} );
})

app.post("/api/users", (req, res) => {
    console.log(req.body);
    users.push(req.body);
    res.json({ status: "ok" });
});

app.get("/api/users/:id", (req,res) =>{
    console.log(req.params.id);
    
    // id=req.params.id
    // const person=users.find(person=>person.id=id)
    res.json(users[req.params.id]);
});


app.get("/api/users/:id", (rea,res) => {
    //we can get this "id" variable from req.params
    console.log(req.params.id);
    //id=req.params.id
    //const person=users.find(person=>person.id=id)
    //assuming this id is the index od the users array we could return one user this way
    res.json(users[req.params.id] );
});


