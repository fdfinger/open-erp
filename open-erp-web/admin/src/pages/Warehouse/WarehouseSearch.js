import React from "react";
import PageSearch from "../../components/PageSearch";
import { Form, Input, Button } from "antd";

const WarehouseSearch = function ({ onSearch, onChange }) {
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
        <Form.Item name="warehouse_name" label="仓库名称">
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

export default WarehouseSearch;
