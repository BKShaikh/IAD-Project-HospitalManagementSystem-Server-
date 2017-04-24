'use strict';
module.exports = function(sequelize, DataTypes) {
  var doctorandpatient = sequelize.define('doctorandpatient', {
    doctorId: DataTypes.INTEGER,
    patientId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return doctorandpatient;
};