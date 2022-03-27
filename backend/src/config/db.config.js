module.exports = {
    HOST: "localhost",
    USER: "tasks_db_user",
    PASSWORD: "12345",
    DB: "tasks_db",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };