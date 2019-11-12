const { Router } = require('express');

const routes = Router();

const SuperheroController = require('./controllers/SuperheroController');
const KingdomController = require('./controllers/KingdomController');

routes.get('/superheroes', SuperheroController.index);
routes.get('/superheroes/:id', SuperheroController.show);
routes.post('/superheroes', SuperheroController.store);
routes.put('/superheroes/:id', SuperheroController.update);
routes.delete('/superheroes/:id', SuperheroController.delete);

routes.get('/superheroes/:superheroId/kingdoms', KingdomController.index);
routes.post('/superheroes/:superheroId/kingdoms', KingdomController.store);

module.exports = routes;
