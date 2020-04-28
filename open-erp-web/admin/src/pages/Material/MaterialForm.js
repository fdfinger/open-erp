import React, { useEffect, useRef } from "react";
import { Form, Input, Button, Modal, Select, Row, Col } from "antd";
import MaterialCataSelect from '../../components/MaterialCataSelect'

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
            name="cataId"
            label="分类编码"
            rules={[{ required: true, message: "请选择分类编码" }]}
          >
            <MaterialCataSelect />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name="warehouseId"
            label="仓库编码"
            rules={[{ required: true, message: "请选择仓库编码" }]}
          >
            <Input placeholder="CKBM0001" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name="code"
            label="项目编码"
            rules={[{ required: true, message: "请选择项目编码" }]}
          >
            <Input placeholder="XMBM20180001" />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={16}>
          <Form.Item
            name="name"
            label="项目名称"
            rules={[{ required: true, message: "请输入项目名称" }]}
          >
            <Input autoFocus placeholder="请输入项目名称" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name="specificationModel"
            label="规格型号"
            rules={[{ required: true, message: "请输入规格型号" }]}
          >
            <Input placeholder="请输入规格型号" />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col span={8}>
          <Form.Item
            name="specificationUnit"
            label="规格单位"
            rules={[{ required: true, message: "请输入规格单位" }]}
          >
            <Input placeholder="请输入规格单位" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name="chargeUnit"
            label="计价单位"
            rules={[{ required: true, message: "请输入计价单位" }]}
          >
            <Input placeholder="请输入计价单位" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name="conversion"
            label="规格与计价间换算值"
            rules={[{ required: true, message: "请输入规格与计价间换算值" }]}
          >
            <Input placeholder="请输入规格与计价间换算值" />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col span={8}>
          <Form.Item
            name="material"
            label="材质"
            labelCol={{ span: 7 }}
            rules={[{ required: true, message: "请输入材质" }]}
          >
            <Input placeholder="请输入材质" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name="color"
            label="颜色"
            labelCol={{ span: 7 }}
            rules={[{ required: true, message: "请输入颜色" }]}
          >
            <Input placeholder="请输入颜色" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name="procurementPrice"
            label="采购含税单价"
            rules={[{ required: true, message: "请输入采购含税单价" }]}
          >
            <Input placeholder="请输入采购含税单价" />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col span={8}>
          <Form.Item
            name="procurementRate"
            label="采购税率"
            rules={[{ required: true, message: "请输入采购税率" }]}
          >
            <Input placeholder="请输入采购税率" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name="safetyStock"
            label="安全库存"
            rules={[{ required: true, message: "请输入安全库存" }]}
          >
            <Input type="number" placeholder="请输入安全库存" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name="stockUp"
            label="库存上限"
            rules={[{ required: true, message: "请输入库存上限" }]}
          >
            <Input type="number" placeholder="请输入库存上限" />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col span={8}>
          <Form.Item
            name="stockDown"
            label="库存下限"
            rules={[{ required: true, message: "请输入库存下限" }]}
          >
            <Input type="number" placeholder="请输入库存下限" />
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

const MaterialForm = (props) => {
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

export default MaterialForm;
