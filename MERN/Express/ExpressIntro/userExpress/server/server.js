const express = require("express");
const app = express();
const port = 8000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// we can hard code some users like this
// later on we will want to store users in a database
const users = [
    { firstName: "Reimu",  lastName: "Hakurei"    },
    { firstName: "Marisa", lastName: "Kirisame"   },
    { firstName: "Sanae",  lastName: "Kochiya"    },
    { firstName: "Sakuya", lastName: "Izayoi"     },
    { firstName: "Momiji", lastName: "Inubashiri" }
];
    
app.get("/api/users", (req, res) => {
    res.json( {users:users} );
});
app.get("/api", (req, res) => {
    res.json({ message: "Hello World" });
});


app.post("/api/users", (req, res) => {
    console.log(req.body);
    users.push(req.body);
    res.json({ status: "ok" });
});


app.listen(port, () => console.log(`Listening on port: ${port}`))