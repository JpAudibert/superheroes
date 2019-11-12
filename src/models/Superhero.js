const { Model, DataTypes } = require('sequelize');

class Superhero extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      nickname: DataTypes.STRING,
      power: DataTypes.STRING,
      birthday: DataTypes.STRING,
      birthPlace: DataTypes.STRING,
    },
    {
      sequelize,
      tableName: 'superheroes',
    });
  }

  static associate(models) {
    // foreign key: how the PK is referenced in the desired table
    this.hasMany(models.Kingdom, { foreignKey: 'superheroId', as: 'kingdoms' });
  }
}

module.exports = Superhero;
