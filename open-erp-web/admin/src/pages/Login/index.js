import React from "react";
import { connect } from "react-redux";
import { Form, Input, Button, Card } from "antd";

function Login (props) {
  const onFinish = (value) => {
    props.dispatch({
      type: "LOGIN_SUBMIT",
      value,
    });
  };
  
  
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#eee',
        height: '100vh'
      }}
    >
      <Card
        title="登录"
        bodyStyle={{ minWidth: 400 }}
        headStyle={{ textAlign: "center" }}
      >
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item name="username" label="用户名">
            <Input />
          </Form.Item>
          <Form.Item name="password" label="密码">
            <Input type="password" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{ width: "100%" }}
            >
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}


export default connect()(Login);
