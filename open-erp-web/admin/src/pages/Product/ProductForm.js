import React, { useEffect, useRef } from "react";
import { Form, Input, Button, Modal, Select, Row, Col } from "antd";

const formItemLayout = {
  labelCol: {
    xs: { span: 7 },
    sx: { span: 7 },
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
            name="proCode"
            label="项目编码"
            rules={[{ required: true, message: "请选择项目编码" }]}
          >
            <Input placeholder="XMBM20180001" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name="code"
            label="产品编码"
            rules={[{ required: true, message: "请输入产品编码" }]}
          >
            <Input placeholder="CPBM02180001" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name="norms"
            label="规格型号"
            rules={[{ required: true, message: "请输入规格型号" }]}
          >
            <Input placeholder="bhm25*2.6*0.1" />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={16}>
          <Form.Item
            name="name"
            label="物料名称"
            rules={[{ required: true, message: "请输入物料名称" }]}
          >
            <Input autoFocus placeholder="橡胶成品" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name="valuation"
            label="规格与计价间换算值"
            rules={[{ required: true, message: "请输入换算值" }]}
          >
            <Input placeholder="25*0.1" />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={8}>
          <Form.Item
           {...formItemLayout}
            name="material"
            label="材质"
            rules={[{ required: true, message: "请输入材质" }]}
          >
            <Input placeholder="橡胶" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name="valuationUnit"
            label="计价单位"
            rules={[{ required: true, message: "请输入计价单位" }]}
          >
            <Input placeholder="根/元" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name="colorNumber"
            label="色号"
            rules={[{ required: true, message: "请输入色号" }]}
          >
            <Input placeholder="FBL-1" />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={8}>
          <Form.Item
            name="dosage"
            label="生产用量"
            rules={[{ required: true, message: "请输入生产用量" }]}
          >
            <Input placeholder="1000" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name="status"
            label="启用状态"
            rules={[{ required: true, message: "请选择状态" }]}
          >
            <Select placeholder="请选择状态">
              <Select.Option value={1}>男</Select.Option>
              <Select.Option value={0}>女</Select.Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Form.Item name="remark" label="备注" labelCol={{ span: 2 }}>
        <Input.TextArea placeholder="填写点什么..." />
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

const ProductForm = (props) => {
  return (
    <Modal
      title={props.title}
      visible={props.hasEdit}
      footer={null}
      width={920}
      onCancel={props.onClose}
    >
      <ModelContent {...props} />
    </Modal>
  );
};

export default ProductForm;
