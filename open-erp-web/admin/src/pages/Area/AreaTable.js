import React from "react";
import { Table, Button, Popconfirm } from "antd";

function AreaTable(props) {
  const columns = [
    {
      title: "序号",
      dataIndex: "index",
      render: (text, record, index) => <span>{index + 1}</span>,
    },
    { title: "地区编码", dataIndex: "areaCode" },
    { title: "上级编码", dataIndex: "parentAreaCode" },
    { title: "地区名称", dataIndex: "areaName" },
    {
      title: "地区状态",
      dataIndex: "areaStatus",
      render: (text, record) => (
        <span style={{ color: record.area_code ? "green" : "red" }}>•</span>
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
      pagination={props.pagination}
    />
  );
}

export default AreaTable;
