import React from "react";
import { Table, Button, Popconfirm } from "antd";

function WarehouseTable(props) {
  const columns = [
    {
      title: "序号",
      dataIndex: "index",
      render: (text, record, index) => <span>{index + 1}</span>,
    },
    { title: "仓库编码", dataIndex: "warehouseCode" },
    { title: "所属部门", dataIndex: "sysDeptId" },
    {
      title: "启用状态",
      dataIndex: "areaStatus",
      render: (text, record) => (
        <span>{ record.areaStatus ? "启用" : "停用" }</span>
      ),
    },
    {
      title: "操作",
      dataIndex: "actions",
      render: (text, record) => (
        <>
          <Button type="link" onClick={EditClick.bind(this, record)}>
            编辑
          </Button>
          <Popconfirm
            title={`确认删除【${record.areaName}】吗?`}
            onConfirm={DeleteClick.bind(this, record)}
          >
            <Button type="link">删除</Button>
          </Popconfirm>
        </>
      ),
    },
  ];

  const EditClick = (params) => {
    props.editClick(params);
  };

  const DeleteClick = (params) => {
    props.deleteClick(params);
  };

  return (
    <Table
      bordered
      dataSource={props.dataSource}
      columns={columns}
      rowKey={(record) => record.id}
    />
  );
}

export default WarehouseTable;
