import React, { useEffect, useRef } from "react";
import { Form, Input, Button, DatePicker, Modal, Select, Row, Col } from "antd";
import DepartmentSelect from "../../components/DepartmentSelect";
// import moment from 'moment'

const formItemLayout = {
  labelCol: {
    span: 2
  }
}

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
            label="设备编码"
            rules={[{ required: true, message: "请选择设备编码" }]}
          >
            <Input placeholder="SBBM2018-01-001" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name="machineCode"
            label="机器码"
            rules={[{ required: true, message: "请选择机器码" }]}
          >
            <Input placeholder="CKBM0001" />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item
        name="name"
        label="设备名称"
        rules={[{ required: true, message: "请输入设备名称" }]}
      >
        <Input autoFocus placeholder="请输入项目名称" />
      </Form.Item>

      <Row gutter={16}>
        <Col span={8}>
          <Form.Item
            name="norms"
            label="规格型号"
            rules={[{ required: true, message: "请输入规格型号" }]}
          >
            <Input placeholder="请输入规格型号" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name="unit"
            label="单位"
            rules={[{ required: true, message: "请输入单位" }]}
          >
            <Input placeholder="台" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name="buyDate"
            label="购置日期"
            rules={[{ required: true, message: "请输入购置日期" }]}
          >
            <DatePicker placeholder="请输入购置日期" />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col span={8}>
          <Form.Item
            name="depId"
            label="使用部门"
            rules={[{ required: true, message: "请选择使用部门" }]}
          >
            <DepartmentSelect placeholder="请选择使用部门" />
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

      <Form.Item {...formItemLayout} name="remark" label="备注">
        <Input.TextArea placeholder="备注..." />
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

const DeviceForm = (props) => {
  return (
    <Modal
      title={props.title}
      visible={props.hasEdit}
      footer={null}
      onCancel={props.onClose}
      width={870}
    >
      <ModelContent {...props} />
    </Modal>
  );
};

export default DeviceForm;
