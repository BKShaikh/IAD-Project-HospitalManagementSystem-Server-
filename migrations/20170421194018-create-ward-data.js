'use strict';
module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('wardData', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      floorNo: {
        type: Sequelize.INTEGER
      },
      totalNoOfBeds: {
        type: Sequelize.INTEGER
      },
      noOfBedsEmpty: {
        type: Sequelize.INTEGER
      },
      wardcategory: {
        type: Sequelize.STRING
      },
      wardsgender: {
        type: Sequelize.STRING
      },
      assignedDutyDr: {
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
    return queryInterface.dropTable('wardData');
  }
};