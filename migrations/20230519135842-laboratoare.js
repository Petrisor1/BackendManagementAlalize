'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   return queryInterface.createTable("laboratoare",{
    laborator_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    nume_laborator: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    locatie: {
        type: Sequelize.STRING(250),
        allowNull: true,
    },
    email: {
        type: Sequelize.STRING(250),
        allowNull: false,
    },
    parola:{
        type:Sequelize.STRING(250),
        allowNull:false
    },
    
    
},{
    freezeTableName: true,
})
  },

  async down (queryInterface, Sequelize) {
   return queryInterface.dropTable("laboratoare");
  }
};
