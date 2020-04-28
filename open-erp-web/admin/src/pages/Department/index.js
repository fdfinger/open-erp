import React, { Component } from "react";
import { Card, Layout, Row, Col } from "antd";
import DepartmentTree from "./DepartmentTree";
import DepartmentForm from "./DepartmentForm";

// TODO connent store 没有写 明天需要搞一下
class Department extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: "",
    };
  }
  treeOnSelect(selectedKeys) {
    if (selectedKeys.length > 0) {
      this.setState({ selectedId: selectedKeys[0] });
    }
  }
  render() {
    return (
      <Layout>
        <Card bodyStyle={{ padding: 0, minHeight: "50vh" }}>
          <Row>
            <Col span={6}>
              <DepartmentTree onSelect={this.treeOnSelect.bind(this)} />
            </Col>
            <Col span={18}>
              <DepartmentForm />
            </Col>
          </Row>
        </Card>
      </Layout>
    );
  }
}

export default Department;
