const express = require('express');
const app= express();
const cors= require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
require('./config/mongoose.config');
require('./routes/author.routes')(app);

app.listen(3000, () => {
    console.log("Listening at Port 3000")
})
