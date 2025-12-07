"use strict";
module.exports = {
  // 在执行数据库升级时调用的函数，创建 users 表
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("users", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      account_id: {
        type: Sequelize.UUID,
      },
      name: {
        type: Sequelize.STRING(16),
        allowNull: false,
      },
      birthday: {
        type: Sequelize.STRING(5)
      }
    });
  },
  // 在执行数据库降级时调用的函数，删除 users 表
  down: async (queryInterface) => {
    await queryInterface.dropTable("users");
  },
};
