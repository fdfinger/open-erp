const Sequelize = require("sequelize");
const { seq } = require("./index");

const MaterialCatalogue = seq.define(
  "material_catalogue",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      field: "material_cata_id",
    },
    parentId: {
      type: Sequelize.INTEGER,
      field: "material_cata_parent_id",
    },
    code: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "material_cata_code",
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "material_cata_name",
    },
    suject: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "material_cata_suject",
    },
    status: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
      allowNull: 0,
      field: "material_cata_status",
    },
    remark: {
      type: Sequelize.STRING,
      defaultValue: '',
      allowNull: '',
      field: "material_cata_remark",
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

module.exports = MaterialCatalogue;
