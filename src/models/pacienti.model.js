const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const Pacient = sequelize.define("pacienti", {
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
    CNP:{
      type: Sequelize.STRING(150),
      allowNull: false,
    },
    adresa:{
      type: Sequelize.STRING(250),
      
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
})
  return Pacient;
};