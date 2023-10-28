const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("mydb", "dbuser", "dbpass", {
  host: "localhost",
  dialect: "postgres",
  port: "5432",
});

module.exports = sequelize;
