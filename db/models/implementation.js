'use strict';
module.exports = (sequelize, DataTypes) => {
  const Implementation = sequelize.define('Implementation', {
    toolbox_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Toolboxes"
      }
    },
    api_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Apis"
      }
    }
  }, {});
  Implementation.associate = function(models) {
    // associations can be defined here
  };
  return Implementation;
};
