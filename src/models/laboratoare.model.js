const {DataTypes, Sequelize} =require('sequelize');


module.exports=(sequelize,Sequelize)=>{
    const Laborator=sequelize.define('laboratoare',{
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
    return Laborator;
}