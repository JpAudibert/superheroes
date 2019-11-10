module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.createTable('superheroes', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      power: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      birthday: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      birthPlace: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      ceratedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface) => queryInterface.dropTable('superheroes'),
};
