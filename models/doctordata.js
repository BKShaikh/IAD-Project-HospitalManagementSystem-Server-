'use strict';
var models = require("../models");

module.exports = function (sequelize, DataTypes) {
  var doctordata = sequelize.define('doctordata', {
    firstname: DataTypes.STRING,
    email: DataTypes.STRING,
    lastname: DataTypes.STRING,
    address: DataTypes.STRING,
    country: DataTypes.STRING,
    city: DataTypes.STRING,
    cnicno: DataTypes.STRING,
    department: DataTypes.STRING,
    post: DataTypes.STRING,
    specialization: DataTypes.STRING,
    opdtiming: DataTypes.TIME,
    emergencyschedule: DataTypes.STRING,
    roomId: DataTypes.INTEGER,
    wardId: DataTypes.INTEGER,
    emergencyId: DataTypes.INTEGER
  }, {
      classMethods: {
        associate: function (models) {
          // associations can be defined here
          doctordata.belongsToMany(models.patientdata, {
            through: {
              model: models.doctorandpatient,
              foreignKey: "doctorId",
              as: 'patientdata'
            }
          }),
            doctordata.belongsToMany(models.labdata, {
              through: {
                model: models.doctorlan,
                foreignKey: "doctorId",
                as: 'labdata'
              }
            }),
            doctordata.belongsToMany(models.medicalhistorydata, {
              through: {
                model: models.doctormedicalhistory,
                foreignKey: "doctorId",
                as: 'medicalhistorydata'
              }
            })
          // doctordata.hasOne(models.staffdata, 
          // // { as: "staffdata", foreignKey: 'doctorID' }
          // ),
          doctordata.belongsTo(models.roomData,
            { foreignKey: 'roomId', as: 'roomData' }
          ),
            // doctordata.hasOne(models.opdData
            // // { as:'opdData' foreignKey: 'doctorId'}
            // ),
            doctordata.belongsTo(models.wardData,
              { foreignKey: 'wardId', as: 'warDdata' }
            ),
            doctordata.belongsTo(models.emergencyData,
              { foreignKey: 'emergencyId', as: 'emergencyData' }
            )
        }
      }
    });
  return doctordata;
};