'use strict';
module.exports = function (sequelize, DataTypes) {
  var opdData = sequelize.define('opdData', {
    timingofODs: DataTypes.TIME,
    doctorId: DataTypes.INTEGER,
    assignedToDr: DataTypes.STRING,
    roomId: DataTypes.INTEGER
  }, {
      classMethods: {
        associate: function (models) {
          // associations can be defined here
          opdData.belongsTo(models.roomData, { foreignKey: 'roomId', as: 'roomData' }),
            opdData.belongsTo(models.doctordata, { foreignKey: 'doctorId', as: "doctordata" }),
            opdData.hasOne(models.patientdata, { as: "patientdata", foreignKey: 'patientId' })
        }
      }
    });
  return opdData;
};