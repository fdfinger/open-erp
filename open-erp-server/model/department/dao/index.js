module.exports = {
  insert: 'INSERT INTO sys_dept (name, parent_id, level, seq, remark, operator) VALUES (?,?,?,?,?,?)',
  select: 'SELECT * FROM sys_dept LIMIT ?, ?'
}