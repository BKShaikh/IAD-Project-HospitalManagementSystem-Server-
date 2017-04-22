'use strict';
module.exports = function(sequelize, DataTypes) {
  var diseasedata = sequelize.define('diseasedata', {
    diseasename: DataTypes.STRING,
    commoncause: DataTypes.STRING,
    potentialmedicine: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return diseasedata;
};