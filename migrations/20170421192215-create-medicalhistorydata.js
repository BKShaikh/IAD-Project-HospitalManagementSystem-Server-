'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('medicalhistorydata', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      patientId: {
        type: Sequelize.INTEGER
      },
      doctorId: {
        type: Sequelize.INTEGER
      },
      bloodGroup: {
        type: Sequelize.STRING
      },
      lastDateOfCheckup: {
        type: Sequelize.DATEONLY
      },
      lastDateOfDischarge: {
        type: Sequelize.DATEONLY
      },
      familyDiseases: {
        type: Sequelize.STRING
      },
      habbits: {
        type: Sequelize.STRING
      },
      prescribedMedicines: {
        type: Sequelize.STRING
      },
      mainDiseases: {
        type: Sequelize.STRING
      },
      otherPotentialDiseases: {
        type: Sequelize.STRING
      },
      lastDateofAdmit: {
        type: Sequelize.DATEONLY
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
    return queryInterface.dropTable('medicalhistorydata');
  }
};