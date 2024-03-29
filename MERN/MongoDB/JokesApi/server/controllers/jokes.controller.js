const User = require('../models/jokes.model');
module.exports.findAllJokes = (req, res) => {
    User.find()
        .then((allDaJokes) => {
            
            res.json({ jokes: allDaJokes })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}



module.exports.findOneSingleJoke = (req, res) => {
    User.findOne({ _id: req.params.id })
        .then(oneSingleJoke => {
            res.json({ joke: oneSingleJoke })
        })
        .catch((err) => {
            
            res.json({ message: 'Something went wrong', error: err })
        });}
 

module.exports.createNewJoke = (req, res) => {
    User.create(req.body)
        .then(newlyCreatedJoke => {
            res.json({ joke : newlyCreatedJoke})
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
 

module.exports.updateExistingJoke = (req, res) => {
    User.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedJoke => {
            res.json({ joke: updatedJoke })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
 
        
module.exports.deleteAnExistingJoke = (req, res) => {
    User.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}