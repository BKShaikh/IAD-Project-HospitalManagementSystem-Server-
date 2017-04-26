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
          // wardData.hasMany(models.patientdata
          // //  { as: 'patientdata', foreignKey: 'patientId' }
          //  ),
          // wardData.hasMany(models.doctordata
          // //  { as: 'doctorata', foreignKey: 'doctorId' }
          //  )
          
        }
      }
    });
  return wardData;
};