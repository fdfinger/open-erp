import React, { useEffect, useRef } from "react";
import { Form, Input, Button, Modal, Select, Row, Col } from "antd";
import { customerTypes } from "./CustomerTable";

const formItemLayout = {
  labelCol: {
    xs: { span: 2 },
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
      ref={form}
      initialValues={props.editInitValues}
      onFinish={props.onFinish}
    >
      <Row gutter={16}>
        <Col span={8}>
          <Form.Item
            name="code"
            label="客户编码"
            rules={[{ required: true, message: "请选择分类编码" }]}
          >
            <Input placeholder="18-1000-001" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name="type"
            label="客户类型"
            rules={[{ required: true, message: "请选择客户类型" }]}
          >
            <Select style={{ width: "100%" }} placeholder="请选择客户类型">
              {customerTypes.map((item) => (
                <Select.Option key={item.value} value={item.value}>
                  {item.label}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={16}>
          <Form.Item
            name="name"
            label="客户名称"
            rules={[{ required: true, message: "请输入客户名称" }]}
          >
            <Input autoFocus placeholder="请输入客户名称"/>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name="areaId"
            label="所属区域"
            rules={[{ required: true, message: "请选择所属区域" }]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
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
        <Col span={8}>
          <Form.Item
            name="socialCode"
            label="社会代码证号"
            rules={[{ required: true, message: "请输入社会代码证号" }]}
          >
            <Input placeholder="社会代码证号" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name="contact"
            label="联系人"
            rules={[{ required: true, message: "请输入联系人姓名" }]}
          >
            <Input placeholder="请输入联系人姓名"/>
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={16}>
          <Form.Item
            name="contactAddress"
            label="联系地址"
            rules={[{ required: true, message: "请输入联系地址" }]}
          >
            <Input placeholder="xxx省xxx市xxx区xx街x号x小区x楼x单元x室"/>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name="contactTelphone"
            label="联系电话"
            rules={[{ required: true, message: "请输入用户姓名" }]}
          >
            <Input type="tel" placeholder="134..."/>
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={8}>
          <Form.Item
            name="contactFax"
            label="传真电话"
          >
            <Input placeholder="传真电话"/>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name="contactEmail"
            label="联系邮箱"
            rules={[{ required: true, message: "请输入联系邮箱" }]}
          >
            <Input placeholder="请输入联系邮箱" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name="settlementName"
            label="结算账户名"
            rules={[{ required: true, message: "请输入结算账户名" }]}
          >
            <Input placeholder="请输入结算账户名"/>
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            name="settlementBank"
            label="结算开户行"
            rules={[{ required: true, message: "请输入结算开户行" }]}
          >
            <Input placeholder="请输入结算开户行"/>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name="settlementAccount"
            label="结算账户"
            rules={[{ required: true, message: "请输入结算账户" }]}
          >
            <Input placeholder="请输入结算账户" />
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

const CustomerForm = (props) => {
  return (
    <Modal
      title={props.title}
      visible={props.hasEdit}
      footer={null}
      onCancel={props.onClose}
      width={950}
    >
      <ModelContent {...props} />
    </Modal>
  );
};

export default CustomerForm;
