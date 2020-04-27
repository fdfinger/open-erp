import React, { useEffect, useRef } from "react";
import { Form, Input, Button, Modal, Select, Row, Col } from "antd";

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
      <Row gutter={16}>
        <Col span={8}>
          <Form.Item
            name="code"
            label="分类编码"
            rules={[{ required: true, message: "请选择分类编码" }]}
          >
            <Input placeholder="FLBM10-0001-01" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="parentId" label="父类编码">
            <Input placeholder="FLBM10-0001" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name="suject"
            label="财务科目"
            rules={[{ required: true, message: "请选择项目编码" }]}
          >
            <Input placeholder="" />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={16}>
          <Form.Item
            name="name"
            label="分类名称"
            rules={[{ required: true, message: "请输入项目名称" }]}
          >
            <Input autoFocus placeholder="请输入项目名称" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name="status"
            label="启用状态"
            rules={[{ required: true, message: "请选择状态" }]}
          >
            <Select placeholder="请选择状态">
              <Select.Option value={1}>启用</Select.Option>
              <Select.Option value={0}>停用</Select.Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>

      <Form.Item name="remark" label="备注">
        <Input.TextArea autoFocus placeholder="" />
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

const MaterialCataForm = (props) => {
  return (
    <Modal
      title={props.title}
      visible={props.hasEdit}
      footer={null}
      onCancel={props.onClose}
      width={800}
    >
      <ModelContent {...props} />
    </Modal>
  );
};

export default MaterialCataForm;
