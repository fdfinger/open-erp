import React from "react";
import PageSearch from "../../components/PageSearch";
import { Form, Input, Button, Select } from "antd";

const ProductSearch = function ({ onSearch, onChange }) {
  const [form] = Form.useForm();

  const onSearchRest = () => {
    form.resetFields();
    onChange({})
  };

  const onValuesChange = (n, vs) => {
    onChange(vs)
  }

  return (
    <PageSearch onSearch={onSearch}>
      <Form form={form} layout="inline" onValuesChange={onValuesChange}>
        <Form.Item name="proCode" label="项目编码" style={{ marginBottom: 8 }}>
          <Input />
        </Form.Item>
        <Form.Item name="code" label="产品编码">
          <Input />
        </Form.Item>
        <Form.Item name="name" label="物料名称">
          <Input />
        </Form.Item>
        <Form.Item name="status" label="启用状态">
          <Select style={{ width: 168 }}>
            <Select.Option value={1}>启用</Select.Option>
            <Select.Option value={0}>禁用</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name="valuation" label="规格型号">
          <Input />
        </Form.Item>
        <Form.Item>
          <Button htmlType="reset" onClick={onSearchRest.bind(this)}>
            清空
          </Button>
        </Form.Item>
      </Form>
    </PageSearch>
  );
};

export default ProductSearch;
