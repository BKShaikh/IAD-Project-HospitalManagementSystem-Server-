'use strict';
module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('doctordata', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstname: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      lastname: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      cnicno: {
        type: Sequelize.STRING
      },
      department: {
        type: Sequelize.STRING
      },
      post: {
        type: Sequelize.STRING
      },
      specialization: {
        type: Sequelize.STRING
      },
      opdtiming: {
        type: Sequelize.TIME
      },
      emergencyschedule: {
        type: Sequelize.STRING
      },
      roomId: {
        type: Sequelize.INTEGER
      },
      wardId: {
        type: Sequelize.INTEGER
      },
      emergencyId: {
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
  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('doctordata');
  }
};