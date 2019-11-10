/* eslint-disable quotes */
const Superhero = require("../models/Superhero");

module.exports = {
  async index(req, res) {
    try {
      const superheroes = await Superhero.findAll();

      return res.json(superheroes);
    } catch (error) {
      return res.status(400).send({ error: `There's no heroes, my friend` });
    }
  },

  async show(req, res) {
    try {
      const { id } = req.params;

      const superhero = await Superhero.findByPk(id);

      return res.json(superhero);
    } catch (error) {
      return res.status(400).json({ error });
    }
  },

  async store(req, res) {
    try {
      const {
        name, power, birthday, birthPlace,
      } = req.body;

      const superhero = await Superhero.create({
        name,
        power,
        birthday,
        birthPlace,
      });

      return res.json(superhero);
    } catch (error) {
      return res.status(400).send({ error: `Oops, something went wrong` });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const {
        name, power, birthday, birthPlace,
      } = req.body;
      const superhero = await Superhero.findByPk(id);

      superhero.update({
        name,
        power,
        birthday,
        birthPlace,
      });

      return res.json(superhero);
    } catch (error) {
      return res.status(400).send({ error: `Oops, something went wrong` });
    }
  },
};
