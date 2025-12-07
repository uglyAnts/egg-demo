// models/user.js
"use strict";

module.exports = (app) => {
  const { DataTypes } = app.Sequelize;
  const User = app.model.define(
    "user",
    {
      userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "user_id",
      },
      username: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
      },
      passwordHash: {
        type: DataTypes.TEXT,
        allowNull: false,
        field: "password_hash",
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
        validate: { isEmail: true },
      },
      firstName: {
        type: DataTypes.STRING(50),
        allowNull: false,
        field: "first_name",
      },
      lastName: {
        type: DataTypes.STRING(50),
        allowNull: false,
        field: "last_name",
      },
      dateOfBirth: {
        type: DataTypes.DATEONLY,
        field: "date_of_birth",
      },
      phoneNumber: {
        type: DataTypes.STRING(20),
        field: "phone_number",
      },
      registrationDate: {
        type: DataTypes.DATE,
        field: "registration_date",
        defaultValue: DataTypes.NOW,
      },
      lastLogin: {
        type: DataTypes.DATE,
        field: "last_login",
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        field: "is_active",
      },
      profilePictureUrl: {
        type: DataTypes.TEXT,
        field: "profile_picture_url",
      },
      createdAt: {
        type: DataTypes.DATE,
        field: "created_at",
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: "updated_at",
      },
    },
    {
      modelName: "User",
      tableName: "users",
      timestamps: false, // 使用 created_at / updated_at
      underscored: false, // 我们手动用 field 映射，所以设为 false
    }
  );
  return User;
};
