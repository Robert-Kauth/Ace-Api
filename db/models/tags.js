'use strict';
module.exports = (sequelize, DataTypes) => {
	const Tags = sequelize.define(
		'Tags',
		{
			name: {
				allowNull: false,
				type: DataTypes.STRING(25),
			},
		},
		{}
	);
	Tags.associate = function (models) {
		// associations can be defined here
	};
	return Tags;
};
