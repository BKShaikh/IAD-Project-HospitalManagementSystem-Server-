'use strict';
module.exports = function (sequelize, DataTypes) {
  var wardData = sequelize.define('wardData', {
    floorNo: DataTypes.INTEGER,
    noOfBeds: DataTypes.INTEGER,
    doctorID: DataTypes.INTEGER,
    patientId: DataTypes.INTEGER,
    wardcategory: DataTypes.STRING,
    wardsgender: DataTypes.STRING,
    assignedDutyDr: DataTypes.STRING
  }, {
      classMethods: {
        associate: function (models) {
          // associations can be defined here
        }
      }
    });
  return wardData;
};