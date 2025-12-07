"use strict";

module.exports = (app) => {
  const { DataTypes } = app.Sequelize;
  const Account = app.model.define(
    "account",
    {
      accountName: {
        type: DataTypes.STRING(32),
        primaryKey: true,
        allowNull: false,
        unique: true,
        // field: "account_name"
      },
      accountPassword: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        // field: "account_password"
      },
      email: {
        type: DataTypes.STRING(64),
        allowNull: true,
        unique: true,
      },
      phoneNumber: {
        type: DataTypes.STRING(11),
        allowNull: true,
        unique: true,
        // field: "phone_number"
      },
    },
    {
      modelName: "Account",
      tableName: "accounts",
      timestamps: false,
      // createdAt: "created_at",
      // updatedAt: "updated_at",
    }
  );

  return Account;
};
