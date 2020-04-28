import React from "react";
import { Button, Table } from "antd";

function MaterialTable({ editClick, deleteClick, dataSource, pagination, loading }) {
  const columns = [
    {
      title: "序号",
      dataIndex: "index",
      width: 70,
      render: (text, record, index) => <span>{index + 1}</span>,
    },
    { title: "分类编码", dataIndex: "cataId", width: 120 },
    { title: "仓库编码", dataIndex: "warehouseId", width: 120 },
    { title: "项目编码", dataIndex: "code", width: 120 },
    { title: "项目名称", dataIndex: "name", width: 120 },
    {
      title: "启用状态",
      dataIndex: "cataStatus",
      width: 120,
      render: (text, record) => (
        <span>{record.cataStatus ? "启用" : "禁用"}</span>
      ),
    },
    { title: "规格型号", dataIndex: "specificationModel", width: 120 },
    { title: "采购含税单价", dataIndex: "procurementPrice", width: 120 },
    { title: "安全库存", dataIndex: "safetyStock", width: 120 },
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
      loading={loading}
      dataSource={dataSource}
      columns={columns}
      rowKey={(record) => record.id}
      pagination={pagination}
      scroll={{ x: 1300 }}
    />
  );
}

export default MaterialTable;
