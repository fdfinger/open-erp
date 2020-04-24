import React, { useEffect, useRef } from "react";
import { Form, Input, Button, Modal, Select, Row, Col } from "antd";

const formItemLayout = {
  labelCol: {
    xs: { span: 2 },
    sx: { span: 2 }
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
      <Row gutter={20}>
        <Col span={8}>
          <Form.Item
            name="cataId"
            label="分类编码"
            rules={[{ required: true, message: "请选择分类编码" }]}
          >
            <Input placeholder="FLBM10-0001-01" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name="proCode"
            label="工序编码"
            rules={[{ required: true, message: "请输入工序编码" }]}
          >
            <Input autoFocus />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name="parentProCode"
            label="上级工序编码"
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={20}>
        <Col span={16}>
          <Form.Item
            name="proName"
            label="工序名称"
            rules={[{ required: true, message: "请输入工序名称" }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name="isValuation"
            label="是否计价"
            rules={[{ required: true, message: "请选择" }]}
          >
            <Select placeholder="请选择">
              <Select.Option value={1}>是</Select.Option>
              <Select.Option value={0}>否</Select.Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={20}>
        <Col span={8}>
          <Form.Item
            name="isOutSourcing"
            label="是否外协"
            rules={[{ required: true, message: "请选择" }]}
          >
            <Select placeholder="请选择">
              <Select.Option value={1}>是</Select.Option>
              <Select.Option value={0}>否</Select.Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name="proStatus"
            label="启用状态"
            rules={[{ required: true, message: "请选择状态" }]}
          >
            <Select placeholder="请选择状态">
              <Select.Option value={1}>启用</Select.Option>
              <Select.Option value={0}>禁用</Select.Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Form.Item {...formItemLayout} name="proRemark" label="说明">
        <Input.TextArea placeholder="填写工序说明" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={props.hasEditLoading} className="m-l-20">
          保存
        </Button>
        <Button className="m-l-20" onClick={props.onClose}>
          取消
        </Button>
      </Form.Item>
    </Form>
  );
};

const ProcessForm = (props) => {
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

export default ProcessForm;
