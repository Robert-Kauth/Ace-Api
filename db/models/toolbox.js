'use strict';
module.exports = (sequelize, DataTypes) => {
	const Toolbox = sequelize.define(
		'Toolbox',
		{
			user_id: {
				allowNull: false,
				references: { model: 'Users' },
				type: DataTypes.INTEGER,
			},
			name: {
				allowNull: false,
				type: DataTypes.STRING(50),
			},
		},
		{}
	);
	Toolbox.associate = function (models) {
		// associations can be defined here
	};
	return Toolbox;
};
