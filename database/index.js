const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Superhero = require('../src/models/Superhero');
const Kingdom = require('../src/models/Kingdom');

const connection = new Sequelize(dbConfig);

Superhero.init(connection);
Kingdom.init(connection);

Superhero.associate(connection.models);
Kingdom.associate(connection.models);

module.exports = connection;
