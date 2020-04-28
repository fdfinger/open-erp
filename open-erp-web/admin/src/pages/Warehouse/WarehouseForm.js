import React, { useEffect, useRef } from "react";
import { Form, Input, Button, Modal, Row, Col, Select } from "antd";

const formItemLayout = {
  labelCol: {
    xs: { span: 4 },
    sx: { span: 4 },
    md: { span: 2 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sx: { span: 24 },
    md: { span: 22 },
  },
};

const ModelContent = (props) => {
  const form = useRef();

  useEffect(() => {
    form.current.resetFields();
  });

  return (
    <Form
      ref={form}
      initialValues={props.editInitValues}
      onFinish={props.onFinish}
    >
      <Row>
        <Col span={8}>
          <Form.Item
            name="warehouseCode"
            label="仓库编码"
            rules={[{ required: true, message: "请输入地区编号" }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name="sysDeptId"
            label="所属部门"
            rules={[{ required: true, message: "请选择所属部门" }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="warehouseStatus" label="启用状态">
            <Select>
              <Select.Option value={1}>启用</Select.Option>
              <Select.Option value={0}>停用</Select.Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Form.Item
        {...formItemLayout}
        name="warehouseName"
        label="地区名称"
        rules={[{ required: true, message: "请输入地区名称" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item {...formItemLayout} name="warehouseRemark" label="备注">
        <Input.TextArea></Input.TextArea>
      </Form.Item>
      <Form.Item>
        <Row>
          <Col span={12} offset={10}>
            <Button type="primary" htmlType="submit" loading={props.hasEditLoading}>
              保存
            </Button>
            <Button className="m-l-20" onClick={props.onClose}>
              取消
            </Button>
          </Col>
        </Row>
      </Form.Item>
    </Form>
  );
};

const WarehouseForm = (props) => {
  return (
    <Modal
      title={props.title}
      width={920}
      visible={props.hasEdit}
      footer={null}
      onCancel={props.onClose}
    >
      <ModelContent {...props} />
    </Modal>
  );
};

export default WarehouseForm;
