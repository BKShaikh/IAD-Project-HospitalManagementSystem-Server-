'use strict';
module.exports = function (sequelize, DataTypes) {
  var wardData = sequelize.define('wardData', {
    floorNo: DataTypes.INTEGER,
    totalNoOfBeds: DataTypes.INTEGER,
    noOfBedsEmpty: DataTypes.INTEGER,
    wardcategory: DataTypes.STRING,
    wardsgender: DataTypes.STRING,
    assignedDutyDr: DataTypes.STRING
  }, {
      classMethods: {
        associate: function (models) {
          // associations can be defined here
          wardData.hasMany(models.patientdata,
           { as: 'patientdata', foreignKey: 'wardId' }
           ),
          wardData.hasMany(models.doctordata,
           { as: 'doctordata', foreignKey: 'wardId' }
           )
          
        }
      }
    });
  return wardData;
};