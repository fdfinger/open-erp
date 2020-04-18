module.exports = {
  insert: 'INSERT INTO sys_area SET ?',
  select: 'SELECT * FROM sys_area',
  update: 'UPDATE sys_area SET ?? WHERE id = ?',
  delete: 'DELETE FROM sys_area WHERE id = ?',
  getById: 'SELECT * FROM sys_area WHERE parent_id = ?'
}