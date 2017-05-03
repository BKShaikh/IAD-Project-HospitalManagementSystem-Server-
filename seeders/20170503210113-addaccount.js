'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('accountdata', [{
      username: 'Admin',
      passwrord: 'admin',
      roleId:1,
      email:'admin@xyz.com'
    }
    ], {});


  },

  down: function (queryInterface, Sequelize) {
     return queryInterface.bulkDelete('accountdata', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
