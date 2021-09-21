'use strict';
module.exports = (sequelize, DataTypes) => {
	const Tags = sequelize.define(
		'Tags',
		{
			name: {
				type: DataTypes.STRING(25),
				allowNull: false,
			},
		},
		{}
	);
	Tags.associate = function (models) {
		// associations can be defined here
	};
	return Tags;
};
