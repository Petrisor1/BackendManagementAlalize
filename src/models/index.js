const dbConfig=require("../database/db.config.js");
const Sequelize=require("sequelize");

const sequelize=new Sequelize(dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect:dbConfig.dialect,
    operatorAliases:false,
    logging: console.log,
    pool:{
        max:dbConfig.pool.max,
        min:dbConfig.pool.min,
        acquire:dbConfig.pool.acquire,
        idle:dbConfig.pool.idle
    }
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.pacienti = require('./pacienti.model.js')(sequelize,Sequelize);
db.laboratoare = require('./laboratoare.model.js')(sequelize,Sequelize);
db.tipuri_teste = require('./tipuri_teste.model.js')(sequelize,Sequelize);
db.teste = require('./teste.model.js')(sequelize,Sequelize);
db.rezultate_teste = require('./rezultate_teste.model.js')(sequelize,Sequelize);

// Asocierile dintre modele
db.pacienti.hasMany(db.rezultate_teste, { foreignKey: 'pacient_id', as: 'rezultate_teste' });
db.rezultate_teste.belongsTo(db.pacienti, { foreignKey: 'pacient_id', as: 'patient' });

db.laboratoare.hasMany(db.rezultate_teste, { foreignKey: 'laborator_id', as: 'rezultate_teste' });
db.rezultate_teste.belongsTo(db.laboratoare, { foreignKey: 'laborator_id', as: 'laboratoare' });

db.tipuri_teste.hasMany(db.teste, { foreignKey: 'tip_id', as: 'teste' });
db.teste.belongsTo(db.tipuri_teste, { foreignKey: 'tip_id', as: 'tipuri_teste' });

db.teste.hasMany(db.rezultate_teste, { foreignKey: 'test_id', as: 'rezultate_teste' });
db.rezultate_teste.belongsTo(db.teste, { foreignKey: 'test_id', as: 'teste' });

module.exports = db;
