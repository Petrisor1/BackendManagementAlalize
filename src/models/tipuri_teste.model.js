const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const Tipuri_teste = sequelize.define("tipuri_teste", {
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
  return Tipuri_teste;
};