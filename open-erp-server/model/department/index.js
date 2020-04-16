const db = require("../../utils/db");
const sql = require("./dao");

module.exports = {
  /** 新增 */
  add(params, callback) {
    db(
      sql.insert,
      [params],
      callback
    )
  },
  /** 获取列表 */
  get(params = { page: 1, pageSize: 20 }, callback) {
    db(
      sql.select,
      [(params.page - 1) * params.pageSize, params.pageSize],
      callback
    );
  },
  /** 更新 */
  update(params, callback) {
    const { id, ... other } = params
    db(sql.update, [other, id] , callback)
  },
  /** 删除 */
  remove(id, callback) {
    db(sql.delete, [id], callback)
  },
  /** 获取单条记录 */
  getById (id, callback) {
    db(sql.getById, [id], callback)
  }
};
