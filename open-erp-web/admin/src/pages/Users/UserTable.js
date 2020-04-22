import React from "react";
import { Button, Table } from "antd";

function UserTable({ editClick, deleteClick, dataSource, pagination }) {
  const columns = [
    {
      title: "序号",
      dataIndex: "index",
      render: (text, record, index) => <span>{index + 1}</span>,
    },
    { title: "部门名称", dataIndex: "depId" },
    { title: "用户姓名", dataIndex: "username" },
    { title: "登录账号", dataIndex: "username" },
    {
      title: "性别",
      dataIndex: "sex",
      render: (text, record) => <span>{record.sex ? "男" : "女"}</span>,
    },
    { title: "学历", dataIndex: "education" },
    { title: "职务", dataIndex: "job" },
    { title: "联系电话", dataIndex: "telephone" },
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

export default UserTable;
