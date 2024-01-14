const mongoose = require('mongoose');

const PollsSchema = new mongoose.Schema({

    questions: {
        type: String,
        required: [true, "questions is required"],
        minlength: [10, "question must be at least 10 characters long"],
        unique: true
    },
    option1: {
        type: String,
        required: [true, "Option1 is required"],
    },
    option2: {
        type: String,
        required: [true, "Option2 is required"],
    },
    option3: {
        type: String,
    },
    option4: {
        type: String,
    },
    option1votes: {
        type: Number,
        default: 0
    },
    option2votes: {
        type: Number,
        default: 0
    },
    option3votes: {
        type: Number,
        default: 0
    },
    option4votes: {
        type: Number,
        default: 0
    },
    totalvotes: {
        type: Number,
        default: 0
    },


}, { timestamps: true });

module.exports = mongoose.model("Polls", PollsSchema)