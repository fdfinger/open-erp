const Sequelize = require("sequelize");
const config = require('../config')

const sequelize = new Sequelize("openerp", config.user, config.password, {
  host: config.host,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  define: {
    timestamps: false
  }
});
exports.sequelize = sequelize;

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = {
  seq: sequelize
}