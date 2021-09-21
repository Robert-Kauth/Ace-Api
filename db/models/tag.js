'use strict';
module.exports = (sequelize, DataTypes) => {
	const Tag = sequelize.define(
		'Tags',
		{
			name: {
				allowNull: false,
				type: DataTypes.STRING(25),
			},
		},
		{}
	);
	Tag.associate = function (models) {
		Tag.hasMany( models.Api, {foreignKey: 'tags_id'} )
	};
	return Tag;
};
