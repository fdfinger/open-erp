const Sequelize = require("sequelize");
const { seq } = require("./index");

const Customer = seq.define(
  "customer_info",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      field: "cus_id"
    },
    code: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "cus_code"
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "cus_name"
    },
    type: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: "cus_type",
    },
    areaId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: "cus_area_id",
    },
    status: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: "cus_status",
    },
    socialCode: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "cus_social_code",
    },
    contact: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "cus_contact",
    },
    contactAddress: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "cus_contact_address",
    },
    contactTelphone: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "cus_contact_telphone",
    },
    contactEmail: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "cus_contact_email",
    },
    contactFax: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "cus_contact_fax",
    },
    settlementBank: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "cus_settlement_bank",
    },
    settlementAccount: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "cus_settlement_account",
    },
    settlementName: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "cus_settlement_name",
    },
    remark: {
      type: Sequelize.STRING,
      defaultValue: "",
      allowNull: false,
      field: "cus_remark"
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

module.exports = Customer;
