'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			'Tags',
			[
				{
					name: 'Artificial Intelligence',
				},
				{
					name: 'eCommerce',
				},
				{
					name: 'Chat Technology',
				},
				{
					name: 'Data Mining',
				},
				{
					name: 'Analytics',
				},
				{
					name: 'Biometrics',
				},
				{
					name: 'Security',
				},
				{
					name: 'Big Data',
				},
				{
					name: 'Sports',
				},
				{
					name: 'Plugins',
				},
				{
					name: 'Music',
				},
				{
					name: 'Metadata',
				},
			],
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Tags', null, {});
	},
};
