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
		Toolbox.belongsTo( models.User, { foreignKey: 'user_id' })
		const columnMapping = {
			through: "Implementation",
			foreignKey: "toolbox_id",
			otherKey: "api_id"
		}
		Toolbox.belongsToMany(models.Api, columnMapping)
		Toolbox.hasMany(models.Implementation, {foreignKey: "toolbox_id", onDelete: "CASCADE", hooks: true})
	};
	return Toolbox;
};
