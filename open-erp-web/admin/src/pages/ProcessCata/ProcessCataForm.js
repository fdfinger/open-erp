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
        name="cataCode"
        label="分类编码"
        rules={[{ required: true, message: "请选择分类编码" }]}
      >
        <Input placeholder="FLBM10-0001-01" />
      </Form.Item>
      <Form.Item
        name="cataName"
        label="分类名称"
        rules={[{ required: true, message: "请输入用户姓名" }]}
      >
        <Input autoFocus />
      </Form.Item>
      <Form.Item
        name="cataStatus"
        label="启用状态"
        rules={[{ required: true, message: "请选择状态" }]}
      >
        <Select placeholder="请选择状态">
          <Select.Option value={1}>男</Select.Option>
          <Select.Option value={0}>女</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item name="cataRemark" label="备注">
        <Input.TextArea placeholder="工序分类备注信息" />
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

const ProcessCataForm = (props) => {
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

export default ProcessCataForm;
