import { Button, Form, Input, Select } from "antd";
import React from "react";
import PageSearch from "../../components/PageSearch";

const selectStyle = {
  width: 168
}

const DeviceSearch = function ({ onSearch, onChange }) {
  const [form] = Form.useForm();

  const onSearchRest = () => {
    form.resetFields();
    onChange({});
  };

  const onValuesChange = (n, vs) => {
    onChange(vs);
  };

  return (
    <PageSearch onSearch={onSearch}>
      <Form form={form} layout="inline" onValuesChange={onValuesChange}>
        <Form.Item name="name" label="设备名称">
          <Input />
        </Form.Item>
        <Form.Item name="status" label="设备状态">
          <Select style={selectStyle}>
            <Select.Option value={1}>正常</Select.Option>
            <Select.Option value={0}>停用</Select.Option>
          </Select>
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

export default DeviceSearch;
