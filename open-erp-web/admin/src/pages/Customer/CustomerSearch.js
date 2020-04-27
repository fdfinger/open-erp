import React from "react";
import PageSearch from "../../components/PageSearch";
import { Form, Input, Button, Select } from "antd";
import { customerTypes } from "./CustomerTable";

const selectStyle = {
  width: 168
}

const CustomerSearch = function ({ onSearch, onChange }) {
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
        <Form.Item name="type" label="客户类型">
          <Select style={selectStyle}>
            {customerTypes.map((item) => (
              <Select.Option key={item.value} value={item.value}>
                {item.label}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item name="name" label="客户名称">
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

export default CustomerSearch;
