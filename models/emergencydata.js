'use strict';
module.exports = function(sequelize, DataTypes) {
  var emergencyData = sequelize.define('emergencyData', {
    wardNoId: DataTypes.INTEGER,
    doctorId: DataTypes.INTEGER,
    patientId: DataTypes.INTEGER,
    totalNoOfBeds: DataTypes.INTEGER,
    noOfBedsAvailable: DataTypes.INTEGER,
    dutyDrs: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return emergencyData;
};