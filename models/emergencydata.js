'use strict';
module.exports = function (sequelize, DataTypes) {
  var emergencyData = sequelize.define('emergencyData', {
    wardNoId: DataTypes.INTEGER,
    totalNoOfBeds: DataTypes.INTEGER,
    noOfBedsAvailable: DataTypes.INTEGER,
    dutyDrs: DataTypes.STRING
  }, {
      classMethods: {
        associate: function (models) {
          // associations can be defined here
          emergencyData.hasMany(models.patientdata,
           { as: 'patientdata', foreignKey: 'emergencyId' }
           ),
          emergencyData.hasMany(models.doctordata ,
          { as: 'doctordata', foreignKey: 'emergencyId' }
          ),
          
          emergencyData.belongsTo(models.wardData, { foreignKey: 'wardNoId', as: 'wardData' })


        }
      }
    });
  return emergencyData;
};