const Sequelize = require("sequelize");
const { seq } = require("./index");
const Process = seq.define(
  "sys_pro",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      field: "process_id",
    },
    cataId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 1,
      field: "pro_cata_id",
    },
    proCode: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: '',
      field: "process_code",
    },
    parentProCode: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: '',
      field: "parent_process_code",
    },
    isValuation: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 1,
      field: "is_valuation",
    },
    isOutSourcing: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,
      field: "is_outsourcing",
    },
    proName: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: '',
      field: "process_name",
    },
    proStatus: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,
      field: "process_status",
    },
    proRemark: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: '',
      field: "process_remark",
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

module.exports = Process;
