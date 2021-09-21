'use strict';
module.exports = (sequelize, DataTypes) => {
  const Api = sequelize.define('Api', {
    name: DataTypes.STRING,
    url: DataTypes.STRING,
    free: DataTypes.BOOLEAN,
    description: DataTypes.TEXT
  }, {});
  Api.associate = function(models) {
    const columnMapping = {
			through: "Implementation",
			foreignKey: "api_id",
			otherKey: "toolbox_id"
		}
		Api.belongsToMany(models.ToolBox, columnMapping)
    Api.hasMany(models.Review, { foreignKey: 'api_id' })
    Api.belongsTo(models.Tag, { foreignKey: 'tags_id'})
  };
  return Api;
};


/*
my code does not work, I don't know why.
my code works, I don't know why.
*/
