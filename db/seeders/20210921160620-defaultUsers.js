'use strict';
const bcrypt = require("bcryptjs")

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Users', [
     {
      first_name: 'Demo',
      last_name: 'User',
      email: 'demo@demo.com',
      hashed_password: bcrypt.hashSync('password', 10)
    },
    {
      first_name: 'Robert',
      last_name: 'Kauth',
      email: 'robert@robert.com',
      hashed_password: bcrypt.hashSync('password', 10)
    },
    {
      first_name: 'Max',
      last_name: 'Koerner',
      email: 'max@max.com',
      hashed_password: bcrypt.hashSync('password', 10)
    },
    {
      first_name: 'Dan',
      last_name: 'Purcell',
      email: 'dan@dan.com',
      hashed_password: bcrypt.hashSync('password', 10)
    },
    {
      first_name: 'Jack',
      last_name: 'Percival',
      email: 'jack@jack.com',
      hashed_password: bcrypt.hashSync('password', 10)
    },

  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Users', null, {});
  }
};
