'use strict';
module.exports = function(sequelize, DataTypes) {
  var patientdisease = sequelize.define('patientdisease', {
    diseaseId: DataTypes.INTEGER,
    patientId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return patientdisease;
};