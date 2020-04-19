const Sequelize = require("sequelize");
const { seq } = require("./index");

const Warehouse = seq.define(
  "warehouse",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    warehouseCode: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "warehouse_code",
    },
    sysDeptId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: "sys_dept_id",
    },
    warehouseStatus: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
      allowNull: false,
      field: "warehouse_status",
    },
    warehouseName: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "warehouse_name",
    },
    warehouseRemark: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "warehouse_remark",
    },
    createDate: {
      type: Sequelize.DATE,
      field: "create_date",
    },
    modifyDate: {
      type: Sequelize.DATE,
      field: "modify_date",
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = Warehouse
