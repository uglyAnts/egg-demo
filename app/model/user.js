// models/user.js
"use strict";

module.exports = (app) => {
  const { DataTypes } = app.Sequelize;
  const User = app.model.define(
    "user",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      accountId: {
        type: DataTypes.UUID,
      },
      name: {
        type: DataTypes.STRING(32),
        allowNull: false
      },
      birthday: {
        type: DataTypes.STRING(5)
      }
    },
    {
      modelName: "User",
      tableName: "users",
      // timestamps: false, // 使用 created_at / updated_at
      // underscored: false, // 我们手动用 field 映射，所以设为 false
    }
  );
  return User;
};
