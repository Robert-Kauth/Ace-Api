'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			'Toolboxes',
			[
				{
					user_id: '1',
					name: 'Currently Implementing',
				},
				{
					user_id: '1',
					name: 'Want To Implement',
				},
				{
					user_id: '1',
					name: 'Implemented',
				},
				{
					user_id: '2',
					name: 'Currently Implementing',
				},
				{
					user_id: '2',
					name: 'Want To Implement',
				},
				{
					user_id: '2',
					name: 'Implemented',
				},
				{
					user_id: '3',
					name: 'Currently Implementing',
				},
				{
					user_id: '3',
					name: 'Want To Implement',
				},
				{
					user_id: '3',
					name: 'Implemented',
				},
				{
					user_id: '4',
					name: 'Currently Implementing',
				},
				{
					user_id: '4',
					name: 'Want To Implement',
				},
				{
					user_id: '4',
					name: 'Implemented',
				},
				{
					user_id: '5',
					name: 'Currently Implementing',
				},
				{
					user_id: '5',
					name: 'Want To Implement',
				},
				{
					user_id: '5',
					name: 'Implemented',
				},
			],
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Toolboxes', null, {});
	},
};
