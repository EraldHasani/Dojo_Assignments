const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"],
        minlength: [2, "First name must be at least 2 characters long"]
    },
    lastName: {
        type: String,
        required: [true, "First name is required"],
        minlength: [2, "First name must be at least 2 characters long"]
    },
    age: {
        type:Number,
        required: [true, "First name is required"]
    },
    email: {
        type: String,
        required: [true, "First name is required"]
    }
},{ timestamps: true })


const User = mongoose.model('User', UserSchema);
 
module.exports = User;