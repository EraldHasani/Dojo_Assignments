const mongoose = require('mongoose');

const JokesSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, " setup is required"],
        minlength: [10, "First name must be at least 10 characters long"]
    },
    punchline: {
        type: String,
        required: [true, "punchline is required"],
        minlength: [3, "Last name must be at least 3 characters long"]
    },
   
},{ timestamps: true })


const Jokes = mongoose.model('Jokes', JokesSchema);
 
module.exports = Jokes;