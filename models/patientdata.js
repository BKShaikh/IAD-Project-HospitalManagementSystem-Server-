'use strict';
module.exports = function (sequelize, DataTypes) {
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
    consultantdoc: DataTypes.STRING,
    roomId: DataTypes.INTEGER,
    opdId: DataTypes.INTEGER,
    wardId: DataTypes.INTEGER,
    emergerncyId: DataTypes.INTEGER
  }, {
      classMethods: {
        associate: function (models) {
          // associations can be defined here
          patientdata.belongsToMany(models.doctordata, {
            through: {
              model: models.doctorandpatient,
              foreignKey: "patientId",
              as: 'doctordata'
            }
          }),
            patientdata.belongsToMany(models.diseasedata, {
              through: {
                model: models.patientdisease,
                foreignKey: "patientId",
                as: 'diseasedata'
              }
            }),
            patientdata.hasOne(models.staffdata, { as: "staffdata", foreignKey: 'patientID' }),
            patientdata.belongsTo(models.roomData, { foreignKey: 'roomId', as: "roomData" }),
            patientdata.belongsTo(models.opdData, { foreignKey: 'opdId', as: "opdData" }),
            patientdata.hasMany(models.medicalhistorydata, { as: 'medicalhistorydata', foreignKey: 'patientId' }),
            patientdata.belongsTo(models.wardData, { foreignKey: 'wardId', as: "wardData" }),
            patientdata.belongsTo(models.emergencyData, { foreignKey: 'emergencyId', as: "emergencyData" }),
            patientdata.hasMany(models.labdata, { as: 'labdata', foreignKey: 'patientId' })
        }
      }
    });
  return patientdata;
};