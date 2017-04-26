'use strict';
module.exports = function (sequelize, DataTypes) {
  var staffdata = sequelize.define('staffdata', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    address: DataTypes.STRING,
    email: DataTypes.STRING,
    cnicNo: DataTypes.STRING,
    city: DataTypes.STRING,
    country: DataTypes.STRING,
    post: DataTypes.STRING,
    phoneNo: DataTypes.STRING,
    doctorID: DataTypes.INTEGER,
    patientID: DataTypes.INTEGER
  }, {
      classMethods: {
        associate: function (models) {
          // associations can be defined here
          staffdata.belongsTo(models.doctordata, 
          {foreignKey:'doctorID',as:'doctordata'}
          ),
            staffdata.belongsTo(models.patientdata,
             {foreignKey:'patientID',as:'patientdata'}
             )
        }
      }
    });
  return staffdata;
};