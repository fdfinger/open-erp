import React, { Component } from "react";
import { Layout, Menu, Row, Col, Dropdown, Badge, Avatar } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { withRouter, Link } from "react-router-dom";

import { routers } from "../../routers";

const { Header, Content, Sider } = Layout;

const showRouters = routers.filter((item) => item.isShow === true);

const HeaderMenu = () => (
  <Menu>
    <Menu.Item>
      <Link to="/admin/setting">设置</Link>
    </Menu.Item>
    <Menu.Item>
      <Badge dot>
        <Link to="/admin/message">消息</Link>
      </Badge>
    </Menu.Item>
    <Menu.Item>
      <Link to="/login">退出</Link>
    </Menu.Item>
  </Menu>
);
class FrameOut extends Component {
  handleMenuClick = ({ key }) => {
    this.props.history.push(key);
  };
  render() {
    return (
      <Layout style={{ height: "100vh" }}>
        <Header className="header" style={{ color: "#fff" }}>
          <Row>
            <Col span={8}>
              <h1 style={{ color: "#fff" }}>数字化工厂ERP管理系统</h1>
            </Col>
            <Col span={4} offset={12}>
              <Dropdown overlay={HeaderMenu}>
                <Badge count={5}>
                  <span className="ant-dropdown-link">
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    欢迎您，XXX <DownOutlined />
                  </span>
                </Badge>
              </Dropdown>
            </Col>
          </Row>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              onClick={this.handleMenuClick.bind(this)}
              selectedKeys={[this.props.history.location.pathname]}
              style={{ height: "100%", borderRight: 0 }}
            >
              {showRouters.map((item) => (
                <Menu.Item key={item.path}>{item.title}</Menu.Item>
              ))}
            </Menu>
          </Sider>
          <Layout style={{ padding: "16px" }}>
            <Content
              style={{
                margin: 0,
                minHeight: 280,
              }}
            >
              {this.props.children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(FrameOut);
