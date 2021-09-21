'use strict';
module.exports = (sequelize, DataTypes) => {
  const Api = sequelize.define('Api', {
    name: DataTypes.STRING,
    url: DataTypes.STRING,
    free: DataTypes.BOOLEAN,
    description: DataTypes.TEXT
  }, {});
  Api.associate = function(models) {
    Api.belongsTo(models.Implementation,{ foreignKey: 'api_id' })
    Api.belongsTo(models.Review,{ foreignKey: 'api_id' })
  };
  return Api;
};
