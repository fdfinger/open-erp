import React from "react";
import { Button, Table, Popconfirm } from "antd";

function ProcessTable({ editClick, deleteClick, dataSource, pagination }) {
  const columns = [
    {
      title: "序号",
      dataIndex: "index",
      width: 50,
      render: (text, record, index) => <span>{index + 1}</span>,
    },
    { title: "分类编码", width: 70, dataIndex: "cataId" },
    { title: "分类名称", width: 100, dataIndex: "cataName" },
    { title: "工序名称", width: 100, dataIndex: "proName" },
    {
      title: "启用状态",
      dataIndex: "proStatus",
      width: 100,
      render: (text, record) => <span>{record.proStatus ? "启用" : "禁用"}</span>,
    },
    { title: "上级工序编码", width: 130, dataIndex: "parentProCode" },
    {
      title: "是否计价",
      dataIndex: "isValuation",
      width: 70,
      render: (text, record) => <span>{record.isValuation ? "是" : "否"}</span>,
    },
    {
      title: "是否外协",
      dataIndex: "isOutSourcing",
      width: 70,
      render: (text, record) => <span>{record.isOutSourcing ? "是" : "否"}</span>,
    },
    { title: "工序编码", width: 90, dataIndex: "proCode" },
    {
      title: "操作",
      dataIndex: "actions",
      width: 120,
      fixed: 'right',
      render: (text, record) => (
        <>
          <Button type="link" onClick={() => editClick(record)}>
            修改
          </Button>
          <Popconfirm
            title={`确认删除【${record.proName}】吗?`}
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
      scroll={{ x: 1300 }}
      pagination={pagination}
    />
  );
}

export default ProcessTable;
