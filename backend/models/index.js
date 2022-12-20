const databaseConfig=require("../config/database_config")

const Sequelize=require('sequelize')
const { dialect } = require("../config/database_config")

const sequelizeInstance= new Sequelize(databaseConfig.DB,databaseConfig.USER,databaseConfig.PASSWORD,{
    host:databaseConfig.HOST,
    dialect:databaseConfig.dialect,
    operatorsAliases: 0 ,

    pool: {//pool configuration
        max: databaseConfig.pool.max,
        min: databaseConfig.pool.min,
        acquire: databaseConfig.pool.acquire,
        idle:databaseConfig.pool.idle,
      },
      logging:databaseConfig.logging

})

const db={};

db.Sequelize=Sequelize
db.sequelize=sequelizeInstance

db.students =require( "./student.js")(sequelizeInstance, Sequelize)

module.exports = db;