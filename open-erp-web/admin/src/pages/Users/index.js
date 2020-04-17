import React, { Component } from "react";
import { Layout, Card, Table, Button, Form, Input, Select } from "antd";
import { getList } from "../../api/users.js";

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      showSearchFrom: true,
      dataSource: [],
      columns: [
        {
          title: "序号",
          dataIndex: "index",
          render: (text, record, index) => <span>{index + 1}</span>,
        },
        { title: "部门名称", dataIndex: "index" },
        { title: "用户姓名", dataIndex: "登录账号" },
        { title: "登录账号", dataIndex: "index" },
        { title: "性别", dataIndex: "index" },
        { title: "学历", dataIndex: "index" },
        { title: "职务", dataIndex: "index" },
        { title: "联系电话", dataIndex: "index" },
        {
          title: "操作",
          dataIndex: "actions",
          render: (text, record) => (
            <>
              <Button type="link">修改</Button>
              <Button type="link">删除</Button>
            </>
          ),
        },
      ],
    };
  }

  openSearchFrom() {
    this.setState({ showSearchFrom: true })
  }

  closeSearchFrom () {
    this.setState({ showSearchFrom: false })
  }

  handleSearchForm(){
    if (this.state.showSearchFrom) {
      this.closeSearchFrom()
    } else {
      this.openSearchFrom()
    }
  }

  getList() {
    this.setState({ isLoading: true });
    getList()
      .then((res) => {
        console.log(res);
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }
  componentDidMount() {
    this.getList();
  }
  render() {
    return (
      <Layout>
        <Card
          title={"筛选条件"}
          bodyStyle={{ padding: "0" }}
          extra={
            <>
              <Button type="link" onClick={this.handleSearchForm.bind(this)}>{this.state.showSearchFrom ? '收起筛选' : '打开筛选'}</Button>
              <Button disabled={!this.state.showSearchFrom}>查询</Button>
            </>
          }
        >
          <Form
            name="searchForm"
            colon={false}
            layout="inline"
            style={{ margin: "16px", display: this.state.showSearchFrom ? '' : 'none' }}
          >
            <Form.Item label="部门名称" name="department_id">
              <Select style={{ width: 160 }}>
                <Select.Option value="jack">Jack</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="用户姓名" name="username">
              <Input />
            </Form.Item>
          </Form>
        </Card>
        <Card
          title={"数据列表"}
          style={{ marginTop: 16 }}
          bodyStyle={{ padding: 0 }}
          extra={<Button type="primary">新增</Button>}
        >
          <Table
            bordered
            loading={this.state.isLoading}
            dataSource={this.state.dataSource}
            columns={this.state.columns}
            rowKey={(record) => record.id}
          />
        </Card>
      </Layout>
    );
  }
}
