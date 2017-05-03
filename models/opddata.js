'use strict';
module.exports = function (sequelize, DataTypes) {
  var opdData = sequelize.define('opdData', {
    timingofODs: DataTypes.TIME,
    dayofOpds: DataTypes.STRING,
    doctorId: DataTypes.INTEGER,
    assignedToDr: DataTypes.STRING,
    roomId: DataTypes.INTEGER,
  }, {
      classMethods: {
        associate: function (models) {
          // associations can be defined here
          opdData.belongsTo(models.roomData,
            { foreignKey: 'roomId', as: 'roomData' }
          ),
            opdData.belongsTo(models.doctordata,
              { foreignKey: 'doctorId', as: "doctordata" }
            ),
            opdData.hasMany(models.patientdata,
              { as: "patientdata", foreignKey: 'opdId' }
            )
          // console.log("uuuuu");
        }
      }
    });
  return opdData;
};