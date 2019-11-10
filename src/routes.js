const { Router } = require('express');

const routes = Router();

const SuperheroController = require('./controllers/SuperheroController');

routes.get('/superheroes', SuperheroController.index);
routes.get('/superheroes/:id', SuperheroController.show);
routes.post('/superheroes', SuperheroController.store);
routes.put('/superheroes/:id', SuperheroController.update);


module.exports = routes;
