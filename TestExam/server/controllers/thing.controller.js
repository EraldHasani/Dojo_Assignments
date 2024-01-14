
const Thing=require('../models/thing.model');

module.exports.findAll = (req, res) => {
    Thing.find().sort({createdAt: -1})
        .then(allThings =>{
             res.json({ things: allThings })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}   

module.exports.findOneSingle= (req, res) => {
    Thing.findOne({ _id: req.params.id })
        .then(oneSingleThing => {
            res.json({ thing: oneSingleThing })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}




module.exports.createNew = (req, res) => {
    Thing.create(req.body)
    .then(createThing => {  
        res.json({thing: createThing})
    })
    .catch((err) => {
        res.json({message: "Something went wrong", error: err})
    });
}





module.exports.updateExisting = (req, res) => {
    Thing.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then((updatedThing) => {
            res.json({ thing: updatedThing })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.deleteAnExisting= (req, res) => {
    Thing.deleteOne({ _id: req.params.id })
        .then((result) => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

