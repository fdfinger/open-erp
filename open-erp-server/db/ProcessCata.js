const Sequelize = require("sequelize");
const { seq } = require("./index");
const ProcessCata = seq.define(
  "sys_pro_cata",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      field: "pro_cata_id",
    },
    cataCode: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: '',
      field: "pro_cata_code",
    },
    cataName: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: '',
      field: "pro_cata_name",
    },
    cataStatus: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,
      field: "pro_cata_status",
    },
    cataRemark: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: '',
      field: "pro_cata_remark",
    },
    createDate: {
      type: Sequelize.DATE,
      field: "create_date",
    },
    modifyDate: {
      type: Sequelize.DATE,
      defaultValue: new Date(),
      field: "modify_date",
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = ProcessCata;
