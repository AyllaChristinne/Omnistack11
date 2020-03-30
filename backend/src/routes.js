const express = require('express');
const routes = express.Router();
const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentsController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

//const params = request.query;  //QUERY 
//const params = request.params; //ROUTE
//const body = request.body;     //BODY

routes.post('/ongs', OngController.create);
routes.get('/ongs', OngController.index);

routes.get('/incidents', IncidentsController.index);
routes.post('/incidents', IncidentsController.create);
routes.delete('/incidents/:id', IncidentsController.delete);

routes.get('/profile', ProfileController.index);

routes.post('/sessions', SessionController.create);
module.exports = routes; //exportando as rotas