const ThingController = require('../controllers/thing.controller');

module.exports = (app) =>{

    app.get('/api/things', ThingController.findAll);
    app.get('/api/thing/:id', ThingController.findOneSingle);
    app.post('/api/thing/new', ThingController.createNew);
    app.put('/api/things/:id', ThingController.updateExisting);
    app.delete('/api/things/:id', ThingController.deleteAnExisting);
}