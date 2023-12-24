const JokesController = require('../controllers/jokes.controller');
module.exports = (app) => {
    app.get('/api/jokes', JokesController.findAllJokes);
    app.post('/api/jokes', JokesController.createNewJoke);
    app.get('/api/joke/:id', JokesController.findOneSingleJoke);     /* This is new */
    app.put('/api/joke/:id', JokesController.updateExistingJoke);     /* This is new */
    app.delete('/api/joke/:id', JokesController.deleteAnExistingJoke);     /* This is new */

}
