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
    // foreign key: como a PK é na talbela a ser referenciada
    this.hasMany(models.Kingdom, { foreignKey: 'superheroId', as: 'kingdoms' });
  }
}

module.exports = Superhero;
