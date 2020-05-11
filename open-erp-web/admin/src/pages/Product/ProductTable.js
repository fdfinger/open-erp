import React from "react";
import { Button, Table, Popconfirm } from "antd";

function ProductTable({ editClick, deleteClick, dataSource, pagination }) {
  const columns = [
    {
      title: "序号",
      dataIndex: "index",
      width: 70,
      render: (text, record, index) => <span>{index + 1}</span>,
    },
    { title: "项目编码", dataIndex: "proCode", width: 120 },
    { title: "产品编码", dataIndex: "code", width: 120 },
    { title: "物料名称", dataIndex: "name", width: 120 },
    {
      title: "启用状态",
      dataIndex: "status",
      width: 120,
      render: (text, record) => (
        <span>{record.status ? "启用" : "禁用"}</span>
      ),
    },
    { title: "规格型号", dataIndex: "norms", width: 120 },
    { title: "计价单位", dataIndex: "valuationUnit", width: 120 },
    { title: "色号", dataIndex: "colorNumber", width: 120 },
    { title: "生产用量", dataIndex: "dosage", width: 120 },
    {
      title: "操作",
      dataIndex: "actions",
      width: 140,
      fixed: 'right',
      render: (text, record) => (
        <>
          <Button type="link" onClick={() => editClick(record)}>
            修改
          </Button>
          <Popconfirm
            title={`确认删除【${record.name}】吗?`}
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
      scroll={{ x: 1300 }}
    />
  );
}

export default ProductTable;
