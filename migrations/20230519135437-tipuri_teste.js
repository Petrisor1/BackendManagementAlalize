'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable("tipuri_teste",
    {
      tip_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      tip_nume: {
        type: Sequelize.STRING(250),
        allowNull: false,
      }
    },{
      freezeTableName: true,
  })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable("tipuri_teste");
  }
};
