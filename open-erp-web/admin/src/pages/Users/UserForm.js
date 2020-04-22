import React, { useEffect, useRef } from "react";
import { Form, Input, Button, Modal, Select } from "antd";

const formItemLayout = {
  labelCol: {
    xs: { span: 5 },
    sx: { span: 3 },
  },
};

const ModelContent = (props) => {
  const form = useRef();

  useEffect(() => {
    form.current.resetFields();
  });

  return (
    <Form
      {...formItemLayout}
      ref={form}
      initialValues={props.editInitValues}
      onFinish={props.onFinish}
    >
      <Form.Item
        name="depId"
        label="部门"
        rules={[{ required: true, message: "请选择部门" }]}
      >
        <Select />
      </Form.Item>
      <Form.Item
        name="nickname"
        label="用户姓名"
        rules={[{ required: true, message: "请输入用户姓名" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="username"
        label="登陆账号"
        rules={[{ required: true, message: "请输入登陆账号" }]}
      >
        <Input />
      </Form.Item>
      {props.title === "新增" ? (
        <Form.Item
          name="password"
          label="初始密码"
          rules={[{ required: true, message: "请输入初始密码" }]}
        >
          <Input type="password" />
        </Form.Item>
      ) : (
        ""
      )}
      <Form.Item
        name="sex"
        label="性别"
        rules={[{ required: true, message: "请输入性别" }]}
      >
        <Select>
          <Select.Option value={1}>男</Select.Option>
          <Select.Option value={0}>女</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="education"
        label="学历"
        rules={[{ required: true, message: "请输入学历" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="job"
        label="职务"
        rules={[{ required: true, message: "请输入职务" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="telephone"
        label="电话"
        rules={[{ required: true, message: "请输入电话" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={props.hasEditLoading}>
          保存
        </Button>
        <Button className="m-l-20" onClick={props.onClose}>
          取消
        </Button>
      </Form.Item>
    </Form>
  );
};

const UserForm = (props) => {
  return (
    <Modal
      title={props.title}
      visible={props.hasEdit}
      footer={null}
      onCancel={props.onClose}
    >
      <ModelContent {...props} />
    </Modal>
  );
};

export default UserForm;
