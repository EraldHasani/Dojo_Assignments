const Poll = require('../models/poll.model');

module.exports.findAll = (req, res) => {
    Poll.find().sort({createdAt: -1})
    .then((allpolls) => {
        res.json({polls: allpolls})
    })
    .catch((err) => {
        res.json({message: "Something went wrong", error: err})
    })
}

module.exports.top3 = (req, res) => {
    Poll.find().sort({totalvotes: -1}).limit(3)
    .then((allpolls) => {
        res.json({polls: allpolls})
    })
    .catch((err) => {
        res.json({message: "Something went wrong", error: err})
    })
}


module.exports.findOne = (req, res) => {
    Poll.findOne({_id: req.params.id})
    .then((onepoll) => {
        res.json({poll: onepoll})
    })
    .catch((err) => {
        res.json({message: "Something went wrong", error: err})
    })
}

module.exports.create = (req, res) => {
    Poll.create(req.body)
    .then((createpoll) => {
        res.json({poll: createpoll})
    })
    .catch((err) => {
        res.json({message: "Something went wrong", error: err})
    })

}

// module.exports.create = (req, res) => {
//     Poll.create(req.body)
//     Poll.findOne({poll: req.body.poll})
//     .then((onepoll) => {
//         console.log("one",onepoll)
//         if(onepoll == null){
//             Poll.create(req.body)
//             .then((createpoll) => {
//                 res.json({poll: createpoll})
//             })
//             .catch((err) => {
//                 res.json({message: "Something went wrong", error: err})
//             })
//         } else{
//             res.json({message: "Poll already exists", code:"AlreadyExists"})
//         }
//     })


module.exports.update = (req, res) => {
    Poll.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
    )
    .then((updatepoll) => {
        res.json({poll: updatepoll})
    })
    .catch((err) => {
        res.json({message: "Something went wrong", error: err})
    })

}


module.exports.delete = (req, res) => {
    Poll.deleteOne({_id: req.params.id})
    .then((result) => {
        res.json({result: result})
    })
    .catch((err) => {
        res.json({message: "Something went wrong", error: err})
    })
}
