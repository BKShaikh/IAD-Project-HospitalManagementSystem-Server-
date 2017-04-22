'use strict';
module.exports = function(sequelize, DataTypes) {
  var roomData = sequelize.define('roomData', {
    doctorId: DataTypes.INTEGER,
    roomAssignedFor: DataTypes.STRING,
    floorNo: DataTypes.INTEGER,
    assignedTo: DataTypes.STRING,
    patientId: DataTypes.INTEGER,
    opdId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return roomData;
};