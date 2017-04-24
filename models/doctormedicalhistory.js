'use strict';
module.exports = function(sequelize, DataTypes) {
  var doctormedicalhistory = sequelize.define('doctormedicalhistory', {
    medicalhistoryId: DataTypes.INTEGER,
    doctorId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return doctormedicalhistory;
};