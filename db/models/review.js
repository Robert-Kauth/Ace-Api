"use strict";
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define(
    "Review",
    {
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
        },
      },
      api_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Apis",
        },
      },
      review: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      rating: {
        allowNull: false,
        type: DataTypes.Numeric(2, 1),
      },
    },
    {}
  );
  Review.associate = function (models) {
    // associations can be defined here
    Review.belongsTo(models.User, { foreignKey: "Users" });
    Review.belongsTo(models.Api, { foreignKey: "Apis" });
  };
  return Review;
};
