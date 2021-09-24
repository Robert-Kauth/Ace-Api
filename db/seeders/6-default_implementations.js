'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			'Implementations',
			[
				{
					toolbox_id: 1,
					api_id: 1,
				},
				{
					toolbox_id: 1,
					api_id: 2,
				},
				{
					toolbox_id: 1,
					api_id: 3,
				},
				{
					toolbox_id: 2,
					api_id: 1,
				},
				{
					toolbox_id: 2,
					api_id: 2,
				},
				{
					toolbox_id: 2,
					api_id: 3,
				},
			],
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Implementations', null, {});
	},
};
