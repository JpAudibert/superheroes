const { Model, DataTypes } = require('sequelize');

class Superhero extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      power: DataTypes.STRING,
      birthday: DataTypes.STRING,
      birthPlace: DataTypes.STRING,
    },
    { sequelize });
  }
}

module.exports = Superhero;
