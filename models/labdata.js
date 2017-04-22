'use strict';
module.exports = function(sequelize, DataTypes) {
  var labdata = sequelize.define('labdata', {
    doctorId: DataTypes.INTEGER,
    patientId: DataTypes.INTEGER,
    testResultDate: DataTypes.DATEONLY,
    receptionistName: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return labdata;
};