module.exports = {
  insert: 'INSERT INTO sys_dept SET ?',
  select: 'SELECT * FROM sys_dept',
  update: 'UPDATE sys_dept SET ?? WHERE id = ?',
  delete: 'DELETE FROM sys_dept WHERE id = ?',
  getById: 'SELECT * FROM sys_dept WHERE parent_id = ?'
}