const configDev = require("./config.dev");
const configPro = require("./config.pro");

const isDev = process.env.NODE_ENV === "development";

module.exports = isDev ? configDev : configPro;
