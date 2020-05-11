import React from "react";
import { Button, Table, Popconfirm } from "antd";

function ProcessCataTable({ editClick, deleteClick, dataSource, pagination }) {
  const columns = [
    {
      title: "序号",
      dataIndex: "index",
      render: (text, record, index) => <span>{index + 1}</span>,
    },
    { title: "分类编码", dataIndex: "cataCode" },
    { title: "分类名称", dataIndex: "cataName" },
    {
      title: "启用状态",
      dataIndex: "cataStatus",
      render: (text, record) => <span>{record.cataStatus ? "启用" : "禁用"}</span>,
    },
    { title: "备注", dataIndex: "cataRemark" },
    {
      title: "操作",
      dataIndex: "actions",
      render: (text, record) => (
        <>
          <Button type="link" onClick={() => editClick(record)}>
            修改
          </Button>
          <Popconfirm
            title={`确认删除【${record.cataName}】吗?`}
            onConfirm={() => deleteClick(record)}
          >
            <Button type="link">删除</Button>
          </Popconfirm>
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

export default ProcessCataTable;
