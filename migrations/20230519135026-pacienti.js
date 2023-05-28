'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   return queryInterface.createTable('pacienti',
   {
    pacient_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    nume: {
      type: Sequelize.STRING(150),
      allowNull: false,
    },
    prenume: {
      type: Sequelize.STRING(150),
      allowNull: false,
    },
    data_nastere: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    gen: {
      type: Sequelize.STRING(50),
      allowNull: false,
    },
    contact_info: {
      type: Sequelize.STRING(250),
      allowNull: false,
    },
    email:{
        type:Sequelize.STRING(250),
        allowNull:false,
        unique: true,
    }
    ,
    parola:{
        type:Sequelize.STRING(250),
    },
    alte_informatii: {
      type: Sequelize.TEXT,
    }
  },{
    freezeTableName: true,
}
   )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable("pacienti");
  }
};
