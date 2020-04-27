import React from "react";
import { Button, Table } from "antd";

function MaterialCataTable({ editClick, deleteClick, dataSource, pagination }) {
  const columns = [
    {
      title: "序号",
      dataIndex: "index",
      render: (text, record, index) => <span>{index + 1}</span>,
    },
    { title: "分类编码", dataIndex: "code" },
    { title: "父类编码", dataIndex: "parentId" },
    { title: "分类名称", dataIndex: "name" },
    { title: "财务科目", dataIndex: "suject" },
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
          <Button type="link" onClick={() => deleteClick(record.id)}>
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

export default MaterialCataTable;
