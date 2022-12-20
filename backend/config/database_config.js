
module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "2001nil2010",
    DB: "student_db",
    dialect: "postgres",
    pool: {//pool configuration
      max: 5,//maximum number of connection in pool
      min: 0,//minimum number of connection in pool
      acquire: 30000,//maximum time in ms that pool will try to get connection before throwing error
      idle: 10000//maximum time in ms, that a connection can be idle before being released
    },
    logging: false

  };

  