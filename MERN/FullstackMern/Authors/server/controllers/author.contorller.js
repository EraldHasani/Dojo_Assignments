const Author = require('../models/author.model');

module.exports.findAll = (req, res) => {
    Author.find()
    .then((allAuthors) => {
        res.json({authors: allAuthors})
    })
    .catch((err) => {
        res.json({message: "Something went wrong", error: err})
    })
}

module.exports.findOne = (req, res) => {
    Author.findOne({_id: req.params.id})
    .then((oneAuthor) => {
        res.json({author: oneAuthor})
    })
    .catch((err) => {
        res.json({message: "Something went wrong", error: err})
    })
}

module.exports.create = (req, res) => {
    Author.create(req.body)
    .then((createAuthor) => {
        res.json({author: createAuthor})
    })
    .catch((err) => {
        res.json({message: "Something went wrong", error: err})
    })
}

module.exports.update = (req, res) => {
    Author.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
    )
    .then((updateAuthor) => {
        res.json({author: updateAuthor})
    })
    .catch((err) => {
        res.json({message: "Something went wrong", error: err})
    })
}

module.exports.delete = (req, res) => {
    Author.deleteOne({_id: req.params.id})
    .then((result) => {
        res.json({result: result})
    })
    .catch((err) => {
        res.json({message: "Something went wrong", error: err})
    })
}