const { Router } = require('express');

const routes = Router();

const SuperheroController = require('./controllers/SuperheroController');
const KingdomController = require('./controllers/KingdomController');

routes.get('/superheroes', SuperheroController.index);
routes.get('/superheroes/:id', SuperheroController.show);
routes.post('/superheroes', SuperheroController.store);
routes.put('/superheroes/:id', SuperheroController.update);
routes.delete('/superheroes/:id', SuperheroController.delete);

routes.get('/kingdoms', KingdomController.index);
routes.get('/kingdoms/:superheroId', KingdomController.show);
routes.post('/kingdoms/:superheroId', KingdomController.store);

module.exports = routes;
