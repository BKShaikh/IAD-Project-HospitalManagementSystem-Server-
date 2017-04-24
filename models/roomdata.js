'use strict';
module.exports = function (sequelize, DataTypes) {
  var roomData = sequelize.define('roomData', {
    roomAssignedFor: DataTypes.STRING,
    floorNo: DataTypes.INTEGER,
    assignedTo: DataTypes.STRING
  }, {
      classMethods: {
        associate: function (models) {
          // associations can be defined here
          roomData.hasOne(models.patientdata, { as: "patientdata", foreignKey: 'roomId' }),
          roomData.hasMany(models.doctordata, { as: "doctordata", foreignKey: "roomId" }),
           roomData.hasOne(models.opdData, { as: "opdData", foreignKey: 'roomId' })

        }
      }
    });
  return roomData;
};