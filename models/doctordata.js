'use strict';
module.exports = function(sequelize, DataTypes) {
  var doctordata = sequelize.define('doctordata', {
    firstname: DataTypes.STRING,
    email: DataTypes.STRING,
    lastname: DataTypes.STRING,
    address: DataTypes.STRING,
    country: DataTypes.STRING,
    city: DataTypes.STRING,
    cnicno: DataTypes.STRING,
    department: DataTypes.STRING,
    specialization: DataTypes.STRING,
    opdtiming: DataTypes.DATE,
    emergencyschedule: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return doctordata;
};