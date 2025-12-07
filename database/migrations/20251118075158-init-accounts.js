"use strict";

const account = require('../../app/model/account');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable("accounts", {
      account_name: {
        type: Sequelize.STRING(32),
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
      account_password: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: Sequelize.STRING(64),
        allowNull: true,
        unique: true,
      },
      phone_number: {
        type: Sequelize.STRING(11),
        allowNull: true,
        unique: true,
      }
    })
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable("accounts");
  },
};
