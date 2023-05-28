const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const RezultateTeste = sequelize.define("rezultate_teste", {
    rezultat_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    pacient_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      reference:{
        model:'pacienti',
        key:'pacient_id'
      }
    },
    test_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references:{
        model:'teste',
        key:'test_id'
      }
    },
    laborator_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'laboratoare',
            key: 'laborator_id'
        }
    },
    data_test: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    valoare_rezultat: {
      type: Sequelize.STRING(150),
      allowNull: false,
    },
    comments: {
      type: Sequelize.TEXT,
    }
  },{
    freezeTableName: true,
})
  return RezultateTeste;
};