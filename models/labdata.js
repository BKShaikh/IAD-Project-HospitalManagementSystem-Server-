'use strict';
module.exports = function (sequelize, DataTypes) {
  var labdata = sequelize.define('labdata', {
    patientId: DataTypes.INTEGER,
    testResultDate: DataTypes.DATEONLY,
    receptionistName: DataTypes.STRING
  }, {
      classMethods: {
        associate: function (models) {
          // associations can be defined here
          labdata.belongsToMany(models.doctordata,{
          through:{
            model:models.doctorlan,
            foreignKey: "labId",
            as: 'doctordata'
          }
        }),
        labdata.belongsTo(models.patientdata, { foreignKey: 'patientId', as: "patientdata" })
        }
      }
    });
  return labdata;
};