"use strict";
module.exports = (app) => {
  const { INTEGER, STRING, TEXT, BOOLEAN, SMALLINT, INET, DATE } =
    app.Sequelize;

  const Account = app.model.define(
    "account",
    {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      username: { type: STRING(64), allowNull: false, unique: true },
      email: { type: STRING(255), unique: true },
      phone: { type: STRING(20), unique: true },
      passwordHash: { type: TEXT, allowNull: false, field: "password_hash" },
      lastLoginAt: { type: DATE, field: "last_login_at" },
      lastLoginIp: { type: INET, field: "last_login_ip" },
      failedLoginAttempts: {
        type: SMALLINT,
        defaultValue: 0,
        field: "failed_login_attempts",
      },
      lockedUntil: { type: DATE, field: "locked_until" },
      isActive: { type: BOOLEAN, defaultValue: true, field: "is_active" },
      isEmailVerified: {
        type: BOOLEAN,
        defaultValue: false,
        field: "is_email_verified",
      },
      isPhoneVerified: {
        type: BOOLEAN,
        defaultValue: false,
        field: "is_phone_verified",
      },
    },
    {
      tableName: "accounts",
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );

  return Account;
};
