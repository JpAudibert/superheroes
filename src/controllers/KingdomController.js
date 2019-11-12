const Kingdom = require('../models/Kingdom');
const Superhero = require('../models/Superhero');

module.exports = {
  async index(req, res) {
    try {
      const { superheroId } = req.params;

      const superhero = await Superhero.findByPk(superheroId, {
        include: { association: 'kingdoms' },
      });

      return res.json(superhero);
    } catch (error) {
      return res.status(400).json({ error: 'Oops, something went wrong :(' });
    }
  },

  async store(req, res) {
    try {
      const { superheroId } = req.params;
      const {
        name, location, habitants, qttHabitants,
      } = req.body;

      const superhero = await Superhero.findByPk(superheroId);

      if (!superhero) {
        return res.status(400).json({ error: 'Oops, something went wrong :(' });
      }

      const kingdom = await Kingdom.create({
        name, location, habitants, qttHabitants, superheroId,
      });

      return res.json(kingdom);
    } catch (error) {
      return res.status(400).json({ error: 'Oops, something went wrong :(' });
    }
  },
};
