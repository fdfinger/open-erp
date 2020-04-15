const db = require("../../utils/db");
const sql = require("./dao");

module.exports = {
  add() {},
  get(params = { page: 1, pageSize: 20 }, callback) {
    db(
      sql.select,
      [(params.page - 1) * params.pageSize, params.pageSize],
      callback
    );
  },
};
