const mongoose = require('mongoose');
 
const ThingSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Name must be at least 3 characters long"]
     },
     like: {
            type: Number,
            default: 0,
          
        },

    totalLikes: {
        type: Number,
        default: 0
    }
   
}, { timestamps: true });

module.exports= mongoose.model('Thing', ThingSchema);