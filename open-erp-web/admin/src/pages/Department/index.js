import React, { Component } from "react";
import { Card, Table } from "antd";
import { getList } from "../../api/department";

export default class Department extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      columns: [
        {
          title: "序号",
          dataIndex: "index",
          render: (text, record, index) => <span>{index + 1}</span>,
        },
        { title: "部门名称", dataIndex: "name" },
        { title: "排序", dataIndex: "seq" },
        { title: "备注", dataIndex: "remark" },
        { title: "修改人", dataIndex: "operator" },
      ],
    };
  }
  getDepartment() {
    getList().then((res) => {
      this.setState({
        dataSource: res.data,
      });
    });
  }
  componentDidMount() {
    this.getDepartment();
  }
  render() {
    return (
      <Card title={"部门信息"}>
        <Table
          bordered
          size="small"
          dataSource={this.state.dataSource}
          columns={this.state.columns}
          rowKey={(record) => record.id}
        />
      </Card>
    );
  }
}
