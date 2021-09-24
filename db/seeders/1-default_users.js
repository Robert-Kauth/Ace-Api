'use strict';
const bcrypt = require("bcryptjs")

module.exports = {
  up: (queryInterface, Sequelize) => {
    console.log("inside users seeder")

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
    {
    first_name: 'Paul',
    last_name: 'James',
    email: 'paul@hiimpaul.com',
    hashed_password: bcrypt.hashSync('password', 10)
    },
    {
      first_name: 'Don',
      last_name: 'Quixote',
      email: 'thebookisreal@iwrotethis.com',
      hashed_password: bcrypt.hashSync('password', 10)
    },
    {
      first_name: 'Mark',
      last_name: 'Twain',
      email: 'huck@fin.com',
      hashed_password: bcrypt.hashSync('password', 10)
    },
    {
      first_name: 'Jim',
      last_name: 'Jones',
      email: 'mytown@guyana.com',
      hashed_password: bcrypt.hashSync('password', 10)
    },
    {
      first_name: 'John',
      last_name: 'James',
      email: 'james@john.com',
      hashed_password: bcrypt.hashSync('password', 10)
    },
    {
      first_name: 'Karen',
      last_name: 'Tyler',
      email: 'manager@karen.com',
      hashed_password: bcrypt.hashSync('password', 10)
    },
    {
      first_name: 'Anne',
      last_name: 'Rice',
      email: 'vampires@rice.com',
      hashed_password: bcrypt.hashSync('password', 10)
    },
    {
      first_name: 'Michelle',
      last_name: 'Stewart',
      email: 'norelationtojon@gmail.com',
      hashed_password: bcrypt.hashSync('password', 10)
    },
    {
      first_name: 'Jackie',
      last_name: 'Phillips',
      email: 'jackie@gmail.com',
      hashed_password: bcrypt.hashSync('password', 10)
    },
    {
      first_name: 'Natalie',
      last_name: 'Kolawski',
      email: 'kowalas@jackie.com',
      hashed_password: bcrypt.hashSync('password', 10)
    },

  ], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Users', null, {});
  }
};
