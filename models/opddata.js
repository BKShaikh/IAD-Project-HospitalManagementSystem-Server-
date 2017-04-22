'use strict';
module.exports = function(sequelize, DataTypes) {
  var opdData = sequelize.define('opdData', {
    timingofODs: DataTypes.TIME,
    doctorId: DataTypes.INTEGER,
    assignedToDr: DataTypes.STRING,
    roomNoId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return opdData;
};