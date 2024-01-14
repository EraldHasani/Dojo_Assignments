const PollController= require("../controllers/poll.controller")

module.exports=(app) =>{

    app.get('/api/polls',PollController.findAll)
    app.get('/api/poll/:id',PollController.findOne)
    app.post('/api/poll/',PollController.create)
    app.put('/api/poll/:id',PollController.update)
    app.delete('/api/poll/:id',PollController.delete)
    app.get('/api/polls/top3',PollController.top3)


}

