'use strict';
module.exports = function(sequelize, DataTypes) {
  var patientdata = sequelize.define('patientdata', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    address: DataTypes.STRING,
    email: DataTypes.STRING,
    city: DataTypes.STRING,
    cnicno: DataTypes.STRING,
    dob: DataTypes.DATEONLY,
    age: DataTypes.INTEGER,
    phoneno: DataTypes.STRING,
    emergencyphno: DataTypes.STRING,
    consultantdoc: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return patientdata;
};