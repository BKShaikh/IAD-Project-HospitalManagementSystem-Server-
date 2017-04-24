'use strict';
module.exports = function(sequelize, DataTypes) {
  var doctorlan = sequelize.define('doctorlan', {
    labId: DataTypes.INTEGER,
    doctorId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return doctorlan;
};