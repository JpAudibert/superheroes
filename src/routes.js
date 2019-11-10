const { Router } = require('express');

const routes = Router();

routes.get('/', (req, res) => res.json({ hello: 'Ma fren' }));

module.exports = routes;
