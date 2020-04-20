import React, { Component } from "react";
import { Layout, Menu, Row, Col } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { withRouter, Link } from 'react-router-dom'

import { routers } from "../../routers";

const { Header, Content, Sider } = Layout;

const showRouters = routers.filter((item) => item.isShow === true);

const headerIconStyle = {
  fontSize: "16px",
  color: "#fff",
};

const HeaderMenu = () => (
  <>
    <Link to="/admin/setting">
      <UserOutlined style={headerIconStyle} />
      用户
    </Link>
    <Link to="/admin/dashboard">
      <UserOutlined style={headerIconStyle} />
      系统首页
    </Link>
    <Link to="/admin/message">
      <UserOutlined style={headerIconStyle} />
      消息
    </Link>
    <Link to="/admin/login">
      <UserOutlined style={headerIconStyle} />
      退出
    </Link>
  </>
);
class FrameOut extends Component {
  handleMenuClick = ({ key }) => {
    this.props.history.push(key)
  }
  render() {
    return (
      <Layout style={{ height: "100vh" }}>
        <Header className="header" style={{ color: "#fff" }}>
          <Row>
            <Col span={8}>
              <h1 style={{ color: "#fff" }}>数字化工厂ERP管理系统</h1>
            </Col>
            <Col span={11} offset={5}>
              <HeaderMenu />
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
