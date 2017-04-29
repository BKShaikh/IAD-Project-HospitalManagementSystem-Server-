'use strict';
module.exports = function(sequelize, DataTypes) {
  var accountdata = sequelize.define('accountdata', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    roleId:DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return accountdata;
};