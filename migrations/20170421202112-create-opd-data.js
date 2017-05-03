'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('opdData', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      timingofODs: {
        type: Sequelize.TIME
      },
      dayofOpds: {
        type: Sequelize.STRING
      },
      doctorId: {
        type: Sequelize.INTEGER
      },
      assignedToDr: {
        type: Sequelize.STRING
      },
      roomId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('opdData');
  }
};