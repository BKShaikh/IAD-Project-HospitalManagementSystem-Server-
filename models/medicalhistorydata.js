'use strict';
module.exports = function(sequelize, DataTypes) {
  var medicalhistorydata = sequelize.define('medicalhistorydata', {
    patientId: DataTypes.INTEGER,
    doctorId: DataTypes.INTEGER,
    bloodGroup: DataTypes.STRING,
    lastDateOfCheckup: DataTypes.DATEONLY,
    lastDateOfDischarge: DataTypes.DATEONLY,
    familyDiseases: DataTypes.STRING,
    habbits: DataTypes.STRING,
    prescribedMedicines: DataTypes.STRING,
    mainDiseases: DataTypes.STRING,
    otherPotentialDiseases: DataTypes.STRING,
    lastDateofAdmit: DataTypes.DATEONLY
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return medicalhistorydata;
};