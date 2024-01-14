const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({

    name:{
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Name must be at least 3 characters long"],
        unique_case_insensitive: true
    },
    imageUrl:{
        type: String,
        
    },
    reviews: [{
        text: {
            type: String
        },
        rating: {
            type: Number
        }
        
    }]

}, {timestamps:true });

module.exports=mongoose.model("Author", AuthorSchema)