'use strict';
module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('patientdata', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstname: {
        type: Sequelize.STRING
      },
      lastname: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      cnicno: {
        type: Sequelize.STRING
      },
      dob: {
        type: Sequelize.DATEONLY
      },
      age: {
        type: Sequelize.INTEGER
      },
      phoneno: {
        type: Sequelize.STRING
      },
      emergencyphno: {
        type: Sequelize.STRING
      },
      roomId: {
        type: Sequelize.INTEGER
      },
      opdId: {
        type: Sequelize.INTEGER
      },
      wardId: {
        type: Sequelize.INTEGER
      },
      emergencyId: {
        type: Sequelize.INTEGER
      },
      consultantdoc: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('patientdata');
  }
};