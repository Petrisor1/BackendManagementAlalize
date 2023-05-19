const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const Test = sequelize.define("teste", {
    test_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    tip_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'tipuri_teste',
            key: 'tip_id'
        }
    },
    nume_test: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    descriere_test: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    valoare_minima: {
        type: Sequelize.FLOAT,
        allowNull: true,
    },
    valoare_maxima: {
        type: Sequelize.FLOAT,
        allowNull: true,
    },
   
    unitate: {
        type: Sequelize.STRING,
        allowNull: true,
    }
  },{
    freezeTableName: true,
})
  return Test;
};
