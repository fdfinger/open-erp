import React from "react";
import { Button, Table, Popconfirm } from "antd";

function DeviceTable({
  editClick,
  deleteClick,
  dataSource,
  pagination,
  loading,
}) {
  const columns = [
    {
      title: "序号",
      dataIndex: "index",
      width: 70,
      render: (text, record, index) => <span>{index + 1}</span>,
    },
    { title: "设备编码", dataIndex: "code", width: 120 },
    { title: "机器码", dataIndex: "machineCode", width: 120 },
    { title: "设备名称", dataIndex: "name", width: 120 },
    { title: "规格型号", dataIndex: "norms", width: 120 },
    { title: "单位", dataIndex: "unit", width: 120 },
    { title: "使用部门", dataIndex: "depId", width: 120 },
    {
      title: "设备状态",
      dataIndex: "status",
      width: 120,
      render: (text, record) => (
        <span>{record.status ? "正常" : "异常"}</span>
      ),
    },
    { title: "购置时间", dataIndex: "buyDate", width: 120 },
    {
      title: "操作",
      dataIndex: "actions",
      width: 140,
      fixed: "right",
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
      loading={loading}
      dataSource={dataSource}
      columns={columns}
      rowKey={(record) => record.id}
      pagination={pagination}
      scroll={{ x: 1300 }}
    />
  );
}

export default DeviceTable;
