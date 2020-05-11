import React from "react";
import { Button, Table } from "antd";

const gen = (value, label) => ({ label, value });

export const customerTypes = [gen(0, "供应商"), gen(1, "销售商"), gen(2, "外协商")];

function CustomerTable({ editClick, deleteClick, dataSource, pagination }) {
  const columns = [
    {
      title: "序号",
      dataIndex: "index",
      render: (text, record, index) => <span>{index + 1}</span>,
    },
    { title: "客户编码", dataIndex: "code" },
    {
      title: "客户类型",
      dataIndex: "type",
      render: (text, record) => (
        <span>
          {customerTypes.find((item) => item.value === record.type).label || '未设置'}
        </span>
      ),
    },
    { title: "客户名称", dataIndex: "name" },
    { title: "社会代码证", dataIndex: "socialCode" },
    { title: "联系地址", dataIndex: "contactAddress" },
    { title: "所属区域", dataIndex: "areaId" },
    {
      title: "启用状态",
      dataIndex: "cataStatus",
      render: (text, record) => (
        <span>{record.cataStatus ? "启用" : "禁用"}</span>
      ),
    },
    {
      title: "操作",
      dataIndex: "actions",
      render: (text, record) => (
        <>
          <Button type="link" onClick={() => editClick(record)}>
            修改
          </Button>
          <Button type="link" onClick={() => deleteClick(record)}>
            删除
          </Button>
        </>
      ),
    },
  ];
  return (
    <Table
      bordered
      dataSource={dataSource}
      columns={columns}
      rowKey={(record) => record.id}
      pagination={pagination}
    />
  );
}

export default CustomerTable;
