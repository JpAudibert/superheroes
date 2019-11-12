/* eslint-disable quotes */
const Superhero = require("../models/Superhero");

module.exports = {
  async index(req, res) {
    try {
      const superheroes = await Superhero.findAll();

      if (!superheroes || superheroes === []) {
        return res.status(400).json({ error: `Oops, superheroes not found` });
      }

      return res.json(superheroes);
    } catch (error) {
      return res.status(400).json({ error: `There's no heroes, my friend :(` });
    }
  },

  async show(req, res) {
    try {
      const { id } = req.params;

      const superhero = await Superhero.findByPk(id);

      if (!superhero) {
        return res.status(400).json({ error: `Oops, superhero not found :(` });
      }

      return res.json(superhero);
    } catch (error) {
      return res.status(400).json({ error });
    }
  },

  async store(req, res) {
    try {
      const {
        name, nickname, power, birthday, birthPlace,
      } = req.body;

      const superhero = await Superhero.create({
        name,
        nickname,
        power,
        birthday,
        birthPlace,
      });

      return res.json(superhero);
    } catch (error) {
      return res.status(400).json({ error: `Oops, something went wrong :(` });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const {
        name, nickname, power, birthday, birthPlace,
      } = req.body;
      const superhero = await Superhero.findByPk(id);

      if (!superhero) {
        return res.status(400).json({ error: `Oops, superhero not found :(` });
      }

      superhero.update({
        name,
        nickname,
        power,
        birthday,
        birthPlace,
      });

      return res.json(superhero);
    } catch (error) {
      return res.status(400).json({ error: `Oops, something went wrong :(` });
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;

      const superhero = await Superhero.findByPk(id);
      const { nickname } = superhero;
      superhero.destroy();

      return res.json({ success: `${nickname} does not exist anymore :)` });
    } catch (error) {
      return res.status(400).json({ error: `Oops, user not found, my friend :(` });
    }
  },
};
