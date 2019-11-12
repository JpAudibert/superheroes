const { Model, DataTypes } = require('sequelize');

class Kingdom extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      location: DataTypes.STRING,
      habitants: DataTypes.STRING,
      qttHabitants: DataTypes.INTEGER,
    }, {
      sequelize,
      tableName: 'kingdoms',
    });
  }

  static associate(models) {
    this.belongsTo(models.Superhero, { foreignKey: 'superheroId', as: 'superhero' });
  }
}

module.exports = Kingdom;
