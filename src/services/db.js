const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("mydb", "dbuser", "dbpass", {
  host: "postgres_db",
  dialect: "postgres",
  port: "5432",
});

module.exports = sequelize;
