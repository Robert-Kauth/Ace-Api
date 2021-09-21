'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Implementations', [
    {
      toolbox_id: 1,
      api_id: 1
    },
    {
      toolbox_id: 1,
      api_id: 2
    },
    {
      toolbox_id: 1,
      api_id: 3
    },
    {
      toolbox_id: 2,
      api_id: 4
    },
    {
      toolbox_id: 2,
      api_id: 5
    },
    {
      toolbox_id: 2,
      api_id: 6
    },
    {
      toolbox_id: 2,
      api_id: 7
    },
    {
      toolbox_id: 2,
      api_id: 8
    },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Implementations', null, {});
  }
};
