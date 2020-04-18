import React, { useEffect, useRef } from "react";
import { Form, Input, Switch, Button, Modal } from "antd";

const formItemLayout = {
  labelCol: {
    xs: { span: 5 },
    sx: { span: 3 },
  },
};

const ModelContent = (props) => {
  const form = useRef()

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
        name="area_code"
        label="地区编码"
        rules={[{ required: true, message: "请输入地区编号" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item name="parent_area_code" label="上级编码">
        <Input />
      </Form.Item>
      <Form.Item
        name="area_name"
        label="地区名称"
        rules={[{ required: true, message: "请输入地区名称" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item name="area_status" label="启用状态">
        <Switch checked={true} />
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
}

const AreaForm = (props) => {
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

export default AreaForm;
